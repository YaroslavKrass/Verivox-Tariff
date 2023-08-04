Current project are simple demonstration. Project contains two applications:
 - Front end written using Angular 14
 - Back end written using NodeJs 16.13.0

Back end application contains mock side service that provide required data (Tariffs). Data is mocked using file `tariffs-data.json`.
Front end application fetch required data and show it in table. No login system is implemented so token is not present.

To start the project Docker can be used. Command to run Docker is `docker compose up`

Both apps have `package.json` file where start commands can be found. Installation of npm module is required, command - `npm install`

Commands to start Back-end/Front-end: `npm start`
