import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const items = useSelector((store) => store.items);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const filteredItems = items.filter((item) => {
    let matchCategory = true;
    let matchSearch = true;

    if (category) {
      const itemCategory = item.category || "";
      matchCategory = itemCategory.toLowerCase() === category.toLowerCase();
    }

    if (search) {
      const query = search.toLowerCase();
      matchSearch =
        (item.item_name || "").toLowerCase().includes(query) ||
        (item.company || "").toLowerCase().includes(query) ||
        (item.category || "").toLowerCase().includes(query);
    }

    return matchCategory && matchSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[calc(100vh-80px-200px)]">
      {/* Active Filters Header */}
      {(category || search) && (
        <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-brand-muted text-xs uppercase tracking-wider font-semibold">
              Active Filters:
            </span>
            {category && (
              <span className="px-3 py-1 bg-brand-accent1/10 text-brand-accent1 text-xs tracking-wide rounded-md border border-brand-accent1/20 font-medium">
                Category: {category}
              </span>
            )}
            {search && (
              <span className="px-3 py-1 bg-brand-accent2/10 text-brand-accent2 text-xs tracking-wide rounded-md border border-brand-accent2/20 font-medium">
                Search: "{search}"
              </span>
            )}
          </div>
          <Link
            to="/"
            className="text-brand-muted hover:text-brand-light text-xs transition-colors underline"
          >
            Clear All
          </Link>
        </div>
      )}

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 bg-brand-card rounded-2xl border border-white/5 max-w-lg mx-auto mt-10 shadow-lg px-6">
          <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-inner">
            <FaSearch className="text-xl text-brand-muted" />
          </div>
          <h3 className="text-xl font-bold text-brand-light mb-2 tracking-tight">
            No items found
          </h3>
          <p className="text-brand-muted text-sm text-center max-w-xs leading-relaxed mb-6">
            We couldn't find any items matching your filters. Try checking your spelling or exploring other categories.
          </p>
          <Link to="/" className="btn-outline text-sm py-2 px-6">
            Reset Filters
          </Link>
        </div>
      )}
    </main>
  );
};

export default Home;
