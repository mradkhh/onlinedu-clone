import { Collapse } from 'antd'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Request from 'Services/Request'
import { Spin } from 'antd'
import './Faq.scss'

const Faq = () => {
  const {Panel} = Collapse
  const [faq, setFaq] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Request()
      .get('/faq?page=1')
      .then((res) => {
        setFaq(res?.data?.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Header/>
      {
        loading
        ? <Spin wrapperClassName='spinner-wrapper' size='large' />
         : <main id="faq__page">
         <div className="container">
           <nav className="breadcrumb mt-6 mb-8 rounded-md w-full">
             <ol className="list-reset flex">
               <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Asosiy</Link></li>
               <li><span className="text-gray-500 mx-2">></span></li>
               <li className="text-grayColor">Savollarga javoblar</li>
             </ol>
           </nav>
           <section className="faq">
               <h3 className="faq__title">Ko'p so'raladigan savollar</h3>
               <div className="faq__items">
               <Collapse
                 accordion
                 expandIcon={({isActive}) => isActive ? <img src="/Images/arrow-up.png" alt='arrow'/> : <img src='/Images/arrow-down.png' alt='arrow'/>}
                 bordered={false}
                 expandIconPosition='right'>
                {
                   faq.map((item) =>
                   <Panel
                   header={item?.title}
                   key={item?.id}>
                     {(item?.body)}
                   </Panel>
                 )
                }

               </Collapse>
               </div>
           </section>
         </div>
       </main>
      }
      <Footer/>
    </>

  )
}

export default Faq