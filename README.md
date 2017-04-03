# To-do-REST-API
A REST API for a To-do application.

# Requirements
* Node
* MonogoDB

# Documentation

## Running the server locally

* <code>npm install; node api</code>

## Database Schema

<code>name: {
        type: String,
        required: true
    },
    description: String,
    created: {
        type: Date,
        default: Date.now()
    },
    due: {
        type: Date,
        required: true
    }
}</code>
## Deployment
The API accepts and sends data in JSON format.

## End-points
* / => Return all tasks in the database.
* /[task_name] => Return details about the given task.
* /new => Create a new task.
* /update/[task_name] => Update details for the given task.
* /delete/[task_name] => Delete the given task.
