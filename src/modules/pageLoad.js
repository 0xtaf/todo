const PageLoad = (()=>{
    const addProject = document.createElement('button');
    addProject.textContent = "Add a project";
    document.body.appendChild(addProject);

    const addProjectForm = document.querySelector('.newProjectViewForm');
    addProjectForm.style.display = "none";

    const cancelButton = document.querySelector('.cancelButton');
    const addButton = document.querySelector('.addButton');


    const contentProject = document.getElementById("projectContent");

    return {addProject, addProjectForm, cancelButton, addButton, contentProject};
})();

export default PageLoad