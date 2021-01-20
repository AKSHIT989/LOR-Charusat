import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/styles/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    // <div className="App">
    // <Sidebar/>
    //   <header className="App-header">
    //     <p>
    //       Letter of Recommendation Charusat
    //     </p>
    //   </header>
    <>

    {/* <Sidebar/> */}
    <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Sidebar} />
    </Switch>
  </BrowserRouter>
  </>
    // </div>
  );
}

export default App;
