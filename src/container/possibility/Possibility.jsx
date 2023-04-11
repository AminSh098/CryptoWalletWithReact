import './possibility.css';
import AboutUs from '../../components/aboutUs/AboutUs';
import { OurPossibility } from '../../constants/index';

const Possibility = () => {
  return (
    <div className='CW__possibility'>
      <div className='CW__possibility-whyUs'>
        <h1>Why Choose Us</h1>
        <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</p>
      </div>
      <div className='CW__possibility-boxes'>
        {OurPossibility.aboutWallet.map(( text, index ) => (
          <AboutUs title={text.title} text={text.text} img={text.img} />
        ))}
      </div>
    </div>
  )
}

export default Possibility