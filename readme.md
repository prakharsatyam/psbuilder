
# psbuilder

`psbuilder` is a CLI tool for scaffolding full-stack MERN applications. It provides a structured setup to help you quickly start building applications with a full stack of technologies.

## Features

- **Frontend Setup**: Includes configurations for React, Tailwind CSS, Axios, and TanStack Query.
- **Backend Setup**: Provides integration with Express, Mongoose, and Nodemon.
- **Customizable**: Easily modify or extend the setup to fit your project needs.

## Installation

You can install `psbuilder` globally using npm:

```bash
npm i psbuilder 
psbuilder create <project-Name>
```

## Usage

To use the tool, run the following command in your terminal:

```bash
psbuilder [options]
```

### Commands

- **Initialize a Project**: 
  ```bash
  psbuilder init
  ```

  This command initializes a new project with the predefined structure and configuration.

### Options

- **`--help`**: Show help information.
- **`--version`**: Show the current version of `psbuilder`.

## Project Structure

After initialization, your project will have the following structure:

```
your-project/
├── client/               # Frontend source code
├── server/               # Backend source code
│   ├── src/
|   |   ├── controllers
|   |   ├── middlewares
|   |   ├── models
|   |   ├── utils
|   |   ├── app.js
│   ├── env
│   ├── index.js
│   └── package.json
│   └── package-lock.json
├── package.json          # NPM dependencies and scripts
└── README.md             # Project documentation
```

## Frontend Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **TanStack Query**: Data-fetching and state management library for React.

## Backend Technologies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Nodemon**: Utility that monitors for changes in files and automatically restarts the server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/your-username/psbuilder).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Prakhar Satyam

[LinkedIn](https://www.linkedin.com/in/prakhar-satyam-02a972157/) | [GitHub](https://github.com/prakharsatyam) | [Personal Website](https://blog-livid-alpha.vercel.app/)
```
