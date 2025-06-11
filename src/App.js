import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMain from './page/DetailMain';
import './assets/scss/style.scss';
import MorePriceView from './page/MorePriceView';

const App = () => {
  //const [type, setType] = useState('');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hall' element={<DetailMain type="hall"/>}/>
        <Route path='/studio' element={<DetailMain type="studio"/>}/>
        <Route path='/dress' element={<DetailMain type="dress"/>}/>
        <Route path='/makeup' element={<DetailMain type="makeup"/>}/>
        <Route path='/price' element={<MorePriceView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App