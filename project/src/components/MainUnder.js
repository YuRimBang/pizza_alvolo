import { Link } from "react-router-dom";
import '../css/MainUnder.css';

function MainUnder({ isBoxVisible, setIsBoxVisible }) {
    const handleClick = () => {
        setIsBoxVisible(false);
      };
    return (
        <div className={isBoxVisible ? 'box show' : 'box'}>
            <div className='bunch'>
                <div className='boxes'>
                    <div className='blackFont'>
                        피자
                    </div>
                    <div className='whiteFont'>
                        <Link to="/pizza"style={{ color: 'white' }}>
                        <div class="tab-item">전체피자</div>
                        </Link>
                        <div class="tab-item">스페셜반반피자</div>
                        <div class="tab-item">세트메뉴</div>
                        <div class="tab-item">하프엔하프</div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        사이드메뉴
                    </div>
                    <div className='whiteFont'>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        멤버십˙제휴할인
                    </div>
                    <div className='whiteFont'>
                        <div class="tab-item">멤버십 혜택</div>
                        <div class="tab-item">통신사 제휴 할인</div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        이벤트
                    </div>
                    <div className='whiteFont'>

                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        매장찾기
                    </div>
                    <div className='whiteFont'>
                        <div class="tab-item">지역명 찾기</div>
                        <div class="tab-item">매장명 찾기</div>
                        <div class="tab-item">현위치 찾기</div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        마이페이지
                    </div>
                    <div className='whiteFont'>
                        <Link to="/purchasehistory"style={{ color: 'white' }}>
                        <div class="tab-item">주문내역</div>
                        </Link>
                        <div class="tab-item">쿠폰함</div>
                        <div class="tab-item">MY CLASS</div>
                        <div class="tab-item">비행기스탬프</div>
                        <Link to="/myPage"style={{ color: 'white' }}>
                        <div class="tab-item">정보수정</div>
                        </Link>
                        <div class="tab-item">회원탈퇴</div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='blackFont'>
                        주문하기
                    </div>
                    <div className='whiteFont'>
                        <div class="tab-item">배달주문하기</div>
                        <div class="tab-item">포장주문하기</div>
                        <div class="tab-item">간편주문</div>
                        <div class="tab-item">E쿠폰</div>
                        <div class="tab-item">선물하기</div>
                    </div>
                </div>
            </div>
            <div className='bottomText'>
                <p>회사소개&gt;   가맹문의&gt;   고객센터&gt;   단체주문&gt;</p>
            </div>
            <img src="hamCross.png" class="icon-x" onClick={handleClick}></img>
        </div>

    );
}
export default MainUnder;