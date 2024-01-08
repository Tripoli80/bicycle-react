// import "normalize.css";
import "./App.css";
import { Footer } from "./components/footer.jsx";
import { Mainpage } from "./pages/main/main.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">ADMIN.BIKE-BOOKING.COM</header>
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
