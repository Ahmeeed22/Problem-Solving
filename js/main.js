/**
 * extract repeated number with count 
 */
var arr=[1,2,5,4,67,5,4,5,5,2,9]
function extractRepeated(arr) {
    arr=arr.sort((a,b)=>{
        return a-b
    })
    result=[];
    var flag=1 
    for (let index = 1; index < arr.length; index++) {
      if(arr[index] == arr[index-1]){
        if (flag==1) {
            result.push({value:arr[index],repeat:flag+1})
        } else {
            result[result.length-1]={value:arr[index],repeat:flag+1};
        }
        flag++
      }else{
        flag=1
      }   
    }
    return result
}
console.log(extractRepeated(arr));

/**
 * Detect Capital
 */
var word='Ajkhfh' ;
function detectCapital(word=''){
    if(word.toLowerCase()===word){
        console.log(true);
    }else if (word.toUpperCase()===word){
        console.log(true);
    }else if((word.charAt(0).toUpperCase()+word.slice(1))===word){
        console.log(true);
    }else {
        console.log(false);
    }
}
detectCapital()
/**
 * convert to binary
 */
function binary1(decimal) {
	let result = "";
	if (decimal == 0) {
		result = "0";
	}
	while(decimal >0){
        result +=decimal%2;
        decimal =Math.floor(decimal/2)
    }
    return result.split("").reverse().join("")
}
console.log(binary1(560));
/**
 * get min and max from arr
 */
// first way
console.log(Math.min(...[1,3,5,-6]));
// second way
console.log(Math.min.apply(Math,[1,3,5,-6]));
/**
 *  Print this     *
 *                ***
 *               *****   
 */
    function drowHaram(height){
        var result=""
        for (let index = 1; index < height; index++) {
            let stepResult="";
            for (let indexs = 0; indexs < height-index; indexs++) {
                stepResult +=" "
            }
            for (let indexstart = 0; indexstart < index*2-1; indexstart++) {
                stepResult +="*"
            }
            result +=stepResult +"\n";
            stepResult = ""
        }
        return result
    }
    console.log(drowHaram(5));
    var arraynew=[1,3,6,9,22]
    for (let index = 0; index < arraynew.length; index++) {
        arraynew[index]=arraynew[index]+2
    }
    console.log(arraynew);

/**
 *  find the missing letters 
 *  
 */ 

function missingLetters(word='abdf'){
    var charsMissing=[]
    word=word.toLowerCase()
    for (let index=1 ; index < word.length; index++){
        var x ='' ;
        if (!(word.charCodeAt(index -1)+1 === word.charCodeAt(index))) {
            x=String.fromCharCode(1+word.charCodeAt(index -1))
            x? charsMissing.push(x):''
            word = word.substring(0, index) + x + word.substring(index, word.length);
        } 
    }  
    return charsMissing ; 
}
console.log(missingLetters('adf'));

/**
 * numbers to reversed array
 */
function convertNoToRevArr(no=85983739){
    var arr =no.toString().split("")
    // var arr =[...no.toString()] ;
   return arr.reverse().map(x=> +x);
}
console.log(convertNoToRevArr(78943983792));

/**
 * find longest word in a string
 */
function findingLongest(word='hi javascript') {
// first solution    
    // var arr=word.split(' ')
    // var obj={order:0 ,length:0}
    // for (let index = 0; index < arr.length; index++) {
    //     if (obj.length<arr[index].length) {
    //         obj={order:index,length:arr[index].length}
    //     }
    // }
    // console.log(arr[obj.order]);

// second solution    
    var arr=word.split(' ').reduce((prev,current)=>{
        return prev.length > current.length ? prev : current ;
    })
    console.log(arr);
}
findingLongest('hi java script developers') ;


