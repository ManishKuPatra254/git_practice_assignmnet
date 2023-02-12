let str = "madam";
let empty_string ="";
for(let i = str.length-1;i>=0;i--){
  empty_string = empty_string+str[i];
}
  if(empty_string==str){
    console.log("It is a palindrome number");
  }
  else{
    console.log("It is not a palindrome number");
}