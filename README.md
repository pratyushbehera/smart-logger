# Smart Logger

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/npm/v/custom-log-js)
![Downloads](https://img.shields.io/npm/dm/custom-log-js)

A lightweight and customizable logger for both **browser** and **Node.js** environments. Supports log levels (`debug`, `info`, `warn`, `error`) and colored output.

## Features

- **Universal**: Works in both browser and Node.js environments.
- **Custom Log Levels**: Set the minimum log level to control output.
- **Colored Output**: Logs are color-coded for better readability.
- **Lightweight**: No external dependencies.

## Installation

Install the package via npm:

```bash
npm install custom-log-js
```

Or via yarn:

```bash
yarn add custom-log-js
```

---

## Usage

### Basic Usage

```javascript
const Logger = require("custom-log-js");

// Create a logger instance
const logger = new Logger({ logLevel: "info" });

// Log messages
logger.debug("This is a debug message"); // Won't log (logLevel is 'info')
logger.info("This is an info message"); // Will log
logger.warn("This is a warning message"); // Will log
logger.error("This is an error message"); // Will log
```

### Set Log Level Dynamically

You can change the log level at runtime:

```javascript
logger.setLogLevel("debug"); // Now debug logs will be shown
logger.debug("This is a debug message"); // Will log
```

---

## Smart Logger Instance

### `new Logger(options)`

Creates a new logger instance.

- **options** (Object):
  - `logLevel` (String): Minimum log level to display. Default: `'info'`.
  - Possible values: `'debug'`, `'info'`, `'warn'`, `'error'`.

### Methods

- `logger.debug(message, ...args)`: Logs a debug message.
- `logger.info(message, ...args)`: Logs an info message.
- `logger.warn(message, ...args)`: Logs a warning message.
- `logger.error(message, ...args)`: Logs an error message.
- `logger.setLogLevel(level)`: Sets the minimum log level.

## Examples

### Browser Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Logger Test</title>
    <script src="https://unpkg.com/custom-log-js/dist/logger.js"></script>
    <script>
      const logger = new Logger({ logLevel: "debug" });

      logger.debug("This is a debug message");
      logger.info("This is an info message");
      logger.warn("This is a warning message");
      logger.error("This is an error message");
    </script>
  </head>
  <body>
    <h1>Check the console for logs!</h1>
  </body>
</html>
```

### Node Example

```bash
const Logger = require('custom-log-js');
const logger = new Logger({ logLevel: 'warn' });

logger.debug('This is a debug message'); // Won't log
logger.info('This is an info message'); // Won't log
logger.warn('This is a warning message'); // Will log
logger.error('This is an error message'); // Will log
```

---

## Building the Package

If you want to build the package locally:

#### 1. Clone the repository:

```bash
git clone https://github.com/pratyushbehera/smart-logger.git
cd smart-logger
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Build the package:

```bash
npm run build
```

This will generate a `dist` folder containing the bundled and minified files.

---

## Contributing

Contributions are welcome! Follow these steps:

#### 1. Fork the repository.

#### 2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

#### 3.Make your changes and commit them:

```bash
git commit -m "Add your feature"
```

#### 4.Push to the branch:

```bash
git push origin feature/your-feature
```

#### 5.Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you find this package useful, please consider giving it a ⭐️ on [GitHub](https://github.com/pratyushbehera/smart-logger).

For issues or feature requests, please open an issue on the [GitHub repository](https://github.com/pratyushbehera/smart-logger/issues).

---

Enjoy logging! 🚀
