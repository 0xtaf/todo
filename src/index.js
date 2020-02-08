import PageLoad from './modules/pageLoad';
import {addProjectButtonFunc, closeForm, submitForm} from './modules/addProjectButton';
import addTodo from './modules/addTodoButton';


PageLoad.addProject.addEventListener('click', addProjectButtonFunc);
PageLoad.cancelButton.addEventListener('click', closeForm);
PageLoad.addButton.addEventListener('click', submitForm);
PageLoad.addButtonTodo.addEventListener('click', addTodo);
