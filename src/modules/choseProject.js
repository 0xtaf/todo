import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';

function getProjectIndex() {

    console.log(this)
    if (typeof (this) !== 'undefined'){
        const projectIndex = this.parentNode.dataset.index;
        index.indexNo = projectIndex;
    } else {
        index.indexNo = 0;
    }
    console.log(index.indexNo)
    
}

export default getProjectIndex