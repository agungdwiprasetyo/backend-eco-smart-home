# Back-End Side ECO Smart Home
NodeJS Back End for Eco Smart Home

## Mulai
Dalam server/local komputer harus sudah terinstal NodeJS. 
Run webserver dengan menjalankan program ```app.js```:
```
$ node app.js
```
Atau jika ingin proses webserver berjalan terus, install terlebih dahulu package ```pm2``` yaitu dengan cara:
```
$ sudo npm install -g pm2
```
Setelah diinstall maka jalankan server:

```
$ pm2 start app.js
```
Buka ```localhost:2016``` atau ```[nama-domain-server]:2016```
