var fs = require('fs');
//read the data from text file and store in variable
var numbers = fs.readFileSync('data.txt',"utf-8").split(',');

//create a file to store the output of sort array numbers
fs.writeFile('./output.txt','Output of Array', err => {
  if (err) {console.error(err) 
    return
  }

});
//Show numbers before arranging
fs.appendFile('./output.txt',`${'\n'}${'Original numbers list:'}${numbers.toString()}`, err => {
    if (err) {console.error(err) 
      return
    }
  
  });

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length -1 ; j++)
    {
        //Compare the numbers in the inner loop
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;

        }
    }
}

//Show numbers in ascending order
fs.appendFile('./output.txt',`${'\n'}${'Numbers list After sorting:'}${numbers.toString()}`, err => {
    if (err) {console.error(err) 
      return
    }
  
  });

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length -1 ; j++)
    {
        //Compare the numbers in the inner loop
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}
//Show numbers in descending order
fs.appendFile('./output.txt',`${'\n'}${'Numbers list After Desc sorting:'}${numbers.toString()}`, err => {
    if (err) {console.error(err) 
      return
    }
  
  });

