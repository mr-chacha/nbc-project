import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { editTodo } from "../../redux/modules/todos";
import { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, Title, Content, Btn } from "./styled";

const Edit = () => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const param = useParams();

    const todo = todos.find((list) => list.id === param.id);
    const navigate = useNavigate(`/${todo.id}`);

    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);

    const inputContent = (e) => {
        if (e.target.name === 'title') {
          setTitle(e.target.value)
        } else if (e.target.name === 'content') {
          setContent(e.target.value)
        }
    }

    const editHandler = () => {
        navigate("/")
        dispatch(
            editTodo({
              id: todo.id,
              title: title,
              content: content,
              isDone: todo.isDone,
            })
          )
    }

    return (
        <StDetail>
            <DetailBox>
                <BtnBox>
                    <Link to={`/${todo.id}`}>
                        <MoveBtn><span>μ΄μ μΌλ‘</span></MoveBtn>
                    </Link>
                </BtnBox>
                <DetailTextBox>
                    <ID>ID: {todo.id.slice(0, 4)}</ID>
                    <h2>{ todo.isDone ? "Done..! π" : "Working.. π₯"}</h2>
                    <form>
                        <input id="title" value={title} name='title' method="post" onChange={inputContent} />
                        <input id="coneent" value={content} name='content' type="text" method="post" onChange={inputContent} />
                    </form>
                    <Btn backgroundColor={"#8EC3B0"} 
                    onClick={editHandler}>μμ  μλ£</Btn>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Edit;