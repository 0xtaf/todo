import PageLoad from './pageLoad';
import {myProjects, index} from './pageLoadLogic';

function renderToDosFunc() {
    PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
}

export default renderToDosFunc