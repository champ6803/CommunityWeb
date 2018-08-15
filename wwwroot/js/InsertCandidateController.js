app.controller("InsertCandidateController", function ($scope, $http) {
    $scope.registerForm = {
        email: '',
        fullname: '',
        experience: null,
        age: null,
        computer_lang: '',
        position: '',
        location: '',
        salary: null,
        type_account: ''

    }
    $scope.com_lang = typeof com_lang != "undefined" ? com_lang ? com_lang : null : null;

    $scope.sendData = function (e) {
        //debugger;
        alert(e);
        if (e.email != '' && e.fullname != '' && e.experience != null && e.age != null && e.computer_lang != null) {
            var req = {
                method: 'POST',
                url: 'http://localhost:3003/api/ImportData',
                params: e,
                headers: { 'Content-Type': 'application/json' }
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token;
            $http(req).then(function (response) {
                //debugger;
                alert('บันทึกสำเร็จค่ะ');
                $scope.registerForm = {};
            }, function (response) {
                alert('fail');
                window.location.href = "https://localhost:44309";
            });
        }
        else {
            alert('กรุณากรอกให้ครบ');
        }

    }

    $scope.init = function () {
        getSkillList();
    }

    function getSkillList() {

        $http.get("http://localhost:3001/api/master/getcomputerlang").then(function (response) {
            if (response.data) {
                // debugger;
                $scope.com_lang = response.data;
            } else {
                alert('ไม่มีข้อมูล');
            }
        }, function (response) {
            alert('fail');
        });

    }

});