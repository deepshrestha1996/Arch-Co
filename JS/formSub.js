$(function () {
        $("#register").click(function () {
            var password = $("#password").val();
            var confirmPassword = $("#re-password").val();
            if (password != confirmPassword) {
                $("#msg").html("Password do not match").css("color","red");
                return false;
            }
            return true;
        });
    });