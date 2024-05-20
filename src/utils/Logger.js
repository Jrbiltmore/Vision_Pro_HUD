
// VisionPro_HUD/src/utils/Logger.js
// Authors: Jacob Thomas Messer Redmond, ChatGPT-4o
// UUID: 900100000008

class Logger {
    constructor(context) {
        this.context = context;
    }

    log(message, data = {}) {
        console.log(`[${this.context}] ${message}`, data);
    }
}

export default Logger;
// END
