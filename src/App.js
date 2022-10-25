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
    <div>
      <h1>Holaaaaaaaa</h1>
    </div>
  );
}

export default App;