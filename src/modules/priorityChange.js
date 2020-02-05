import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function priorityChangeFunc(){    
    console.log("degistirme oncesi")
    console.log (myProjects);
    myProjects[index.indexNo]['priority'].splice(Number(this.parentNode.dataset.index),1,event.target.value);
    console.log("degistirme sonrasi")
    console.log (myProjects);
    
}		

export default priorityChangeFunc