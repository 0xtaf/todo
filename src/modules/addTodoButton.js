import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import getProjectIndex from './choseProject';
import renderToDosFunc from './renderToDos';

function addTodo() {
    renderToDosFunc();
    myProjects[index.indexNo]['priority'].push("0");
    myProjects[index.indexNo]['isDone'].push("0");
    
    console.log(document.querySelector('.todoTitle').textContent)
    let todoTitle = document.querySelector('.todoTitle').textContent;
    
    myProjects[index.indexNo]['todoArray'].push(todoTitle);
    console.log(myProjects)
    renderToDosFunc();
    
}

export default addTodo