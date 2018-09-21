/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
	var counter = 0;
		for(i=0; i < preferences.length; i++){
		  if (preferences[i]>i+1){
			var a = preferences[i];
			var b = preferences[a-1];
			var c = preferences[b-1];
			if(c == i+1 && b > i+1){
				counter++;
			}
		  }    
		}
return counter;
};
