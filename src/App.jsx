import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
<<<<<<< HEAD
import { ItemDetailContainer } from './components/ItemDetailContainer';
=======
>>>>>>> b3a2646c4fd281a586dca5e9a156750900d95e04

import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    <ItemListContainer greeting={'Bienvenidos'} />
    </BrowserRouter>
    </>
  );
}

export default App;
