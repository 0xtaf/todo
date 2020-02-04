import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function priorityChangeFunc(){
	console.log(this.parentNode.dataset.index);
    console.log(event.target.value);
    console.log("length geliyoor")
    console.log(renderToDosFunc.length);
    console.log("length geldi")
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1);
    myProjects[index.indexNo]['priority'].push(event.target.value);
    console.log (myProjects);
    
    // renderToDosFunc();
}		

export default priorityChangeFunc