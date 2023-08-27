function ValidateEmail(email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) {
      return true;
    } else {
      return false;
    }
}
  function ValidatePassword(password) {
    const passFormat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(passFormat)) {
      return true;
    } else {
      return false;
    }
}
export default {ValidateEmail,ValidatePassword};