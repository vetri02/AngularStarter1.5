function todoApp(){
    return {
        restrict: 'E',
        controller: 'TodoController as todo',
        template: `
        <div class="todo">
            <h3 class="title"> Todo List - <span>{{todo.myDate | date: 'EEEE'}}</span> </h3>
            <form class="todo__form" ng-submit="todo.addTodo();">
                <input type="text" placeholder="Add New Todo!" ng-model="todo.newTodo"/>
            </form>
            <ul class="todo__list">
                <li ng-repeat="item in todo.list">
                <input 
                    type="checkbox" 
                    id="todo-{{$index}}" 
                    ng-model="item.completed"
                    ng-change="todo.toggleState(item)">
                <label class="toggle" for="todo-{{$index}}"></label>
                <p ng-dblclick="showEditField = true" ng-hide="showEditField">
                    {{item.title}}
                </p>
                <div ng-show="showEditField">
                    <input type="text" 
                        ng-model="item.title" 
                        ng-blur="todo.updateTodo(item, $index); showEditField = false"
                        todo-autofocus="showEditField">
                </div>
                <a href="javascript:;"  ng-click="todo.removeTodo(item, $index)">&times;</a>
                </li>
            </ul>
            <p class="todo__remaining">
                <span ng-show="todo.getRemaining().length > 0">
                You have {{ todo.getRemaining().length }} of {{ todo.list.length }} items todo!
                </span> 
                <span ng-show="todo.getRemaining().length === 0">
                You are super productive!
                </span>
                    
            </p>
            
        </div>
        `
    }
}

angular
    .module('app')
    .directive('todoApp', todoApp);