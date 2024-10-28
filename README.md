## Author

Developed by Mert Uysal for Red Bull Racing.

# Red Bull Racing Driver Standings

This project displays the current driver standings for Red Bull Racing drivers, implemented using React and connected to a local backend. The project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Features
- **Driver Standings Table**: Displays the current standings of drivers, with fields such as position, name, constructor, and points.
- **Backend Connection**: The app connects to a local backend, and a proxy has been set to manage API requests seamlessly.
- **Favicon**: Red Bull favicon has been set for the app.

## Run Steps

To set up and start the project, follow these steps:

1. **Install Dependencies:** Run `npm install` to install all necessary dependencies.
2. **Build the Project:** Run `npm run build` to create an optimized production build in the `build` folder.
3. **Start the Application:** Run `npm run start` to start the app in development mode.
4. **Open in Browser:** Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Testing
This project includes a Jest test environment for the driver standings feature. To run tests, use:
```bash
npm run test
```
This command runs the `DriverStandings.test.js` file.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and you may see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode, allowing you to monitor test results in real-time. For more information, see the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes, making the app ready for deployment.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project, allowing full control over configuration files and transitive dependencies (webpack, Babel, ESLint, etc.).

You don't need to use `eject` unless you require extensive customization. The curated feature set is designed for small and medium-sized deployments.