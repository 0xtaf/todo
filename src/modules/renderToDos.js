import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import getProjectIndex from './choseProject';


function renderToDosFunc() {
    console.log("renderda index s")
    console.log(myProjects[index.indexNo])
    console.log("renderda index e")
    let length = myProjects[index.indexNo]['todoArray'].length - 1;
    console.log("length s")
    console.log(length)
    console.log("length e")
    PageLoad.toDoProject.innerHTML="";

    for (let i = length; i >= 0; i--){
        let row = PageLoad.toDoProject.insertRow(0);
        row.setAttribute("data-index", `${i}`);
        let cell1 = row.insertCell(0);
       
        cell1.innerHTML = myProjects[index.indexNo]['todoArray'][i];
    }
}
export default renderToDosFunc