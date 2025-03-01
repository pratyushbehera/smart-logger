class Logger {
  constructor(options = {}) {
    this.logLevel = options.logLevel || "info"; // Default log level
    this.isBrowser =
      typeof window !== "undefined" && typeof window.document !== "undefined";
    this.logLevels = ["trace", "debug", "info", "warn", "error"]; // Added "trace"
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
        trace: "color: #9a6ee1; font-weight: bold;", // Purple for trace
        debug: "color: #666; font-style: italic;", // Gray for debug
        info: "color: #007bff; font-weight: bold;", // Blue for info
        warn: "color: #ff9800; font-weight: bold;", // Orange for warn
        error: "color: #ff0000; font-weight: bold;", // Red for error
      };
      console.log(`%c${formattedMessage}`, colors[level], ...args);
    } else {
      // Node.js environment
      const colors = {
        trace: "\x1b[35m", // Purple for trace
        debug: "\x1b[90m", // Gray for debug
        info: "\x1b[34m", // Blue for info
        warn: "\x1b[33m", // Yellow for warn
        error: "\x1b[31m", // Red for error
      };
      const resetColor = "\x1b[0m";
      console.log(`${colors[level]}${formattedMessage}${resetColor}`, ...args);
    }
  }

  trace(message, ...args) {
    this.log("trace", message, ...args);
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
module.exports = Logger;
