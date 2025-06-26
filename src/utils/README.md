# Utils

This directory contains utility functions and modules that can be used throughout the application.

## Logger

The logger utility provides a centralized logging solution using Winston with multiple transports.

### Features

- **Console logging**: Colored output for development
- **File logging**: Persistent logs stored in `logs/` directory
- **Loki integration**: Centralized logging with Grafana Loki
- **Environment-aware**: Different log levels based on environment
- **Structured logging**: JSON format for better log analysis

### Usage

```typescript
import { logger } from "../utils";

// Log levels: error, warn, info, debug
logger.info("Application started");
logger.error("An error occurred", { error: errorObject });
logger.debug("Debug information", { data: someData });
logger.warn("Warning message");
```

### Configuration

The logger can be configured using environment variables:

- `LOG_LEVEL`: Set the minimum log level (default: 'info')
- `NODE_ENV`: Affects logging behavior (production vs development)

### Log Files

Logs are written to:

- `logs/combined.log`: All log levels
- `logs/error.log`: Error level only

### Loki Integration

The logger is configured to send logs to Grafana Loki for centralized log management and visualization.
