import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { DEFAULT_ITEMS } from "../data/items";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then(({ items }) => {
        const loadedItems = Array.isArray(items) && Array.isArray(items[0]) ? items[0] : items;
        dispatch(itemActions.addItems(loadedItems || []));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.warn("Backend API not reachable. Falling back to local DEFAULT_ITEMS. Error:", error);
        
        dispatch(itemActions.addItems(DEFAULT_ITEMS));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
