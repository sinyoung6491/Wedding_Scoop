import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../../assets/img/detailpage/back.svg';
import empty_heart from '../../assets/img/detailpage/empty_heart.svg';

const PriceTopview = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className='topview_div'>
            <div className="left_div" onClick={goBack}>
                <img src={back} alt="" className='back' />
            </div>
            <div className="title">더채플앳논현 | 제보 받은 가격</div>
            <div className="right_div">
                <img src={empty_heart} alt="" className="heart" />
            </div>
        </div>
    )
}

export default PriceTopview