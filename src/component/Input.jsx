import React, { useEffect, useState } from "react";

export default function Input(props) {
  const [todo, settodo] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    if (todo.length > 0) {
      if (props.editdata.index === "") {
        console.log(todo);
        props.addtodo(todo);
        settodo("");
      } else {
        props.updatetodo(props.editdata.index, todo);
      }
    }
  };
  function handleinput(event) {
    console.log(event.target.value);
    settodo(event.target.value);
  }
  useEffect(() => {
    settodo(props.editdata.value);
  }, [props.editdata.index]);
  return (
    <form className="p-5" onSubmit={submit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter todo"
          onChange={handleinput}
          value={todo}
        />

        <button className="btn btn-outline-secondary" type="submit">
          {props.editdata.index === "" ?( "Add") :( "Update")}
        </button>
      </div>
    </form>
  );
}
