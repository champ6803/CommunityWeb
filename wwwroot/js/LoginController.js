app.controller("LoginController", function ($scope, $http, AuthenticationService) {
    $scope.loginForm = typeof loginForm !== "undefined" ? loginForm ? loginForm : null : null;

    $scope.login = function (o) {
        if (o) {
            AuthenticationService.Login(o.username, o.password, function (result) {
                if (result === true) {
                    alert('ยินดีต้อนรับเข้าสู่ระบบ');
                    var m = JSON.parse(localStorage.currentUser);
                    if (m.role == "Recruitment") {
                        window.location.href = "http://localhost:8002?access_token=" + m.token;
                    } else if (m.role == "Community") {
                        window.location.href = "/";
                        //window.location.href = "http://localhost:8003?access_token=" + m.token;
                    } else {
                        window.location.href = "/";
                    }
                    
                } else {
                    alert('ไม่สามารถเข้าสู่ระบบได้');
                }
            });
        }
        else {
            alert("ไม่สามารถเข้าสู่ระบบได้");
        }
    };
});