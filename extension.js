(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Say block
    ext.sayBlock = function(text) {
        // Get the current target sprite
        var target = this.runtime.getSpriteTarget();

        // Make the sprite say the text
        target.say(text);
    };

    // Register the extension
    Scratch.extensions.register('Say Block', {
        blocks: [
            [' ', 'say %s in this block', 'sayBlock', 'Hello, world!']
        ],
        menus: {},
    });
})({});
