import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Item from "./Item";

function Quotes() {
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container p-4">
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((item) => <Item key={item.quote_id} item={item} />)}
    </div>
  );
}

export default Quotes;
