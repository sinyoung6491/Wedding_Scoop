import React, { useState } from 'react';
import toggle_down from '../../../assets/img/detailpage/toggle_down.svg';
import toggle_up from '../../../assets/img/detailpage/toggle.svg';

const InfoMakeup = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='info_makeup_div'>
            <div>
                <div className="default_info_title_div" onClick={handleToggle}>
                    <div className="info_title">헤어/메이크업 기본정보</div>
                    <img src={isOpen ? toggle_up : toggle_down} className="toggle_icon" />
                </div>
                {isOpen && (
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
                </div>)}
            </div>
        </div>
    )
}

export default InfoMakeup