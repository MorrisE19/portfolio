import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';


function App() {
  return (
    <div>
        <Header></Header>
    </div>
  );
}

export default App;
