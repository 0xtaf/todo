import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function checkCompletionFunc(){    

    if (myProjects[index.indexNo]['isDone'][this.parentNode.parentNode.dataset.index] == 0){
        myProjects[index.indexNo]['isDone'][this.parentNode.parentNode.dataset.index] = 1;
        renderToDosFunc();
    } else if (myProjects[index.indexNo]['isDone'][this.parentNode.parentNode.dataset.index] == 1){
        myProjects[index.indexNo]['isDone'][this.parentNode.parentNode.dataset.index] = 0;
        renderToDosFunc();
    }

    
}		

export default checkCompletionFunc