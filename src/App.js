import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Add'element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<View/>}/>

      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
