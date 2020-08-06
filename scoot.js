
const edit = function(arr, str, cmd){
const indexMarker = cmd.indexOf("::")
const cmdStr = cmd.substring(0,indexMarker)
const cmdCut = cmd.substring(indexMarker + 2, cmd.length)
const cmdNum = Number(cmdCut)

    if(indexMarker <= 0 || cmdNum > arr.length){
      return 'invalid cmd parameter or length value'
    }
    else if(cmdStr === 'shave'){
    arr.splice(cmdNum, arr.length, str)
    return arr
    }
    else if(cmdStr === 'bite'){
      if(cmdNum < 0){
        return 'value must be greater than zero'
      }
    arr.splice(0, cmdNum, str)
    return arr
    }
    else if(cmdStr === 'gut'){
    //same num val are eating the array backwards
    if (cmdNum === 0){
    arr.splice(0, arr.length, str)
    return arr
    } return 'leave empty or add a zero'

    }
  /////////change to saw
    else if(cmdStr === 'saw'){
    //same num val are eating the array backwards
      if (cmdNum > -1){
    arr.splice(0, arr.length - cmdNum, str)
    return arr
    } return 'leave empty or add a zero'
    }
    else if(cmdStr === 'scoot'){
      //use negative to go backwards
    arr.splice(cmdNum, 0, str)
    return arr
    }
    else if(cmdStr === 'swap'){
    //same num val are eating the array backwards
      if (cmdNum <= 0){
        return 'add value or value must be greater than zero'
      }else {
            arr.splice(cmdNum - 1, 1, str)
    return arr
      }


    }
  else if(cmdStr === '?'){
      if(cmdNum < -4){
        return 'value must be greater than zero'
      }
    arr.splice(arr.length*2, cmdNum, str)
    return arr
    }
}





//empty policed cells to create a dark zone until area is clear

//add to end > working
// const bench = function(array){
//     const arrLength = array.length
//    const num = Math.round(Math.random() * arrLength)
//    setInterval(() => console.log(edit(array, '📄', 'scoot::' + num)), 100)
//
//    setInterval(() => console.log(edit(array, '🦠', 'scoot::' + num)), 2600)
//
//    //setInterval(() => console.log(edit(array, '🦷', 'bite::' + num)), 2500)
//    setInterval(() => console.log(edit(array, '😷', 'scoot::' + num)), 500)
//    setInterval(() => console.log(edit(array, '😷', 'scoot::' + num)), 500)
//
//
//
//   return
// }
//scoot patterns
//scoot functions
//swap policed cells

//Self assembling table formations with scoot
// const blobCtr = ['🔐', '🔐','🔐', '🔐','🔐', '🔐','🔐', '🔐'];
//
// bench(blobCtr)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question('add a count to scoot in the array: ', val => {
//   const array = ['🔐', '🔐','🔐', '🔐','🔐', '🔐','🔐']
//   console.log(edit(array, '📄', 'scoot::' + val))
//   readline.close();
// });

readline.question('enter scoot command: ', val => {
  const array = ['🔐', '🔐','🔐', '🔐','🦠', '🦠','🦠']
  console.log(edit(array, '📄', val))
  readline.close();
});
