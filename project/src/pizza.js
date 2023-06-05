import '../src/css/main.css'
import Header from './components/Header';
import PizzaSelectKategoire from './components/PizzaSelectKategoire';
import PizzaTapMenu from './components/PizzaTapMenu';
import PizzaTitle from './components/PizzaTitle';
import Menu from './components/Menu';
import Page from './components/Page';

function Pizza() {
    return (
        <div className='background'>
            <Header></Header>
            <PizzaTitle></PizzaTitle>
            <PizzaTapMenu></PizzaTapMenu>
            <PizzaSelectKategoire></PizzaSelectKategoire>
            <Menu></Menu>
            <Page></Page>
        </div>
    );
}
export default Pizza;