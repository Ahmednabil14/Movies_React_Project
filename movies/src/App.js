import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/nav';
import Router from './routes/routes';


function App() {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  );
}

export default App;
