import React from 'react'
import toggle from '../../../assets/img/detailpage/toggle.svg'
import InfoStudio from './InfoStudio'

const DetailPriceStudio = () => {
    return (
        <div className='detail_price_studio_div'>
            <InfoStudio/>
            {/* <div>
                <div className="default_info_title_div">
                    <div className="info_title">스튜디오 기본정보</div>
                    <img src={toggle} className="toggle_icon" />
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title">촬영 종류</div>
                        <div className="default_info">토탈촬영</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">타입</div>
                        <div className="default_info">베이직</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">스타일</div>
                        <div className="default_info">인물중심</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">촬영 가능한 스타일</div>
                        <div className="default_info">가든, 야간, 옥상</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title">기타</div>
                        <div className="default_info">커스텀 가능</div>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="default_info_title_div">
                    <div className="info_title">가격 정보</div>
                    <div className="update_text">22일 전 업데이트</div>
                </div>
                <div className="default_info_div">
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>앨범 20p, 액자 20R</div>
                        <div className="default_info">1,540,000 원</div>
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
                        <div className="default_info_title" id='season'>담장자 지정</div>
                        <div className="default_info">110,000~220,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>야외 촬영</div>
                        <div className="default_info">110,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>야간 촬영</div>
                        <div className="default_info">220,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>촬영 의상 추가 1벌 당</div>
                        <div className="default_info">220,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>앨범 페이지 추가 1페이지 당 </div>
                        <div className="default_info">220,000 원</div>
                    </div>
                    <div className="default_detail_info_div">
                        <div className="default_info_title" id='season'>선수정본 1장 당</div>
                        <div className="default_info">220,000 원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPriceStudio