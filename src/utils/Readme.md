# Util

This folder contains utility functions and modules that are used throughout the project.

## Contents

- Add a new utility function or module to this folder as needed. The following files are included as examples:

* `api.js`: contains functions for making API calls
* `formatter.js`: contains functions for formatting data
* `helpers.js`: contains miscellaneous helper functions

## Usage

- Here add a brief description of how to use the utility functions and modules in this folder.Following are the examples of how to use the utility functions and modules in this folder.

1. Import the desired utility function or module into the component or module where it will be used.

   ```javascript
   import { apiCall } from './util/api';
   ```

2. Use the imported function or module as needed.
   ```javascript
   apiCall('/users')
     .then((data) => console.log(data))
     .catch((error) => console.log(error));
   ```

## Setup

This folder has no additional setup required.

## Dependencies

This folder has no dependencies.
