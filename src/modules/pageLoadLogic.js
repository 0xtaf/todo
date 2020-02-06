import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects'
import getProjectIndex from './choseProject';

let myProjects = [];

console.log("myProjects is being created")
myProjects.push(CreateProjects("My Project"));
console.log(myProjects)

let index = { 
    indexNo:-1,
    priority: 0
};


renderProjectsFunc();
getProjectIndex();
index.indexNo = 0;
export {myProjects, index}