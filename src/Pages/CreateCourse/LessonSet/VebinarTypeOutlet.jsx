import { Checkbox } from 'antd';
import InputMask from 'react-input-mask'
import './VebinarTypeOutlet.scss'

const VideoCourseTypeOutlet = () => {
  return (
    <div id="vebinar__type">
      <div className="vebinar">
        <div className="form">
          <div className="vebinar__title-field">
            <label htmlFor="vebinar-title">Название урока</label>
            <input type="text" name='vebinar-title' placeholder='Название урока'/>
          </div>
          <div className="vebinar__disc-field">
            <label htmlFor="vebinar_disc">Описаниие урока</label>
            <textarea name="vebinar_disc" id="vebinar_disc" cols="30" rows="6"></textarea>
          </div>
          <div className="vebinar__duration-field">
            <label htmlFor="">Продолжительность вебинара</label>
            <div className="input">
              <InputMask mask="99"/>
              <InputMask mask="+4\9 99 999 99"/>
            </div>
          </div>
          <div className="vebinar__recorder-field">
            <label htmlFor="video-quality">Запись вебинара</label>
            <div className="checkbox">
            <Checkbox>Записать</Checkbox>
            </div>
          </div>
          <div className="vebinar__date-field">
            <div className="calendar">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCourseTypeOutlet