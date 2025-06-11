import React from 'react'
import DetailPriceHall from './hall/DetailPriceHall'
import DetailPriceStudio from './studio/DetailPriceStudio'
import DetailPriceDress from './dress/DetailPriceDress'
import DetailPriceMakeup from './makeup/DetailPriceMakeup'
import bottom_price_btn_self from '../../assets/img/detailpage/bottom_price_btn_self.svg'
import BottomBtn from './BottomBtn';

const BottomDetailPrice = () => {
    return (
        <div className='bottom_price_div'>
            <DetailPriceMakeup />
            {/* <DetailPriceDress/> */}
            {/* <DetailPriceStudio/> */}
            {/* <DetailPriceHall/> */}
            <div className="price_bottom_btn_div">
                <img src={bottom_price_btn_self} alt="" />
                <BottomBtn />
            </div>
        </div>
    )
}

export default BottomDetailPrice