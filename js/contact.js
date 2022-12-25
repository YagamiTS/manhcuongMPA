
var fullname, email, phone;
var flag = 1;
var mailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phonepattern = /^(03|05|07|08|09)[0-9]{8}$/;

function clearInvalid(a) {
    document.getElementById(a).classList.remove('invalid');
    flag=1;
}

function nameCheck() {
    fullname = $('#name').val();
    if (fullname == '') {
        flag = 0;
        document.getElementById('name').classList.add('invalid');
    }
    else if (fullname.lenght > 100) {
        flag = 0;
        document.getElementById('name').classList.add('invalid');
    }
    else {
        document.getElementById('name').classList.remove('invalid');
    }
}

function emailCheck() {
    email = $('#email').val();
    if (email == '') {
        flag = 0;
        document.getElementById('email').classList.add('invalid');
    }
    else if (email.lenght > 200) {
        flag = 0;
        document.getElementById('email').classList.add('invalid');
    }
    else if (!email.match(mailpattern)) {
        flag = 0;
        document.getElementById('email').classList.add('invalid');
    }
    else {
        document.getElementById('email').classList.remove('invalid');
    }
}

function phoneCheck() {
    phone = $('#phone').val();
    if (phone == '') {
        flag = 0;
        document.getElementById('phone').classList.add('invalid');
    }
    else if (!phone.match(phonepattern)) {
        flag = 0;
        document.getElementById('phone').classList.add('invalid');
    }
    else {
        document.getElementById('phone').classList.remove('invalid');
    }
}


$(document).ready(function () {
    $('.contact__form--form').on('submit', function (e) {
        e.preventDefault();
        nameCheck();
        emailCheck();
        phoneCheck();
        if (flag == 1) {
            confirm('Xác nhận gửi');
        }
        else {
            alert('Vui lòng nhập chính xác');
        }
    })
})
