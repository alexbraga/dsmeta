<h1 align="center">
  <a href="https://mydsmeta.netlify.app">DSMeta</a>
</h1>

<h3 align="center">
  Spring / React single page web application with JPA, Spring Security and H2 Database
</h3>

<p align="center">
  <a href="https://github.com/alexbraga/dsmeta/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alexbraga/dsmeta"></a>
  <a href="https://app.netlify.com/sites/mydsmeta/deploys"><img alt="Netlify build status" src="https://api.netlify.com/api/v1/badges/d51f97e2-2c56-44a0-9b2d-bb4449b84098/deploy-status"></a>
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

<p align="justify">Sales listing Spring Boot API with a responsive React.ts layout. Features an H2 Database with Object-Relational Mapping made with Spring Data JPA (Hibernate), filtering by date and Twilio Messaging API integration for SMS sending. Deployed on Google Cloud Platform (back-end) and on Netlify (front-end), with CI/CD.

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
- React custom hooks, useState and useEffect
- Axios requests
- React Toastify
- Pagination
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
- [Java 11](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://maven.apache.org/)

In addition, you'll need to register a [free] [Twilio](https://twilio.com) account and you might also want an IDE to work with the code, like
[IntelliJ IDEA](https://www.jetbrains.com/idea/) and [VS Code](https://code.visualstudio.com/).

#### Clone this repository

```
git clone https://github.com/alexbraga/dsmeta.git
```

#### Set the environment variables

- Set the environment variables in your IDE or replace the following placeholders after the `=` sign with their respective values directly at `dsmeta/server/src/main/resources/application.properties`:

```
spring.profiles.active=${PROFILE}
twilio.sid=${TWILIO_SID}
twilio.key=${TWILIO_KEY}
twilio.phone.from=${TWILIO_PHONE_FROM}
twilio.phone.to=${TWILIO_PHONE_TO}
```

- `Note`: Get the Twilio ID, token (key) and phone number (the `twilio.phone.from` property above) from the Twilio account you've created. You'll find them in the dashboard.
- Replace `${PROFILE}` with `prod` if you want to use the properties set in `dsmeta/server/src/main/resources/application-prod.properties`. This file will take precedence over `application.properties` when the `prod` profile is active. You might also want to create an `application-dev.properties` for your development environment as well and set the profile to `dev`.

#### Running the Back-end

```bash
# Go to the server folder
$ cd dsmeta/server

# Install the dependencies and build the application
$ mvn install

# Run the application
$ mvn spring-boot:run
```

- Alternatively, open `dsmeta/server` with your preferred IDE and run `DsmetaApplication.java`.

- The server will start at `localhost:8080` by default.

#### API Endpoints

- List all sales in the database:

  - `GET` `/sales`

- Send a SMS containing some information about a given seller:
  - `GET` `/{id}/notification`

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
- React Pagination
- React Loader Spinner

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

<h4>Alexandre Braga</h4>

<div>
<a href="https://www.linkedin.com/in/alexgbraga/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white" alt="LinkedIn"></a>&nbsp;
<a href="mailto:contato@alexbraga.com.br" target="_blank"><img src="https://img.shields.io/badge/-email-c14438?style=for-the-badge&logo=Gmail&logoColor=white" alt="E-Mail"></a>
</div>

<!-- ## License

This project is under the [MIT License](./LICENSE). -->
