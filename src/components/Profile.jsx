/* eslint-disable react-hooks/exhaustive-deps */

import { account } from "../appwrite/appwriteconfig"
import { useEffect, useState } from "react"
import AddTodo from "./AddTodo"
import AllTodos from "./AllTodos"

function Profile() {
  // const navigate=useNavigate()

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    const gettinguser = () => {

      const user = account.get(localStorage.getItem('userid'))
      user.then(function (response) {
        setUserDetails({ name: response.name, email: response.email })
      }, function (error) {
        console.log(error);
      });
    }
    gettinguser()
  }, [])
  return (
    <>
      {userDetails ?
        (
          <div>
            <h1>welcome {userDetails.name}</h1>
            <h2 style={{ color: "goldenrod" }}>you are signed in from {userDetails.email}</h2>
            <AllTodos />
            <AddTodo />
          </div>
        )
        :
        (
          <div>
            <h1>please login start adding yout to do</h1>
          </div>

        )
      }
    </>
  )
}

export default Profile
