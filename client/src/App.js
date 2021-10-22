import "./assets/styles/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Routes from './routes';
import { UserContextProvider } from "./contexts/user";

function App() {
  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  );
}

export default App;
