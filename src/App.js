import { Route, Routes } from "react-router-dom"
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import Details from "./component/details/Details";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Basket from "./component/basket/Basket";
import FoodList from "./component/foodlist/Foodlist";
import Profile from "./component/profile/Profile";


function App() {
  return <>
        <Header/>
        <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/:name/:id" element={<Details/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/:name" element={<FoodList/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
  </>
}

export default App;
