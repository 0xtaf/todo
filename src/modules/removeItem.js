import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function removeFunc(){
    console.log("proje indexno")
    console.log(index.indexNo)
    console.log("todo datasetindex")
    console.log("remove öncesi")
    console.log(this)
    console.log(myProjects)
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['todoArray'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['isDone'].splice(Number(this.parentNode.dataset.index),1);
    console.log("remove sonrası")
    console.log(myProjects)
    renderToDosFunc();
}		

export default removeFunc