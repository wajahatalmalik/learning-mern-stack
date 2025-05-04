import { Link } from "react-router-dom"


function Navigation() {

  return  <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Users List</Link></li>
    <li><Link to="/insert-payment">Insert User Payments</Link></li>
    <li><Link to="/view-payments">View User Payments</Link></li>
  </ul>
</nav>
}

export default Navigation

