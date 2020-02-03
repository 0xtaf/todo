import PageLoad from './pageLoad';
import myProjects from './pageLoadLogic';
import createProjects from './createProjects';

function addProjectButtonFunc() {
    PageLoad.addProjectForm.style.display = "block";
}

function closeForm() {
    console.log("form kapama")
	event.preventDefault();
	PageLoad.addProjectForm.style.display = "none";
	// table.style.display = "";
	// contentTable.style.display = "";
}

function submitForm() {
    event.preventDefault();
    console.log("add")
    let name = document.querySelector('[name="name"]').value;
    myProjects.push(createProjects(name));
    console.log(myProjects)


    PageLoad.addProjectForm.style.display = "none";
}

export {
    addProjectButtonFunc,
    closeForm,
    submitForm
} 