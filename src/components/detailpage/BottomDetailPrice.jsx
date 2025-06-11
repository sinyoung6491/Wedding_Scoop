import React from 'react'
import { useNavigate } from 'react-router-dom';
import DetailPriceHall from './hall/DetailPriceHall'
import DetailPriceStudio from './studio/DetailPriceStudio'
import DetailPriceDress from './dress/DetailPriceDress'
import DetailPriceMakeup from './makeup/DetailPriceMakeup'
import bottom_price_btn_self from '../../assets/img/detailpage/bottom_price_btn_self.svg'
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
                <img src={bottom_price_btn_self} alt="" />
                <BottomBtn />
            </div>
        </div>
    )
}

export default BottomDetailPrice