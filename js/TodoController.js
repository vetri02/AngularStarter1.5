function TodoController() {
    this.myDate = Date.now();
    this.newTodo = "";
    this.list = [
    {
        title: 'First Todo',
        completed: false
    },
    {
        title: 'Two Todo',
        completed: false
    },
    {
        title: 'Third Todo',
        completed: false
    }
    ];

    this.addTodo = function() {
      this.list.unshift({
        title: this.newTodo,
        completed: false
      })

      this.newTodo = ""
    }

    this.removeTodo = function(item, index) {
      this.list.splice(index, 1);
    }

    this.getRemaining = function() {
        return this.list.filter( function(item){
            return !item.completed;
        });
    }
}

angular
    .module('app')
    .controller('TodoController', TodoController);
