const PageLoad = (()=>{
    console.log("page is loading")
    const container = document.querySelector('.container');
    const container2 = document.querySelector('.container2');

    const addProjectForm = document.querySelector('.newProjectViewForm');
    addProjectForm.style.display = "none";

    const addProject = document.createElement('button');
    addProjectForm.before(addProject);
    addProject.className = "projectButton";

    const addProjectLabel = document.createElement('label');
    addProjectLabel.textContent ="Add a Project"
    addProjectLabel.className = "projectButtonLabel"
    addProject.after(addProjectLabel);

    const plusSign = document.createElement('div');
    plusSign.innerHTML = "&#43;"
    plusSign.className="plusSign";
    addProject.appendChild(plusSign);

    const cancelButton = document.querySelector('.cancelButton');
    const addButton = document.querySelector('.addButton');

    const table = document.getElementById("table");
    const contentProject = document.getElementById("projectContent");
    const table2 = document.getElementById("table2");
    const toDoProject = document.getElementById("toDoContent");

    const header = document.createElement('div');
    header.textContent ="My Project";
    header.className = "header";
    document.body.insertBefore(header, container);

    const todoTitle = document.createElement('textarea');
     todoTitle.className = "todoTitle";
    const todoTextNode = document.createTextNode("this is a sample to do");
    todoTextNode.className = "todoTextNode";
    
    todoTitle.appendChild(todoTextNode);
    container2.insertBefore(todoTitle, table2)

    const addButtonTodo = document.createElement('button');
    addButtonTodo.className = "addButtonTodo";
    addButtonTodo.textContent="add ToDo"
    container2.insertBefore(addButtonTodo, table2);

    

    return {addProject, addProjectForm, cancelButton, addButton, 
        contentProject, table, table2, toDoProject, header, container,
        container2, todoTitle, todoTextNode, addButtonTodo
    };
})();



export default PageLoad