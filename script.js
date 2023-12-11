
$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orderspage.html')
    }
    let loginForm = window.document.getElementById('loginform');
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        let logincredential = {
            username: this.username.value,
            password: this.password.value
        }
        if (logincredential.username === logincredential.password && logincredential.username.length > 3) {
           
            $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",logincredential,
                function (data, textStatus, jqXHR) {
                    alert('Login Successful!!')
                    window.localStorage.setItem('loginStatus',true)
                    location.replace('./orderspage.html')
                },
                
            );
        } else {
            alert(`Please Enter Valid Credentials `)
        }
    }
    $('.navMenu-items').click(function (e) { 
        e.preventDefault();
        $('.active').removeClass('active');
        $(e.target).addClass('active')
        
    });
});
