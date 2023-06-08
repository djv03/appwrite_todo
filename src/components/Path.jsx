
import { Link } from 'react-router-dom'
function Path() {
  return (
    <div>
       <h1>helooooo and welcome!</h1>
        <Link to={'/login'}>
        <button style={{margin:'13px'}}>Login</button>
        </Link>
        <Link to={'/signup'}>
        <button>sign up</button>
        </Link>
    </div>
  )
}

export default Path