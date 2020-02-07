import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';

function renderHeaderFunc() {
    if (typeof (this) !== 'undefined'){
        PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;  
    } else {
        PageLoad.header.textContent = myProjects[0].name;  
    }
}

export default renderHeaderFunc