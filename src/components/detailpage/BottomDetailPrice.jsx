import React from 'react'
import { useNavigate } from 'react-router-dom';
import DetailPriceHall from './hall/DetailPriceHall'
import DetailPriceStudio from './studio/DetailPriceStudio'
import DetailPriceDress from './dress/DetailPriceDress'
import DetailPriceMakeup from './makeup/DetailPriceMakeup'
import balloon from '../../assets/img/detailpage/balloon.svg'
import BottomBtn from './BottomBtn';

const BottomDetailPrice = ({ type }) => {
    const componentMap = {
        hall: <DetailPriceHall />,
        makeup: <DetailPriceMakeup />,
        dress: <DetailPriceDress />,
        studio: <DetailPriceStudio />,
    };
    return (
        <div className='bottom_price_div'>
            {componentMap[type] || null}
            <div className="price_bottom_btn_div">
                <div className="img">
                    <div className="top">직접 견적을 내볼 수 있어요!</div>
                    <img src={balloon} alt="" className="balloon" />
                </div>
                <BottomBtn />
            </div>
        </div>
    )
}

export default BottomDetailPrice