import { AppStore, GooglePlay, phone } from "../../assets";
import './downloadways.css'

const DownloadWays = () => {
  return (
    <div className='CW__downloadWays'>
      <div className='CW__downloadWays-text'>
        <h1>Available and Download Anytime!</h1>
        <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</p>
        <div className="CW__downloadWays_text-img">
        <img src={GooglePlay} alt="Google play" />
        <img src={AppStore} alt="App store" />
        </div>
      </div>
      <div className='CW__downloadWays-img'>
      <img src={phone} alt="Phone" />        
      </div>
    </div>
  )
}

export default DownloadWays