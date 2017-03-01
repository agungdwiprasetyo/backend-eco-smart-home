# Back-End Side ECO Smart Home
Node.js Back End for ECO Smart Home

## Mulai
Dalam server/local komputer harus sudah terinstal Node.js dan npm.

Clone this repository:
```sh
$ git clone https://github.com/agungdwiprasetyo/backend-eco-smart-home.git
$ cd backend-eco-smart-home
```

Install npm package dependencies:
```sh
$ npm install
```

Run webserver:
```
$ npm start
```
Atau jika ingin proses webserver berjalan terus, install terlebih dahulu package ```pm2``` yaitu dengan cara:
```
$ sudo npm install -g pm2
```
Setelah diinstall maka jalankan server:

```
$ pm2 start app.js
```
Buka ```localhost:2017``` atau ```[nama-domain-server]:2017```
