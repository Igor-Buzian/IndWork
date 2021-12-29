var app = angular.module('prognoz', []);
    app.directive("myDirective", function() {
        return {
            template : "<h2>User Directive</h2>"
        };
    })
    app.controller('progCtrl', function($scope) {
        //accounts
        $scope.accounts = [{
            login: "admin",
            password: "admin",
            isSignIn: false,
            edit: false
        },{
            login :"user",
            password: "user",
            isSignIn: false,
            edit: false
        }];
        $scope.login = "admin",
        $scope.password = "admin",
        $scope.isSignIn = false,
        $scope.edit = false

        $scope.inputLogin = "";
        $scope.inputPass = "";

        //signUp
        $scope.signUp = function() {
            $scope.accounts.push({
                login: $scope.su_inputLogin,
                password: $scope.su_inputPass,
                isSignIn: false,
                edit: false
            });
            document.getElementById('signUpForm').style.display = "none";
            document.getElementById('overflow').style.display = "none";
            $scope.su_inputLogin = $scope.su_inputPass = "";
        };

        //signIn
        $scope.signIn = function() {
            if ($scope.si_inputLogin == $scope.login && $scope.si_inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('signInForm').style.display = "none";
                document.getElementById('overflow').style.display = "none";
                $scope.si_inputLogin = $scope.si_inputPass = "";
            }
        };
        //prognoz

        //prognoz list
        $scope.prognozList = [{
            City: 'Кишинев',
            Meedle: '5*C',
            Morning: '0*C',
            Night: '-5*C', 
            del: false
        },{
            City: 'Бельцы',
            Meedle: '3*C',
            Morning: '-2*C',
            Night: '-7*C', 
            del: false
        }];
        $scope.Nightinets = [
            201, 202, 203, 205, 207, 208
        ]

        //add new prognoz
        $scope.prognozAdd = function() {
            $scope.prognozList.push({
                City: $scope.City, 
                Meedle: $scope.Meedle, 
                Morning: $scope.Morning, 
                Night: $scope.Night,
                del: false
            });

            $scope.City = ""; 
            $scope.Meedle = ""; 
            $scope.Morning = ""; 
            $scope.Night = ""; 
        };
        
        //remove prognoz from table
        $scope.prognozRemove = function(patCity) {
            const index = $scope.prognozList.findIndex(x => x.City == patCity);
            $scope.prognozList.splice(index, 1);
        }

        //exchange rates

        $scope.exch = [{
            name : "mdl",
            value : 1
        },
        {
            name : "rub",
            value : 0.24
        },
        {
            name : "dol",
            value : 17.40
        },
        {
            name : "euro",
            value : 20.13
        },
        {
            name : "grivna",
            value : 0.66
        },]

        $scope.longNum = 123456;

    });


$(document).ready(function(){
    $('.signUpButt').click(function(){
        $('.signUpForm').css('display', 'flex');
        $('.overflow').show();
    })
    $('.signInButt').click(function(){
        $('.signInForm').css('display', 'flex');
        $('.overflow').show();
    })

    $('.close').click(function(){
        $('.signUpForm').hide();
        $('.signInForm').hide();
        $('.accounts').hide();
        $('.overflow').hide();
    })
    $('.viewAccounts').click(function(){
        $('.accounts').show();
        $('.overflow').show();
    })
});