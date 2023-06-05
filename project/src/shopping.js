import Header from "./components/Header";
import ShoppingBar from "./components/ShoppingBar";
import ShoppingBasket from "./components/ShoppingBasket";
import ShoppingOrder from "./components/ShoppingOrder";

function Shopping() {
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