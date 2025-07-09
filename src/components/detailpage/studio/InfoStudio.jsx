import React, { useState } from 'react';
import toggle_down from '../../../assets/img/detailpage/toggle_down.svg';
import toggle_up from '../../../assets/img/detailpage/toggle.svg';

const InfoStudio = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='info_studio_div'>
            <div>
                <div className="default_info_title_div" onClick={handleToggle}>
                    <div className="info_title">스튜디오 기본정보</div>
                    <img src={isOpen ? toggle_up : toggle_down} className="toggle_icon" />
                </div>
                {isOpen && (
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
                </div>)}
            </div>
        </div>
    )
}

export default InfoStudio