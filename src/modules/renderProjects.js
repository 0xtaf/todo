import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import renderToDosFunc from './renderToDos.js';
import renderHeaderFunc from './renderHeader.js';
import getProjectIndex from './choseProject';
import removeProjectFunc from './removeProject';
import {editProjectFunc, editableProjectFunc} from './editProject';
import CheckStorage from './localStorage';

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

if (storageAvailable('localStorage')) {
    console.log("storage is available")
}
else {
    console.log("storage is not available")
}


function renderProjectsFunc() {
    console.log("render projeye girdi")
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
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}

export default renderProjectsFunc