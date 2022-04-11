import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init";
const auth = getAuth(app);

function App() {
  const handleEmailBlur = event => {
    console.log(event.target.value);
  }
  const handlePassBlur = event => {
    console.log(event.target.value);
  }
  const handleOnSubmit = (event) => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input onBlur={handleEmailBlur} type="text" /> <br />
        <input onBlur={handlePassBlur} type="password" name="" id="" /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
