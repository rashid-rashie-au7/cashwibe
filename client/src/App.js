import Menubar from "./Components/Navbar/Menubar";
import Application from "./Components/LoanApplication/Application";
// import MainPage from "./Components/MainPage/MainPage"
// import Signin from './Components/Signin/Signin/'
// import Signup from './Components/Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from "./Components/Footer/FooterPage";
function App() {
  return (
    <div>
      <Menubar />
      <Application>

      </Application>
      {/* <MainPage /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
      <FooterPage />
    </div>
  );
}

export default App;
