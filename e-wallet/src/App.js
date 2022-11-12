import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Despesas from './Pages/Despesas/input';
import Poupanca from './Pages/Poupanca/input';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/despesas' element={<Despesas />} />
        <Route path='/poupanca' element={<Poupanca />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
