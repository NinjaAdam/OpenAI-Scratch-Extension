(function(ext) {
    // Define OpenAI API endpoint and version
    var openaiEndpoint = "https://api.openai.com";
    var openaiVersion = "v1";

    // Define Scratch block for generating text
    ext.generateText = function(apiKey, prompt, variable, callback) {
        // Construct OpenAI API request URL
        var requestUrl = openaiEndpoint + "/" + openaiVersion + "/engines/davinci-codex/completions";
        
        // Define request headers and body
        var requestHeaders = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        };
        var requestBody = {
            "prompt": prompt,
            "max_tokens": 100,
            "temperature": 0.5,
            "n": 1,
            "stop": "\n",
            "echo": true
        };
        
        // Send request to OpenAI API
        $.ajax({
            url: requestUrl,
            type: "POST",
            headers: requestHeaders,
            data: JSON.stringify(requestBody),
            success: function(response) {
                // Get generated text from API response
                var generatedText = response.choices[0].text.trim();
                
                // Set Scratch variable to generated text
                ext.setVariable(variable, generatedText);
                
                // Execute Scratch callback function
                callback();
            },
            error: function(xhr, status, error) {
                // Log error message to console
                console.log("Error: " + error);
                
                // Execute Scratch callback function
                callback();
            }
        });
    };
    
    // Define Scratch block for setting a variable
    ext.setVariable = function(variable, value) {
        // Set Scratch variable to value
        var target = "_stage_";
        var varId = "☁ " + variable;
        var data = {
            "name": variable,
            "value": value
        };
        ScratchExtensions.runtime.sendMessage(target, "setVariable:" + varId + ":" + JSON.stringify(data));
    };

    // Register Scratch extension
    ScratchExtensions.register("OpenAI Extension", {
        // Define Scratch block for generating text
        generateText: {
            // Define block information
            blocks: [
                ["R", "generate text with API key %s prompt %s set variable %s", "generateText"]
            ],
            // Define block arguments
            arguments: {
                "API key": {
                    type: "string",
                    defaultValue: "your_api_key_here"
                },
                "prompt": {
                    type: "string",
                    defaultValue: "Enter your prompt here"
                },
                "variable": {
                    type: "string",
                    defaultValue: "variable_name"
                }
            }
        }
    });
})({});
