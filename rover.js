class Rover {
  constructor(position) {
    this.position = position;
    if (!position) {
      throw Error("Position required.");
   }
   
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    
  }
  
  getMode(){

    return this.mode
  }
  receiveMessage(message){

    let obj = message.getMessage();
    let numberOfCommands = obj.results.length;
    let cmdType = ['MODE_CHANGE','MOVE','STATUS_CHECK']
    let res =[]
    //console.log(numberOfCommands);
   // console.log(obj);
    /*console.log(obj.results[0].getCommandValue());*/
    
    for(let i=0;i <numberOfCommands;i++){

   
 
     if((obj.results[i].commandType === cmdType[0])){
             
             this.mode = obj.results[i].getCommandValue()
             
              res.push({completed: true})
    }
    
    if((obj.results[i].commandType === cmdType[1])){

           let status = true
           
           if (this.mode === 'LOW_POWER'){
               status = false;
               
           }else{
             this.position = obj.results[i].getCommandValue()
           }

           res.push({completed: status,
                    roverStatus: { mode: this.mode , generatorWatts:this.generatorWatts, position: this.position} })

    }

     if (obj.results[i].commandType === cmdType[2]){
    
    //this.mode = obj.results[i].getCommandValue();
     res.push({completed: true,
               roverStatus: { mode: this.mode , generatorWatts:this.generatorWatts, position: this.position}
     })
     }

     if(!)




  }
  
 
  let roverObj = {

      message : obj.message,
      results :res
   }
  
    return roverObj
  }

}
 module.exports = Rover;

   // console.log(obj.results[i].getCommandValue())
     //console.log(obj.results[i].commandType)
    
  
    //build the rover object

    //let [name]= Object.keys(message)
    //let results = Object.keys(message)[1];
   //console.log(Object.keys(message)[1])
   //return  message.name;
   //let obj = message.getMessage();

      //let cmd = command.getCommand();
     //let arrOfResults = [];
     //console.log(obj)
     /*let newResultObj = { 

       message : obj.message,
       results : arrOfResults.push(roverReponse(obj.commands,this.mode,this.generatorWatts , this.position ))

     }*/
   
   
    //renameKey(obj,'commands','results');
     //console.log(command.getCommand(obj.results[0].commandType));
    /*for(let i=0 ; i< obj.length ; i++){
    
    createRoverResults()
  
    }*/
    //console.log(convertCommandsToResults(obj.results[1].commandType));
   //console.log(createRoverResults(obj,this.generatorWatts,this.position));
  
  
 /*function renameKey(obj, old_key, new_key) {    
          // check if old key = new key   
              if (old_key !== new_key) {                   
                 Object.defineProperty(obj, new_key, // modify old key 
                                      // fetch description from object 
                 Object.getOwnPropertyDescriptor(obj, old_key)); 
                 delete obj[old_key];                // delete old key 
                 } 
 } */
  
  /*function roverResponse(cmd,mod,watts,pos){
    
    let resp = {}
   
   for(let i=0;i<cmd.length;i++){
      
      if (cmd[i].commandType === 'MOVE'){
      
         resp = { completed : true }
      }





   }
    if(cmd === 'STATUS_CHECK'){

       newResultObj = { completed : true }
    }else{

      newResultObj = { completed : true, 
                       roverStatus: { mode : mod},
                                      generatorwatts : watts,
                                      position: pos 
                                    }
                      }    
          

    return newResultObject

  }*
   return newResultObject
  /*function convertCommandsToResults (cmdObject){
    
    let value = Command.getCommand(cmdObject.commandType);
   
   return value
  }*/

