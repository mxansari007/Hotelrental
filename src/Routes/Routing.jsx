import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Item from "../Pages/Item/Item";
export default function Routing(){

    return <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property/:id' element={<Item />} />
        </Routes>
    </>
}