import validator from 'validator';


export function validateEmail(player) {
    const errorsEmail = {}

    if (validator.isEmpty(player.email)){
            errorsEmail.email = "Add an email"
    } else if (!validator.isEmail(player.email)){
            errorsEmail.email = "Insert a valid email adress"
    } 

        return errorsEmail
};

export function validatePassword(player) {
    const errorsPassword = {}

    if (validator.isEmpty(player.password)){
            errorsPassword.password = "Add a password"
    } else if (player.password.length < 6){
            errorsPassword.password = "Minimum of 6 characters"
    } else if (/[^a-zA-Z0-9 ]/g.test(player.password)){
            errorsPassword.password = "Add password without Symbols"
    } 

        return errorsPassword
};

export function validateNickname(player) {
        const errorsNickname = {}
        
        if (validator.isEmpty(player.nickname)){
                errorsNickname.nickname = "Add a nickname"
        } else if (player.nickname.length < 6){
                errorsNickname.nickname = "Minimum of 6 characters"
        } else if (/[^a-zA-Z0-9 ]/g.test(player.nickname)){
                errorsNickname.nickname = "Add nickname without Symbols"
        } 
    return errorsNickname
};


export function validateAvatar(player) {
        const errorsAvatar = {}

        if (player.avatar === '') {
                return errorsAvatar
        } else if (!(/^(https?:\/\/)?([\da-z-]+)\.([a-z]{2,6})([\w -])\/?/.test(player.nickname))){
                errorsAvatar.avatar = "Add a correct link"
        } 
    return errorsAvatar
};