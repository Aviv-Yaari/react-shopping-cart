import ListItem from "./ListItem";

const ItemsList = (props) => {
  return (
    <main className="container d-flex flex-column">
      <h2 className="my-5">Products</h2>
      {props.items.map((item, i) => (
        <ListItem item={item} key={i} />
      ))}
    </main>
  );
};

export default ItemsList;
