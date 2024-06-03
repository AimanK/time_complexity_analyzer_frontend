---

# Time Complexity Analyzer Frontend

Welcome to the Time Complexity Analyzer: Frontend! This application allows users to input code snippets in various modern programming languages and receive an analysis of the worst-case algorithmic time complexity. The results are visually represented on the frontend using line graphs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input code snippets in various modern programming languages.
- Analyze the worst-case algorithmic time complexity of the code.
- Visual representation of the time complexity using line graphs.
- Responsive and user-friendly UI.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **D3.js**: JavaScript library for producing dynamic, interactive data visualizations.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios.js**: Promise-based HTTP client for making requests to the backend.

### Backend

- **Actix Web**: Powerful, pragmatic, and extremely fast web framework for Rust.
- **Rust**: Programming language for system-level performance.
- **ChatGPT API**: For analyzing code snippets and determining their time complexity.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (for running the frontend)
- [Rust](https://www.rust-lang.org/) (for running the backend)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) (Rust package manager)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/) (JavaScript package manager)

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/code-complexity-analyzer.git
    cd code-complexity-analyzer
    ```

2. Navigate to the `frontend` directory and install dependencies:
    ```bash
    cd frontend
    npm install
    # or
    yarn install
    ```

3. Start the React development server:
    ```bash
    npm start
    # or
    yarn start
    ```
## Usage

1. Start both the frontend and backend servers as described in the installation steps.
2. Open your web browser and navigate to `http://localhost:3000` to access the frontend.
3. Input your code snippet into the provided text box and click the "Analyze" button.
4. View the results of the worst-case algorithmic time complexity analysis in graphical form.

## API Integration

To analyze the code snippets, the backend communicates with the ChatGPT API. Ensure you have an API key from OpenAI and set it up in your backend configuration.

1. Obtain your API key from [OpenAI](https://beta.openai.com/signup/).
2. Add your API key to the backend configuration (e.g., as an environment variable).

Example configuration:

```sh
export OPENAI_API_KEY='your-api-key'
```

## Contributing

We welcome contributions to improve the Code Complexity Analyzer! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
