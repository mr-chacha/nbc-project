import React, { useState } from "react";
import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

// function Todo(props) {
//   return (
//     <div className="todo">
//       ์ ๋ชฉ:{props.todo.title}
//       <br></br>
//       ๋ด์ฉ:{props.todo.content}
//       <br></br>
//       <button
//         onClick={() => {
//           props.modal === true ? props.setModal(false) : props.setModal(true);
//         }}
//       >
//         ์๋ฃ
//       </button>
//       <button
//         onClick={() => {
//           props.del(props.todo.id);
//         }}
//       >
//         ์ญ์ 
//       </button>
//     </div>
//   );
// }

const App = () => {
  //ํฌ๋๋ฆฌ์คํธ
  let [todo, setTodo] = useState([
    // { id: 1, title: "์๋ฐ์คํฌ๋ฆฝํธํ๊ธฐ", content: "์ํด๋ณด์", modal: false },
    // { id: 2, title: "๋ฆฌ์ํธ", content: "์ด๋ ต๋ค", modal: true },
    { id: 1, title: "์๋ฐ์คํฌ๋ฆฝํธํ๊ธฐ", content: "์ํด๋ณด์", isDone: false },
    { id: 2, title: "๋ฆฌ์ํธ", content: "์ด๋ ต๋ค", isDone: true },
  ]);

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  // let [modal, setModal] = useState(false);

  //์ถ๊ฐ๋ฒํผ๋ง๋ค๊ธฐ
  //1.์๋ก์ด ํจ์์ ๋ณ์๋ฅผ๋ง๋ค๊ณ 
  //2.todo๋ผ๋state์ id๊ฐ todo์ ๊ธธ์ด์ +1์ด๋๊ฒํจ.
  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      // modal: false,
      idDone: false,
    };
    console.log(todo);
    setTodo([...todo, newTodo]);
  };
  //์ญ์ ๋ฒํผ ๊ตฌํํ๊ธฐ
  const del = (id) => {
    const newTodolist = todo.filter((todo) => todo.id !== id);
    setTodo(newTodolist);
  };

  return (
    <div className="layout">
      <header>ํฌ๋๋ฆฌ์คํธ</header>
      <nav>
        <div className="add-btn">
          <input
            value={title}
            placeholder="์ ๋ชฉ์ ์๋ ฅํ์ธ์"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={content}
            placeholder="๋ด์ฉ์ ์๋ ฅํ์ธ์"
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={addTodo}>์ถ๊ฐํ๊ธฐ</button>
        </div>
      </nav>
      <TodoList isWorking={true} todo={todo} setTodo={setTodo} />
      <TodoList isWorking={false} todo={todo} setTodo={setTodo} />
      {/* <h1>working</h1>
      <div className="todostyle">
        {modal === false
          ? todo.map((todo) => {
              return (
                <Todo
                  modal={modal}
                  setModal={setModal}
                  del={del}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })
          : ""}
      </div> */}
      {/* <h1>done</h1>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        ๋ฒํผ
      </button>
      <div className="todostyle">
        {modal == true
          ? todo.map((todo) => {
              return (
                <Todo
                  modal={modal}
                  setModal={setModal}
                  del={del}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })
          : ""}
      </div> */}
    </div>
  );
};

export default App;
