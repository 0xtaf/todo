import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';
import storageAvailable from './localStorage';
storageAvailable();

function editableProjectFunc(){  
    
    PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
    const tdProjects = [...document.querySelectorAll('.project-td')]
    let counter = 0;
    tdProjects.forEach(item => {
        
        if (counter == this.parentNode.dataset.index){
            item.contentEditable ="true";
            myProjects[this.parentNode.dataset.index]['name'] = item.textContent
            
        }
        
        counter++;
    });

}

function editProjectFunc(){
    
    const tdProjects = [...document.querySelectorAll('.project-td')]
    let counter = 0;
    tdProjects.forEach(item => {
        if (item.contentEditable ="true"){
            if (counter == this.parentNode.dataset.index){
               
                myProjects[this.parentNode.dataset.index]['name'] = item.textContent
                item.contentEditable ="false";
                PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
            }
        }
        
        
        counter++;
    });
    if (storageAvailable('localStorage')) {
        localStorage.setObj("myProjects", myProjects);
    }
}

export {editProjectFunc, editableProjectFunc}