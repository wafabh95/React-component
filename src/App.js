
import './App.css';
import Profile from "./component/Profile/ProfilPhoto";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <div className="container">

      <div className="row">
        <div className="col-sm profile">
          <Profile />
          <FullName />
            <Address />
        </div>

        <div className="col-sm">
           
        </div>
      </div>
</div>


    

      
    </div>
  );
}

export default App;
