import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Add from './components/Add';
import Search from './components/Search';

function App() {
  return (
    <div>
     <Login/>
     <SignUp/>
     <Add/>
     <Search/>
    </div>
  );
}

export default App;
