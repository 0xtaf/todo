import PageLoad from './modules/pageLoad';
import CreateProjects from './modules/createProjects';
import log from './modules/trial';
import {addProjectButtonFunc, closeForm, submitForm} from './modules/addProjectButton';


PageLoad.addProject.addEventListener('click', addProjectButtonFunc);
PageLoad.cancelButton.addEventListener('click', closeForm);
PageLoad.addButton.addEventListener('click', submitForm);
