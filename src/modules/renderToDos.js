import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import getProjectIndex from './choseProject';
import removeFunc from './removeItem';
import priorityChangeFunc from './priorityChange.js'


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
        let cell3 = row.insertCell(2);
       
        cell1.innerHTML = myProjects[index.indexNo]['todoArray'][i];
        const priorityVal = myProjects[index.indexNo]['priority'][i];
        

        if (priorityVal==0){
            cell2.innerHTML = `
            <div class="priority" style="width:200px;">
                <select>
                <option value="0" selected>Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==1){
            cell2.innerHTML = `
            <div class="priority" style="width:200px;">
                <select>
                <option value="0">Priority:</option>
                <option value="1" selected>High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==2){
            cell2.innerHTML = `
            <div class="priority" style="width:200px;">
                <select>
                <option value="0">Priority:</option>
                <option value="1">High</option>
                <option value="2" selected>Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==3){
            cell2.innerHTML = `
            <div class="priority" style="width:200px;">
                <select>
                <option value="0">Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3" selected>Low</option>
                </select>
            </div>`;
        } else {
            cell2.innerHTML = `
            <div class="priority" style="width:200px;">
                <select>
                <option value="0" selected>Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        }
        
        
        cell2.className = "selPriority";
        cell3.innerHTML = `<button class="button">Remove</button>`;
        cell3.className = "remove";
        
    
    // const priorityVal = `${myProjects[index.indexNo]['priority'].priorityNo}`;  

}




    let prioritySelections =  [...document.querySelectorAll(".selPriority")];
        prioritySelections.forEach(selection => {
            selection.addEventListener('change', priorityChangeFunc);
        });

    let removeButtons  = [...document.querySelectorAll(".remove")];
		removeButtons.forEach(button => {
			button.addEventListener('click', removeFunc);
        });
        
    

}
export default renderToDosFunc