# BAND-IT

### Stack
* Ruby 2.5.3, Rails 5.2.3
* PostgreSQL 11.1
* React 16.6, Redux 4.0.1
* NGINX 1.10.2 (only in production)
* Docker 18.09.5, Docker Compose 1.21.2

### Installation
*Manual written for Ubuntu 18.04. For MacOS steps are similar with slight differences.*

1. Install Docker and Docker Compose, using official manuals for your system.
   * [Docker installation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
   * [Docker Compose installation](https://docs.docker.com/compose/install/)

2. Clone repository using Git
   ~~~~
   git clone <repo address>
   ~~~~
3. Enter project folder
   ~~~~
   cd band-it
   ~~~~
4. Rename .env.example or .prod.env.example to .env or .prod.env (_depends on environment, .env for development and .prod.env for production_)

5. To start app in development mode and build docker images, run
   ~~~~
   docker-compose up --build
   ~~~~
   Start app without building images
   ~~~~
   docker-compose up
   ~~~~
6. To start in production mode and build images
   ~~~~
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
   ~~~~
   (_At first you should create remote server using docker-machine and after that run previous command_)
7. When app started, you need to create, migrate and seed database with demo data
   ~~~~
   docker-compose run backend rake db:create
   docker-compose run backend rake db:migrate
   ~~~~
   ~~~~
   docker-compose run backend rake db:seed
   ~~~~
   
#### Now your app is ready!