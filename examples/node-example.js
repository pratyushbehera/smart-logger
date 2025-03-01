const Logger = require("../dist/logger");
const logger = new Logger({ logLevel: "trace" });

logger.trace("This is a trace message");
logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");
