import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';

function getProjectIndex() {
    const projectIndex = this.parentNode.dataset.index;
    index.indexNo = projectIndex;
}

export default getProjectIndex