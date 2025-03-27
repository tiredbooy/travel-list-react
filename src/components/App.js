import { useState } from "react";
import Form from "../form";
import Logo from "./logo";
import PackingList from "./packingList";
import Stats  from "./Stats";
import Item from "./Item";


export default function App() {
  const [items, setItems] = useState([]);

  // -------------- //
  // Not Recommended Way  //
  // const [numItems , setNumItemes] = useState(0);
  // setNumItemes((num) => num + 1)
  // -------------- //

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearPage() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearPage={handleClearPage}
      />
      <Stats items={items} />
    </div>
  );
}
