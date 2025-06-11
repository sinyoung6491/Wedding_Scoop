import React from 'react'
import full_star from '../../assets/img/detailpage/full_star.svg'
import empty_star from '../../assets/img/detailpage/empty_star.svg'
import review_img1 from '../../assets/img/detailpage/review_img1.png'
import review_img2 from '../../assets/img/detailpage/review_img2.png'
import review_img3 from '../../assets/img/detailpage/review_img3.png'
import more_review_next from '../../assets/img/detailpage/more_review_next.svg'
import add_review_icon from '../../assets/img/detailpage/add_review_icon.svg'
import BottomSelfBtn from './BottomSelfBtn'

const BottomReview = ({ onMoreClick }) => {
    return (
        <div className='bottom_review_div'>
            <div className="review_div">
                <div className="review_one_div">
                    <div className="top_score_div">
                        <div className="star_div">
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={empty_star} alt="" className="star" />
                        </div>
                        <div className="score">5</div>
                    </div>
                    <div className="review_contents">
                        "개방감이 좋고 웅장한 느낌이 드는 공간이 채플홀! 우아하면서 성스러운 분위기를 원하신다면 여기 추천!
                    </div>
                    <div className="review_img_div">
                        <div className="img_left">
                            <img src={review_img1} alt="" />
                        </div>
                        <div className="img_right">
                            <img src={review_img2} alt="" />
                            <img src={review_img3} alt=""  className='img3'/>
                        </div>
                    </div>
                </div>
                <div className="review_one_div">
                    <div className="top_score_div">
                        <div className="star_div">
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={empty_star} alt="" className="star" />
                        </div>
                        <div className="score">5</div>
                    </div>
                    <div className="review_contents">
                        "개방감이 좋고 웅장한 느낌이 드는 공간이 채플홀! 우아하면서 성스러운 분위기를 원하신다면 여기 추천!
                    </div>
                    <div className="review_img_div">
                        <div className="img_left">
                            <img src={review_img1} alt="" />
                        </div>
                        <div className="img_right">
                            <img src={review_img2} alt="" />
                            <img src={review_img3} alt="" className='img3'/>
                        </div>
                    </div>
                </div>
                <div className="review_one_div">
                    <div className="top_score_div">
                        <div className="star_div">
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={full_star} alt="" className="star" />
                            <img src={empty_star} alt="" className="star" />
                        </div>
                        <div className="score">5</div>
                    </div>
                    <div className="review_contents">
                        "개방감이 좋고 웅장한 느낌이 드는 공간이 채플홀! 우아하면서 성스러운 분위기를 원하신다면 여기 추천!
                    </div>
                    <div className="review_img_div">
                        <div className="img_left">
                            <img src={review_img1} alt="" />
                        </div>
                        <div className="img_right">
                            <img src={review_img2} alt="" />
                            <img src={review_img3} alt=""  className='img3'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more_review_div" onClick={onMoreClick}>
                <div className="more_text">자세히 보기</div>
                <img src={more_review_next} alt="" />
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

export default BottomReview