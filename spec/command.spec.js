const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  it("constructor sets command type", function(){
    let commandType = Command.commandType;
      assert.strictEqual(this.commandType, commandType );    
  });
// second argument testing 
  it("constructor sets a value passed in as the 2nd argument", function(){
    let value = Command.value;
      assert.strictEqual(this.value, value );    
  });

});