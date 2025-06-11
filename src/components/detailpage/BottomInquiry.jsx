import React from 'react'
import web from '../../assets/img/detailpage/web.svg'
import call from '../../assets/img/detailpage/call.svg'
import kakaotalk from '../../assets/img/detailpage/kakaotalk.svg'
import instagram from '../../assets/img/detailpage/instagram.svg'
import BottomSelfBtn from './BottomSelfBtn'

const BottomInquiry = () => {
  return (
    <div className='bottom_inquiry_div'>
        <div className="inquiry_top_div">
            <div className="inquiry_one_div">
                <img src={web} alt="" className="inquiry_icon" />
                <div className="inquiry_type">웹으로 문의</div>
            </div>
            <div className="inquiry_one_div">
                <img src={call} alt="" className="inquiry_icon" />
                <div className="inquiry_type">전화 문의</div>
            </div>
        </div>
        <div className="inquiry_bottom_div">
            <div className="inquiry_one_div">
                <img src={kakaotalk} alt="" className="inquiry_icon" />
                <div className="inquiry_type">카카오 문의</div>
            </div>
            <div className="inquiry_one_div">
                <img src={instagram} alt="" className="inquiry_icon" />
                <div className="inquiry_type">인스타 문의</div>
            </div>
        </div>
        <div className="inquiry_bottom_btn_div">
            <BottomSelfBtn/>
        </div>
    </div>
  )
}

export default BottomInquiry