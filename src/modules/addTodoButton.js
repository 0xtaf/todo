import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import getProjectIndex from './choseProject';
import renderToDosFunc from './renderToDos';

function addTodo() {
    console.log("add to doooo")
    console.log(index.indexNo);
    
    
    let todoTitle = document.querySelector('.todoTitle').value;
    // myArray.push(todoTitle);
    myProjects[index.indexNo]['todoArray'].push(todoTitle);
    // console.log(myProjects[index.indexNo]['todoArray']);
    console.log(myProjects)
    renderToDosFunc();
}

export default addTodo