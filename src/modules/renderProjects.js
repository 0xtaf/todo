import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import renderToDosFunc from './renderToDos.js';
import renderHeaderFunc from './renderHeader.js';
import getProjectIndex from './choseProject';


function renderProjectsFunc() {
    let length = myProjects.length - 1;
    PageLoad.contentProject.innerHTML="";
    for (let i = length; i >= 0; i--){
        let row = PageLoad.contentProject.insertRow(0);
        row.setAttribute("data-index", `${i}`);
        let cell1 = row.insertCell(0);
       
        cell1.innerHTML = myProjects[i].name;
        cell1.className ="project-td";
        cell1.addEventListener('click', renderHeaderFunc)
        cell1.addEventListener('click', getProjectIndex)
        cell1.addEventListener('click', renderToDosFunc)
        
    }


}

export default renderProjectsFunc