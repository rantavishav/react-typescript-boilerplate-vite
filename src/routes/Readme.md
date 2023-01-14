# Routes

This folder contains all of the routing configuration for the application.

## Contents

- `index.tsx`: contains array of `publicRoutes` and `privateRoutes`.

## Usage

1. Import the `routes.tsx` file into the main entry point of the application.

   ```javascript
   import { Router } from 'react-router-dom';
   import { createBrowserHistory } from 'history';
   import routes from './routes';

   const history = createBrowserHistory();
   ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('root'));
   ```

## Setup

This folder has no additional setup required.

## Dependencies

This folder has dependency on react-router-dom and history. Please make sure to install them before use
