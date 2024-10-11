import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserForm/>}/>
          <Route path="/admin-login" element={<AdminLogin/>} />
        </Routes>
      {/* <UserForm/>
      <AdminLogin/> */}
      </div>
    </Router>
  );
}

export default App;
