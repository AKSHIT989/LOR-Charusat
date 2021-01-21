import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import StudentDashboard from './views/StudentDashboard/index'
import "./assets/styles/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Routes from './routes'
function App() {
  return (
    <>
      <Routes/>
    </>
  );
}

export default App;
