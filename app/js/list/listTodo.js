class ListTodo{
    constructor(serv){
        this.serv = serv
    }
}
angular.module('todoApp.listTodo', ['ngRoute','todoApp.ajouter', 'todoApp.alert'])
    .component('listTodo', {
        templateUrl: 'js/list/listTodo.html',
        controller: ['todoService', ListTodo],
        bindings: {
            edit:'<'
        }
    })
.config(['$routeProvider' , (rp) => {
    rp.when('/list',{
        template: '<list-todo> </list-todo>'
    }).when('/edit', {
        template : '<list-todo edit="true"> </list-todo>'
    })
}])