import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Categories,
  Course,
  CreateCourse,
  CreateCourseStep1,
  CreateCourseStep2,
  CreateCourseStep3,
  Drection,
  Edit,
  Expert,
  Faq,
  Home,
  NotFound,
  Payment,
  Profile,
  Qualification,
  SelectLesson,
  Stat,
  TestTypeOutlet,
  TextTypeOutlet,
  Vebinar,
  Vebinar2,
  VebinarTypeOutlet,
  VideoCourseTypeOutlet,
} from 'Pages/index';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from 'Redux/store';
import option from 'Services/Aos';
import Request from 'Services/Request';
import './App.css';
import './i18n';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    AOS.init({ ...option });
    //profil.get request
    Request()
      .get('/profil/get')
      .then((res) => {
        setUserInfo(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Provider store={store}>
      <I18nextProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='categories' element={<Categories />} />
            <Route path='course' element={<Course />} />
            <Route path='vebinar' element={<Vebinar />} />
            <Route path='vebinar2' element={<Vebinar2 />} />
            <Route path='faq' element={<Faq />} />
            <Route path='expert' element={<Expert />} />
            <Route path='dashboard' element={<Profile />} />
            <Route path='dashboard/profile' element={<Profile />} />
            <Route path='dashboard/edit' element={<Edit />} />
            <Route path='dashboard/stat' element={<Stat />} />
            <Route path='dashboard/qualification' element={<Qualification />} />
            <Route path='dashboard/drection' element={<Drection />} />
            <Route path='dashboard/payment' element={<Payment />} />
            <Route path='dashboard/create' element={<CreateCourse />} />
            <Route
              path='dashboard/create/step1'
              element={<CreateCourseStep1 />}
            />
            <Route
              path='dashboard/create/step2'
              element={<CreateCourseStep2 />}
            />
            <Route
              path='dashboard/create/step2-lesson'
              element={<SelectLesson />}>
              <Route index element={SelectLesson} />
              <Route path='lesson-test' element={<TestTypeOutlet />} />
              <Route
                path='lesson-videocourse'
                element={<VideoCourseTypeOutlet />}
              />
              <Route path='lesson-vebinar' element={<VebinarTypeOutlet />} />
              <Route path='lesson-text' element={<TextTypeOutlet />} />
            </Route>
            <Route
              path='dashboard/create/step3'
              element={<CreateCourseStep3 />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
