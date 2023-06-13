import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const itemHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const packedHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };

  const clearListHandler = () => {
    const confirmed = window.confirm('Are you sure you want to delete all the items?')
    if(confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={itemHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteHandler}
        onPackChange={packedHandler}
        onClearList={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
