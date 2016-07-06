
// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
	s1 = sentence.split("").sort().join("").trim();
	console.log(s1);
	for(var i = 0; i < s1.length - 1 ; i++){
		if (s1[i] === s1[i+1]){
			return 'no';
		}
	}
	return 'yes';
  
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var found = false;
	for(var i = 1; i < 11; i++){
		for(var j = 0; j < numbers.length; j++){
			if(i === numbers[j]){
				found = true;
			}
		}
		if(found === false){
			return i;
		}
		else{
			found = false;
		}
	}

}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var start1 = 0;
	var start2;
	if (array1.length !== array2.length){
		return 'no';
	}
	for (var i = 0; i < array2.length; i++){
		if(array2[i] === array1[0]){
			start2 = i;
			break;
		}
	}

	while(start1 < array1.length){
		if(start2 === array1.length){
			start2 = 0;
		}
		if(array1[start1] !== array2[start2]){
			return 'no';
		}
		else{
			start1++;
			start2++;
		}
	}
	return 'yes';

}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {

}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	return doItTwice(f) + doItTwice(f);

}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	first_name: first,
    	last_name: last,
    	age: age,
    	email: email,
    	fav_color: color
    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	var count = 0;
	for(var key in obj.children){
		count++;
	}
	console.log(count);
	return count;

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	var name = [first, last];
	name = name.join(" ").trim();
	console.log(name);
	return greeting(name);

}