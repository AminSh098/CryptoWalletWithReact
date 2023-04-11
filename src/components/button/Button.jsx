import './Button.css';

const Button = ({title}) => {
  return (
    <div className='CW__Button'>
        <button type="button">{title}</button>
    </div>
  )
}

export default Button