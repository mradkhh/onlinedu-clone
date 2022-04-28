const filterNumber = (phoneValue) => {
  return phoneValue.replace(/ /g,'').replace(/\(/g, '').replace(/\)/g, '').replace(/\+/g, '').replace(/_/g, '');
}

export default filterNumber