import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import renderToDosFunc from './renderToDos';
import getProjectIndex from './choseProject';

let myProjects = [];

console.log("myProjects is being created")
myProjects.push(CreateProjects("My Project"));
console.log(myProjects)

let index = { 
    indexNo:-1,
    priority: 0
};
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
if (storageAvailable('localStorage')) {
    if(localStorage.length != 0){
		   myProjects = localStorage.getObj("myProjects");
		   renderProjectsFunc();
	}
}else {
    alert("Local Storage is not available on this browser.");
}





getProjectIndex();
renderProjectsFunc();
renderToDosFunc();

index.indexNo = 0;
export {myProjects, index}