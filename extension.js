class AIBlock {
    constructor() {
        this.apiKey = "";
    }

    getInfo() {
        return {
            "id": "AI",
            "name": "AI",
            "blocks": [
                {
                    "opcode": "completePrompt",
                    "blockType": "reporter",
                    "text": "complete prompt [string]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": "Explain quantum computing in simple terms"
                        }
                    }
                },
                {
                    "opcode": "setApiKey",
                    "blockType": "command",
                    "text": "set API key to [apiKey]",
                    "arguments": {
                        "apiKey": {
                            "type": "string",
                            "defaultValue": ""
                        }
                    }
                }
            ],
            "menus": {}
        };
    }

    setApiKey({ apiKey }) {
        this.apiKey = apiKey;
    }

    async completePrompt({ string }) {
        if (this.apiKey === "") {
            throw new Error("API key not set.");
        }

        // Rest of the code for the "completePrompt" block
    }
}

Scratch.extensions.register(new AIBlock());
