import {myProjects, index} from './pageLoadLogic';
import storageAvailable from './localStorage';
storageAvailable();

function editTodoFunc(){  
    console.log("it's in edittodo")
    
    const tdNameCell = [...document.querySelectorAll('.nameCell')]
    
    tdNameCell.forEach(item => {
        myProjects[index.indexNo]['todoArray'][this.parentNode.dataset.index] = item.textContent
        
        if (storageAvailable('localStorage')) {
            localStorage.setObj("myProjects", myProjects);
        }
    });
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}		

export default editTodoFunc