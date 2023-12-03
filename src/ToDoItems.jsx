export default function ToDoItems({ complete, id, item, setToDoItems }) {
  function toggleTodoBox(event, id) {
    const checked = event.target.checked;
    // console.log(complete);

    setToDoItems(function (currentItems) {
      return currentItems.map(function (value) {
        if (value.id === id) {
          // console.log({ ...value, complete: checked });
          return { ...value, complete: checked };
        }

        return value;
      });
    });
  }

  function deleteToDo(id) {
    setToDoItems(function (currentItems) {
      return currentItems.filter(function (value) {
        // console.log(id, value.id !== id);
        return value.id !== id;
        // return value;
      });
    });
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={function (event) {
            toggleTodoBox(event, id);
          }}
        ></input>
        Item {id}: {item}
      </label>
      <button
        className="delete-item"
        onClick={function () {
          deleteToDo(id);
        }}
      >
        Delete
      </button>
    </li>
  );

  // return value.complete ? (
  //   <li key={value.id}>
  //     <label>
  //       <input
  //         type="checkbox"
  //         checked={value.complete}
  //         onChange={function (event) {
  //           toggleTodoBox(event, value.id);
  //         }}
  //       ></input>
  //       <strike>
  //         Item {value.id}: {value.item}
  //       </strike>
  //     </label>
  //     <button className="delete-item" onClick={deleteToDo(value.id)}>
  //       Delete
  //     </button>
  //   </li>
  // ) : (
  //   <li key={value.id}>
  //     <label>
  //       <input
  //         type="checkbox"
  //         checked={value.complete}
  //         onChange={function (event) {
  //           toggleTodoBox(event, value.id);
  //         }}
  //       ></input>
  //       Item {value.id}: {value.item}
  //     </label>
  //     <button className="delete-item" onClick={deleteToDo(value.id)}>
  //       Delete
  //     </button>
  //   </li>
  // );
  //------------------ ALTERNATIVE METHOD ----------------------------------------
  // if (value.complete === false) {
  //   return (
  //     <li key={value.id}>
  //       <label>
  //         <input
  //           type="checkbox"
  //           checked={value.complete}
  //           onChange={function (event) {
  //             toggleTodoBox(event, value.id);
  //           }}
  //         ></input>
  //         Item {value.id}: {value.item}
  //       </label>
  //       <button className="delete-item">Delete</button>
  //     </li>
  //   );
  // }
  // return (
  //   <li key={value.id}>
  //     <label>
  //       <input
  //         type="checkbox"
  //         checked={value.complete}
  //         onChange={function (event) {
  //           toggleTodoBox(event, value.id);
  //         }}
  //       ></input>
  //       <strike>
  //         Item {value.id}: {value.item}
  //       </strike>
  //     </label>
  //     <button className="delete-item">Delete</button>
  //   </li>
  // );
}
