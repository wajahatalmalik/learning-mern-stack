import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './page/Users.jsx';
import InsertUserPayments from './page/InsertUserPayments.jsx';
import ViewUserPayments from './page/ViewUserPayments.jsx';
import Navigation from './page/Navigation.jsx';


function App() {
  return (
    <Router>
      <div>
       {/* <Link to="/">go back</Link>*/}

       <a href='/'>Go Back</a>

        <Routes>
          <Route path="/" element={<Navigation /> } />
          <Route path="/users" element={<Users />} />
          <Route path="/insert-payment" element={<InsertUserPayments />} />
          <Route path="/view-payments" element={<ViewUserPayments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
