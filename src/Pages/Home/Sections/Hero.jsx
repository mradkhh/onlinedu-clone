import { Link } from 'react-router-dom'
import './Hero.scss'


const Hero = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div  className="hero">
          <div data-aos-once="false"  className="hero__info">
            <h1 data-aos="fade-right" className='hero__info-title'>«Uzluksiz kasbiy ta’lim» elektron platformasi</h1>
            <p data-aos-duration="1000" data-aos="fade-right" className='hero__info-subtitle'>Malaka oshirish uchun kurslar endi onlayn. <br />
                Qulayliklardan foydalaning va vaqtingizni tejang.
            </p>
            <Link data-aos-duration="500"  data-aos="fade-right" to="/hero" className="hero__info-btn" data-type='primary'>Malaka oshirishni boshlash</Link>
          </div>
          <div data-aos="fade-left" className="hero__img">
            <img src="/Images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero