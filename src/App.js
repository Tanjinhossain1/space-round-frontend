import './App.css';
import { Route, Routes } from 'react-router-dom';
import Space from './Pages/Home/Space/Space';
import Header from './Pages/Sheared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Space></Space>}></Route>
       <Route path='/space' element={<Space></Space>}></Route>
     </Routes>
    </div>
  );
}

export default App;
