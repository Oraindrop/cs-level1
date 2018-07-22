var input1;     // input
var maxNumber;  // input1, String -> Number
var result;     // html element 
var numbers = {};   // number object
numbers.all = [];   // number array
numbers.prime = []; // prime array
/**
 * 
 * @param {Number} num 
 * @returns {Boolean}
 * @description 파라미터의 소수여부를 확인하는 메소드.
 * 
 */
numbers.isPrime = function(num) {
    var i = 0;
    for(i = 2; i < num; i++){
        if(num % i === 0){
            console.log("num", num);
            console.log("i", i);
            break;
        }
    }
    if(i === num) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {Number} maxNum 
 * @description 2이상 maxNum 이하의 자연수를 속성 all 배열에 추가하는 메소드.
 */
numbers.addAll = function(maxNum){
    for(var i = 2; i <= maxNum; i++){        
        this.all.push(i);
    }
    console.log("this.all", this.all);
}

/**
 * 
 * @description prime 배열에 소수를 추가하는 메소드.
 */
numbers.addPrime = function(){
    for(var i = 0; i < this.all.length; i++){
        if(this.isPrime(this.all[i])){
            this.prime.push(this.all[i]);
        }
    }
}

/**
 * @returns {String} resultString
 * @description prime array 리스트를 출력용 String 형식으로 리턴
 */
numbers.getAllPrimes = function(){
    var resultString = "";
    for(var i = 0; i < this.prime.length; i++){
        resultString += (i+1) + "번째 소수 : " + this.prime[i] + "<br>";
    }
    console.log("resultString", resultString);
    return resultString;
}


result = document.getElementById("result");
console.log("result", result);

input1 = prompt("입력 값 n (2~10000) 을 입력하세요.");
console.log("input1", input1);

maxNumber = Number(input1);
console.log("maxNumber", maxNumber);

if(input1 === null || input1 === ""){
    // input is null
    result.innerHTML = "입력 값을 입력하지 않았습니다."
}
else if(isNaN(maxNumber)){
    // type casting error
    result.innerHTML = "입력 값이 잘못되었습니다."
}
else if(Math.round(maxNumber) !== maxNumber){
    // out of bound
    result.innerHTML = "입력 값이 정수가 아닙니다."
}
else if(maxNumber < 2 || maxNumber > 10000){
    // out of bound
    result.innerHTML = "입력 값이 범위를 벗어났습니다."
}
else {
    numbers.addAll(maxNumber);
    numbers.addPrime(); 
    var str = numbers.getAllPrimes();
    console.log("str", str);
    result.innerHTML = str;
}
