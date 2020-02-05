import CreateProjects from './createProjects';
import renderProjectsFunc from './renderProjects'

let myProjects = [];

myProjects.push(CreateProjects("My Project"));
console.log(myProjects)

let index = { 
    indexNo:-1,
    priority: 0
};


renderProjectsFunc();
index.indexNo = 0;
export {myProjects, index}