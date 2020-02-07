import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function addTodo() {
    renderToDosFunc();
    myProjects[index.indexNo]['priority'].push("0");
    myProjects[index.indexNo]['isDone'].push("0");
    
    console.log(document.querySelector('.todoTitle').textContent)
    let todoTitle = document.querySelector('.todoTitle').textContent;
    
        myProjects[index.indexNo]['todoArray'].push(todoTitle);
        document.querySelector('.todoTitle').textContent = "";
        renderToDosFunc();
    
    
}

export default addTodo