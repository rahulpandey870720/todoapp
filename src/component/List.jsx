import React from "react";

export default function List(props) {
  return (
    <div>
      <ul class="list-group p-5">
        {props.todos.length > 0 ? (
          props.todos.map((item, index) => {
            return (
              <li class="list-group-item justify-content-between d-flex" key={index}>
                {item}
                <button 
                className="btn btn-danger  " onClick={()=>props.deletetodo(item)}>delete</button>
                <button className="btn btn-warning  " onClick={()=>props.edittodo(item,index)}>edit</button>
              </li>
            );
          })
        ) : (
          <li class="list-group-item">no todoo</li>
        )}
      </ul>
    </div>
  );
}
