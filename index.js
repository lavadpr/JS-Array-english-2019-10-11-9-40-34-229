// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("a: " + Array.isArray(a) + " b: " + Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0; i< a.length; i++) {
    a[i] = a[i]*2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
	if(i != colors.length - 1)
		console.log(" ");
}
// case 2 output: 'Red+Green+White+Black'
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
	if(i != colors.length - 1)
		console.log("+");
}
// case 3 output: 'Red,Green,White,Black'
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
	if(i != colors.length - 1)
		console.log(",");
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a, b){return b-a}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var frequent = 1;
var current = 0;
var value;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 current++;
                if (frequent<current)
                {
                  frequent=current; 
                  value = a[i];
                }
        }
        current=0;
}
console.log(value);
