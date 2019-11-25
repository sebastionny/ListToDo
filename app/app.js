'use strict';

angular.module('todoApp',
    ['ngRoute',
                'todoApp.listTodo',
                'todoApp.service'])
    .config(['$routeProvider' , (rp) => {
        rp.otherwise({redirectTo: '/list'})
    }])
