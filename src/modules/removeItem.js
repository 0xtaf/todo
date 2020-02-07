import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function removeFunc(){
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['todoArray'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['isDone'].splice(Number(this.parentNode.dataset.index),1);

    renderToDosFunc();
}		

export default removeFunc