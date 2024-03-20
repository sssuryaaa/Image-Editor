// Write your javascript here 

function fun(evt){
	if(evt.currentTarget.className==="btn neg"){
		var x=document.querySelectorAll('.btn');
		for(let i=0;i<x.length;i++){
			x[i].className="btn neg";
		}
		evt.currentTarget.className="btn pos";

		var y=document.getElementsByClassName('name')[0];
		y.innerText=evt.currentTarget.innerText;

		var z=document.querySelectorAll('.slid');
		for(let i=0;i<z.length;i++){
			z[i].className="slid neg";
		}
		if(evt.currentTarget.innerText=="Saturation"){
			document.getElementById("sat").className="slid pos";
			inform("sat");
		}
		else if(evt.currentTarget.innerText=="Brightness"){
			document.getElementById("brt").className="slid pos";
			inform("brt");
		}
		else if(evt.currentTarget.innerText=="Grayscale"){
			document.getElementById("gry").className="slid pos";
			inform("gry");
		}
		else{
			document.getElementById("inv").className="slid pos";
			inform("inv");
		}	
	}
}

function func(evt){
	document.getElementsByClassName('value')[0].innerText=evt.currentTarget.value+"%";

	var x=document.getElementsByTagName("img");
	var y=document.getElementsByClassName("btn pos")[0].innerText;

	if(y=="Saturation"){
		let pos=x[0].style.filter.search('saturate');
		let count=0,i=pos+9;
		if(pos!=-1){
			while(1){
				if(x[0].style.filter[i]<='9' && x[0].style.filter[i]>='0'){
					count+=1;
					i++;
					continue;
				}
				break;
			}
			if(count==1){
				let temp=x[0].style.filter.substr(pos+9,1);
				let temp1=x[0].style.filter.substring(0,pos+9);
				let temp2=x[0].style.filter.substring(pos+10);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else if(count==2){
				let temp=x[0].style.filter.substr(pos+9,2);
				let temp1=x[0].style.filter.substring(0,pos+9);
				let temp2=x[0].style.filter.substring(pos+11);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else{
				let temp=x[0].style.filter.substr(pos+9,3);
				let temp1=x[0].style.filter.substring(0,pos+9);
				let temp2=x[0].style.filter.substring(pos+12);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;

			}
		}
		else{
			x[0].style.filter+="saturate("+evt.currentTarget.value+"%)";
		}
	}
	else if(y=="Brightness"){
		let pos=x[0].style.filter.search('brightness');
		let count=0,i=pos+11;
		if(pos!=-1){
			while(1){
				if(x[0].style.filter[i]<='9' && x[0].style.filter[i]>='0'){
					count+=1;
					i++;
					continue;
				}
				break;
			}
			if(count==1){
				let temp=x[0].style.filter.substr(pos+11,1);
				let temp1=x[0].style.filter.substring(0,pos+11);
				let temp2=x[0].style.filter.substring(pos+12);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else if(count==2){
				let temp=x[0].style.filter.substr(pos+11,2);
				let temp1=x[0].style.filter.substring(0,pos+11);
				let temp2=x[0].style.filter.substring(pos+13);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else{
				let temp=x[0].style.filter.substr(pos+11,3);
				let temp1=x[0].style.filter.substring(0,pos+11);
				let temp2=x[0].style.filter.substring(pos+14);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
		}
		else{
			x[0].style.filter+="brightness("+evt.currentTarget.value+"%)";
		}
	}
	else if(y=="Grayscale"){
		let pos=x[0].style.filter.search('grayscale');
		let count=0,i=pos+10;
		if(pos!=-1){
			while(1){
				if(x[0].style.filter[i]<='9' && x[0].style.filter[i]>='0'){
					count+=1;
					i++;
					continue;
				}
				break;
			}
			if(count==1){
				let temp=x[0].style.filter.substr(pos+10,1);
				let temp1=x[0].style.filter.substring(0,pos+10);
				let temp2=x[0].style.filter.substring(pos+11);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else if(count==2){
				let temp=x[0].style.filter.substr(pos+10,2);
				let temp1=x[0].style.filter.substring(0,pos+10);
				let temp2=x[0].style.filter.substring(pos+12);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else{
				let temp=x[0].style.filter.substr(pos+10,3);
				let temp1=x[0].style.filter.substring(0,pos+10);
				let temp2=x[0].style.filter.substring(pos+13);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
		}
		else{
			x[0].style.filter+="grayscale("+evt.currentTarget.value+"%)";
		}
	}
	else{
		let pos=x[0].style.filter.search('invert');
		let count=0,i=pos+7;
		if(pos!=-1){
			while(1){
				if(x[0].style.filter[i]<='9' && x[0].style.filter[i]>='0'){
					count+=1;
					i++;
					continue;
				}
				break;
			}
			if(count==1){
				let temp=x[0].style.filter.substr(pos+7,1);
				x[0].style.filter=x[0].style.filter.replace(temp,evt.currentTarget.value);
				let temp1=x[0].style.filter.substring(0,pos+7);
				let temp2=x[0].style.filter.substring(pos+8);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else if(count==2){
				let temp=x[0].style.filter.substr(pos+7,2);
				let temp1=x[0].style.filter.substring(0,pos+7);
				let temp2=x[0].style.filter.substring(pos+9);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
			else{
				let temp=x[0].style.filter.substr(pos+7,3);
				let temp1=x[0].style.filter.substring(0,pos+7);
				let temp2=x[0].style.filter.substring(pos+10);
				x[0].style.filter=temp1+evt.currentTarget.value+temp2;
			}
		}
		else{
			x[0].style.filter+="invert("+evt.currentTarget.value+"%)";
		}
	}
}

function inform(idname){
	document.getElementsByClassName("value")[0].innerText=document.getElementById(idname).value+"%";
}
let rotate=0,flipVertical=1,flipHorizontal=1;
function change(val){
	var x=document.getElementsByTagName('img')[0];
	var y=document.getElementsByClassName("wrapper")[0];
	if(val=='left'){
		x.style.transform+="rotate(270deg)";
		rotate-=90;
	}
	else if(val=='right'){
		x.style.transform+="rotate(90deg)";
		rotate+=90;
	}
	else if(val=='vert'){
		x.style.transform+="scaleY(-1)";
		flipVertical = flipVertical === 1 ? -1 : 1;
	}
	else{
		x.style.transform+="scaleX(-1)";
		flipHorizontal = flipHorizontal === 1 ? -1 : 1;
	}
}

function reset(){
	var x=document.getElementsByTagName('img')[0];
	x.style.transform="";
	x.style.filter="";

	var y=document.querySelectorAll('.btn');
	y[0].className="btn pos";
	for(let i=1;i<y.length;i++){
		y[i].className="btn neg";
	}

	var z=document.querySelectorAll(".slid");
	z[0].className="slid pos";
	z[1].className="slid neg";
	z[2].className="slid neg";
	z[3].className="slid neg";

	z[0].value="100";
	z[1].value="100";
	z[2].value="0";
	z[3].value="0";

	document.getElementsByClassName('name')[0].innerText="Saturation";
	document.getElementsByClassName('value')[0].innerText="100%";

	rotate=0;
	flipHorizontal=1;
	flipVertical=1;
}

function upload(evt){
	document.getElementsByTagName("img")[0].src=URL.createObjectURL(evt.currentTarget.files[0]);
	reveal();
}

function reveal(){
	var x=document.getElementsByClassName('container')[0];
	x.className=x.className.replace(" disable","");
}

function save(evt){
	var x=document.getElementsByTagName('img')[0];

	const canvas=document.createElement('canvas');
	const context=canvas.getContext('2d');

	canvas.width=x.naturalWidth;
	canvas.height=x.naturalHeight;

	let b=document.getElementById('brt').value;
	let s=document.getElementById('sat').value;
	let g=document.getElementById('gry').value;
	let i = document.getElementById('inv').value;

	context.filter='brightness('+b+'%) saturate('+s+'%) grayscale('+g+'%) invert('+i+'%)';
	context.translate(canvas.width / 2, canvas.height / 2);
	if(rotate !== 0) {
        context.rotate(rotate * Math.PI / 180);
    }
    context.scale(flipHorizontal, flipVertical);

	context.drawImage(x,-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

	const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}
