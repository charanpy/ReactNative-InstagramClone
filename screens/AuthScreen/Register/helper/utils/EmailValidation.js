function onSubmitHandler(email) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    !typeof email === 'string'
    || email.length <= 0
    || !email.match(mailFormat)
  ) {
    return false;
  }
  return true;
}

export default onSubmitHandler;
