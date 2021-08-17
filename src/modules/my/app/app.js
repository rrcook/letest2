import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    handleClick(event) {
        console.log("Ping button clicked.");
        window.electron.send("toMain", "ping",);
    }

    @api
    handleFromMain(data) {
        console.log(`In app.js, the data from main is ${data}`);
    }

}
