import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import createProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import getProjectIndex from './choseProject';
import renderToDosFunc from './renderToDos';

function addTodo() {
    console.log("add to doooo")
    console.log(index.indexNo);
    
    
    let todoTitle = document.querySelector('.todoTitle').value;
    myProjects[index.indexNo].title = todoTitle;
    console.log(myProjects)
    // renderToDosFunc(); bunu renderlamak kaldı. 

}

export default addTodo