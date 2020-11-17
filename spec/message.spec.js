const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: "Name required."
      }
    );
  });

// this vs accessing the property directly ?
  it("constructor sets name", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    assert.strictEqual(message.name,'Test message with two commands');    
  });


  it("contains a commands array passed into the constructor as 2nd argument", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    assert.strictEqual(message.commands.length,commands.length);    
  });
});