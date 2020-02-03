const PageLoad = (()=>{
    const addProject = document.createElement('button');
    addProject.textContent = "Add a project";
    document.body.appendChild(addProject);

    const addProjectForm = document.querySelector('.newProjectViewForm');
    addProjectForm.style.display = "none";

    const cancelButton = document.querySelector('.cancelButton');
    const addButton = document.querySelector('.addButton');

    const table = document.getElementById("table");
    const contentProject = document.getElementById("projectContent");
    const table2 = document.getElementById("table2");
    const toDoProject = document.getElementById("toDoContent");

    return {addProject, addProjectForm, cancelButton, addButton, contentProject, table, table2, toDoProject};
})();

export default PageLoad