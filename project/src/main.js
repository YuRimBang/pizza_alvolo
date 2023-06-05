import Header from './components/Header';
import Carousel from './components/Carousel';
import UnderMenu from './components/UnderMenu';
import MainUnder from './components/MainUnder';
import OwnerMyPage from './components/OwnerMyPage';

function Main() {
    return (
        <div className='background'>
            <Header></Header>
            <MainUnder></MainUnder>
            <Carousel></Carousel>
            <UnderMenu></UnderMenu>
            <OwnerMyPage></OwnerMyPage>
        </div>
    );
}
export default Main;