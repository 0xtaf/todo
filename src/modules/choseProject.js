import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';

function getProjectIndex() {
    const projectIndex = this.parentNode.dataset.index;
    index.indexNo = projectIndex;
    console.log(index.indexNo)
}

export default getProjectIndex