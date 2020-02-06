import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';

function getProjectIndex() {

    if (typeof (this) !== 'undefined'){
        const projectIndex = this.parentNode.dataset.index;
        index.indexNo = projectIndex;
    } else {
        index.indexNo = 0;
    }
    
}

export default getProjectIndex