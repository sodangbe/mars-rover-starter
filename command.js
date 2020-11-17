class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
   }
    this.value = value;
  }
 
 getCommand(cmd){

   if(!cmd === 'STATUS_CHECK'){
  
  return this.value ;
   }
 }
}



module.exports = Command;