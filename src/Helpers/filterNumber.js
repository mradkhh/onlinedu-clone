const filterNumber = (phoneValue) => {
  return phoneValue.replace(/ /g,'').replace(/\(/g, '').replace(/\)/g, '').replace(/\+/g, '');
}

export default filterNumber