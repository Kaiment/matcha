let model = require('./model');

exports.signup = data => {
    //model.createUser(data);
    //check_password(data.password, data.confirm_password, 7, "[0-9]");
    //model.getUser({ $or: [ { 'name': "e" }, { 'email': "e@e"} ] });
    //model.createUser(data);
}

function check_password(pass, ssap, length, required) {
    if (pass !== ssap)
        throw "Passwords don't match";
    if (pass.length <= length)
        throw "Password too short";
    if (!pass.match(required))
        throw "Password doesn't match requirements";
}