
$(document).ready(function(){

    var users = [];

    //a class to store user details
    class SignUp{

        constructor(){
            this.email = undefined;
            this.phone = undefined;
            this.password = undefined;
        }

        addNewUser(email, phone, password){
            let newRecord = {
                email : email,
                phone : phone,
                password : password
            };

            users.push(newRecord);
            console.log(users);
        }

        getUserDetails(emailOrPhone){
            var loopPassword = '';
            users.forEach(i => {
                if((i.email === emailOrPhone) || (i.phone === emailOrPhone)){
                    loopPassword = i.password;
                }
            });
            return loopPassword;
        }
    
    }


















    //------------------------------------------------------------------------------------------------
    var flag = 0;
    var flag1 = 0;
    var user = new SignUp();

    //signin option
    $('#signinoption').click(function(){
        $('#signup').hide();
        
        if(flag === 0){
            $('#signin').show();
            $('#carouselContainer').css("width", "75%");
            flag = 1;
        }else{
            $('#signin').hide();
            $('#carouselContainer').css("width", "100%");
            flag = 0;
        }
    });
    
    //signup option
    $('#signupoption').click(function(){
        $('#signin').hide();
        if(flag1 === 0){
            $('#signup').show();
            $('#carouselContainer').css("width", "75%");
            flag1 = 1;
        }else{
            $('#signup').hide();
            $('#carouselContainer').css("width", "100%");
            flag1 = 0;
        }
    });

    //login -> click
    $('#loginbtn').click(function(){
        var username = $('#signInUser').val();
        var password = $('#mypass').val();

        var storedPass = user.getUserDetails(username);
        console.log("Stored " + storedPass);

        if((username === "Admin") && (password === "Admin123")){
            window.open('admin.html', '_self');
        }else if(storedPass === password){
            window.open('registeredUser.html', '_self');
        }else{
            alert("Incorrect Email/Phone or Password");
        }
    });

    //signup-> click
    $('#registerbtn').click(function(){
        var registerPhone = $('#phoneSignUp').val();
        var registerEmail = $('#emailSignUp').val();
        var registerPassword = $('#passwordSignUp').val();
        var flag = 0;
        

        //phone validation
        if(isNaN(registerPhone)){
            $('#signupPhoneError').html("Please enter 10 digit phone number");
        }
        else if(registerPhone.length !== 10){
            $('#signupPhoneError').html("Phone number should contain 10 digits only");
        }else{
            flag++;
        }

        //email validation
        if(!registerEmail.match(/\S+@\S+\.\S+/)){
            $('#signupEmailError').html("Invalid email format");
        }else{
            flag++;
        }

        //password validtion
        if((registerPassword.length < 8) || (registerPassword.trim().length === 0)){
            $('#signupPassError').html("Password should contain minimum 8 characters");
        }else if(registerPassword.length > 15){
            $('#signupPassError').html("Password should contain maximum 15 characters");
        }else{
            flag++;
        }
        
        
        
        if(flag === 3){
            user.addNewUser(registerPhone, registerEmail, registerPassword);
            alert("Registration is successful");
            $('#phoneSignUp').val('');
            $('#emailSignUp').val('');
            $('#passwordSignUp').val('');
            $('#signup').hide();
            $('#signin').show();
        }

    });


    //on focus -> disappear error messages
    $('#passwordSignUp').focus(function(){
        $('#signupPassError').html("");
    });

    $('#phoneSignUp').focus(function(){
        $('#signupPhoneError').html("");
    });

    $('#emailSignUp').focus(function(){
        $('#signupEmailError').html("");
    });

})