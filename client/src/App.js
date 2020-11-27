import Menubar from "./Components/Navbar/Menubar";
import MainPage from "./Components/MainPage/MainPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from "./Components/Footer/FooterPage";

function App() {
  return (
    <div>
      <Menubar />
      < MainPage/>
      <FooterPage/>
    </div>
  );
}

export default App;
