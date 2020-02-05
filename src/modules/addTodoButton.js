import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import getProjectIndex from './choseProject';
import renderToDosFunc from './renderToDos';

function addTodo() {
    myProjects[index.indexNo]['priority'].push("0");
    
    
    let todoTitle = document.querySelector('.todoTitle').value;
    
    myProjects[index.indexNo]['todoArray'].push(todoTitle);
    console.log(myProjects)
    renderToDosFunc();
    
}

export default addTodo