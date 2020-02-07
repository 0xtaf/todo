import {myProjects, index} from './pageLoadLogic';
import storageAvailable from './localStorage';
storageAvailable();

function editTodoFunc(){  
    
    const tdNameCell = [...document.querySelectorAll('.nameCell')]
    let counter = 0;
    tdNameCell.forEach(item => {
        if (counter == this.parentNode.dataset.index){
            myProjects[index.indexNo]['todoArray'][this.parentNode.dataset.index] = item.textContent
        }
        
        counter++;
        if (storageAvailable('localStorage')) {
            localStorage.setObj("myProjects", myProjects);
        }
    });
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}		

export default editTodoFunc