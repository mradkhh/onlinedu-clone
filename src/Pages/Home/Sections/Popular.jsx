import {useState, useEffect} from 'react'
import Request from '../../../Services/Request'
import Card from '../../../Components/Cards/Card'
import './Popular.scss'

const Popular = () => {
  const [course, setCourses] = useState([])

  useEffect(()=> {
    Request()
      .get('/courses-home?per_page=6&category_type=paid&is_home=1')
      .then((res) => {
        setCourses(res?.data?.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="popular__section">
      <div className="container">
        <div className="popular">
          <h2 data-aos='fade-down' className="popular__title">Ommabop kurslar</h2>
          <p data-aos-duration="1000" data-aos='fade-down' className='popular__subtitle'>Ushbu kurslar bepul va pullik tarzda tavsiya etiladi. <br />
Tanlov tinglovchining ixtiyorida bo’lib, tavsiya etilayotgan kurslarda o’qish majburiy emas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
            {
              course.map((item, index) =>
                <Card
                key={index}
                aos='flip-left'
                image={'https://api.onlinedu.uz/storage/' + item?.image}
                title={item?.name}
                price={"95 000 сум"}
                science={item?.category?.name}
                rating={item?.rating}
                choise={false}
                />
              )
            }

        </div>
            <div className="more">
          <button className='all_course' data-type='primary'>Barcha kurslarni ko'rish</button>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Popular