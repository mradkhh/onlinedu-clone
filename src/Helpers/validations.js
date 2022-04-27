const loginValidation = (resultPhone, passwordValue) => {
  if(resultPhone.length === 12 && passwordValue.length > 8) {
    return true
  }
  return false
}

const phoneValidated = (resultPhone) => {
  if(resultPhone.length === 12) {
    return true
  } else {return false}
}

export {loginValidation,
        phoneValidated }