import '../css/Review.css';

function Review() {

    return (
        <div className='reviewContainer'>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <input type='text' className='textReview'/>
            <input type='button' className='registbtn' value='등록'/>
        </div>

    );
}

export default Review;