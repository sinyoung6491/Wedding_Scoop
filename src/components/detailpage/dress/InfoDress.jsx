import React, { useState } from 'react';
import toggle_down from '../../../assets/img/detailpage/toggle_down.svg';
import toggle_up from '../../../assets/img/detailpage/toggle.svg';

const InfoDress = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='info_dress_div'>
            <div>
                <div className="default_info_title_div" onClick={handleToggle}>
                    <div className="info_title">드레스 기본정보</div>
                    <img src={isOpen ? toggle_up : toggle_down} className="toggle_icon" />
                </div>
                {isOpen && (
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
                </div>)}
            </div>
        </div>
    )
}

export default InfoDress