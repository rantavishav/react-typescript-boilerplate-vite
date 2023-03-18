# Pages

This folder contains all of the top-level components that represent the pages of the application.

## Contents

Dependending on the project requirements, this folder structure may change. The following is the structure of this folder if project has a authentication flow (which is there for most projects):

- `guestPages`: contains all the pages that are accessible to guests user.
- `userPages`: contains all the pages that are accessible to logged in users.
- `adminPages`: contains all the pages that are accessible to admin users.

Each page consist of following files:

- `index.tsx`: contains the component that represents the page.
- `styles.css`: contains the styles for the specific page.
- `readme.md`: contains the documentation for the specific page.
- `type.ts`: contains the types for the specific page.
- `component`: contains the components used in the specific page.
- `utils`: contains the utility functions used in the specific page.

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
