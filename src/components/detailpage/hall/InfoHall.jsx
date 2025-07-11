import React, { useState } from 'react';
import toggle_down from '../../../assets/img/detailpage/toggle_down.svg';
import toggle_up from '../../../assets/img/detailpage/toggle.svg';

const InfoHall = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='info_hall_div'>
            <div className="default_info_title_div" onClick={handleToggle}>
                <div className="info_title">홀 기본정보</div>
                <img src={isOpen ? toggle_up : toggle_down} className="toggle_icon" />
            </div>
            {isOpen && (
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
                </div>)}
        </div>
    )
}

export default InfoHall