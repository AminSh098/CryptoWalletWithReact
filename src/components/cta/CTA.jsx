import { GreenRectangle } from "../../assets";
import './cta.css';

const CTA = () => {
  return (
    <div className="CW__cta">
      <div className="CW__cta-container">
        <h1>Ready to get updated?</h1>
        <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</p>
        <div className="CW__cta-emailInput">
          <input type="email" name="email" value="Email Address" />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CTA