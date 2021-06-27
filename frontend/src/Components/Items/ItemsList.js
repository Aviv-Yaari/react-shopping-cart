import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:9000/items");
      if (!response.ok) {
        setError("Network response was not ok");
      }
      const data = await response.json();
      setItems(data);
    };
    getData();
  }, []);
  console.log(items);

  return (
    <main className="container d-flex flex-column">
      <h2 className="my-5">Products</h2>
      {error && <p>Sorry! Could not load items!: {error}</p>}
      {!error && items.map((item) => <ListItem item={item} key={item._id} />)}
    </main>
  );
};

export default ItemsList;
