import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './Component/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
