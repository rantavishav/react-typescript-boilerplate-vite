# Types

This folder contains all of the TypeScript type definitions for the project.

## Contents

- `props.ts`: contains interfaces for the props of various components
- `state.ts`: contains interfaces for the state of various components
- `api.ts`: contains interfaces for the shape of data returned from the API
- `route.ts`: contains interface for the shape of route object

> **Note:** Each `index.ts` file exports all of the type files in this folder. This is to make it easier to import files from the folder.

## Usage

1. Import the desired type into the component or module where it will be used.

   ```javascript
   import { User } from './types/api';
   ```

2. Use the imported type as needed.
   ```javascript
   interface Props {
     user: User;
   }
   ```

## Setup

This folder has no additional setup required.

## Dependencies

This folder has no dependencies.
