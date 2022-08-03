<h1 align="center">
  <a href="https://mydsmeta.netlify.app">DSMeta</a>
</h1>

<h3 align="center">
  Spring / React single page web application with JPA, Spring Security and H2 Database
</h3>

<p align="center">
  <a href="https://github.com/alexbraga/dsmeta/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alexbraga/dsmeta"></a>
  <a href="https://heroku.com"><img alt="Heroku build status" src="https://img.shields.io/github/deployments/alexbraga/dsmeta/dsmeta-server?label=heroku&logo=heroku"></a>
  <a href="https://app.netlify.com"><img alt="Netlify build status" src="https://img.shields.io/netlify/d51f97e2-2c56-44a0-9b2d-bb4449b84098?logo=netlify"></a>
  <!-- <a href="https://github.com/alexbraga/dsmeta/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/alexbraga/dsmeta?label=license"></a> -->
</p>

<h4 align="center">
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#screenshots">Screenshots</a> •
 <a href="#how-it-works">How it works</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#how-to-contribute">How to contribute</a> •
 <a href="#author">Author</a> <!--•
 <a href="#license">License</a> -->
</p>

## About

<p align="justify">Sales listing Spring Boot API with a responsive React.ts layout. Features an H2 Database with Object-Relational Mapping made with Spring Data JPA (Hibernate), filtering results by date, Twilio Messaging API integration for SMS sending. Cloud-deployed application on Heroku (back-end) and Netlify (front-end), with CI/CD.

Live demo available at: <a href="https://mydsmeta.netlify.app">https://mydsmeta.netlify.app</a></p>

---

## Features

- Relational database (H2)
- Object-Relational Mapping
- JPA with Hibernate
- Spring Security
- CORS
- Web service API
- Layered structure divided into Entities, Repositories, Services and Controllers
- Classes and objects
- Encapsulation, getters and setters
- React hooks: useState and useEffect
- Axios requests
- React Toastify
- Cloud deploy with CI/CD

---

## Screenshots

### Mobile

<img src="https://github.com/alexbraga/dsmeta/blob/master/screenshots/screenshot-sm.png?raw=true" alt="Class Diagram" width="350" />

### Medium screen

<img src="https://github.com/alexbraga/dsmeta/blob/master/screenshots/screenshot-md.png?raw=true" alt="Class Diagram" width="450" />

### Large screen

<img src="https://github.com/alexbraga/dsmeta/blob/master/screenshots/screenshot-lg.png?raw=true" alt="Class Diagram" width="650" />

---

## How it works

1. <a href="#clone-this-repository">Clone this repository</a>
2. <a href="#set-the-environment-variables">Set the environment variables</a>
3. <a href="#running-the-back-end">Run the back-end server</a>
4. <a href="#running-the-front-end">Run the front-end server</a>

#### Pre-requisites

Before getting started, you will need to have the following tools installed on your machine:

- [Git](https://git-scm.com)
- [Java OpenJDK](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://maven.apache.org/)

In addition, you might also want an IDE to work with the code, like
[IntelliJ IDEA](https://www.jetbrains.com/idea/) and [VS Code](https://code.visualstudio.com/).

#### Clone this repository

```
git clone https://github.com/alexbraga/dsmeta.git
```

#### Set the environment variables
- Create `dsmeta/server/src/main/resources/application.properties` and set the environment variables:

```
twilio.sid=${TWILIO_SID}
twilio.key=${TWILIO_KEY}
twilio.phone.from=${TWILIO_PHONE_FROM}
twilio.phone.to=${TWILIO_PHONE_TO}

spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

#### Running the Back-end

```bash
# Go to the server folder
$ cd dsmeta/server

# Install the dependencies
$ mvn dependency:resolve

# Compile and run the application
$ mvn spring-boot:run
```

- Alternatively, open `dsmeta/server` with your preferred IDE and run `DsmetaApplication.java`

- The server will start at `localhost:8080`

#### API Endpoints

- Get all sales in the database:

  - `/sales`

- Send a SMS containing some information about a given seller:
  - `/{id}/notification`

#### Running the Front-end

```bash
# Go to the server folder
$ cd dsmeta/client

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev
```

- The GUI will be available at `localhost:5173`

---

## Tech Stack

The following tools were used in the construction of the project:

### **Back-end:**

#### **Language**

- **[Java OpenJDK 11](https://www.oracle.com/java/technologies/downloads/)**

#### **Framework**

- **[Spring](https://spring.io/)**

#### **Dependencies**

- Spring Web
- Spring Data JPA
- H2 Database

> See the file
> [pom.xml](https://github.com/alexbraga/dsmeta/blob/master/server/pom.xml)

#### **Utilities**

- Dependency Manager: **[Maven](https://maven.apache.org/)**
- IDE: **[IntelliJ IDEA](https://www.jetbrains.com/idea/)**
- External API: **[Twilio Programmable SMS](https://www.twilio.com/docs/sms)**
- API Testing: **[Postman](https://postman.com)**

<br />

### **Front-end:**

#### **Language**

- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**

#### **Library**

- **[React](https://reactjs.org/)**

#### **Dependencies**

- Axios
- React Toastify
- React DatePicker

> See the file
> [package.json](https://github.com/alexbraga/dsmeta/blob/master/client/package.json)

#### **Utilities**

- Editor: **[VS Code](https://code.visualstudio.com/)**

---

## How to contribute

1. Fork the project
2. Create a new branch with your changes:
```
git checkout -b my-amazing-feature
```
3. Save your changes and create a commit message (in present tense) telling what you did:
```
git commit -m "Add my amazing feature"
```
4. Submit your changes:
```
git push origin my-amazing-feature
```
5. Create a pull request

---

## Author

<p>Alexandre Braga</p>

[![Twitter Badge](https://img.shields.io/badge/-@_alex_braga-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white)](https://twitter.com/_alex_braga)
[![Linkedin Badge](https://img.shields.io/badge/-Alexandre%20Braga-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/alexgbraga/)
[![Gmail Badge](https://img.shields.io/badge/-contato@alexbraga.com.br-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:contato@alexbraga.com.br)

---

<!-- ## License

This project is under the [MIT License](./LICENSE). -->
