import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="about__section">
      <div className="container">
        <div className="about">
          <div className="about__info">
            <h2 className="about__info-title">Siz uchun yaratilgan qulayliklar</h2>
            <p className="about__info-subtitle">Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga, o'zingizga qulay vaqtda malaka oshirishingizga yordam beradi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 about__items">
            <div className=" about__items-child">
              <img src="/Images/about1.png" alt="about" />
              <h5>Qulay interfeys</h5>
              <p>Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin</p>
            </div>
            <div className="  about__items-child">
              <img src="/Images/about2.png" alt="about" />
              <h5>Malakali mutaxassislar</h5>
              <p>Malakali mutaxassislar tomonidan tayyorlangan kurslar orqali o'z malakangizni oshiring. Yanada ko'proq bilimga ega bo'ling.</p>
            </div>
            <div className="  about__items-child">
              <img src="/Images/about3.png" alt="about" />
              <h5>50+ kurslar barcha yo'nalishlar bo'yicha</h5>
              <p>Video materiallar qiziqarli va tushunarli ko'rinishda o'tilgan bo'lib, barcha ma'lumotlarni hech qanday qiyinchiliklarsiz o'zlashtira olasiz.</p>
            </div>
            <div className="  about__items-child">
              <img src="/Images/about4.png" alt="about" />
              <h5>50+ kurslar barcha yo'nalishlar bo'yicha</h5>
              <p>O'zingiz qiziqqan istalgan kursni toping. Qo'shimcha kurslarga yozilib, bilimlaringizni yanada boyitib, malakangizni oshiring.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About