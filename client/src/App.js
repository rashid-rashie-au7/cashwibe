import Menubar from "./Components/Navbar/Menubar";
// import Application from "./Components/LoanApplication/Application";
// import MainPage from "./Components/MainPage/MainPage"
// import Signin from './Components/Signin/Signin/'
// import Signup from './Components/Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from "./Components/Footer/FooterPage";
import HomePage from "./Components/HomePage/HomePage";
function App() {
  return (
    <div>
      <Menubar />
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
