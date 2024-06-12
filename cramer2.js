function res() {
	var a1=parseFloat(document.getElementById('a1').value);
	var b1=parseFloat(document.getElementById('b1').value);
	var c1=parseFloat(document.getElementById('c1').value);

	var a2=parseFloat(document.getElementById('a2').value);
	var b2=parseFloat(document.getElementById('b2').value);
	var c2=parseFloat(document.getElementById('c2').value);

	

	var delta=((a1*b1)-(a2*b2));
	var deltax=((c1*b1)-(c2*b2));
	var deltay=((a1*b2)-(a2*c1));

	var x=deltax/delta;
	var y=deltay/delta;
	document.getElementById('x').value=x;
	document.getElementById('y').value=y;

}