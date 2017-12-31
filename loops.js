function forLoop(array){
  for (let i = 0; i < 25; i++){
    array[array.length + i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
  }
  return array
}