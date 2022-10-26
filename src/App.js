import './index.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import IslandFilters from './layouts/IslandFilters';
import useCategory from './hooks/useCategory';
import ForCategory from './layouts/ForCategory';


function App() {
  const { products } = useCategory();

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/islands/:title' element={<IslandFilters products={products} />} />
        <Route path='/category/:category' element={<ForCategory products={products} />} />
        <Route path='*' element={<h1>404 ERROR</h1>} />

      </Routes>
    </ BrowserRouter>
  );
}

export default App;