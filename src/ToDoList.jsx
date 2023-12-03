import ToDoItems from "./ToDoItems";

export default function ToDoList({ toDoItems, setToDoItems }) {
  return (
    <ul className="list">
      {toDoItems.length === 0 && "Add a to do"}
      {toDoItems.map(function (value) {
        return (
          <ToDoItems
            key={value.id}
            {...value}
            setToDoItems={setToDoItems}
          ></ToDoItems>
        );
      })}

      {/* <li>
      <label>
        <input type="checkbox"></input>
        Item 1
      </label>
      <button className="delete-item">Delete</button>
    </li>

    <li>
      <label>
        <input type="checkbox"></input>
        Item 2
      </label>
      <button className="delete-item">Delete</button>
    </li> */}
    </ul>
  );
}
