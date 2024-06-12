function res() {
	var a1=document.getElementById('a1').value;
	var b1=document.getElementById('b1').value;
	var c1=document.getElementById('c1').value;

	var a2=document.getElementById('a2').value;
	var b2=document.getElementById('b2').value;
	var c2=document.getElementById('c2').value;

	a1=parsefloat(a1);
	b1=parsefloat(b1);
	c1=parsefloat(c1);
	a2=parsefloat(a2);
	b2=parsefloat(b2);
	c2=parsefloat(c2);

	var delta=((a1*b1)-(a2*b2));
	var deltax=((c1*b1)-(c2*b2));
	var deltay=((a1*b2)-(a2*c1));

	var x=deltax/delta;
	var y=deltay/delta;
	document.getElementById('x').value=x;
	document.getElementById('y').value=y;

}