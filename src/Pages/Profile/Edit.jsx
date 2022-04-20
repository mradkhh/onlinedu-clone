import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Edit.scss';

function Edit() {
  // validat color

  // validat value
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [thirdName, setThirdName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [tel, setTel] = useState('');
  const [country, setCountry] = useState('');
  const [village, setVillage] = useState('');
  const [password, setPassword] = useState('');
  const [order, setOrder] = useState('');
  const [identificator, setIdentificator] = useState('');
  const [education, setEducation] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');
  const [school, setSchool] = useState('');

  // input error State
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [thirdNameError, setThirdNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [identificatorError, setIdentificatorError] = useState(false);
  const [institutionError, setInstitutionError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);

  // select error state
  const [genderError, setGenderError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [villageError, setVillageError] = useState(false);
  const [educationError, setEducationError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const handleSubmit = e => {
    console.clear();
    e.preventDefault();
    if (
      firstName.length > 3
       &&
       (lastName.length > 3)
        &&
        (thirdName.length > 3)
         &&
         (birth.length > 3)
         &&
         (gender.length > 0)
         &&
          (tel.length > 3)
          &&
          (country.length > 0)
          &&
          (village.length > 0)
          &&
           (password.length > 9)
           &&
           (order.length > 9)
           &&
            (identificator.length > 9)
            &&
            (education.length > 0)
            &&
             (institution.length > 9)
             &&
             (year.length > 0)
             &&
              (school.length > 9) ) {
      console.log('success');
    }
    else if(lastName.length < 4) {
      setLastNameError(true)
    }
    else if (firstName.length < 4) {
      setFirstNameError(true);
    }
    else if (thirdName.length < 4) {
      setThirdNameError(true);
    }
    else if (gender.length <= 0)  {
      setGenderError(true);
    }
    else if (birth.length < 4)  {
      setBirthError(true);
    }
    else if ( tel.length < 4 ) {
      setTelError(true);
    }
    else if ( country.length <= 0 ) {
      setCountryError(true);
    }
    else if ( village.length <= 0 ) {
      setVillageError(true);
    }
    else if ( password.length < 4) {
      setPasswordError(true);
    }
    else if ( order.length < 4) {
      setOrderError(true);
    }
    else if (identificator.length < 9) {
      setIdentificatorError(true);
    }
    else if (education.length <= 0) {
      setEducationError(true);
    }
    else if (institution.length < 9) {
      setInstitutionError(true);
    }
    else if (year.length <= 0) {
      setYearError(true);
    }
    else if (school.length < 9) {
      setSchoolError(true);
    }
  };

  return (
    <>
      <Header/>
    <div className='info__section'>
      <div className='container'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='#'>Главная</a>
            </li>
            <span> &gt; </span>
            <li className='breadcrumb-item active' aria-current='page'>
              Дополнительная информация
            </li>
          </ol>
        </nav>

        <div className='info'>
          <h3 className='info__title'>Дополнительная информация</h3>
          <form className='info__form' onSubmit={handleSubmit}>
            <div className='info__form-item'>
              <h4 className='title'>Личные данные</h4>
              <div className='form__field'>
                <label className='lastname'>
                  <span>Фамилия</span>
                  <input
                    name='lastname'
                    style={{
                      border: lastNameError ? '1px solid red' : 'initial',
                    }}
                    onChange={e => {
                      setLastName(e.target.value);
                      setLastNameError(false);
                    }}
                    onFocus={() => setLastNameError(false)}
                    value={lastName}
                    type='text'
                  />
                </label>
                <label className='firstname'>
                  <span>Имя</span>
                  <input
                    name='firstname'
                    style={{
                      border: firstNameError ? '1px solid red' : 'initial',
                    }}
                    onChange={e => {
                      setFirstName(e.target.value);
                      setFirstNameError(false);
                    }}
                    onFocus={() => setFirstNameError(false)}
                    value={firstName}
                    type='text'
                  />
                </label>
              </div>

              <div className='form__field'>
                <label className='thirdname'>
                  <span>Отчество</span>
                  <input
                    name='thitdname'
                    style={{
                      border: thirdNameError ? '1px solid red' : 'initial',
                    }}
                    onChange={e => {
                      setThirdName(e.target.value);
                      setThirdNameError(false);
                    }}
                    onFocus={() => setThirdNameError(false)}
                    value={thirdName}
                    type='text'
                  />
                </label>
                <label className='gender'>
                  <span>Пол</span>
                  <div
                  className='select'
                  style={{border: genderError ? '1px solid red' : 'initial'}}>
                    <select
                      value={gender}
                      onChange={e => {
                        setGender(e.target.value)
                        setGenderError(false)
                      }}
                      onFocus={() => {
                        setGenderError(false)
                      }}
                      name='select'>
                      <option value='' disabled>Jinsignizni tanlang </option>
                      <option value='male'>Мужской</option>
                      <option value='female'>Женскый</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className='form__field'>
                <label className='brith'>
                  <span>Дата рождения</span>
                  <input
                    name='brith'
                    value={birth}
                    style={{ border: birthError ? '1px solid red' : 'initial' }}
                    onChange={e => {
                      setBirth(e.target.value);
                      setBirthError(false);
                    }}
                    onFocus={() => setBirthError(false)}
                    type='text'
                  />
                </label>
                <label className='tel'>
                  <span>Номер телефона</span>
                  <input
                    name='tel'
                    value={tel}
                    style={{border: telError ? '1px solid red' : 'initial'} }
                    onChange={e => {
                      setTelError(false)
                      setTel(e.target.value)
                    }}
                    onFocus={() => setTelError(false)}
                    type='text'
                  />
                </label>
              </div>

              <div className='form__field'>
                <label className='country'>
                  <span>Регион</span>
                  <div
                    style={{border: countryError ? '1px solid red' : 'initial'}}
                    className='select'>
                    <select
                      value={country}
                      onChange={e => {
                        setCountry(e.target.value)
                        setCountryError(false)
                      }}
                      onFocus={() => {
                        setCountryError(false)
                      }}
                      name='select'>
                      <option value='' disabled>Shahringizni tanlang</option>
                      <option value='tashkent'>Ташкент</option>
                      <option value='other'>others</option>
                    </select>
                  </div>
                </label>
                <label className='village'>
                  <span>Район</span>
                  <div
                    style={{border: villageError ? '1px solid red' : 'initial'}}
                  className='select'>
                    <select
                    value={village}
                      onChange={e => {
                        setVillage(e.target.value)
                        setVillageError(false)
                      }}
                      onFocus={() => {
                        setVillageError(false)
                      }}
                    name='select'>
                      <option value='' disabled>Tumanni belgilang</option>
                      <option value='mirzo'>Мирзо-улугбекский район</option>
                      <option value='other'>others</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className='form__field'>
                <label className='seria-password'>
                  <span>Серия паспорта</span>
                  <input
                    name='password'
                    value={password}
                    style={{border: passwordError ? '1px solid red' : 'initial'} }
                    onChange={e => {
                      setPasswordError(false)
                      setPassword(e.target.value)
                    }}
                    onFocus={() => setPasswordError(false)}
                    type='text'
                  />
                </label>
                <div className='file__input-field'>
                  <span>Фотография</span>
                  <label className='file__label'>
                    <div className='file__input'>
                      <div className='fake__input'>
                        <svg
                          width='13'
                          height='14'
                          viewBox='0 0 13 14'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M11.0533 7.28047L6.93328 11.4071C6.39315 11.8871 5.69004 12.1426 4.96776 12.1214C4.24548 12.1001 3.55861 11.8037 3.04766 11.2928C2.53671 10.7818 2.24028 10.0949 2.21902 9.37265C2.19776 8.65037 2.45327 7.94726 2.93328 7.40713L8.26661 2.0738C8.58503 1.77133 9.00743 1.60269 9.44661 1.60269C9.88579 1.60269 10.3082 1.77133 10.6266 2.0738C10.9368 2.38819 11.1108 2.81211 11.1108 3.2538C11.1108 3.69549 10.9368 4.11941 10.6266 4.4338L6.02661 9.02713C5.98109 9.07616 5.92635 9.11574 5.86553 9.14361C5.80471 9.17149 5.73899 9.18711 5.67213 9.18958C5.60528 9.19206 5.53858 9.18134 5.47587 9.15804C5.41315 9.13475 5.35564 9.09932 5.30661 9.0538C5.25758 9.00827 5.218 8.95354 5.19013 8.89272C5.16226 8.8319 5.14664 8.76618 5.14416 8.69932C5.14168 8.63246 5.1524 8.56577 5.1757 8.50306C5.199 8.44034 5.23442 8.38283 5.27994 8.3338L8.69994 4.92047C8.82548 4.79493 8.89601 4.62467 8.89601 4.44713C8.89601 4.2696 8.82548 4.09934 8.69994 3.9738C8.57441 3.84826 8.40415 3.77774 8.22661 3.77774C8.04908 3.77774 7.87881 3.84826 7.75328 3.9738L4.33328 7.40047C4.16215 7.57027 4.02632 7.77227 3.93363 7.99481C3.84094 8.21736 3.79322 8.45605 3.79322 8.69713C3.79322 8.93821 3.84094 9.1769 3.93363 9.39945C4.02632 9.622 4.16215 9.824 4.33328 9.9938C4.68286 10.3268 5.14715 10.5125 5.62994 10.5125C6.11274 10.5125 6.57703 10.3268 6.92661 9.9938L11.5199 5.3938C12.0499 4.8251 12.3384 4.07291 12.3246 3.29571C12.3109 2.51851 11.9961 1.77696 11.4464 1.22731C10.8968 0.677661 10.1552 0.362813 9.37803 0.3491C8.60083 0.335387 7.84864 0.62388 7.27994 1.1538L1.94661 6.48713C1.22741 7.28369 0.843296 8.32703 0.874299 9.39978C0.905303 10.4725 1.34903 11.492 2.11304 12.2456C2.87704 12.9993 3.9024 13.4292 4.97547 13.4456C6.04854 13.462 7.08657 13.0638 7.87328 12.3338L11.9999 8.2138C12.0621 8.15164 12.1114 8.07785 12.1451 7.99663C12.1787 7.91542 12.196 7.82837 12.196 7.74047C12.196 7.65256 12.1787 7.56552 12.1451 7.4843C12.1114 7.40309 12.0621 7.32929 11.9999 7.26713C11.9378 7.20497 11.864 7.15567 11.7828 7.12203C11.7016 7.08839 11.6145 7.07107 11.5266 7.07107C11.4387 7.07107 11.3517 7.08839 11.2704 7.12203C11.1892 7.15567 11.1154 7.20497 11.0533 7.26713V7.28047Z'
                            fill='#898DA6'
                          />
                        </svg>
                        <span>Загрузить</span>
                      </div>
                      <input className='file' type='file' />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='info__form-item'>
              <h4 className='title'>Информация о работе</h4>
              <div className='form__field'>
                <label className='order'>
                  <span>Должность</span>
                  <input
                    name='order'
                    value={order}
                    style={{border: orderError ? '1px solid red' : 'initial'} }
                    onChange={e => {
                      setOrder(e.target.value)
                      setOrderError(false)
                    }}
                    onFocus={() => setOrderError(false)}
                    type='text'
                  />
                </label>
                <label className='identificator'>
                  <span>Идентификационный номер</span>
                  <input
                    name='identificator'
                    value={identificator}
                    style={{border: identificatorError ? '1px solid red' : 'initial'} }
                    onFocus={() => setIdentificatorError(false)}
                    onChange={e => {
                      setIdentificatorError(false)
                      setIdentificator(e.target.value)
                    }}
                    type='text'
                  />
                </label>
              </div>
            </div>

            <div className='info__form-item'>
              <h4 className='title'>Образование</h4>
              <div className='form__field'>
                <label className='education'>
                  <span>Образование</span>
                  <div
                  style={{border: educationError ? '1px solid red' : 'initial' }}
                  className='select'>
                    <select
                    value={education}
                    onChange={e => {
                      setEducation(e.target.value)
                      setEducationError(false)
                    }}
                    onFocus={() => {
                      setEducationError(false)
                    }}
                    name='select'>
                      <option value='' disabled>Talim turi</option>
                      <option value='mirzo'>Высшее</option>
                      <option value='other'>others</option>
                    </select>
                  </div>
                </label>
                <label className='institution'>
                  <span>Учебное заведение</span>
                  <input
                    name='institution'
                    value={institution}
                    style={{border: institutionError ? '1px solid red' : 'initial'} }
                    onFocus={() => setInstitutionError(false)}
                    onChange={e => {
                      setInstitutionError(false)
                      setInstitution(e.target.value)
                    }}
                    type='text'
                  />
                </label>
              </div>

              <div className='form__field'>
                <label className='year'>
                  <span>Год окончания</span>
                  <div
                  style={{border: yearError ? '1px solid red' : 'initial'}}
                  className='select'>
                    <select
                    value={year}
                    onChange={e => {
                      setYear(e.target.value)
                      setYearError(false)
                    }}
                    onFocus={() => {
                      setYearError(false)
                    }}
                    name='select'>
                      <option value='' disabled>Yil</option>
                      <option value='mirzo'>Высшее</option>
                      <option value='other'>others</option>
                    </select>
                  </div>
                </label>
                <label className='school'>
                  <span>Школа</span>
                  <input
                    name='school'
                    value={school}
                    style={{border: schoolError ? '1px solid red' : 'initial'} }
                    onFocus={() => setSchoolError(false)}
                    onChange={e => {
                      setSchoolError(false)
                      setSchool(e.target.value)
                    }}
                    type='text'
                  />
                </label>
              </div>

              <div className='form__field-bio'>
                <h5>Био</h5>
                <p>
                  По своей сути рыбатекст является альтернативой традиционному
                  lorem ipsum, который вызывает у некторых людей недоумение при
                  попытках прочитать рыбу текст. В отличии от lorem ipsum, текст
                  рыба на русском языке наполнит любой макет непонятным смыслом
                  и придаст неповторимый колорит советских времен.
                </p>
              </div>
            </div>
            <button className='btn form__btn' type='submit' data-type='primary'>
              Регистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Edit;
