import { useState } from "react";
import Header from "./components/Header";
import ShoppingBar from "./components/ShoppingBar";
import ShoppingBasket from "./components/ShoppingBasket";
import ShoppingOrder from "./components/ShoppingOrder";

function Shopping() {
    const [userPk, setUserPk] = useState(1);

    return (
        <div>
            <Header></Header>
            <ShoppingBar></ShoppingBar>
            <ShoppingBasket></ShoppingBasket>
            <ShoppingOrder></ShoppingOrder>
        </div>
    );
}
export default Shopping;