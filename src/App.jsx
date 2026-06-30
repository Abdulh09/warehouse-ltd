import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Heroslider from "./components/Heroslider";
import Cardslider from "./components/Cardslider";

function App() {
  return (
    <>
      <Navbar />
      <Heroslider />
      <div className="card-wrapper">
        <div className="container">
          <Cardslider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
