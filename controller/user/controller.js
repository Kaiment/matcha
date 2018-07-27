let Controller = function() {};

Controller.prototype.signup = data => {
    if (!check_password(data.password, data.confirm_password))
        throw "Passwords don't match";
}

module.exports = new Controller();

function check_password(pass, ssap) {
    return (pass === ssap)
}