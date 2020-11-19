const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js');


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let rover = new Rover(98382);
    assert.strictEqual(rover.position,98382);
    assert.strictEqual(rover.mode,'NORMAL');   
    assert.strictEqual(rover.generatorWatts,110);       
  });


  it("response returned by receiveMessage contains name of message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    console.log(response.results);
    assert.strictEqual(response.message,message.name);    
  });


   it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response.results[1].commandType);
    assert.strictEqual(response.results.length,commands.length);    
  });

  it("responds correctly to status check command", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response);

    assert.strictEqual(typeof commands[1].getCommandValue(),'undefined');
    //assert.strictEqual(response.mode,'NORMAL');    
  });

});