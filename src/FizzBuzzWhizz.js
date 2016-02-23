function FizzBuzzWhizz(input_data, test_number){
    if (test_number % 10 === input_data[0] || Math.floor(test_number / 10) === input_data[0]){
        return 'Fizz';
    }
    else if(test_number % input_data[0] === 0){
            if(test_number % input_data[1] === 0){
                if(test_number % input_data[2] === 0){
                    return 'FizzBuzzWhizz';
                }
                return 'FizzBuzz';
            }
            if(test_number % input_data[2] === 0){
                return 'FizzWhizz';
            }
        return 'Fizz';
    }
    else if(test_number % input_data[1] === 0){
        if(test_number % input_data[2] === 0){
            return 'BuzzWhizz';
    }
        return 'Buzz';
    }
    else if(test_number % input_data[2] ===0){
        return 'Whizz';
    }
    else{
        return test_number;
    }
}

function getInputData(){
    input_raw_data = prompt('plz input a Integer(>0 and <=100)');
    var patt = new RegExp;
    patt.compile(/\d/g);
    var input_data1 = patt.exec(input_raw_data);
    var input_data2 = patt.exec(input_raw_data);
    var input_data3 = patt.exec(input_raw_data);
    var input_data = [];
    input_data.push(parseInt(input_data1));
    input_data.push(parseInt(input_data2));
    input_data.push(parseInt(input_data3));
    return input_data;
}


function runInstance(){
    input_data = getInputData();
    var count = 1;
    while(count <= 100){
        console.log(FizzBuzzWhizz(input_data, count));
        count += 1;
    }
}






