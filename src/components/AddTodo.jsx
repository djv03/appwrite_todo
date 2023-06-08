import { useState } from "react"
import { database } from "../appwrite/appwriteconfig"
import { ID } from "appwrite"
function AddTodo() {
  const [todo, setTodo] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      content: todo,
    };

    try {
      await database.createDocument('646f7c0251686b72b878', '6481dcc0a422e5e58a5a', ID.unique(), data);
      console.log(todo)
      setTodo('');
    } catch (e) {
      console.error(e);
    }
  };

  const onChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="go to gym" />
      <button onClick={handleSubmit}> add this</button>
    </div>
  )
}

export default AddTodo
