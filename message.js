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
      commands : this.commands
   }
   
   return object;

  }


 
}

//console.log(new Message('romeo' ,[1,2]).receiveMessage());

module.exports = Message;


