import React from 'react'
import toggle from '../../../assets/img/detailpage/toggle.svg'
import InfoHall from './InfoHall'

const DetailPriceHall = () => {
    return (
        <div className='detail_price_hall_div'>
            <div>
                <InfoHall/>
                {/* <div className="default_info_title_div">
                    <div className="info_title">홀 기본정보</div>
                    <img src={toggle} className="toggle_icon" />
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title">홀타입</div>
                        <div className="default_info">하우스, 야외</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">메뉴 종류</div>
                        <div className="default_info">뷔페</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">식사 비용</div>
                        <div className="default_info">80,000원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">최소 보증 인원</div>
                        <div className="default_info">180명</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">최대 수용 인원</div>
                        <div className="default_info">300명</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">주차 형태</div>
                        <div className="default_info">주차 수용대수:150대<br />무료 (2시간) / 유료 (10분/700원)</div>
                    </div>
                </div> */}
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">가격 정보</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">채플홀</div>
                        </div>
                        <div className="default_info">3,740,000~5,950,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>성수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">채플홀</div>
                        </div>
                        <div className="default_info">3,740,000~5,950,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">커티지홀</div>
                        </div>
                        <div className="default_info">5,390,000~9,750,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">커티지홀</div>
                        </div>
                        <div className="default_info">5,390,000~9,750,000 원</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">식음료</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">채플홀</div>
                        </div>
                        <div className="default_info">3,740,000~5,950,000 원</div>
                    </div>
                    <div className="add_person">추가 1명 당 75,900 원</div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>성수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">채플홀</div>
                        </div>
                        <div className="default_info">3,740,000~5,950,000 원</div>
                    </div>
                    <div className="add_person">추가 1명 당 75,900 원</div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">커티지홀</div>
                        </div>
                        <div className="default_info">5,390,000~9,750,000 원</div>
                    </div>
                    <div className="add_person">추가 1명 당 75,900 원</div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>비수기</div>
                            <div className="default_info_title" id='bar'>|</div>
                            <div className="default_info_title">커티지홀</div>
                        </div>
                        <div className="default_info">5,390,000~9,750,000 원</div>
                    </div>
                    <div className="add_person">추가 1명 당 75,900 원</div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">기타 옵션</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>행사 진행</div>
                        </div>
                        <div className="default_info">495,000 ~ 550,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>영상 촬영</div>
                        </div>
                        <div className="default_info">660,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>사진 촬영</div>
                        </div>
                        <div className="default_info">880,000 ~ 1,540,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="left">
                            <div className="default_info_title" id='season'>폐백</div>
                        </div>
                        <div className="default_info">390,000 ~ 550,000 원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPriceHall