let RegexValidation = {};
let confirm = 0,
  phone_confirm = 0;
const regexletters = /[a-zA-Zá-ýÁ-Ý]/;
const regexsimbols = /[-.-@-_]/;
const regexnumbers = /[0-9]/;
const spaces = /[\s]/;

RegexValidation.Verfify = (user, lastname, password, mail_user) => {
  confirm = 0;

  let values = [user, lastname, password, mail_user];
  for (let e = 0; e < values.length; e++) {
    let validation = values[e];
    for (let index = 0; index < values[e].length; index++) {
      if (regexletters.test(validation[index])) {
        confirm++;
      } else if (regexsimbols.test(validation[index])) {
        confirm++;
      } else if (regexnumbers.test(validation[index])) {
        confirm++;
      } else if (spaces.test(validation[index])) {
        confirm++;
      }
    }
  }
  if (
    confirm ===
    user.length + lastname.length + password.length + mail_user.length
  ) {
    return true;
  } else {
    return false;
  }
};
RegexValidation.VerifyNumber = (phone_user) => {
  phone_confirm = 0;
  for (let index = 0; index < phone_user.length; index++) {
    if (regexnumbers.test(phone_user[index])) {
      phone_confirm++;
    }
  }
  if (phone_confirm === phone_user.length) {
    return true;
  } else {
    return false;
  }
};

export default RegexValidation;
