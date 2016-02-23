function FizzBuzzWhizz(input_data1, input_data2, input_data3, test_number){
    if (test_number % 10 === input_data1 || Math.floor(test_number / 10) === input_data1){
        return 'Fizz';
    }
    else if(test_number % input_data1 === 0){
        if(test_number % input_data2 === 0){
            return 'FizzBuzz';
        }
        if(test_number % input_data3 === 0){
            return 'FizzWhizz';
        }
        return 'Fizz';
    }
    else if(test_number % input_data2 === 0){
    if(test_number % input_data3 === 0){
        return 'BuzzWhizz';
    }
        return 'Buzz';
    }
    else if(test_number % input_data3 ===0){
        return 'Whizz';
    }
    else{
        return test_number;
    }
}





