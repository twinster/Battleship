var  shipSize =0;
var shipsize1=0;
var  targetdata4=0;
var targetdataj4=0;


var  targetdata3a=0;
var targetdataj3a=0;
var  targetdata3b=0;
var targetdataj3b=0;

var  targetdata2a=0;
var targetdataj2a=0;
var  targetdata2b=0;
var targetdataj2b=0;
var  targetdata2c=0;
var targetdataj2c=0;

var checkdatai=0;
var checkdataj=0;

var checkdatai4=0;
var checkdataj4=0;

var checkdatai3a=0;
var checkdataj3a=0;
var checkdatai3b=0;
var checkdataj3b=0;

var checkdatai2a=0;
var checkdataj2a=0;
var checkdatai2b=0;
var checkdataj2b=0;
var checkdatai2c=0;
var checkdataj2c=0;

var checkdatai1a=0;
var checkdataj1a=0;
var checkdatai1b=0;
var checkdataj1b=0;
var checkdatai1c=0;
var checkdataj1c=0;
var checkdatai1d=0;
var checkdataj1d=0;







function load(){
    var container = document.getElementById("di");
	var container1=document.getElementById("di2");
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			container.innerHTML += '<div class="chck" id="ch1" data-i='+i+' data-j='+j+'></div>';
			container1.innerHTML += '<div class="chck" id="ch1" data-i1='+i+' data-j='+j+'></div>';

		}
	}
	console.log(container);
	console.log(container1);
}


var p=1;


var ar=[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


	var compar=[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

 

function Startgame(){



	document.getElementById("userscore").innerHTML=" "+0+" ";
	document.getElementById("compscore").innerHTML=" "+0+" ";


	

	
	

	var m=Math.ceil(Math.random()*2);

	

	//first rand
	if (m==1){
	for (var i = 1; i <=10; i++) {
		for (var j = 1; j <=10; j++) {
			if(j<=7){
				ar[i][j]=4;
			}
			else if (j==8){
				ar[i][j]=3;
			}
			else if (j==9){
				ar[i][j]=2;
			}
			else if (j==10){
				ar[i][j]=1;
			}



	}
	}

		//random for ship4
		var ch=0;
		
		while(ch==0){
		
		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		console.log(rw,cl,'as');
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+5 ; j++) {
				if(ar[rw][cl]==4){
					compar[i][j]=-1;
					if(j<cl+3){
						compar[rw][j+1]=-1000;
					}
					ch=1;

					}

				}
			}

		}
		
		//random for ship3a
		var ch3a=0;
		while(ch3a==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=3){
		var sum=0;
		for (var j = cl; j <cl+3 ; j++) {
			sum+=compar[rw][j];
		}

		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+4 ; j++) {
				
				
				if(sum==0){
					compar[i][j]=-1;
					if(j<cl+2){
						compar[rw][j+1]=-1000;
					}
					ch3a=1;

					}

				}
			}

		}
	}


		//rand for ship3b
		var ch3b=0;
		while(ch3b==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=3){
		var sum=0;
		for (var j = cl; j <cl+3 ; j++) {
			sum+=compar[rw][j];
		}

		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+4 ; j++) {
				
				
				if(sum==0){
					compar[i][j]=-1;
					if(j<cl+2){
						compar[rw][j+1]=-1000;
					}
					ch3b=1;

					}

				}
			}

		}
	}
	//rand for ship2a
		var ch2a=0;
		while(ch2a==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var j = cl; j <cl+2 ; j++) {
			sum+=compar[rw][j];
		}

		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+3 ; j++) {
				
				
				if(sum==0){
					compar[i][j]=-1;
					if(j<cl+1){
						compar[rw][j+1]=-1000;
					}
					ch2a=1;

					}

				}
			}

		}
	}
		//rand for chip2b
		var ch2b=0;
		while(ch2b==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var j = cl; j <cl+2 ; j++) {
			sum+=compar[rw][j];
		}

		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+3 ; j++) {
				
				
				if(sum==0){
					compar[i][j]=-1;
					if(j<cl+1){
						compar[rw][j+1]=-1000;
					}
					ch2b=1;

					}

				}
			}

		}
	}

		var ch2c=0;
		while(ch2c==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var j = cl; j <cl+2 ; j++) {
			sum+=compar[rw][j];
		}

		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+3 ; j++) {
				
				
				if(sum==0){
					compar[i][j]=-1;
					if(j<cl+1){
						compar[rw][j+1]=-1000;
					}
					ch2c=1;

					}

				}
			}

		}
	}
		


	}
	//second rand
	else if (m==2){
		for (var i = 1; i <=10; i++) {
		for (var j = 1; j <=10; j++) {
			if(i<=7){
				ar[i][j]=4;
			}
			else if (i==8){
				ar[i][j]=3;
			}
			else if (i==9){
				ar[i][j]=2;
			}
			else if (i==10){
				ar[i][j]=1;
			}
	}
	}
		//rand for ship4
		var ch=0;
		
		while(ch==0){
		
		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		console.log(rw,cl,'as');
		for (var i = rw-1; i <rw+5 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				if(ar[rw][cl]==4){
					compar[i][j]--;
					if(i<rw+3){
						compar[i+1][cl]=-999;
					}	
					ch=1;

					}

				}
			}

		}
		



		//random for ship3a
		var ch3a=0;
		while(ch3a==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=3){
		var sum=0;
		for (var i = rw; i <rw+3 ; i++) {
			sum+=compar[i][cl];
		}

		
		for (var i = rw-1; i <rw+4 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw+2){
						compar[i+1][cl]=-999;
					}
					ch3a=1;

					}

				}
			}
		}

		}
		//rand for  ship3b
		var ch3b=0;
		while(ch3b==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=3){
		var sum=0;
		for (var i = rw; i <rw+3 ; i++) {
			sum+=compar[i][cl];
		}

		
		for (var i = rw-1; i <rw+4 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw+2){
						compar[i+1][cl]=-999;
					}
					ch3b=1;

					}

				}
			}
		}

		}
		//rand for ship2a
		var ch2a=0;
		while(ch2a==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var i = rw; i <rw+2 ; i++) {
			sum+=compar[i][cl];
		}

		
		for (var i = rw-1; i <rw+3 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw+1){
						compar[i+1][cl]=-999;
					}
					ch2a=1;

					}

				}
			}
		}

		}
		//rand for ship2b
		
		var ch2b=0;
		while(ch2b==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var i = rw; i <rw+2 ; i++) {
			sum+=compar[i][cl];
		}

		
		for (var i = rw-1; i <rw+3 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw+1){
						compar[i+1][cl]=-999;
					}
					ch2b=1;

					}

				}
			}
		}

		}

		//rand for ship2c

		var ch2c=0;
		while(ch2c==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=2){
		var sum=0;
		for (var i = rw; i <rw+2 ; i++) {
			sum+=compar[i][cl];
		}

		
		for (var i = rw-1; i <rw+3 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw+1){
						compar[i+1][cl]=-999;
					}
					ch2c=1;

					}

				}
			}
		}

		}

		



}


		else if(m==3) {
			for (var i = 10; i >=1; i--) {
				for (var j = 10; j >=1; j--) {
					if (i>=4){
						ar[i][j]=4;
					}
					if(i==3){
						ar[i][j]=3;
					}
					if(i==2){
						ar[i][j]=2;
					}
					if(i==1){
						ar[i][j]=1;
					}

				}	
			}
		}

		else if(m==4) {
			for (var i = 10; i >=1; i--) {
				for (var j = 10; j >=1; j--) {
					if (j>=4){
						ar[i][j]=4;
					}
					if(j==3){
						ar[i][j]=3;
					}
					if(j==2){
						ar[i][j]=2;
					}
					if(j==1){
						ar[i][j]=1;
					}

				}	
			}
		}
		


		//rand for ship1a
		var ch1a=0;
		while(ch1a==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=1){
		var sum=0;
		sum=compar[rw][cl];
		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw){
						compar[i+1][cl]=-999;
					}
					ch1a=1;

					}

				}
			}
		}

		}

		//rand for ship1b
		var ch1b=0;
		while(ch1b==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=1){
		var sum=0;
		sum=compar[rw][cl];
		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw){
						compar[i+1][cl]=-999;
					}
					ch1b=1;

					}

				}
			}
		}

		}

		//rand for ship1c
		var ch1c=0;
		while(ch1c==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=1){
		var sum=0;
		sum=compar[rw][cl];
		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw){
						compar[i+1][cl]=-999;
					}
					ch1c=1;

					}

				}
			}
		}

		}
		//rand for ship1d
		var ch1d=0;
		while(ch1d==0){
		

		var rw=Math.ceil(Math.random()*10);
		var cl=Math.ceil(Math.random()*10);
		if(ar[rw][cl]>=1){
		var sum=0;
		sum=compar[rw][cl];
		
		for (var i = rw-1; i <rw+2 ; i++) {
			for (var j = cl-1; j <cl+2 ; j++) {
				
				
				if(sum==0){
					compar[i][j]--;
					if(i<rw){
						compar[i+1][cl]=-999;
					}
					ch1d=1;

					}

				}
			}
		}

		}
		console.table(compar);







	









	var elem = document.getElementById('button');
	document.getElementById("di").style.opacity=1;
	document.getElementById("di2").style.opacity=1;
 	elem.parentNode.removeChild(elem);


 	document.getElementById("buttonb").style.visibility="visible";
	document.getElementById("note").style.visibility="visible";
	document.getElementById("note1").style.visibility="visible";




}	








