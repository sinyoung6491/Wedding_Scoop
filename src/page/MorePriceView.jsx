import React, { useState } from 'react'
import PriceTopview from '../components/detailpage/PriceTopview'
import toggle_down from '../assets/img/detailpage/toggle_down.svg'
import toggle_up from '../assets/img/detailpage/toggle.svg'
import price_no_option from '../assets/img/detailpage/price_no_option.svg'

const MorePriceView = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
        <div className='container' id='more_price_view_wrap'>
            <PriceTopview />
            <div className="type_div">
                <div className="select">전체</div>
                <div className="no_select">성수기</div>
                <div className="no_select">비수기</div>
            </div>
            <div className="price_view_div">
                <div className="price_view_one_div" onClick={() => setOpen1(!open1)}>
                    <div className="top_div">
                        <div className="left_div">
                            <div className="when">2025년</div>
                            <div className="no_season">비수기 견적</div>
                            <div className="option">옵션 포함</div>
                        </div>
                        <img src={open1 ? toggle_up : toggle_down} alt="" />
                    </div>
                    <div className="price_view_title">채플홀|4,950,000원</div>


                </div>
                <div className="price_view_one_div" onClick={() => setOpen2(!open2)}>
                    <div className="top_div">
                        <div className="left_div">
                            <div className="when">2025년</div>
                            <div className="season">성수기 견적</div>
                            <div className="option">옵션 포함</div>
                        </div>
                        <img src={open2 ? toggle_up : toggle_down} alt="" />
                    </div>
                    <div className="price_view_title">채플홀|4,950,000원</div>
                    {open2 && (<div className="no_option_div">
                        <div className="no_option_text">옵션 정보가 없어요</div>
                        <img src={price_no_option} alt="" />
                    </div>)}

                </div>
                <div className="price_view_one_div" onClick={() => setOpen3(!open3)}>
                    <div className="top_div">
                        <div className="left_div">
                            <div className="when">2025년</div>
                            <div className="no_season">비수기 견적</div>
                            <div className="option">옵션 포함</div>
                        </div>
                        <img src={open3 ? toggle_up : toggle_down} alt="" />
                    </div>
                    <div className="price_view_title">채플홀|4,950,000원</div>
                    {open3 && (
                        <div className="option_div">
                            <div className="option_type_div">
                                <div className="option_type_title">예식 날짜</div>
                                <div className="option_type_text">비수기(5월)</div>
                            </div>
                            <div className="option_type_div">
                                <div className="option_type_title">홀타입</div>
                                <div className="option_type_text">채플홀</div>
                            </div>
                            <div className="option_type_div" id='last'>
                                <div className="option_type_title">옵션 추가</div>
                                <div className="options_div">
                                    <div className="option_type_text">행사진행</div>
                                    <div className="option_type_text">영상활영</div>
                                    <div className="option_type_text">사진촬영</div>
                                    <div className="option_type_text">폐백</div>
                                    <div className="option_type_text">포토테이블</div>
                                    <div className="option_type_text">VOD</div>
                                    <div className="option_type_text">꽃가루</div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default MorePriceView