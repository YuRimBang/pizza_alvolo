import '../css/UnderMenu.css';

function UnderMenu() {

    return (
        <div className="main2">
            <div className='underBnt'>
                <div className='delivery'>
                    <img src='./delivery.png' class="icon" />
                    <div className = "icon-text">
                    배달주문
                    </div>
                </div>
                <div className='packaging'>
                    <img src='./packaging.png' class="icon" />
                    <div className = "icon-text">
                    포장주문
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UnderMenu;