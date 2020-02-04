import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';

function getProjectIndex() {
    const projectIndex = this.parentNode.dataset.index;
    index.indexNo = projectIndex;
    console.log("proje seçimi s")
    console.log(index.indexNo)
    console.log("proje seçimi e")
}

export default getProjectIndex