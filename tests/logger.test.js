const SmartLogger = require("../src/logger"); // Import the logger

describe("SmartLogger", () => {
  let logger;

  beforeEach(() => {
    logger = new SmartLogger({ logLevel: "info" });
  });

  test("should log info messages when logLevel is info", () => {
    const consoleSpy = jest.spyOn(console, "log");
    logger.info("This is an info message");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("INFO"));
    consoleSpy.mockRestore();
  });

  test("should not log debug messages when logLevel is info", () => {
    const consoleSpy = jest.spyOn(console, "log");
    logger.debug("This is a debug message");
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("should log warn messages when logLevel is info", () => {
    const consoleSpy = jest.spyOn(console, "log");
    logger.warn("This is a warn message");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("WARN"));
    consoleSpy.mockRestore();
  });

  test("should log error messages when logLevel is info", () => {
    const consoleSpy = jest.spyOn(console, "log");
    logger.error("This is an error message");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ERROR"));
    consoleSpy.mockRestore();
  });

  test("should change log level dynamically", () => {
    logger.setLogLevel("debug");
    const consoleSpy = jest.spyOn(console, "log");
    logger.debug("This is a debug message");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("DEBUG"));
    consoleSpy.mockRestore();
  });

  describe("setLogLevel", () => {
    test("should update logLevel when a valid level is provided", () => {
      logger.setLogLevel("debug");
      expect(logger.logLevel).toBe("debug");

      logger.setLogLevel("warn");
      expect(logger.logLevel).toBe("warn");

      logger.setLogLevel("error");
      expect(logger.logLevel).toBe("error");
    });

    test("should not update logLevel and log an error when an invalid level is provided", () => {
      const errorSpy = jest.spyOn(logger, "error").mockImplementation(() => {});

      logger.setLogLevel("invalid-level");
      expect(logger.logLevel).toBe("info"); // logLevel should remain unchanged
      expect(errorSpy).toHaveBeenCalledWith(
        expect.stringContaining("Invalid log level: invalid-level")
      );

      errorSpy.mockRestore();
    });
  });
});
