const Message = require('./message.js');
const Command = require('./command.js');

class Rover /*extends Message*/ {
  constructor(position) {
   //super(Message.name);
    this.position = position;
    if (!position) {
      throw Error("Position required.");
   }
   
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  
  receiveMessage(message){

    //let [name]= Object.keys(message)
    //let results = Object.keys(message)[1];
   //console.log(Object.keys(message)[1])
   //return  message.name;
   //let obj = message.getMessage();
     let obj = message.getMessage();
     //console.log(obj)
    renameKey(obj,'commands','results');
    
    //console.log(convertCommandsToResults(obj.results[1].commandType));
   
    return obj

  }
 }
  
 function renameKey(obj, old_key, new_key) {    
          // check if old key = new key   
              if (old_key !== new_key) {                   
                 Object.defineProperty(obj, new_key, // modify old key 
                                      // fetch description from object 
                 Object.getOwnPropertyDescriptor(obj, old_key)); 
                 delete obj[old_key];                // delete old key 
                 } 
  } 
  

  /*function convertCommandsToResults (cmdObject){
    
    let value = Command.getCommand(cmdObject.commandType);
   
   return value
  }*/

module.exports = Rover;