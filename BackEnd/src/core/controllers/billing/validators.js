function ValidatePhone(phone) {
    const phoneFormat = /^[6-9]\d{9}$/gi;
    if (phone.match(phoneFormat)) {
      return true;
    } else {
      return false;
    }
}
function ValidatePin(pinCode) {
    const pinFormat =/^[1-9]{1}[0-9]{2}[0-9]{3}$/gm;
    if (pinCode.match(pinFormat)) {
      return true;
    } else {
      return false;
    }
}
export default {ValidatePhone,ValidatePin}