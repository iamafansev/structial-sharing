# My React Vite SPA

This is a single-page application (SPA) built with React and Vite that utilizes the STAPI API to fetch and display a list of animals.

## Project Structure

```
my-react-vite-spa
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   └── ExampleComponent.jsx  # Component to display animals and modal
│   ├── hooks
│   │   └── useExampleQuery.js     # Custom hook for fetching animal data
│   ├── pages
│   │   └── HomePage.jsx           # Main page component
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Entry point of the application
│   └── styles
│       └── styles.css             # Styles for the application
├── package.json                    # NPM configuration file
├── vite.config.js                  # Vite configuration file
└── README.md                       # Project documentation
```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Features

- Fetches a list of animals from the STAPI API.
- Displays the list in a user-friendly format.
- Includes a modal dialog for additional information.

## Technologies Used

- React
- Vite
- React Query

## License

This project is licensed under the MIT License.