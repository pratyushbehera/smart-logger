const SmartLogger = require("../dist/smart-logger");
const logger = new SmartLogger({ logLevel: "debug" });

logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");
