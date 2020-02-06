import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import renderHeaderFunc from './renderHeader';
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
function editableProjectFunc(){  
    console.log(this.parentNode.dataset.index)
    PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
    const tdProjects = [...document.querySelectorAll('.project-td')]
    let counter = 0;
    tdProjects.forEach(item => {
        
        if (counter == this.parentNode.dataset.index){
            item.contentEditable ="true";
            myProjects[this.parentNode.dataset.index]['name'] = item.textContent
            
        }
        
        counter++;
    });

}

function editProjectFunc(){
    const tdProjects = [...document.querySelectorAll('.project-td')]
    let counter = 0;
    tdProjects.forEach(item => {
        if (item.contentEditable ="true"){
            if (counter == this.parentNode.dataset.index){
               
                myProjects[this.parentNode.dataset.index]['name'] = item.textContent
                item.contentEditable ="false";
                PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
            }
        }
        
        
        counter++;
    });
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}

export {editProjectFunc, editableProjectFunc}