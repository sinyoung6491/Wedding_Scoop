import React, { useState } from 'react'
import Topview from '../components/detailpage/Topview'
import star from '../assets/img/detailpage/Star.svg';
import BottomInfo from '../components/detailpage/BottomInfo';
import BottomDetailPrice from '../components/detailpage/BottomDetailPrice';
import BottomReview from '../components/detailpage/BottomReview';
import ReviewMore from '../components/detailpage/review/ReviewMore';
import BottomInquiry from '../components/detailpage/BottomInquiry';

const DetailMain = ({ type }) => {
  const [selectedMenu, setSelectedMenu] = useState('정보'); // 초기 선택 메뉴
  const [showMoreReview, setShowMoreReview] = useState(false);

  const menus = ['정보', '상세 가격', '후기(99)', '문의'];

  return (
    <div className='container' id='detail_main_wrap'>
      <Topview />
      <div className="view_img"></div>
      <div className="info_sub_div">
        <div className="left_div">
          <div className="text">웨딩홀</div>
          <div className="bar">|</div>
          <div className="text">서울 강남구</div>
        </div>
        <div className="right_div">
          <img src={star} alt="" className='star' />
          <div className="point">4.5</div>
        </div>
      </div>
      <div className="info_main_div">
        <div className="left_div">더채플앳논현</div>
        <div className="right_div">
          <div className="price_text">3,740,000</div>
          <div className="price_text">~ 원</div>
        </div>
      </div>
      {/* 메뉴 탭 영역 */}
      <div className="info_menu_div">
        {menus.map((menu) => (
          <div
            key={menu}
            className="menu_section"
            onClick={() => {
              setSelectedMenu(menu);
              setShowMoreReview(false);
            }}
          >
            <div className={`menu_title`} id={`${selectedMenu === menu ? 'select' : 'no_select'}`}>
              {menu}
            </div>
            <div className={`select_bar`} id={`${selectedMenu === menu ? 'select_bar' : 'no_select_bar'}`}></div>
          </div>
        ))}
      </div>
      {selectedMenu === '정보' && <BottomInfo type={type} />}
      {selectedMenu === '상세 가격' && <BottomDetailPrice type={type}/>}
      {selectedMenu === '후기(99)' && (
        showMoreReview ? <ReviewMore /> : <BottomReview onMoreClick={() => setShowMoreReview(true)} />
      )}
      {selectedMenu === '문의' && <BottomInquiry />}

      {/* <BottomInfo type={type}/> */}
      {/* <BottomDetailPrice/> */}
      {/* <BottomReview/> */}
      {/* <ReviewMore/> */}
      {/* <BottomInquiry/> */}
    </div>
  )
}

export default DetailMain