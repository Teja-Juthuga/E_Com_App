import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Footer } from "./components/footer/footer";
import { Signup } from "./components/signup/signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
