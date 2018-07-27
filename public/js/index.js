$(document).ready( () => {

    $('#signup_form').submit(event => {
        event.preventDefault();

        let form_data = {
            'email': $('input[name=email]').val(),
            'name': $('input[name=name]').val(),
            'surname': $('input[name=surname]').val(),
            'login': $('input[name=login]').val(),
            'password': $('input[name=password]').val(),
            'confirm_password': $('input[name=confirm_password]').val()
        }

        $.ajax({
            type: 'POST',
            url: '/signup',
            data: form_data,
            dataType: 'json',
            encode: true
        }).done( data => {
            console.log(data);
        }).fail( data => {
            console.log(data.responseText);
        })
    })

})