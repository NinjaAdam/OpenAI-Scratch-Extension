(function(ext) {
    // This function is called when the extension is loaded
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // This function is called when the "Say" block is executed
    ext.say_text = function(text) {
        // Use the Scratch audio engine to say the text
        scratchAudio.speak(text);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Say %s', 'say_text', 'Hello, world!']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Text to Speech', descriptor, ext);
})({});
