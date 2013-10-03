module.exports = function(vector1, vector2) {

  if(vector1.length == 2 && vector2.length == 2){
	var result = vector1[0]*vector2[1] - vector1[1]*vector2[0];
  }else if(vector1.length == 3 && vector2.length == 3){
	var result = new Array(3);
	result[0] = 0;
	result[1] = 1;
	result[2] = 2;
  }else{
	var result =  null;
  }
  
  return {
    result: result
  }
}