const roles = {
  visa: /^4(\d{12})?(\d{15})?$/,
  ip: /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[1-9])(\.(?!$)|$))((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){3}$/,
  mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
};

const validate = (stringToValidate, validatePattern) => {
  return roles[validatePattern].test(stringToValidate);
};

export default validate;
