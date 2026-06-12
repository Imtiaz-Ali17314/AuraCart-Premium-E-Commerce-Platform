const express = require("express");
const bodyParser = require("body-parser");

const { getStoredItems, storeItems } = require("./data/items");
const { getStoredUsers, storeUsers } = require("./data/users");

const app = express();

app.use(bodyParser.json());

// CORS configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Auth Routes
app.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const users = await getStoredUsers();
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: "User already exists." });
    }
    
    const newUser = { id: Math.random().toString(), name, email, password };
    users.push(newUser);
    await storeUsers(users);
    
    res.status(201).json({ message: "User created successfully", user: { id: newUser.id, name: newUser.name, email: newUser.email } });
  } catch (error) {
    next(error);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const users = await getStoredUsers();
    
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    
    res.status(200).json({ message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    next(error);
  }
});

// Item Routes
app.get("/items", async (req, res, next) => {
  try {
    const storedItems = await getStoredItems();
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // reduced fake delay
    res.json({ items: storedItems });
  } catch (error) {
    next(error);
  }
});

app.get("/items/:id", async (req, res, next) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found." });
    res.json({ item });
  } catch (error) {
    next(error);
  }
});

app.post("/items", async (req, res, next) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: "Stored new item.", item: newItem });
  } catch (error) {
    next(error);
  }
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
