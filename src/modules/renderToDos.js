import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import getProjectIndex from './choseProject';
import removeFunc from './removeItem';


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
        let cell2 = row.insertCell(1);
       
        cell1.innerHTML = myProjects[index.indexNo]['todoArray'][i];
        cell2.innerHTML = `<button class="button">Remove</button>`;
        cell2.className = "remove";
    }

    let removeButtons  = [...document.querySelectorAll(".remove")];
		removeButtons.forEach(button => {
			button.addEventListener('click', removeFunc);
		});
}
export default renderToDosFunc