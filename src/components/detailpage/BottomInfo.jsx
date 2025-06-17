import React from 'react'
import { useNavigate } from 'react-router-dom';
import character_y from '../../assets/img/detailpage/character_y.svg'
import character_b from '../../assets/img/detailpage/character_b.svg'
import more_price_next from '../../assets/img/detailpage/more_price_next.svg'
import character from '../../assets/img/detailpage/no_price_character.svg'
import toggle from '../../assets/img/detailpage/toggle.svg'
import hallimg from '../../assets/img/detailpage/detailmain_ex.jpg'
import InfoDress from './dress/InfoDress'
import InfoHall from './hall/InfoHall'
import InfoMakeup from './makeup/InfoMakeup'
import InfoStudio from './studio/InfoStudio'
import BottomBtn from './BottomBtn';
import balloon from '../../assets/img/detailpage/balloon.svg'

const BottomInfo = ({ type }) => {
  const navigate = useNavigate();
  const componentMap = {
    hall: <InfoHall />,
    makeup: <InfoMakeup />,
    dress: <InfoDress />,
    studio: <InfoStudio />,
  };

  return (
    <div className='bottom_info'>
      <div className="info_title">토탈 가격</div>
      <div className="default_price_div">
        <div className="default_detail_info_div">
          <div className="default_info_title">최저가 ~ 최고가</div>
          <div className="default_info">3,740,000~5,950,000 원</div>
        </div>
      </div>
      <div className="info_title">제보 받은 가격</div>
      {/* <div className="no_get_info_price_div">
        <div className="no_price_text">아직 제보가 없어요<br />견적 받은 가격을 제보해주세요</div>
        <img src={character} alt="" />
        <div className="get_info_btn">가격 제보하기</div>
      </div> */}
      <div className="get_info_price_div">
        <div className="character_div">
          <img src={character_y} alt="" />
          <img src={character_b} alt="" />
        </div>
        <div className="get_into_price_div">
          <div className="get_into_price_one_div">
            <div className="price_detail_text">2025년 | 채플홀 | 비수기</div>
            <div className="price_detail_text">5,950,000 원</div>
          </div>
          <div className="get_into_price_one_div">
            <div className="price_detail_text">2025년 | 채플홀 | 비수기</div>
            <div className="price_detail_text">5,950,000 원</div>
          </div>
        </div>
        <div className="get_into_price_more_div" onClick={() => navigate('/price')}>
          <div className="more_text">16개 제보 견적 더보기</div>
          <img src={more_price_next} alt="" />
        </div>
      </div>

      {componentMap[type] || null}

      <div className="hall_div">
        <div className="hall_title">라포레홀</div>
        <div className="hall_img_div">
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
        </div>
      </div>
      <div className="hall_div">
        <div className="hall_title">라포레홀</div>
        <div className="hall_img_div">
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
          <img src={hallimg} alt="" />
        </div>
      </div>
      <div className="place_div">
        <div className="info_title">위치</div>
        <div className="map"></div>
        <div className="address_div">
          <div className="address_text">서울 강남구 논현로 549</div>
          <a href="" className="map_link">지도로 보기</a>
        </div>
      </div>
      <div className="info_bottom_btn_div">
        <div className="img">
          <div className="top">가격이 다른가요?</div>
          <img src={balloon} alt="" className="balloon" />
        </div>
        <BottomBtn/>
      </div>
    </div>
  )
}

export default BottomInfo