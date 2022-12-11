## About Screenshot App

**This guide will show how to setup the Frontend in ReactJS.**

This is an application to provide updated screenshots of the best casinos websites.

With this application you will have access to the reviews and the screenshots of the most common casinos websites in the world.

Some of them are:
- [Betboo](https://www.betboo.com)
- [Bet365](https://www.bet365.com)
- [Awesome Casino](https://www.awesomecasino.com)
- [Betfair](https://www.betfair.com)

## How to run this application
- Prerequisites:
    - Docker Installed on the Host Machine

Full Application is made up of 2 independent parts.
Frontend (ReactJS) **this application** and Backend (Laravel) another application found here: [Backend in Laravel](https://github.com/felipebhz/screenshot-laravel)

**First Step:**
- Clone this repository
    - `cd` into the directory where the repository has been cloned
    - `docker-compose up -d --force-recreate --build`
*Command to start and build (or rebuild) docker containers and install dependencies from React JS using `npm install`*

- Docker can take more than 5 or 10 minutes (at least on Windows 11 with WSL2 to finish building all the images and installing all the depencies. Is advised to take a look at docker logs to see if what is the output and if this is similar to this:
![Docker output after React JS build](https://i.ibb.co/C2cRfJG/image.png)

	- Open your web browser and goto http://localhost:3000 to see the application's home page.
*Keep in mind this application will call the Laravel API on the backend, which must be running on Docker or at least be able to respond when hit the localhost:8001 endpoint*
---

### Troubleshooting 
- Docker can take a while to start, build and load all the dependencies on Windows using WSL2.
- Nginx access log output can be found on `/var/log/nginx/access.log` and error log can be found on `/var/log/nginx/error.log`
- Stop any other services you may have running on your machine before starting docker. Ports can be in conflict.
---
### Softwares used in this application
- NodeJS 18
- React JS latest
- Daisyui
- Tailwind CSS
- Docker Desktop latest (Windows)
---
## License

This application is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
