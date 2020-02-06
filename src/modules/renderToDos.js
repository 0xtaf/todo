import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import getProjectIndex from './choseProject';
import removeFunc from './removeItem';
import priorityChangeFunc from './priorityChange';
import checkCompletionFunc from './checkCompletion';
import editTodoFunc from './editTodo';
import storageAvailable from './localStorage';
storageAvailable();


function renderToDosFunc() {
    let length = myProjects[index.indexNo]['todoArray'].length - 1;
    PageLoad.toDoProject.innerHTML="";

    for (let i = length; i >= 0; i--){
        let row = PageLoad.toDoProject.insertRow(0);
        row.setAttribute("data-index", `${i}`);
        let cell0 = row.insertCell(0);
        cell0.innerHTML = `<button class="isDoneButton">&#x2714;</button>`;

        let cell1 = row.insertCell(1);
        cell1.className = "nameCell";
        cell1.contentEditable ="true";
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        
       
        cell1.innerHTML = myProjects[index.indexNo]['todoArray'][i];
        const priorityVal = myProjects[index.indexNo]['priority'][i];
        const isDoneVal = myProjects[index.indexNo]['isDone'][i];

        if (isDoneVal == 1){
            cell1.className = "isDone";
        }

        cell1.addEventListener('focusout', editTodoFunc);

        if (priorityVal==0){
            cell2.innerHTML = `
            <div class="priority">
                <select class="prio">
                <option value="0" selected>Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==1){
            cell2.innerHTML = `
            <div class="priority">
                <select class="prio">
                <option value="0">Priority:</option>
                <option value="1" selected>High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==2){
            cell2.innerHTML = `
            <div class="priority">
                <select class="prio">
                <option value="0">Priority:</option>
                <option value="1">High</option>
                <option value="2" selected>Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        } else if (priorityVal==3){
            cell2.innerHTML = `
            <div class="priority">
                <select class="prio">
                <option value="0">Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3" selected>Low</option>
                </select>
            </div>`;
        } else {
            cell2.innerHTML = `
            <div class="priority">
                <select class="prio">
                <option value="0" selected>Priority:</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                </select>
            </div>`;
        }
        
        
        cell2.className = "selPriority";
        cell3.innerHTML = `<button class="button">&#128465;</button>`;
        cell3.className ="remove";
        
    
    // const priorityVal = `${myProjects[index.indexNo]['priority'].priorityNo}`;  

}

    let checkCompletions = [...document.querySelectorAll(".isDoneButton")];
        checkCompletions.forEach(selection => {
            selection.addEventListener('click', checkCompletionFunc);
        });


    let prioritySelections =  [...document.querySelectorAll(".selPriority")];
        prioritySelections.forEach(selection => {
            selection.addEventListener('change', priorityChangeFunc);
        });

    let removeButtons  = [...document.querySelectorAll(".remove")];
		removeButtons.forEach(button => {
			button.addEventListener('click', removeFunc);
        });
    
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }

}
export default renderToDosFunc