import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects';
import renderToDosFunc from './renderToDos';
import getProjectIndex from './choseProject';
import storageAvailable from './localStorage';

let myProjects = [];

console.log("myProjects is being created")
myProjects.push(CreateProjects("My Project"));
console.log(myProjects)

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





getProjectIndex();
renderProjectsFunc();
renderToDosFunc();

index.indexNo = 0;
export {myProjects, index}