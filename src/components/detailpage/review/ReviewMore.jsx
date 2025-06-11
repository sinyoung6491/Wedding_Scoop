import React from 'react'
import star from '../../../assets/img/detailpage/Star.svg'
import no_review from '../../../assets/img/detailpage/no_review.svg'
import review_img1 from '../../../assets/img/detailpage/review_img1.png'
import review_img2 from '../../../assets/img/detailpage/review_img2.png'
import add_review_icon from '../../../assets/img/detailpage/add_review_icon.svg'
import BottomSelfBtn from '../BottomSelfBtn'


const ReviewMore = () => {
    return (
        <div className='review_more_div'>
            <div className="review_title">후기(20)</div>
            {/* <div className="review_detail_div">
                <div className="review_info_div">
                    <div className="review_info_top">
                        <div className="name">김*정</div>
                        <div className="when">2025.02.31</div>
                    </div>
                    <div className="review_info_bottom">
                        <div className="type_name">웨딩홀 : 라포레홀</div>
                        <img src={star} alt="" className="star" />
                        <div className="score">5</div>
                    </div>
                </div>
                <div className="review_contents">
                    날씨가 좋을때는 정말 예쁘지만 하늘이 흐릴때는 그 장점이 다 죽는 것 같은 느낌이 들어요..ㅜㅜ 오히려 라메르홀이 숲속 요정이 나타날것만 같은 몽환적인 분위기 때문에 좀 더 예뻤어요! 결론은 예약은 진행 하지 않았지만 층고도 높고 상담도 친절하고 좋았어요!
                </div>
                <div className="review_img_div">
                    <img src={review_img1} alt="" />
                    <img src={review_img2} alt="" />
                </div>
            </div> */}
            <div className="review_no_div">
                <div className="no_review_text">
                    아직 작성된 후기가 없어요!<br/>
                    후기를 작성해주세요!
                </div>
                <img src={no_review} alt="" />
            </div>
            <div className="review_bottom_btn_div">
                <div className="add_review_div">
                    <img src={add_review_icon} alt="" />
                </div>
                <div className="bottom">
                    <BottomSelfBtn/>
                </div>
            </div>
        </div>
    )
}

export default ReviewMore