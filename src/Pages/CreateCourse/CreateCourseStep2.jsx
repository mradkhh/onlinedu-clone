import { Drawer } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobileSideMenu from '../../Components/SideMenu/MobileSideMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import { useNavigate } from 'react-router-dom';
import { createCourse } from 'Redux/dispatch';
import ActionBtn from './ActionBtn';
import StepCard from './StepCard';
import './createCourseStep2.scss';

const CreateCourseStep2 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visibleSidebar,setVisibleSidebar] = useState(false)
  const [lessonValue, setLessonValue] = useState('')
  const {coursesList} = useSelector(state => state)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCoursesList =  coursesList.map((course) => {
      if (course?.id === 2 ) {
        const courseLesson = course?.courseLessons
        return {...course, courseLessons: [...courseLesson, {item: lessonValue}]}
      }
      else {
        return course
      }
    })
    console.log(newCoursesList)
    dispatch(createCourse(newCoursesList))
  }
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
              <div className='create-course__content-info'>
                <div className="create-course__content-container">
                  <h5>Материалы курса</h5>
                  <p>Добавить раздел курса</p>
                  { coursesList && (<div className="course__lists">
                    {
                      coursesList?.map((item, i) => (
                        <div key={i} className="list">
                      <div className="list__header">
                        <div className="icon">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                              <path d="M2.00001 5.33333H14C14.1768 5.33333 14.3464 5.2631 14.4714 5.13807C14.5964 5.01305 14.6667 4.84348 14.6667 4.66667C14.6667 4.48986 14.5964 4.32029 14.4714 4.19526C14.3464 4.07024 14.1768 4 14 4H2.00001C1.8232 4 1.65363 4.07024 1.52861 4.19526C1.40358 4.32029 1.33334 4.48986 1.33334 4.66667C1.33334 4.84348 1.40358 5.01305 1.52861 5.13807C1.65363 5.2631 1.8232 5.33333 2.00001 5.33333ZM14 10.6667H2.00001C1.8232 10.6667 1.65363 10.7369 1.52861 10.8619C1.40358 10.987 1.33334 11.1565 1.33334 11.3333C1.33334 11.5101 1.40358 11.6797 1.52861 11.8047C1.65363 11.9298 1.8232 12 2.00001 12H14C14.1768 12 14.3464 11.9298 14.4714 11.8047C14.5964 11.6797 14.6667 11.5101 14.6667 11.3333C14.6667 11.1565 14.5964 10.987 14.4714 10.8619C14.3464 10.7369 14.1768 10.6667 14 10.6667ZM14 7.33333H2.00001C1.8232 7.33333 1.65363 7.40357 1.52861 7.5286C1.40358 7.65362 1.33334 7.82319 1.33334 8C1.33334 8.17681 1.40358 8.34638 1.52861 8.4714C1.65363 8.59643 1.8232 8.66667 2.00001 8.66667H14C14.1768 8.66667 14.3464 8.59643 14.4714 8.4714C14.5964 8.34638 14.6667 8.17681 14.6667 8C14.6667 7.82319 14.5964 7.65362 14.4714 7.5286C14.3464 7.40357 14.1768 7.33333 14 7.33333Z" fill="#898DA6" />
                            </g>
                          </svg>
                        </div>
                        <div className="title">{item.courseTitle}</div>
                        <div className="delete">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                          </svg>
                        </div>
                      </div>
                      <div className="list__items">
                        {
                          item?.courseLessons?.map((item, i) => (
                            <div key={i} className="item">
                          <div className="icon">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                  <path d="M2.00001 5.33333H14C14.1768 5.33333 14.3464 5.2631 14.4714 5.13807C14.5964 5.01305 14.6667 4.84348 14.6667 4.66667C14.6667 4.48986 14.5964 4.32029 14.4714 4.19526C14.3464 4.07024 14.1768 4 14 4H2.00001C1.8232 4 1.65363 4.07024 1.52861 4.19526C1.40358 4.32029 1.33334 4.48986 1.33334 4.66667C1.33334 4.84348 1.40358 5.01305 1.52861 5.13807C1.65363 5.2631 1.8232 5.33333 2.00001 5.33333ZM14 10.6667H2.00001C1.8232 10.6667 1.65363 10.7369 1.52861 10.8619C1.40358 10.987 1.33334 11.1565 1.33334 11.3333C1.33334 11.5101 1.40358 11.6797 1.52861 11.8047C1.65363 11.9298 1.8232 12 2.00001 12H14C14.1768 12 14.3464 11.9298 14.4714 11.8047C14.5964 11.6797 14.6667 11.5101 14.6667 11.3333C14.6667 11.1565 14.5964 10.987 14.4714 10.8619C14.3464 10.7369 14.1768 10.6667 14 10.6667ZM14 7.33333H2.00001C1.8232 7.33333 1.65363 7.40357 1.52861 7.5286C1.40358 7.65362 1.33334 7.82319 1.33334 8C1.33334 8.17681 1.40358 8.34638 1.52861 8.4714C1.65363 8.59643 1.8232 8.66667 2.00001 8.66667H14C14.1768 8.66667 14.3464 8.59643 14.4714 8.4714C14.5964 8.34638 14.6667 8.17681 14.6667 8C14.6667 7.82319 14.5964 7.65362 14.4714 7.5286C14.3464 7.40357 14.1768 7.33333 14 7.33333Z" fill="#898DA6" />
                                </g>
                              </svg>
                          </div>
                          <h6 className='title' >{item.item}</h6>
                          <div className="edit">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                            </svg>
                          </div>
                          <div className="detele">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                            </svg>
                          </div>
                        </div>
                          ))
                        }
                      <div className="add-lesson">
                        <form onSubmit={handleSubmit}>
                          <input value={lessonValue} key={item.id} onChange={(e) => setLessonValue(e.target.value)} type="text" />
                          <button data-type='primary' type='submit'>Saqlash</button>
                        </form>
                      </div>
                      <button data-type='create' className="create">
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.6665 5.33366H6.6665V1.33366C6.6665 1.15685 6.59627 0.987279 6.47124 0.862254C6.34622 0.73723 6.17665 0.666992 5.99984 0.666992C5.82303 0.666992 5.65346 0.73723 5.52843 0.862254C5.40341 0.987279 5.33317 1.15685 5.33317 1.33366V5.33366H1.33317C1.15636 5.33366 0.98679 5.4039 0.861766 5.52892C0.736742 5.65394 0.666504 5.82351 0.666504 6.00033C0.666504 6.17714 0.736742 6.34671 0.861766 6.47173C0.98679 6.59675 1.15636 6.66699 1.33317 6.66699H5.33317V10.667C5.33317 10.8438 5.40341 11.0134 5.52843 11.1384C5.65346 11.2634 5.82303 11.3337 5.99984 11.3337C6.17665 11.3337 6.34622 11.2634 6.47124 11.1384C6.59627 11.0134 6.6665 10.8438 6.6665 10.667V6.66699H10.6665C10.8433 6.66699 11.0129 6.59675 11.1379 6.47173C11.2629 6.34671 11.3332 6.17714 11.3332 6.00033C11.3332 5.82351 11.2629 5.65394 11.1379 5.52892C11.0129 5.4039 10.8433 5.33366 10.6665 5.33366Z" fill="white" />
                        </svg>
                        Добавить урок
                      </button>
                      </div>
                    </div>
                      ))
                    }
                    <button onClick={() => navigate('/dashboard/create/step2-lesson')} data-type='primary'>
                      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6665 5.33366H6.6665V1.33366C6.6665 1.15685 6.59627 0.987279 6.47124 0.862254C6.34622 0.73723 6.17665 0.666992 5.99984 0.666992C5.82303 0.666992 5.65346 0.73723 5.52843 0.862254C5.40341 0.987279 5.33317 1.15685 5.33317 1.33366V5.33366H1.33317C1.15636 5.33366 0.98679 5.4039 0.861766 5.52892C0.736742 5.65394 0.666504 5.82351 0.666504 6.00033C0.666504 6.17714 0.736742 6.34671 0.861766 6.47173C0.98679 6.59675 1.15636 6.66699 1.33317 6.66699H5.33317V10.667C5.33317 10.8438 5.40341 11.0134 5.52843 11.1384C5.65346 11.2634 5.82303 11.3337 5.99984 11.3337C6.17665 11.3337 6.34622 11.2634 6.47124 11.1384C6.59627 11.0134 6.6665 10.8438 6.6665 10.667V6.66699H10.6665C10.8433 6.66699 11.0129 6.59675 11.1379 6.47173C11.2629 6.34671 11.3332 6.17714 11.3332 6.00033C11.3332 5.82351 11.2629 5.65394 11.1379 5.52892C11.0129 5.4039 10.8433 5.33366 10.6665 5.33366Z" fill="white" />
                      </svg>
                      Добавить новый раздел</button>
                  </div>)

                  }
                </div>
                <ActionBtn next='/dashboard/create/step3' prev={-1}/>
              </div>
              <StepCard step='2 этап'/>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CreateCourseStep2