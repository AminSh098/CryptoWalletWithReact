import './wallet.css';
import { laptop } from '../../assets/index';

const Wallet = () => {
  return (
    <div className='CW__wallet'>
      <div className='CW__wallet-img'>
        <img src={laptop} alt="laptop" />
      </div>
      <div className='CW__wallet-text'>
        <div className='CW__wallet_text-title'>
          <h1>Choose and Convert your Wallet Anytime!</h1>
          <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown. <br /> A Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
        </div>
        <div className='CW__wallet_text-button'>
          <button type="button">Choose your wallet</button>
        </div>
      </div>
    </div>
  )
}

export default Wallet