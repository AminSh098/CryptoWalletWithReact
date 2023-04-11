import { Vector, Bitmex, Coinbase, Binance } from '../../assets/index';
import './clients.css';

const Clients = () =>(
  <div className='CW__clients'>
    <div className='CW__clients-recommend'>
      <div className='CW__clients-line' />
      <div className='CW__clients-recommend-head'>
        <h3>Recommended By</h3>
      </div>
      <div className='CW__clients-line' />
    </div>
    <div className='CW__recommend-img'>
      <img src={Coinbase} alt="" />
      <img src={Vector} alt="" />
      <img src={Binance} alt="" />
      <img src={Bitmex} alt="" />
    </div>
  </div>
)

export default Clients