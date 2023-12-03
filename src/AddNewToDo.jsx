import { useState } from "react";

export default function AddNewToDos({ setToDoItems }) {
  const [addItem, setAddItem] = useState(``);

  function handleAddItem(event) {
    event.preventDefault();

    setToDoItems(function (currentItems) {
      return [
        ...currentItems,
        {
          //   id: `${Math.round(Math.random() * 12945946416)}`,
          id: crypto.randomUUID(),
          item: addItem,
          complete: false,
        },
      ];
    });

    setAddItem(``);
  }

  return (
    <form className="add-item-form" onSubmit={handleAddItem}>
      <div className="form-rows">
        <label htmlFor="add-new-item"> Add New Item</label>
        <input
          value={addItem}
          onChange={function (event) {
            setAddItem(event.target.value);
          }}
          type="text"
          id="add-new-item"
        ></input>
      </div>
      <button className="add-item-button">Add</button>
    </form>
  );
}
