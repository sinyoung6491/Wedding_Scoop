import React from 'react'
import toggle from '../../../assets/img/detailpage/toggle.svg'

const DetailPriceMakeup = () => {
    return (
        <div className='detail_price_makeup_div'>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">헤어/메이크업 기본정보</div>
                    <img src={toggle} className="toggle_icon" />
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title">헤어/메이크업 종류</div>
                        <div className="default_info">신랑신부 헤어메이크업</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">타입</div>
                        <div className="default_info">프리미엄</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">토탈 선택</div>
                        <div className="default_info">촬영 + 본식</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">메이크업 직급</div>
                        <div className="default_info">원장, 부원장, 실장</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">메이크업 스타일</div>
                        <div className="default_info">깨끗/화사</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">기타</div>
                        <div className="default_info">헤어변형 , 출장가능</div>
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
                        <div className="default_info">650,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>본식 + 촬영</div>
                        <div className="default_info">810,000 원</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">시간대</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>4시/4시 30분</div>
                        <div className="default_info">220,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>5시/5시 30분</div>
                        <div className="default_info">110,000 원</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">옵션 가격</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>담당자 지정</div>
                        <div className="default_info">55,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>헤어피스</div>
                        <div className="default_info">250,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>여혼주</div>
                        <div className="default_info">200,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>남혼주</div>
                        <div className="default_info">55,000 원</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DetailPriceMakeup