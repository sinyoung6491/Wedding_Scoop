import React from 'react'
import toggle from '../../../assets/img/detailpage/toggle.svg'

const DetailPriceDress = () => {
    return (
        <div className='detail_price_dress_div'>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">드레스 기본정보</div>
                    <img src={toggle} className="toggle_icon" />
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title">토탈 선택</div>
                        <div className="default_info">촬영 + 본식</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">사이즈</div>
                        <div className="default_info">44~77</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">제작구분</div>
                        <div className="default_info">국내 + 수입</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">타입</div>
                        <div className="default_info">하이엔드</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">소재</div>
                        <div className="default_info">실크, 레이스, 비즈</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">스타일</div>
                        <div className="default_info">화려한, 러블리</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">기타</div>
                        <div className="default_info">턱시도 포함</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">가격 정보</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>본식</div>
                        <div className="default_info">1,290,000 원</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">디자인 옵션</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>시그니처</div>
                        <div className="default_info">1,290,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>익스클루시브</div>
                        <div className="default_info">1,400,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>블랙라벨</div>
                        <div className="default_info">250,000 원</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">기타 옵션</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>퍼스트 웨어</div>
                        <div className="default_info">250,000 원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPriceDress