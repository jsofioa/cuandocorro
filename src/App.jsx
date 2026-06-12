import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Layout } from './components/Layout/Layout';
import { Disclaimer } from './components/Disclaimer/Disclaimer';

function App() {
  return (
    <>
        <Routes>
          <Route element ={<Layout/>}>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
          </Route>  
        </Routes>
    </>
  );
}

export default App;
