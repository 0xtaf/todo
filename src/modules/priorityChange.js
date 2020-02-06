import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';
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

function priorityChangeFunc(){    
    console.log("degistirme oncesi")
    console.log (myProjects);
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1,event.target.value);
    console.log("degistirme sonrasi")
    console.log (myProjects);
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}		

export default priorityChangeFunc