function ready(){
	for (var i=0; i<100;i++){
		var div=document.getElementsByClassName("chck")[i];
		div.setAttribute("onmousedown","shootcomp(this)");
		div.setAttribute("onmouseup","shootcompup(this)");
		

}
	document.getElementById("di2").removeAttribute("ondrop");
	document.getElementById("di2").removeAttribute("ondragover");
	document.getElementById("di2").removeAttribute("ondragleave");


	document.getElementById("ship4").removeAttribute("draggable");
	document.getElementById("ship4").removeAttribute("onclick");

	for (var i = 0; i < 4; i++) {
		document.getElementsByClassName("one")[i].removeAttribute("draggable");
		document.getElementsByClassName("one")[i].style.cursor="default";


	}

	for (var i = 0; i < 3; i++) {
		document.getElementsByClassName("two")[i].removeAttribute("draggable");
		document.getElementsByClassName("two")[i].removeAttribute("onclick");
		document.getElementsByClassName("two")[i].style.cursor="default";
	}

	for (var i = 0; i < 2; i++) {
		document.getElementsByClassName("three")[i].removeAttribute("draggable");
		document.getElementsByClassName("three")[i].removeAttribute("onclick");
		document.getElementsByClassName("three")[i].style.cursor="default";
	}



	
	var elem = document.getElementById('note1');
	elem.parentNode.removeChild(elem);




	
}




