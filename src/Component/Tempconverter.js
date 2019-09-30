export function Convert(val,input){
    var answer = new Object();
    switch(input){
        case 'celcius':
            answer.celcius = val;
            answer.fahrenheit = (9/5*val+32).toFixed(3);
            answer.kelvin = (val+273).toFixed(3);
            return answer;
        case 'fahrenheit':
            answer.celcius = ((val-32)*5/9).toFixed(3);
            answer.fahrenheit = val;
            answer.kelvin = ((val-32)*5/9 + 273).toFixed(3);
            return answer;
        case 'kelvin':
            answer.celcius = (val - 273).toFixed(3);
            answer.fahrenheit =  (9 / 5 * (val - 273) + 32).toFixed(3);
            answer.kelvin =  val;
            return answer;
  
    }
}