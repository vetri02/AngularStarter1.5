function TodoController() {
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
}

angular
    .module('app')
    .controller('TodoController', TodoController);