var counter=0;
function shootcompup(event){
	var i=event.getAttribute("data-i");
			var j=event.getAttribute("data-j");
			var firstbox=document.querySelector("[data-i='"+i+"'][data-j='"+j+"']");
	if(compar[i][j]<=-1000){
		document.getElementById("congra").style.animation = "congramove 2s";
	}

}
var shootusr=[]
var computerpoint=0;
var count=0;
function shootcomp(event){
//user shoots to computer
			
			
			var i=Number(event.getAttribute("data-i"));
			var j=Number(event.getAttribute("data-j"));
			var firstbox=document.querySelector("[data-i='"+i+"'][data-j='"+j+"']");

			
			
			if(compar[i][j]<=-1000){
				counter++;
				document.getElementById("congra").style.animation = "none";
				firstbox.style.backgroundColor="#7FFF00";
				firstbox.style.cursor="default";
				document.getElementById("userscore").innerHTML=" "+counter+" ";
				
					
			}
			else{
				firstbox.style.backgroundColor="white";
				console.log('-------');
				shootuser();

			}
			//secondbox.style.backgroundColor="white";
			firstbox.style.cursor="default";
			firstbox.removeAttribute("onmousedown");

			if(counter==20){
			document.getElementById("result").innerHTML="You Won!!!";
			for (var i=0; i<100;i++){
				var div=document.getElementsByClassName("chck")[i];
				div.removeAttribute("onmousedown","shootcomp(this)");
				div.removeAttribute("onmouseup","shootcompup(this)");
			}
			document.getElementById("congratula").style.animation = "congratula 2s";

		}

			
}


function shootuser(){
//randomly shoots computer to user
			
		var check=0;
		var row12=-2;
		var col12=-2;
			
		if(shootusr[99]>0){
			check=5;
		}
		while(check==0){
				
			check=1;
	 		row12=Math.floor(Math.random()*10);
	 		col12=Math.floor(Math.random()*10);

	 		

	 		for (var p=0;p<100;p++){

	 			if(shootusr[p]==(row12*10+col12)){
	 				check=0;
				}
				
			}
 		}
 		shootusr[count]=row12*10+col12;
 		count++;
 		console.log(row12,col12);
 		console.table(shootusr);
		var test=userar[row12+1][col12+1];
 		var pos=document.getElementsByClassName("chck")[100+(row12)*10+col12];
 		
 		if(test==-1000){
 			pos.style.backgroundColor="purple";
 			computerpoint++;
 			console.log(computerpoint);
 			document.getElementById("compscore").innerHTML=" "+computerpoint+" ";
 			test=0;
 			shootuser();


 			


 		}
 		else{
 			pos.style.backgroundColor="white";
 		}

		

		
		if(computerpoint==20){
			document.getElementById("result").innerHTML="You loose!!!";

			for (var i=0; i<100;i++){
				var div=document.getElementsByClassName("chck")[i];
				div.removeAttribute("onmousedown","shootcomp(this)");
				div.removeAttribute("onmouseup","shootcompup(this)");
			}
			document.getElementById("congratula").style.animation = "congratula1 2s";
		}
		
	
 }
	


/* Drag and drop Functions */
function mousedown(ev){
	shipSize=ev.getAttribute('data-check');
	shipsize1=ev.getAttribute("id");
}


