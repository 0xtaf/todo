import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function priorityChangeFunc(){    
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['priority'].push(event.target.value);
    console.log (myProjects);
}		

export default priorityChangeFunc