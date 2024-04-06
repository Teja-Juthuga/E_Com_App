import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";


import { LoginPage } from "./components/login/loginpage";
import { SignupPage } from "./components/signup/signupPage";
import { AccountRecoverPage } from "./components/AccountRecover/accountrecoverpage";
import { ProductsPage } from "./components/productspage/productspage";


export const store = createContext();


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
  const [token, setToken] = useState(null);
    return ( 
        <store.Provider value={[token,setToken]} >
            <RouterProvider router={router} />
        </store.Provider>
    );
}

export default App;
