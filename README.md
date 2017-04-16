# To-do-REST-API
A REST API for a To-do application.

# Requirements
* Node
* MonogoDB
* Express

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

# Copyright
        Copyright 2017 Nahom Abi

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
