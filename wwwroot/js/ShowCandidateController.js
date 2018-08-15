app.controller("ShowCandidateController", function ($scope, $http) {
    $scope.employees = typeof employees != "undefined" ? employees ? employees : null : null;
    $scope.init = function () {
        //debugger;
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token;

        $http.get("http://localhost:3002/api/generateuser").then(function (response) {

            if (response.data) {
                //debugger;
                alert('ดึงรายชื่อสำเร็จ');
                $scope.employees = response.data;
            } else {
                alert('ดึงรายชื่อไม่สำเร็จ');
            }
        }, function (response) {
            //debugger;
            alert('fail');
            window.location.href = "https://localhost:44309";

        });
    }
});