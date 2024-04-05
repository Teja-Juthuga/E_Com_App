import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Footer } from "./components/footer/footer";
import { Signup } from "./components/signup/signup";

import { LoginPage } from "./components/login/loginpage";
import { AccountRecoverPage } from "./components/AccountRecover/accountrecoverpage";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SignupPage } from "./components/signup/signupPage";
import { Products } from "./components/productspage/products";
import { ProductsPage } from "./components/productspage/productspage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path : "/Signup",
    element : <SignupPage/>
  },
  {
    path : "/AccountRecover",
    element : <AccountRecoverPage/>
  },
  {
    path : "/Shop",
    element : <ProductsPage />
  }

]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
