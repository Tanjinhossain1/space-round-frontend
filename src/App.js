import './App.css';
import { Route, Routes } from 'react-router-dom';
import Space from './Pages/Home/Space/Space';
import Header from './Pages/Sheared/Header/Header';
import Destination from './Pages/Destination/Destination ';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Space></Space>}></Route>
       <Route path='/space' element={<Space></Space>}></Route>
       <Route path='/destination' element={<Destination></Destination>}></Route>
     </Routes>
    </div>
  );
}

export default App;
