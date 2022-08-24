
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainHomePage from './components/mainhomePage/MainHomePage';
import NotFound from './components/notFound/NotFound';
import Layouts from './components/layouts/Layouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<MainHomePage />}></Route>

        <Route path="*" element={<NotFound />}></Route>

        </Route>
    </Routes>
  );
}

export default App;
