import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function removeFunc(){
    console.log(this.parentNode.dataset.index);
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['todoArray'].splice(Number(this.parentNode.dataset.index),1);
    renderToDosFunc();
}		

export default removeFunc