class Message  {

  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Name required.");
    }
    this.commands = commands;
  }

  getMessage(){
    
   let object = {

      message : this.name,
      results : this.commands
   }
   
   return object;

  }
 
}

module.exports = Message;


