import {myProjects, index} from './pageLoadLogic';
import renderProjectsFunc from './renderProjects';
import PageLoad from './pageLoad';
import renderToDosFunc from './renderToDos';

function removeProjectFunc(){
    myProjects.splice((this.parentNode.parentNode.dataset.index),1);
    index.indexNo = 0;
    PageLoad.header.textContent = myProjects[0].name;  
    renderProjectsFunc();
    renderToDosFunc();
}		

export default removeProjectFunc