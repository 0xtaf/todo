import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import renderToDosFunc from './renderToDos.js';
import renderHeaderFunc from './renderHeader.js';
import getProjectIndex from './choseProject';
import removeProjectFunc from './removeProject';
import {editProjectFunc, editableProjectFunc} from './editProject';




function renderProjectsFunc() {
    let length = myProjects.length - 1;
    PageLoad.contentProject.innerHTML="";
    for (let i = length; i >= 0; i--){
        let row = PageLoad.contentProject.insertRow(0);
        row.setAttribute("data-index", `${i}`);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
       
        cell1.innerHTML = myProjects[i].name;
        cell1.className ="project-td";
        cell1.addEventListener('click', renderHeaderFunc)
        cell1.addEventListener('click', getProjectIndex)
        cell1.addEventListener('click', renderToDosFunc)
        cell1.addEventListener('click', editableProjectFunc)
        cell1.addEventListener('focusout', editProjectFunc)
        

        console.log(i)
        if (i != 0){
            console.log(i)
            cell2.innerHTML = `<button class="remove2">&#128465;</button>`;
        }
        
    }
    let removeButtons  = [...document.querySelectorAll(".remove2")];
    removeButtons.forEach(button => {
        button.addEventListener('click', removeProjectFunc);
    });

}

export default renderProjectsFunc