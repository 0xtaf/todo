import PageLoad from './modules/pageLoad';
import {myProjects, index} from './modules/pageLoadLogic';
import CreateProjects from './modules/createProjects';
import log from './modules/trial';
import {addProjectButtonFunc, closeForm, submitForm} from './modules/addProjectButton';
import addTodo from './modules/addTodoButton';


PageLoad.addProject.addEventListener('click', addProjectButtonFunc);
PageLoad.cancelButton.addEventListener('click', closeForm);
PageLoad.addButton.addEventListener('click', submitForm);
PageLoad.addButtonTodo.addEventListener('click', addTodo);
