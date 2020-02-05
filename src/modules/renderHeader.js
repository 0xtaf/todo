import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';

function renderHeaderFunc() {
    PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
}

export default renderHeaderFunc