class AjouterTodo{
    constructor(serv){
        this.serv = serv
    }
    superAdd(){

        try {
            if(!this.dataN.trim())
                throw "Parameter is not a number!";

        }catch (e) {
            this.error.show = true
        }

        if(!this.dataN.trim()){
            this.error.show = true
        }else{
            this.serv.add(this.dataN);
            this.dataN = '';
        }
    }


    error(){
       this.show = false
    }
}
angular.module('todoApp.ajouter', ['ngRoute','todoApp.service'])
    .component('listAjouter', {
        templateUrl: 'js/form/ajouter.html',
        controller: ['todoService', AjouterTodo]
    })
    .config(['$routeProvider', (rp) => {
        rp.when('/add', {
            template: '<list-ajouter></list-ajouter>'
        })
    }])