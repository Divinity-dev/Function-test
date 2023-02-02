function Stringlength(str){
    let length = 0;
    for(let i = 0; i<str.length; i++){
      length +=1;
    };
    if(length > 0 && length<= 10){
    return length;
}else{
    return;
}
}
module.exports = Stringlength;