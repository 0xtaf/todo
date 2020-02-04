import {myProjects, index} from './pageLoadLogic';
import PageLoad from './pageLoad';
import getProjectIndex from './choseProject';

function renderToDosFunc() {
    PageLoad.header.textContent = myProjects[this.parentNode.dataset.index].name;
    // getProjectIndex()
}
export default renderToDosFunc