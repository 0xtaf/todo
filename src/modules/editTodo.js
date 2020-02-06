import {myProjects, index} from './pageLoadLogic';
import renderToDosFunc from './renderToDos';

function editTodoFunc(){  
    const tdNameCell = [...document.querySelectorAll('.nameCell')]
    let counter = 0;
    tdNameCell.forEach(item => {
        
        if (counter == this.parentNode.dataset.index){
            myProjects[index.indexNo]['todoArray'][this.parentNode.dataset.index] = item.textContent
        }
        
        counter++;
    });

}		

export default editTodoFunc