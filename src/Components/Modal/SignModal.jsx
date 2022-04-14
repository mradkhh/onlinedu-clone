import React, {useState} from 'react'
import Modal from 'antd/lib/modal/Modal'
import InputMask from 'react-input-mask'

const SignModal = ({modalVisibleProp}) => {
    const [modalVisible, setModalVisible] = useState(modalVisibleProp)
  return (
    <Modal
    style={{ top: 100}}
    visible={modalVisible}
    footer={null}
    onCancel={() => setModalVisible(false)}
    width={570}
  >
    <h3>Kirish</h3>
    <form className='sign__modal-form'>
      <label htmlFor="">Telefon raqam</label>
      <InputMask
        mask='(+999) 99 999 99 99'
        >
      </InputMask>
      <label htmlFor="">Parol</label>
      <input type="password" />
      <div className="checkbox">
        <input type="checkbox" />
        <label htmlFor="checkbox">Eslab qolish</label>
      </div>
      <button data-type='primary'>Kirish</button>
    </form>
    <button className='re-password'>Parolni tiklash</button>
    <button className='sign-up'>Ro'yxatdan o'tish</button>
  </Modal>
  )
}

export default SignModal