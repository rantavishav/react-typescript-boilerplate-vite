# Pages

This folder contains all of the top-level components that represent the pages of the application.

## Contents

Dependending on the project requirements, this folder structure may change. The following is the structure of this folder if project has a authentication flow (which is there for most projects):

- `guestPages`: contains all the pages that are accessible to guests user.
- `userPages`: contains all the pages that are accessible to logged in users.
- `adminPages`: contains all the pages that are accessible to admin users.

## Usage

1. Import the desired component into the module where it will be used.
   ```javascript
   import { Home } from './pages/Home';
   ```
2. Use the imported component as needed.
   ```javascript
   <Home />
   ```

## Props

Each component has its own set of props, the `readme` file of each component should specify the props that component accepts.

## Setup

This folder has no additional setup required.

## Dependencies

This folder has no dependencies.
