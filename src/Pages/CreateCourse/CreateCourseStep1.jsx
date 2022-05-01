import { Drawer, Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import ActionBtn from './ActionBtn';
import './createCourseStep1.scss';
import StepCard from './StepCard';

const CreateCourseStep1 = () => {
  const {Option} = Select
  const [visibleSidebar,setVisibleSidebar] = useState(false)
  return (
    <>
    <Header/>
    <div id="create-course__page">
      <div className="container flex">
        <SideMenu/>
        <div className="create-course">
          <nav data-aos='fade-right' className="breadcrumb after:rounded-md w-full">
              <ol className="list-reset flex">
                <button onClick={()=> setVisibleSidebar(!visibleSidebar)} className='sidebar-btn' data-type='gray'>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0913 14H1.90903C1.40694 14 1 13.5523 1 13C1 12.4477 1.40694 12 1.90903 12H14.091C14.5931 12 15 12.4477 15 13C15 13.5523 14.5934 14 14.0913 14Z" fill="#fff" />
                    <path d="M14.0913 9H1.90903C1.40694 9 1 8.55233 1 8C1 7.44767 1.40694 7 1.90903 7H14.091C14.5931 7 15 7.44767 15 8C15.0003 8.55233 14.5934 9 14.0913 9Z" fill="#fff" />
                    <path d="M14.0913 4H1.90903C1.40694 4 1 3.55233 1 3C1 2.44767 1.40694 2 1.90903 2H14.091C14.5931 2 15 2.44767 15 3C15 3.55233 14.5934 4 14.0913 4Z" fill="#fff" />
                  </svg>
                  <Drawer
                    className='mobile-drawer'
                      placement="left"
                      closable={false}
                      onClose={() => setVisibleSidebar(false)}
                      visible={visibleSidebar}
                    >
                      <MobileSideMenu/>
                    </Drawer>
                </button>
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Главная</Link></li>
                <li><span className="text-gray-500 mx-2">
                <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li><Link to={"/"} className="text-blueColor text-[14px] font-medium hover:text-greenColor">Мой аккаунт</Link></li>
                <li><span className="text-gray-500 mx-2">
                <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88675 3.5268L2.06008 0.700129C1.99811 0.637643 1.92437 0.588047 1.84314 0.554201C1.7619 0.520355 1.67476 0.50293 1.58675 0.50293C1.49874 0.50293 1.41161 0.520355 1.33037 0.554201C1.24913 0.588047 1.17539 0.637643 1.11342 0.700129C0.98925 0.825037 0.919556 0.994005 0.919556 1.17013C0.919556 1.34625 0.98925 1.51522 1.11342 1.64013L3.47342 4.00013L1.11342 6.36013C0.98925 6.48504 0.919556 6.65401 0.919556 6.83013C0.919556 7.00625 0.98925 7.17522 1.11342 7.30013C1.17571 7.36192 1.24959 7.4108 1.33081 7.44398C1.41204 7.47715 1.49901 7.49397 1.58675 7.49346C1.67449 7.49397 1.76146 7.47715 1.84269 7.44398C1.92391 7.4108 1.99779 7.36192 2.06008 7.30013L4.88675 4.47346C4.94924 4.41149 4.99883 4.33775 5.03268 4.25651C5.06652 4.17527 5.08395 4.08814 5.08395 4.00013C5.08395 3.91212 5.06652 3.82498 5.03268 3.74374C4.99883 3.6625 4.94924 3.58877 4.88675 3.5268Z" fill="#898DA6" />
                  </svg>
                  </span></li>
                <li className="text-grayColor">Мой профиль</li>
              </ol>
            </nav>
            <h4 data-aos='fade-right' className="create-course__title">Добавление нового курса</h4>
            <div className="create-course__content">
              <div className="create-course__content-info">
                <div className="create-course__content-container">
                <h5>Данные о курсе</h5>
                <form action="" className='form'>
                  <label htmlFor="">
                  Название курса  </label>
                  <input type="text" placeholder='Название курса'/>


                  <label htmlFor="">
                  О чем этот курс? </label>
                  <textarea name="" id="" cols="30" rows="6"></textarea>


                  <div className="file__input">
                    <div className="original__input">
                      <label htmlFor="">
                      Обложка курса  </label>
                      <input type="file" name="avater" id="" />
                    </div>
                    <div className="fake__input">
                      <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7138 15.0409L8.14263 18.6121C7.71026 19.0293 7.13282 19.2625 6.53193 19.2625C5.93104 19.2625 5.3536 19.0293 4.92123 18.6121C4.70918 18.4008 4.54092 18.1498 4.42611 17.8734C4.3113 17.597 4.2522 17.3007 4.2522 17.0014C4.2522 16.7021 4.3113 16.4057 4.42611 16.1293C4.54092 15.8529 4.70918 15.6019 4.92123 15.3907L8.49238 11.8195C8.66569 11.6462 8.76306 11.4111 8.76306 11.166C8.76306 10.9209 8.66569 10.6859 8.49238 10.5126C8.31906 10.3392 8.084 10.2419 7.8389 10.2419C7.59379 10.2419 7.35873 10.3392 7.18541 10.5126L3.61427 14.0929C2.89485 14.876 2.50576 15.9067 2.52827 16.9698C2.55078 18.033 2.98314 19.0463 3.73506 19.7982C4.48698 20.5502 5.50031 20.9825 6.56345 21.005C7.62659 21.0275 8.65732 20.6384 9.44039 19.919L13.0207 16.3479C13.194 16.1746 13.2914 15.9395 13.2914 15.6944C13.2914 15.4493 13.194 15.2142 13.0207 15.0409C12.8474 14.8676 12.6124 14.7702 12.3673 14.7702C12.1221 14.7702 11.8871 14.8676 11.7138 15.0409ZM19.6108 3.92251C18.8365 3.15306 17.7893 2.72119 16.6977 2.72119C15.6062 2.72119 14.5589 3.15306 13.7847 3.92251L10.2043 7.49365C10.1185 7.57947 10.0504 7.68135 10.004 7.79347C9.95754 7.90559 9.93364 8.02577 9.93364 8.14713C9.93364 8.2685 9.95754 8.38867 10.004 8.50079C10.0504 8.61292 10.1185 8.7148 10.2043 8.80061C10.2901 8.88643 10.392 8.9545 10.5041 9.00095C10.6163 9.04739 10.7364 9.0713 10.8578 9.0713C10.9792 9.0713 11.0993 9.04739 11.2115 9.00095C11.3236 8.9545 11.4255 8.88643 11.5113 8.80061L15.0824 5.22947C15.5148 4.81219 16.0922 4.57899 16.6931 4.57899C17.294 4.57899 17.8715 4.81219 18.3038 5.22947C18.5159 5.44069 18.6841 5.6917 18.7989 5.96811C18.9138 6.24451 18.9729 6.54087 18.9729 6.84017C18.9729 7.13947 18.9138 7.43582 18.7989 7.71223C18.6841 7.98863 18.5159 8.23964 18.3038 8.45086L14.7327 12.022C14.6464 12.1076 14.5779 12.2094 14.5312 12.3215C14.4845 12.4337 14.4604 12.554 14.4604 12.6755C14.4604 12.797 14.4845 12.9173 14.5312 13.0295C14.5779 13.1416 14.6464 13.2434 14.7327 13.329C14.8182 13.4152 14.92 13.4837 15.0322 13.5304C15.1444 13.5772 15.2647 13.6012 15.3862 13.6012C15.5077 13.6012 15.628 13.5772 15.7401 13.5304C15.8523 13.4837 15.9541 13.4152 16.0396 13.329L19.6108 9.74863C20.3802 8.97437 20.8121 7.92713 20.8121 6.83557C20.8121 5.744 20.3802 4.69676 19.6108 3.92251ZM8.69487 14.8384C8.78087 14.9237 8.88286 14.9912 8.995 15.037C9.10714 15.0828 9.22722 15.106 9.34835 15.1053C9.46948 15.106 9.58956 15.0828 9.70169 15.037C9.81383 14.9912 9.91583 14.9237 10.0018 14.8384L14.5302 10.3101C14.7035 10.1368 14.8009 9.90169 14.8009 9.65659C14.8009 9.41148 14.7035 9.17642 14.5302 9.0031C14.3569 8.82979 14.1218 8.73242 13.8767 8.73242C13.6316 8.73242 13.3965 8.82979 13.2232 9.0031L8.69487 13.5315C8.6086 13.617 8.54013 13.7188 8.4934 13.831C8.44667 13.9431 8.42261 14.0634 8.42261 14.1849C8.42261 14.3064 8.44667 14.4267 8.4934 14.5389C8.54013 14.6511 8.6086 14.7529 8.69487 14.8384Z" fill="#898DA6" />
                      </svg>
                      Загрузить
                    </div>
                  </div>

                  <label htmlFor="">
                  На каком языке будет курс? </label>
                  <Select style={{width: 120, marginBottom: '24px'}} defaultValue="active" >
                    <Option value="active">Kurs tili</Option>
                    <Option value="paid">Ruscha</Option>
                    <Option value="free">O'zbekcha</Option>
                  </Select>

                  <div className="type">
                    <div style={{display: 'flex', flexDirection: 'column' ,marginBottom: '24px'}}>
                      <label htmlFor="">
                      Выберите тип курсов </label>
                      <Select defaultValue="active" style={{width: 210}} >
                        <Option value="active">Kurs turini tanlang</Option>
                        <Option value="paid">Pullik</Option>
                        <Option value="free">Tekin</Option>
                      </Select>
                    </div>

                    <div style={{display: 'flex',flexDirection: 'column' ,marginBottom: '24px'}}>
                      <label htmlFor="">
                      Укажите продолжительность курса </label>
                      <div className='time'>
                        <input type="text" />
                        <input type="text" />
                      </div>
                    </div>

                  </div>
                  <label htmlFor="">
                  Выберите категорию курса </label>
                  <Select defaultValue="active" style={{width: 210}} >
                    <Option value="active">Kurs kategoriyasi</Option>
                    <Option value="paid">Xorijiy tillar</Option>
                    <Option value="free">O'zbekcha</Option>
                  </Select>
                </form>
                </div>
                <ActionBtn next='/dashboard/create/step2' prev={-1}/>
              </div>
              <StepCard step='1 этап'/>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CreateCourseStep1