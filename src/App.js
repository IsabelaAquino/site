import logo from './logo.svg';
import './App.css';
import Header from './pages/Menu/header';
import {BrowserRouter} from "react-router-dom";
import Routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
