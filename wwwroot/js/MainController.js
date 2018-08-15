app.controller("MainController", function ($scope, $http, AuthenticationService) {
    $scope.currentUser = null;
    $scope.localStorage = null;
    $scope.checked = 'notapp';
    $scope.profile = null;

    $scope.logout = function () {
        //debugger;
        delete window.localStorage.currentUser;
    }

    $scope.customerfocus = function () {
        //debugger;
        if (localStorage.length == 1) {
            if ($scope.currentUser.role == "Recruitment") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
                //window.open('https://localhost:8002/?access_token=' + $scope.currentUser.token);
                window.location.href = 'http://localhost:8002/?access_token=' + $scope.currentUser.token;
            }
            else if ($scope.currentUser.role == "Candidate") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
            }
            else if ($scope.currentUser.role == "Requirement") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
            }
        }

    }

    function checkStorage() {

        if (localStorage.length == 1) {
            $scope.currentUser = JSON.parse(localStorage.currentUser);
            $scope.currentUser.username = JSON.parse(localStorage.currentUser).username;
            $scope.currentUser.role = JSON.parse(localStorage.currentUser).role;
            $scope.currentUser.app = JSON.parse(localStorage.currentUser).app;
            $scope.currentUser.token = JSON.parse(localStorage.currentUser).token;
            $scope.checked = 'app';
        }
    }

    function getprofile() {
        //debugger;
        if (localStorage.length == 1) {
            var req = {
                method: 'POST',
                url: 'http://localhost:3004/api/login/getprofile',
                params: {
                    email: JSON.parse(localStorage.currentUser).username
                },
                headers: { 'Content-Type': 'application/json' }
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(localStorage.currentUser).token;
            $http(req).then(function (response) {
                //debugger;
                //alert(response.data);
                $scope.profile = response.data;
            }, function (response) {
                $scope.currentUser = null;
                $scope.localStorage = null;
                $scope.checked = 'notapp';
                $scope.profile = null;
                AuthenticationService.Logout();
            });

        } else {
            console.log('login pls');
        }
    }

    $scope.init = function () {
        checkStorage();
        getprofile();
    }
});