// JavaScript Documen

function q1Calc(){
		var no = parseInt(document.getElementById('q1').value);
		var sum = 0;
		for (var i = 1; i< no; i++)
		{
			if ( i % 3 === 0 || i%5 === 0)
			{
				sum = sum + i;
			}
		}
		document.getElementById('a1').value = sum;
}
function q2Calc(){
		var no = parseInt(document.getElementById('q2').value);
		var a = 0;
		var b  = 1;
		var c = 1;
		var sum = 0;
		while( c <= no)
		{
				c = a+b;
				a = b;
				b = c;
				if ( c%2 === 0)
					sum = sum + c;
		}
		document.getElementById('a2').value = sum;
}
