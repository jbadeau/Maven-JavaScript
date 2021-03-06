maven-cujojs-seed
=================

A Maven + Eclipse setup for working with JavaScript.

## Description
This is an example project for working with Eclipse, Maven and JavaScript. One of the main goals is to use JavaScript as normal Maven dependencies without copying or unpacking source files. The cujojs seed project is used as a template.

## Features
* Maven based JavaScript dependency management
* Transitive dependency support
* Keep JavaScript code separate from web application code (html, css, img...)
* Run unit tests without unpacking dependencies
* Integration of GEB (WebDriver) for automated browser testing
* Run web application without unpacking dependencies
* Build optimization

## Prerequisites
* Eclipse 4.2.1 (Juno SR2)
* Groovy Compiler 1.8.6 Feature
* Groovy-Eclipse Feature
* Groovy-Eclipse M2E integration
* m2e - Maven Integration for Eclipse
* m2e-wtp - Maven Integration for WTP (Incubation)

## Getting Started
* Clone repository
* Run mvn clean install on seed project
* Point your browser to http://localhost:8080/seed-webapp/index.html or http://localhost:8080/seed-webapp/index.html?dev=true

## Comming Soon...
* Integration of code coverage
* Integration of code metrics
* Maven archetype
