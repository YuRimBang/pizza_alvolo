import { useState } from "react";
import Header from "./components/Header";
import ShoppingBar from "./components/ShoppingBar";
import ShoppingBasket from "./components/ShoppingBasket";
import ShoppingOrder from "./components/ShoppingOrder";

function Shopping() {
    const [userPk, setUserPk] = useState(1);
    const [basketData, setBasketData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);    

    return (
        <div>
            <Header></Header>
            <ShoppingBar></ShoppingBar>
            <ShoppingBasket basketData={basketData} setBasketData={setBasketData} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></ShoppingBasket>
            <ShoppingOrder setBasketData={setBasketData} setTotalPrice={setTotalPrice}></ShoppingOrder>
        </div>
    );
}
export default Shopping;