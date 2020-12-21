import './App.css';
import { Badge,Col} from 'reactstrap';
import Event from './components/EventComponents';
function App() {
  return (
    <div className="App">
          <div className="container mt-5">
            <div className="row">
              <Col>
              <h1><Badge color="info" style={{color: "black"}}>POPULAR GROUPS</Badge> <span dark color="primary">UPCOMING EVENTS</span></h1>
              </Col>
            </div>
          </div>
          <div className="container mt-5 ">
            <div className="row">
               <Event/>
            </div>
          </div>
          
    </div>
  );
}

export default App;
