import Header from './components/Header';
import Carousel from './components/Carousel';
import UnderMenu from './components/UnderMenu';
import MainUnder from './components/MainUnder';

function Main() {
    return (
        <div className='background'>
            <Header></Header>
            <MainUnder></MainUnder>
            <Carousel></Carousel>
            <UnderMenu></UnderMenu>
        </div>
    );
}
export default Main;