var f=0;
var ta=0;
var tb=0;
var wa=0;
var wb=0;
var wc=0;
var four=0;
var three=0;
var three1=0;
var two1=0;
var two2=0;
var two=0;
//click
function edit(ev){
	for(var i=100;i<200;i++){
			var pos=document.getElementsByClassName("chck");
			pos[i].style.backgroundColor="aqua";
		
	}

	
	var width=ev.offsetWidth;
	var height=ev.offsetHeight;

	console.log(height,width);
		
	if (targetdata4<=7 &&  shipSize=="four" ){
		if (targetdataj4>7 && four%2==1){
			alert("please choose correct place");
		}
		else{
			f++;
		if(f%2==0){
		 	
		 	

		 	 //horizontal
		 	var checking=0;
		 	console.log(checkdatai4,checkdataj4,"esec");

    		for(var j=checkdataj4+2;j<checkdataj4+4;j++){
	    		checking+=userar[checkdatai4][j];    					
			} 						
	    	if (checking==0){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	four++;
						 	console.log("check");
						 	console.log(four);
						 	console.log(f);
						 	console.log("check");
	    					//clearing previous place while rotating
	    					if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+5;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai4-1;i<checkdatai4+2;i++){
	    						for(var j=checkdataj4-1;j<checkdataj4+5;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj4+3){
	    								userar[checkdatai4][j+1]=-1000;
	    								console.log(userar[checkdatai4][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai4!=0 && checkdataj4!=0){
	        // 					for(var i=checkdatai4-1;i<checkdatai4+5;i++){
	    				// 			for(var j=checkdataj4-1;j<checkdataj4+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai4+3){
	    				// 				userar[i+1][checkdataj4]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						console.table(userar);
    						console.log("janjali");
    						
    					}

		 	
			
		}

		else if(f%2==1){
			
			

			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai4+2;j<checkdatai4+4;j++){
	    					checking+=userar[j][checkdataj4];    					
						} 						
	    					
    					

						if (checking==0){
							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					four++;
		 					console.log("check");
						 	console.log(four);
						 	console.log(f);
						 	console.log("check");
							//clearing previous place while rotating
							if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+2;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+5;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai4-1;i<checkdatai4+5;i++){
	    						for(var j=checkdataj4-1;j<checkdataj4+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai4+3){
	    								userar[i+1][checkdataj4]=-999;
	    								
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai4!=0 && checkdataj4!=0){
	        // 					for(var i=checkdatai4-1;i<checkdatai4+2;i++){
	    				// 			for(var j=checkdataj4-1;j<checkdataj4+5;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj4+3){
	    				// 				userar[checkdatai4][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						console.table(userar);
    						console.log("jonjoli");
    						
    					}
		 	

		 	
		}

		
		
		}

	}	
	else if (targetdata3a<=8 && shipSize=="three"){
		
		if (targetdataj3a>8 && three%2==1){
			alert("please choose correct place");
		}
		else{
			ta++;
		if(ta%2==0){
		 	var checking=0;

    		for(var j=checkdataj3a+2;j<checkdataj3a+3;j++){
	    		checking+=userar[checkdatai3a][j];    					
			} 						
	    	if (checking==0){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	three++;
	    					//clearing previous place while rotating
	    					if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+4;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai3a-1;i<checkdatai3a+2;i++){
	    						for(var j=checkdataj3a-1;j<checkdataj3a+4;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj3a+2){
	    								userar[checkdatai3a][j+1]=-1000;
	    								console.log(userar[checkdatai3a][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai3a!=0 && checkdataj3a!=0){
	        // 					for(var i=checkdatai3a-1;i<checkdatai3a+4;i++){
	    				// 			for(var j=checkdataj3a-1;j<checkdataj3a+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai3a+2){
	    				// 				userar[i+1][checkdataj3a]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("janjali");
    					}

			
			
		}

		else if(ta%2==1){
			
			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai3a+2;j<checkdatai3a+3;j++){
	    					checking+=userar[j][checkdataj3a];    					
						} 						
	    					
    					

						if (checking==0){
							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					three++;
							//clearing previous place while rotating
							if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+2;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+4;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai3a-1;i<checkdatai3a+4;i++){
	    						for(var j=checkdataj3a-1;j<checkdataj3a+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai3a+2){
	    								userar[i+1][checkdataj3a]=-999;
	    								
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai3a!=0 && checkdataj3a!=0){
	        // 					for(var i=checkdatai3a-1;i<checkdatai3a+2;i++){
	    				// 			for(var j=checkdataj3a-1;j<checkdataj3a+4;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj3a+2){
	    				// 				userar[checkdatai3a][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						console.table(userar);
    						console.log("jonjoli");
    						
    					}
		}

		
		
		}
	}
	else if (targetdata3b<=8 && shipSize=="three1"){
		
		if (targetdataj3b>8 && three1%2==1){
			alert("please choose correct place");
		}
		else{
			tb++;
		if(tb%2==0){
		 	var checking=0;

    		for(var j=checkdataj3b+2;j<checkdataj3b+3;j++){
	    		checking+=userar[checkdatai3b][j];    					
			} 						
	    	if (checking==0){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	three1++;
	    					//clearing previous place while rotating
	    					if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+4;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai3b-1;i<checkdatai3b+2;i++){
	    						for(var j=checkdataj3b-1;j<checkdataj3b+4;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj3b+2){
	    								userar[checkdatai3b][j+1]=-1000;
	    								console.log(userar[checkdatai3b][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai3b!=0 && checkdataj3b!=0){
	        // 					for(var i=checkdatai3b-1;i<checkdatai3b+4;i++){
	    				// 			for(var j=checkdataj3b-1;j<checkdataj3b+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai3b+2){
	    				// 				userar[i+1][checkdataj3b]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("janjali");
    					}

			
			
		}

		else if(tb%2==1){
			
			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai3b+2;j<checkdatai3b+3;j++){
	    					checking+=userar[j][checkdataj3b];    					
						} 						
	    					
    					

						if (checking==0){
							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					three1++;
							//clearing previous place while rotating
							if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+2;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+4;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai3b-1;i<checkdatai3b+4;i++){
	    						for(var j=checkdataj3b-1;j<checkdataj3b+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai3b+2){
	    								userar[i+1][checkdataj3b]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
	    					
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai3b!=0 && checkdataj3b!=0){
	        // 					for(var i=checkdatai3b-1;i<checkdatai3b+2;i++){
	    				// 			for(var j=checkdataj3b-1;j<checkdataj3b+4;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj3b+2){
	    				// 				userar[checkdatai3b][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("jonjoli");
    					}
		}

		
		
		}
	}
	else if (targetdata2a<=9 && shipSize=="two"){
		
		if (targetdataj2a>9 && two%2==1){
			alert("please choose correct place");
		}
		else{
			wa++;
		if(wa%2==0){

		 	var checking=0;

    		for(var j=checkdataj2a;j<checkdataj2a+2;j++){
	    		checking+=userar[checkdatai2a][j];    					
			} 						
	    	if (checking>=-1001){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	two++;
	    					//clearing previous place while rotating
	    					if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+3;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai2a-1;i<checkdatai2a+2;i++){
	    						for(var j=checkdataj2a-1;j<checkdataj2a+3;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj2a+1){
	    								userar[checkdatai2a][j+1]=-1000;
	    								console.log(userar[checkdatai2a][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2a!=0 && checkdataj2a!=0){
	        // 					for(var i=checkdatai2a-1;i<checkdatai2a+3;i++){
	    				// 			for(var j=checkdataj2a-1;j<checkdataj2a+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai2a+1){
	    				// 				userar[i+1][checkdataj2a]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("janjali");
    					}
			
			
		}

		else if(wa%2==1){
			
			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai2a;j<checkdatai2a+2;j++){
	    					checking+=userar[j][checkdataj2a];    					
						} 						
	    					
    					

						if (checking>=-1001){
							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					two++;
							//clearing previous place while rotating
							if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+2;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai2a-1;i<checkdatai2a+3;i++){
	    						for(var j=checkdataj2a-1;j<checkdataj2a+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai2a+1){
	    								userar[i+1][checkdataj2a]=-999;
	    								
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2a!=0 && checkdataj2a!=0){
	        // 					for(var i=checkdatai2a-1;i<checkdatai2a+2;i++){
	    				// 			for(var j=checkdataj2a-1;j<checkdataj2a+3;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj2a+1){
	    				// 				userar[checkdatai2a][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("jonjoli");
    					}
		}

		
	
		}
	}
	else if (targetdata2b<=9 && shipSize=="two1"){
		
		
		
		if (targetdataj2b>9 && two1%2==1){
			alert("please choose correct place");
		}
		else{
			wb++;
		if(wb%2==0){
		 	var checking=0;

    		for(var j=checkdataj2b;j<checkdataj2b+2;j++){
	    		checking+=userar[checkdatai2b][j];    					
			} 						
	    	if (checking>=-1001){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	two1++;
	    					//clearing previous place while rotating
	    					if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+3;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai2b-1;i<checkdatai2b+2;i++){
	    						for(var j=checkdataj2b-1;j<checkdataj2b+3;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj2b+1){
	    								userar[checkdatai2b][j+1]=-1000;
	    								console.log(userar[checkdatai2b][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2b!=0 && checkdataj2b!=0){
	        // 					for(var i=checkdatai2b-1;i<checkdatai2b+3;i++){
	    				// 			for(var j=checkdataj2b-1;j<checkdataj2b+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai2b+1){
	    				// 				userar[i+1][checkdataj2b]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("jani");
    					}
			
			
		}

		else if(wb%2==1){
			
			
			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai2b;j<checkdatai2b+2;j++){
	    					checking+=userar[j][checkdataj2b];    					
						} 						
	    					
    					

						if (checking>=-1001){
							
							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					two1++;
							//clearing previous place while rotating
							if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+2;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai2b-1;i<checkdatai2b+3;i++){
	    						for(var j=checkdataj2b-1;j<checkdataj2b+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai2b+1){
	    								userar[i+1][checkdataj2b]=-999;
	    								
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2b!=0 && checkdataj2b!=0){
	        // 					for(var i=checkdatai2b-1;i<checkdatai2b+2;i++){
	    				// 			for(var j=checkdataj2b-1;j<checkdataj2b+3;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj2b+1){
	    				// 				userar[checkdatai2b][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("joni");
    					}
		}

		
	
		}
	}
	else if (targetdata2c<=9 && shipSize=="two2"){
		
		
		if (targetdataj2c>9 && two2%2==1){
			alert("please choose correct place");
		}
		else{
			wc++;
		if(wc%2==0){
		 	var checking=0;

    		for(var j=checkdataj2c;j<checkdataj2c+2;j++){
	    		checking+=userar[checkdatai2c][j];    					
			} 						
	    	if (checking>=-1001){

					    	var width=ev.offsetWidth;
						 	ev.style.width=ev.offsetHeight+"px";
						 	ev.style.height=width+"px";
						 	two2++;
	    					//clearing previous place while rotating
	    					if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+3;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						//filling new place while rotating
							for(var i=checkdatai2c-1;i<checkdatai2c+2;i++){
	    						for(var j=checkdataj2c-1;j<checkdataj2c+3;j++ ){
	    							userar[i][j]--;
	    							if(j<checkdataj2c+1){
	    								userar[checkdatai2c][j+1]=-1000;
	    								console.log(userar[checkdatai2c][j+1]);
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2c!=0 && checkdataj2c!=0){
	        // 					for(var i=checkdatai2c-1;i<checkdatai2c+3;i++){
	    				// 			for(var j=checkdataj2c-1;j<checkdataj2c+2;j++){
	    				// 				userar[i][j]--;
	    				// 			if(i<checkdatai2c+1){
	    				// 				userar[i+1][checkdataj2c]=-999;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("horizontal");
    					}
			
			
		}

		else if(wc%2==1){
			
			
			//vertical
		 	var checking=0;


        				
	        				
	    				for(var j=checkdatai2c;j<checkdatai2c+2;j++){
	    					checking+=userar[j][checkdataj2c];    					
						} 						
	    					
    					

						if (checking>=-1001){

							var height=ev.offsetHeight;
		 					ev.style.height=ev.offsetWidth+"px";
		 					ev.style.width=height+"px";
		 					two2++;
							//clearing previous place while rotating
							if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+2;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
							
    					
    						console.table(userar);

    						//filling new place while rotating
							for(var i=checkdatai2c-1;i<checkdatai2c+3;i++){
	    						for(var j=checkdataj2c-1;j<checkdataj2c+2;j++ ){
	    							userar[i][j]--;
	    							if(i<checkdatai2c+1){
	    								userar[i+1][checkdataj2c]=-999;
	    								
	    							}

								} 						
	    					}
	    					
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    					// 	if(checkdatai2c!=0 && checkdataj2c!=0){
	        // 					for(var i=checkdatai2c-1;i<checkdatai2c+2;i++){
	    				// 			for(var j=checkdataj2c-1;j<checkdataj2c+3;j++){
	    				// 				userar[i][j]--;
	    				// 			if(j<checkdataj2c+1){
	    				// 				userar[checkdatai2c][j+1]=-1000;
	    								
	    				// 			}
									// } 						
	    				// 		}
    					// 	}
    						
    						console.table(userar);
    						console.log("vertical");
    					}
		}
		console.log(wc,'ager');
		
		
		}
	}

	else {
		alert("you can`t rotate ship here ! please choose correct place");
		
		
	}
	
}


function drag(ev) {
	
    ev.dataTransfer.setData("rame", ev.target.id);
    var data = ev.dataTransfer.getData("rame");



    if(four%2==0 && shipSize=="four"){
    					
	        				
	 

						if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+2;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+5;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}

						
    	}
    	else if (four%2==1 && shipSize=="four"){


    					if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+5;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    	}

    	if(three%2==0 && shipSize=="three"){
    					
	        				
	 

						if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+2;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+4;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						console.table(userar);
						
    	}
    	else if (three%2==1 && shipSize=="three"){
    				if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+4;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    					
    					
    	}

    	if(three1%2==0 && shipSize=="three1"){
    					
	        				
	 

						if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+2;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+4;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}

						
    	}
    	else if (three1%2==1 && shipSize=="three1"){
    					if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+4;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    					
    	}

    if(two%2==0 && shipSize=="two"){
    					var checking=0;
						
    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	 

						if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+2;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}

						
    	}
    	else if (two%2==1 && shipSize=="two"){
    			if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+3;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    					
    					
    	}
    	if (two1%2==0 && shipSize=="two1"){
    		    	
						
						if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+2;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    						console.table(userar);

						
    					
    	}
    	else if (two1%2==1 && shipSize=="two1"){
    		if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+3;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    		    		
    					
    	}
    	if (two2%2==0 && shipSize=="two2"){
    		    		
						if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+2;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+3;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    					 }
    					 console.table(userar);
											
    	}
    	else if (two2%2==1 && shipSize=="two2"){
    		if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+3;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    						}
    					
    					console.table(userar);
    		    		
    					
    	}
    	if (shipsize1=="ship1a"){
    		    		
						if(checkdatai1a!=0 && checkdataj1a!=0){
	        					for(var i=checkdatai1a-1;i<checkdatai1a+2;i++){
	    							for(var j=checkdataj1a-1;j<checkdataj1a+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    					 }
    					 console.table(userar);
											
    	}
    	if (shipsize1=="ship1b"){
    		    		
						if(checkdatai1b!=0 && checkdataj1b!=0){
	        					for(var i=checkdatai1b-1;i<checkdatai1b+2;i++){
	    							for(var j=checkdataj1b-1;j<checkdataj1b+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    					 }
    					 console.table(userar);
											
    	}
    	if (shipsize1=="ship1c"){
    		    		
						if(checkdatai1c!=0 && checkdataj1c!=0){
	        					for(var i=checkdatai1c-1;i<checkdatai1c+2;i++){
	    							for(var j=checkdataj1c-1;j<checkdataj1c+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    					 }
    					 console.table(userar);
											
    	}if (shipsize1=="ship1d"){
    		    		
						if(checkdatai1d!=0 && checkdataj1d!=0){
	        					for(var i=checkdatai1d-1;i<checkdatai1d+2;i++){
	    							for(var j=checkdataj1d-1;j<checkdataj1d+2;j++){
	    								if(userar[i][j]<=-1 && userar[i][j]>=-995){
	    									userar[i][j]++;
	    								}
	    								else{
	    									userar[i][j]=0;
	    								}
									} 						
	    						}
    					 }
    					 console.table(userar);
											
    	}

	    
	
}
var userar=[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var ships=0;
function drop(ev) {	
    ev.preventDefault();
    var data = ev.dataTransfer.getData("rame");
    var x=ev.target.getAttribute('data-i1');
	var y=ev.target.getAttribute('data-j');
    


    		var chei=Number(ev.target.getAttribute('data-i1'));
        	var chej=Number(ev.target.getAttribute('data-j'));
        	
        	var sum=0;
      //   	checkdatai=ev.target.getAttribute('data-i1');
    		// checkdataj=ev.target.getAttribute('data-j');

        if (y<=7 && shipSize=="four" && four%2==0) 
        {

        				var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				console.log(ev.target,"target");
	        				
	    				for(var j=col;j<col+4;j++){
	    					checking+=userar[row][j];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata4=ev.target.getAttribute('data-i1');
	    					targetdataj4=ev.target.getAttribute('data-j');
	    					
							checkdatai4=row;
	    					checkdataj4=col;

							for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+5;j++ ){
	    							userar[i][j]--;
	    							if(j<col+3){
	    								userar[row][j+1]=-1000;
	    								console.log(userar[row][j+1]);
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+2;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+5;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj4+3){
	    								userar[checkdatai4][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
    					}
    					
    					  				
		}
  	else if (x<=7 && shipSize=="four" && four%2==1)
        	{

        			
						var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+4;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata4=ev.target.getAttribute('data-i1');
	    					targetdataj4=ev.target.getAttribute('data-j');
	    					
							checkdatai4=row;
	    					checkdataj4=col;

							for(var i=row-1;i<row+5;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+3){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai4!=0 && checkdataj4!=0){
	        					for(var i=checkdatai4-1;i<checkdatai4+5;i++){
	    							for(var j=checkdataj4-1;j<checkdataj4+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai4+3){
	    								userar[i+1][checkdataj4]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    					

	    	}
	    if(shipsize1=="ship1a"){
	    				var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+1;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						
    						checkdatai1a=row;
    						checkdataj1a=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(j<col){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai1a!=0 && checkdataj1a!=0){
	        					for(var i=checkdatai1a-1;i<checkdatai1a+2;i++){
	    							for(var j=checkdataj1a-1;j<checkdataj1a+2;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj1a){
	    								userar[checkdatai1a][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
						}

	    			



	    				
    					
    	}

    	if(shipsize1=="ship1b"){
	    				var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+1;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						
    						checkdatai1b=row;
    						checkdataj1b=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(j<col){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai1b!=0 && checkdataj1b!=0){
	        					for(var i=checkdatai1b-1;i<checkdatai1b+2;i++){
	    							for(var j=checkdataj1b-1;j<checkdataj1b+2;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj1b){
	    								userar[checkdatai1b][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
						}

	    			



	    				
    					
    	}

    	if(shipsize1=="ship1c"){
	    				var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+1;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						
    						checkdatai1c=row;
    						checkdataj1c=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(j<col){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai1c!=0 && checkdataj1c!=0){
	        					for(var i=checkdatai1c-1;i<checkdatai1c+2;i++){
	    							for(var j=checkdataj1c-1;j<checkdataj1c+2;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj1c){
	    								userar[checkdatai1c][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
						}

	    			



	    				
    					
    	}

    	if(shipsize1=="ship1d"){
	    				var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+1;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						
    						checkdatai1d=row;
    						checkdataj1d=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(j<col){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai1d!=0 && checkdataj1d!=0){
	        					for(var i=checkdatai1d-1;i<checkdatai1d+2;i++){
	    							for(var j=checkdataj1d-1;j<checkdataj1d+2;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj1d){
	    								userar[checkdatai1d][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}

						}

	    			



	    				
    					
    	}
    			
	    
    		

    	if(y<=8 && three%2==0 && shipSize=="three"){
        				
    					var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+3;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						targetdata3a=ev.target.getAttribute('data-i1');
    						targetdataj3a=ev.target.getAttribute('data-j');
    						checkdatai3a=row;
    						checkdataj3a=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+4;j++ ){
	    							userar[i][j]--;
	    							if(j<col+2){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+2;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+4;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj3a+2){
	    								userar[checkdatai3a][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
						}						

	    			
   		}
    	else if (x<=8 && three%2==1 && shipSize=="three"){
						var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+3;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata3a=ev.target.getAttribute('data-i1');
    						targetdataj3a=ev.target.getAttribute('data-j');

    						checkdatai3a=row;
    						checkdataj3a=col;

							for(var i=row-1;i<row+4;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+2){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai3a!=0 && checkdataj3a!=0){
	        					for(var i=checkdatai3a-1;i<checkdatai3a+4;i++){
	    							for(var j=checkdataj3a-1;j<checkdataj3a+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai3a+2){
	    								userar[i+1][checkdataj3a]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    					
    	}
    
    	if ((y<=8 && three1%2==0 && shipSize=="three1")){
						var checking=0;
	
    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+3;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target,"jomolun");
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						targetdata3b=ev.target.getAttribute('data-i1');
    						targetdataj3b=ev.target.getAttribute('data-j');
    						checkdatai3b=row;
    						checkdataj3b=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+4;j++ ){
	    							userar[i][j]--;
	    							if(j<col+2){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+2;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+4;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj3b+2){
	    								userar[checkdatai3b][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
						}						
    					
    		}
    	
    	else if (x<=8 && three1%2==1 && shipSize=="three1"){
    		var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+3;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata3b=ev.target.getAttribute('data-i1');
    						targetdataj3b=ev.target.getAttribute('data-j');
    						checkdatai3b=row;
    						checkdataj3b=col;

							for(var i=row-1;i<row+4;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+2){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai3b!=0 && checkdataj3b!=0){
	        					for(var i=checkdatai3b-1;i<checkdatai3b+4;i++){
	    							for(var j=checkdataj3b-1;j<checkdataj3b+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai3b+2){
	    								userar[i+1][checkdataj3b]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    					
    					
    	}
    	if(y<=9 && two%2==0 && shipSize=="two"){
    					var checking=0;
						
    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+2;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 
						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						targetdata2a=ev.target.getAttribute('data-i1');
    						targetdataj2a=ev.target.getAttribute('data-j');
    						checkdatai2a=row;
    						checkdataj2a=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+3;j++ ){
	    							
	    							userar[i][j]--;
	    							if(j<col+1){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+2;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+3;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj2a+1){
	    								userar[checkdatai2a][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
	    					console.log(checkdatai2a,checkdataj2a,'asdasda0');

	    					console.table(userar);
						}				
    					
    	}
    	else if (x<=9 && two%2==1 && shipSize=="two"){
    					var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+2;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata2a=ev.target.getAttribute('data-i1');
    						targetdataj2a=ev.target.getAttribute('data-j');
    						checkdatai2a=row;
    						checkdataj2a=col;

							for(var i=row-1;i<row+3;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+1){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai2a!=0 && checkdataj2a!=0){
	        					for(var i=checkdatai2a-1;i<checkdatai2a+3;i++){
	    							for(var j=checkdataj2a-1;j<checkdataj2a+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai2a+1){
	    								userar[i+1][checkdataj2a]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    					
    					
    	}
    	if (y<=9 && two1%2==0 && shipSize=="two1"){
    		    		var checking=0;
						
    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+2;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 

						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						targetdata2b=ev.target.getAttribute('data-i1');
    						targetdataj2b=ev.target.getAttribute('data-j');
    						checkdatai2b=row;
    						checkdataj2b=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+3;j++ ){
	    							
	    							userar[i][j]--;
	    							if(j<col+1){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+2;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+3;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj2b+1){
	    								userar[checkdatai2b][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
	    					console.log(checkdatai2b,checkdataj2b,'asdasda1');

	    					console.table(userar);
						}
    					
    	}
    	else if (x<=9 && two1%2==1 && shipSize=="two1"){
    		    		var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+2;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata2b=ev.target.getAttribute('data-i1');
    						targetdataj2b=ev.target.getAttribute('data-j');
    						checkdatai2b=row;
    						checkdataj2b=col;

							for(var i=row-1;i<row+3;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+1){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai2b!=0 && checkdataj2b!=0){
	        					for(var i=checkdatai2b-1;i<checkdatai2b+3;i++){
	    							for(var j=checkdataj2b-1;j<checkdataj2b+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai2b+1){
	    								userar[i+1][checkdataj2b]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    		    		
    					
    	}
    	if (y<=9 && two2%2==0 && shipSize=="two2"){
    		    		var checking=0;
						
    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=col;j<col+2;j++){
	    					checking+=userar[row][j];
	    					console.log(checking); 					
						} 

						if(checking==0 && ev.target.hasAttribute("data-i1")){

  							
							ev.target.parentNode.appendChild(document.getElementById(data));
							console.log(ev.target);
    						var data1=document.getElementById(data);
    						data1.style.position="absolute";
    						data1.style.top=ev.target.offsetTop+"px";
    						data1.style.left=ev.target.offsetLeft+"px"; 
    						targetdata2c=ev.target.getAttribute('data-i1');
    						targetdataj2c=ev.target.getAttribute('data-j');
    						checkdatai2c=row;
    						checkdataj2c=col;
    						for(var i=row-1;i<row+2;i++){
	    						for(var j=col-1;j<col+3;j++ ){
	    						
	    							userar[i][j]--;
	    							if(j<col+1){
	    								userar[row][j+1]=-1000;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);

						}
						else{
							alert("please choose correct place");
							if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+2;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+3;j++){
	    								userar[i][j]--;
	    							if(j<checkdataj2c+1){
	    								userar[checkdatai2c][j+1]=-1000;
	    								
	    							}
									} 						
	    						}
    						}
	    					console.log(checkdatai2c,checkdataj2c,'asdasda2');

	    					console.table(userar);

						}
    					
    	}
    	else if (x<=9 && two2%2==1 && shipSize=="two2"){
    		    		var checking=0;

    					var row=Number(ev.target.getAttribute("data-i1"));
    					var col=Number(ev.target.getAttribute("data-j"));
        				
	        				
	    				for(var j=row;j<row+2;j++){
	    					checking+=userar[j][col];    					
						} 						
	    					
    					

						if (checking==0 && ev.target.hasAttribute("data-i1")){
	        				/* Adding */
							ev.target.parentNode.appendChild(document.getElementById(data));
	    					var data1=document.getElementById(data);
	    					data1.style.position="absolute";
	    					data1.style.top=ev.target.offsetTop+"px";
	    					data1.style.left=ev.target.offsetLeft+"px";

	    					/* checking for out of range */   
	    					targetdata2c=ev.target.getAttribute('data-i1');
    						targetdataj2c=ev.target.getAttribute('data-j');
    						checkdatai2c=row;
    						checkdataj2c=col;

							for(var i=row-1;i<row+3;i++){
	    						for(var j=col-1;j<col+2;j++ ){
	    							userar[i][j]--;
	    							if(i<row+1){
	    								userar[i+1][col]=-999;
	    								
	    							}

								} 						
	    					}
	    					console.table(userar);
    					}
    					else {
    						alert("please choose correct place");
    						if(checkdatai2c!=0 && checkdataj2c!=0){
	        					for(var i=checkdatai2c-1;i<checkdatai2c+3;i++){
	    							for(var j=checkdataj2c-1;j<checkdataj2c+2;j++){
	    								userar[i][j]--;
	    							if(i<checkdatai2c+1){
	    								userar[i+1][checkdataj2c]=-999;
	    								
	    							}
									} 						
	    						}
    						}
    						console.table(userar);
    					}
    		    		
    					
    	}
    	for(var i=100;i<200;i++){
			var pos=document.getElementsByClassName("chck");
			pos[i].style.backgroundColor="aqua";
		
	}
	ships++;

}
      	



function allowDrop(ev) {

    ev.preventDefault();
   

	/* clearing all over background */
	// document.querySelectorAll("#di2 > .chck").forEach(function (box) {
	// 	box.style.backgroundColor = "aqua";
	// });

    for(var i=100;i<200;i++){
			var pos=document.getElementsByClassName("chck");
			pos[i].style.backgroundColor="aqua";
		
	}

	/* background according to dragged element*/ 

	var x=ev.target.getAttribute('data-i1');
    var y=ev.target.getAttribute('data-j');
       
        
    	if (y<=7 && shipSize=="four" && four%2==0)
    	{ 
		  	for(var j = Number(y); j < Number(y) + 4 ; j++){
        	var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}
		}
		else if (x<=7 && shipSize=="four" && four%2==1)
		{
			for(var i = Number(x); i < Number(x) + 4 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}


		else if (y<=8 && shipSize=="three" && three%2==0){
			for(var j = Number(y); j < Number(y) + 3 ; j++){
	        var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
				
				if(pos.length === 0){
					continue;
				}

	      		pos[0].style.backgroundColor="lightgreen";
	      	}

		}
		else if (x<=8 && shipSize=="three" && three%2==1)
		{
			for(var i = Number(x); i < Number(x) + 3 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}
		else if (y<=8 && shipSize=="three1" && three1%2==0){
			for(var j = Number(y); j < Number(y) + 3 ; j++){
	        var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
				
				if(pos.length === 0){
					continue;
				}

	      		pos[0].style.backgroundColor="lightgreen";
	      	}

		}
		else if (x<=8 && shipSize=="three1" && three1%2==1)
		{
			for(var i = Number(x); i < Number(x) + 3 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}
	else if (y<=9 && shipSize=="two" && two%2==0){
		for(var j = Number(y); j < Number(y) + 2 ; j++){
        		
			var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
			
			if(pos.length === 0){
				continue;
			}

      		pos[0].style.backgroundColor="lightgreen";
      	}

	}
	else if (x<=9 && shipSize=="two" && two%2==1)
		{
			for(var i = Number(x); i < Number(x) + 2 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}
		else if (y<=9 && shipSize=="two1" && two1%2==0){
		for(var j = Number(y); j < Number(y) + 2 ; j++){
        		
			var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
			
			if(pos.length === 0){
				continue;
			}

      		pos[0].style.backgroundColor="lightgreen";
      	}

	}
	else if (x<=9 && shipSize=="two1" && two1%2==1)
		{
			for(var i = Number(x); i < Number(x) + 2 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}
		else if (y<=9 && shipSize=="two2" && two2%2==0){
		for(var j = Number(y); j < Number(y) + 2 ; j++){
        		
			var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
			
			if(pos.length === 0){
				continue;
			}

      		pos[0].style.backgroundColor="lightgreen";
      	}

	}
	else if (x<=9 && shipSize=="two2" && two2%2==1)
		{
			for(var i = Number(x); i < Number(x) + 2 ; i++){
        	var pos=document.querySelectorAll("[data-i1='"+i+"'][data-j='"+y+"']");
			if(pos.length === 0){
				continue;
			}

    		pos[0].style.backgroundColor="lightgreen";
    		}


		}
	else if (y<=10 && shipSize=="one"){
		for(var j = Number(y); j < Number(y) + 1 ; j++){
        		
			var pos=document.querySelectorAll("[data-i1='"+x+"'][data-j='"+j+"']");
			
			if(pos.length === 0){
				continue;
			}

      		pos[0].style.backgroundColor="lightgreen";
      	}

	}


   
}
function dragLeave(event) {
    for(var i=100;i<200;i++){
			var pos=document.getElementsByClassName("chck");
			pos[i].style.backgroundColor="aqua";
		
	}
    
}

	





