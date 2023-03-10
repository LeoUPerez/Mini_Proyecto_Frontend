let RegexValidation = {};
let confirm = 0;
const regexletters = /[a-zA-Zá-ýÁ-Ý]/;
const regexsimbols = /[-.-@-_]/;
const regexnumbers = /0-9/;

RegexValidation.Verfify = (user, lastname, password, phone_user, mail_user ) =>{
    confirm = 0;
 
    let values = [user,lastname,password,phone_user,mail_user];
    // console.log(values);
    for (let e = 0; e < values.length; e++) {
        let validation = values[e];
        for (let index = 0; index < values[e].length; index++) {
            if (regexletters.test(validation[index])) {
                confirm++;
            }else if(regexsimbols.test(validation[index])){
                confirm++;
            }else if(regexnumbers.test(validation[index])){
                confirm++;
            }      
        }        
    }
    if (confirm === user.length + lastname.length +password.length
        + phone_user.length + mail_user.length) {
        return true;
    }else{
        return false;
    }
    // for (let index = 0; index < user.length; index++) {
    //     if (regexletters.test(user[index])) {
    //         userverify++;
    //     }
    // }
    // if (user.length === userverify) {
    //     confirm = confirm + user.length;
    // }else{
    //     return "User";
    // }

    // for (let index = 0; index < lastname.length; index++) {
    //     if (regexletters.test(lastname[index])) {
    //         lastnameverify++;
    //     }
    // }
    // if (lastname.length === lastnameverify) {
    //     confirm = confirm + lastname.length;
    // }else{
    //     return "Last Name";
    // }


    // if (confirm === userverify + lastnameverify) {
    //     return confirm;
    // }
}




export default RegexValidation;