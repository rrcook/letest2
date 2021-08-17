import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

window.electron.receive("fromMain", (data) => {
    console.log(`Received ${data} from main process`);
    app.handleFromMain(data);
});