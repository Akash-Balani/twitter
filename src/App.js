import './Custom.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Liked from './Liked.jsx';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        

        <Route path='/Liked ' element={<Liked />} />
        </Routes>
      </>
      );
}

      export default App;

