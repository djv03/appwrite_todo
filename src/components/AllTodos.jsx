import { useEffect, useState } from "react"
import { database } from "../appwrite/appwriteconfig"
function AllTodos() {
  const [alltodos, setAllTodos] = useState()
  useEffect(() => {
    const getTodos = database.listDocuments('646f7c0251686b72b878', '6481dcc0a422e5e58a5a')

    getTodos.then(
      function (response) {

        setAllTodos(response.documents)

      },
      function (error) {
        console.log('error happnend in adding displaying---->', error)
      }
    )
  }, [])
  const deleteTodo = (id) => {
    const promise = database.deleteDocument("646f7c0251686b72b878", '6481dcc0a422e5e58a5a', id)
    promise.then(
      function (response) {
        console.log(response);
        window.location.reload()
      },
      function (error) {
        console.log(error);
      }
    )
  }


  return (
    <div className="bg-red-300 max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List:</p>
      <div className="flex">
        {alltodos && alltodos.map(item => (
          <div key={item.$id} >
            <div style={{border:'2px solid red'}} className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
              <div>
                <p>{item.content}</p>
              </div>
              <div>
                <button
                  className="text-red-400 cursor-pointer"
                  onClick={() => {
                    deleteTodo(item.$id)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AllTodos
