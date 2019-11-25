class AlertTodo{
    constructor(serv){
        this.serv = serv
    }
}
angular.module('todoApp.alert', [])
    .component('valAlert', {
        template: '<span style="color: red"> Error duplicate</span>',
        controller: ['todoService', AlertTodo]
    })