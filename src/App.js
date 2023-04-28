import { Route, Routes } from "react-router-dom"
import Header from "./component/header/Header";
import Search from "./component/search/Search";
import Body from "./component/body/Body";
import Details from "./component/details/Details";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Basket from "./component/basket/Basket";
import FoodList from "./component/foodlist/Foodlist";


function App() {
  return <>
        <Header/>
        <Search/>
        <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/:name/:id" element={<Details/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/:name" element={<FoodList/>} />
        </Routes>
  </>
}

export default App;
