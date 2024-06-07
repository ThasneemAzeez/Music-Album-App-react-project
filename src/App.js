import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import SearchMusic from './components/SearchMusic';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
    <div >
      <FrontPage/>
      <SearchMusic/>
      <Delete/>
      <Viewall/>
      
      
    </div>
  );
}

export default App;
