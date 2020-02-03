import myProjects from './pageLoadLogic';
import PageLoad from './pageLoad';
import renderToDosFunc from './renderToDos.js';

function renderProjectsFunc() {
    let length = myProjects.length - 1;
    PageLoad.contentProject.innerHTML="";
    for (let i = length; i >= 0; i--){
        let row = PageLoad.contentProject.insertRow(0);
        row.setAttribute("data-index", `${i}`);
        let cell1 = row.insertCell(0);
       
        cell1.innerHTML = myProjects[i].name;
        cell1.addEventListener('click', renderToDosFunc)
    }


}

export default renderProjectsFunc