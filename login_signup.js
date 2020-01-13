$('#newUser').click(function () {
    $('#signup').slideDown(500);
    $('#login').slideUp(500);
});
$('#forgotPassword').click(function () {
    $('#login').slideUp(500);
    $('#forgot').slideDown(500);
});
$('#existingUser').click(function () {
    $('#signup').slideUp(500);
    $('#login').slideDown(500);
});
$('#back-to-login').click(function () {
    $('#forgot').slideUp(500);
    $('#login').slideDown(500);
});

// Creating a user for test

let emailAddress = $('#emailAddress');
emailAddress = 'paneru@gmail.com';

let password = $('#password');
password = '12345678';

// Checking Login Detail

function loginDetail() {
    if ($('#emailAddress').val() == emailAddress && $('#password').val() == password) {
        window.location.href = 'todo_list.html';
    } else {
        $('#denied-login').removeClass('hidden');
    }
}

$('#logInBtn').on('click', loginDetail);