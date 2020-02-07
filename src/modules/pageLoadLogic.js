import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import renderToDosFunc from './renderToDos';
import getProjectIndex from './choseProject';
import renderHeaderFunc from './renderHeader';
import storageAvailable from './localStorage';

let myProjects = [];

myProjects.push(CreateProjects("My Project"));

let index = { 
    indexNo:-1,
    priority: 0
};
storageAvailable();

if (storageAvailable('localStorage')) {
    if(localStorage.length != 0){
		   myProjects = localStorage.getObj("myProjects");
		   renderProjectsFunc();
	}
}else {
    alert("Local Storage is not available on this browser.");
}




index.indexNo = 0;
getProjectIndex();
renderHeaderFunc();
renderProjectsFunc();
renderToDosFunc();



export {myProjects, index}