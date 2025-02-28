class SmartLogger {
  constructor(options = {}) {
    this.logLevel = options.logLevel || "info"; // Default log level
    this.isBrowser =
      typeof window !== "undefined" && typeof window.document !== "undefined";
    this.logLevels = ["debug", "info", "warn", "error"];
  }

  setLogLevel(level) {
    if (this.logLevels.includes(level)) {
      this.logLevel = level;
    } else {
      this.error(`Invalid log level: ${level}`);
    }
  }

  log(level, message, ...args) {
    if (this.logLevels.indexOf(level) < this.logLevels.indexOf(this.logLevel)) {
      return; // Skip if the log level is below the set level
    }

    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    if (this.isBrowser) {
      // Browser environment
      const colors = {
        debug: "color: gray;",
        info: "color: blue;",
        warn: "color: orange;",
        error: "color: red;",
      };
      console.log(`%c${formattedMessage}`, colors[level], ...args);
    } else {
      // Node.js environment
      const colors = {
        debug: "\x1b[90m", // Gray
        info: "\x1b[34m", // Blue
        warn: "\x1b[33m", // Yellow
        error: "\x1b[31m", // Red
      };
      const resetColor = "\x1b[0m";
      console.log(`${colors[level]}${formattedMessage}${resetColor}`, ...args);
    }
  }

  debug(message, ...args) {
    this.log("debug", message, ...args);
  }

  info(message, ...args) {
    this.log("info", message, ...args);
  }

  warn(message, ...args) {
    this.log("warn", message, ...args);
  }

  error(message, ...args) {
    this.log("error", message, ...args);
  }
}

// Export the logger
module.exports = SmartLogger;
