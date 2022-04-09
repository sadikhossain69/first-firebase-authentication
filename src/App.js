import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import useFirebase from './hooks/useFirebase/useFirebase';


function App() {
  const { user } = useFirebase()
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        {
          user.uid ? 
          <button> Sign Out </button> :
          <Route path='/login' element={<Login/>} ></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
