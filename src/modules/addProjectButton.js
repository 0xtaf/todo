import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import createProjects from './createProjects';
import renderProjectsFunc from './renderProjects'

function addProjectButtonFunc() {
    PageLoad.addProjectForm.style.display = "block";
}

function closeForm() {
	event.preventDefault();
	PageLoad.addProjectForm.style.display = "none";
	// table.style.display = "";
	// contentTable.style.display = "";
}

function submitForm() {

    event.preventDefault();
    let name = document.querySelector('[name="name"]').value;
    myProjects.push(createProjects(name));
    console.log(myProjects)
    renderProjectsFunc();

    PageLoad.addProjectForm.style.display = "none";
}

export {
    addProjectButtonFunc,
    closeForm,
    submitForm
} 