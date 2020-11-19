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
    //console.log(response.results);
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
    
  });

  it("responds correctly to mode change command", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response);

    assert.strictEqual(commands[0].getCommandValue(),'LOW_POWER');
       
  });

  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'),new Command('MOVE', 25833)];
    let message = new Message('Test message with Three commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response.results[1].roverStatus);

    assert.strictEqual(commands[0].getCommandValue(),'LOW_POWER');
       
  });

  it("responds with position for move command", function(){
    let commands = [new Command('MOVE', 25833)];
    let message = new Message('Test message with one command', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response.results[0].roverStatus);

    assert.strictEqual(commands[0].getCommandValue(),25833);
       
  });


    it("completed false and a message for an unknown command", function(){
    let commands = [new Command('SING')];
    let message = new Message('Test message with one command', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //console.log(commands.length);
    //console.log(response.results[0].roverStatus);

    assert.strictEqual(typeof commands[0].getCommandValue(),'undefined');
       
  });


});