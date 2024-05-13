import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import SignupPage from "./components/Signup"
import "./index.css";
import LoginPage from "./components/Login";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";

function App() {

  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/product/:id" element={<DetailPage/>}/>

    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/auth" element={<AuthPage/>  }>
      <Route path="signup" element={<SignupPage/>} />
      <Route path="login" element={<LoginPage/>} />
    </Route>

   </Routes>
  )
}

export default App
