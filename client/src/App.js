import { Navbar } from "./components/navbar/navbar";
import { UserLogin } from "./components/login/login";
import { Footer } from "./components/footer/footer";
import { Signup } from "./components/signup/register";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
