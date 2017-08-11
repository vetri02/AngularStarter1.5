function TodoController() {
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
}

angular
    .module('app')
    .controller('TodoController', TodoController);
