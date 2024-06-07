import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import SearchMusic from './components/SearchMusic';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/Search' element={<SearchMusic/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/Viewall' element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
