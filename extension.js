(function() {
  // Define block information
  var blockInfo = {
    "opcode": "sayBlock",
    "blockType": "command",
    "text": "Say [TEXT] in this block",
    "arguments": {
      "TEXT": {
        "type": "string",
        "defaultValue": "Hello, world!"
      }
    }
  };

  // Define block function
  function sayBlock(args) {
    var target = this.runtime.getTargetForStage();
    var text = args.TEXT;
    target.say(text);
  }

  // Register block with Scratch
  Scratch.extensions.register("SayBlock", blockInfo, sayBlock);
})();
