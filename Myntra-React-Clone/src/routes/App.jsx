import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoaderSpinner from "../components/LoaderSpinner";

function App() {
  const fetching = useSelector((store) => store.fetchStatus.currentlyFetching);
  return (
    <>
      <Header />
      <FetchItems />
      {fetching ? <LoaderSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
