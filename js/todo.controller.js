function TodoController(TodoService) {

    var ctrl = this;

    ctrl.myDate = Date.now();
    ctrl.newTodo = "";
    ctrl.list = [];

    function getTodos() {
        TodoService
            .retrieve()
            .then(function(response) {
                ctrl.list = response;
            })

    }

    

    ctrl.addTodo = function() {
        if(!ctrl.newTodo){
            return;
        }
        TodoService
            .create({
                title: ctrl.newTodo,
                completed: false
            })
            .then(function(response){
                ctrl.list.unshift(response);
                ctrl.newTodo = ""
            })
    //   ctrl.list.unshift({
    //     title: ctrl.newTodo,
    //     completed: false
    //   })

      
    }

    ctrl.removeTodo = function(item, index) {
        TodoService
            .remove(item)
            .then(function(response){
                ctrl.list.splice(index, 1);
            })
      
    }

    ctrl.updateTodo = function(item, index) {
        if(!item.title){
            ctrl.removeTodo(item, index);
            return;
        }
        TodoService
            .update(item);
    }

    ctrl.toggleState = function(item){
        TodoService
            .update(item)
            .then(function(){

            }, function(){
                item.completed = !item.completed;
            })
    }

    ctrl.getRemaining = function() {
        return ctrl.list.filter( function(item){
            return !item.completed;
        });
    }

    getTodos();
}

angular
    .module('app')
    .controller('TodoController', TodoController);
