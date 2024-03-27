import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Views/Home/home';
import Iniciate from './Views/Iniciate/iniciate';
import Cate from './Views/Cate/cate';
import Apostolate from './Views/Apostolate/apostolate';
import Ropa from './Views/Ropa/ropa';
import Descargables from './Views/Descargables/descargables';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciate" element={<Iniciate />} />
        <Route path="/cate" element={<Cate />} />
        <Route path="/apostolate" element={<Apostolate />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/util" element={<Descargables />} />
        <Route path="*" element={<Home />} />
    </Routes>
      
    </>
  )
}

export default App;
