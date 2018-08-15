app.controller('ProfileController', function ($scope,$http) {
    $scope.profile = null;
    $scope.init = function () {
        //debugger;
        if (localStorage.length == 1) {
            var req = {
                method: 'POST',
                url: 'http://localhost:3002/api/generateuser/getprofile',
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
                alert('false');
            });

        } else {
            window.location.href = "https://localhost:44309";
        }
    }
});