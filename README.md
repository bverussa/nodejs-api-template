# Node.js RESTful API Template

![node.js logo](https://nodejs.org/static/images/logo.svg)

RESTful API templates using [Node.js](https://nodejs.org/en/).

## Open Endpoints

Open endpoints require no Authentication.

* Ping: `GET /ping/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request.

### Basic API calls

Each endpoint manipulates or displays information related to the Template model:

* GET template list: `GET /`
* GET template by ID: `GET /:templateId`
* CREATE new template: `POST /`
* UPDATE template by ID: `PATCH /:templateId`
* DELETE template by ID: `DELETE /:templateId`