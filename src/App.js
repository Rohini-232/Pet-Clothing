import MyNav from './common/MyNav.js';
import Home from './common/Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyNav/>}  >
      <Route path="/Home" element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter> */}

    <MyNav></MyNav>
    <Home></Home>
    </>
  );
}

export default App;
