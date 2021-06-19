function firstToSecond(){
		  var input1= document.getElementById("firstCurrency").value;
		  var input2= document.getElementById("secondCurrency").value;
			 if (document.getElementById('inputCurrency').value == 'taka')
			 {
				if(document.getElementById('OutputCurrency').value=='taka1'){
				  document.getElementById("secondCurrency").value=input1*1;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Ringgit2'){
				  document.getElementById("secondCurrency").value=input1*0.049;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Dollar3'){
				  document.getElementById("secondCurrency").value=input1*0.012;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Riyal4'){
				  document.getElementById("secondCurrency").value=input1*0.044;
				  
				  
				}
			 
			 
			 
				
			 
			 }
			 
			 if (document.getElementById('inputCurrency').value =='Ringgit')
			 {
				if(document.getElementById('OutputCurrency').value=='taka1'){
				  document.getElementById("secondCurrency").value=input1*20.47;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Ringgit2'){
				  document.getElementById("secondCurrency").value=input1*1;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Dollar3'){
				  document.getElementById("secondCurrency").value=input1*0.24;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Riyal4'){
				  document.getElementById("secondCurrency").value=input1*0.91;
				  
				  
				}
			 
			 
			 
				
			 
			 }
			 
			 if (document.getElementById('inputCurrency').value == 'Dollar')
			 {
				if(document.getElementById('OutputCurrency').value=='taka1'){
				  document.getElementById("secondCurrency").value=input1*84.76;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Ringgit2'){
				  document.getElementById("secondCurrency").value=input1*4.14;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Dollar3'){
				  document.getElementById("secondCurrency").value=input1*1;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Riyal4'){
				  document.getElementById("secondCurrency").value=input1*3.75;
				  
				  
				}
			 
			 
			 
				
			 
			 }
			 
			 if (document.getElementById('inputCurrency').value =='Riyal')
			 {
				if(document.getElementById('OutputCurrency').value=='taka1'){
				  document.getElementById("secondCurrency").value=input1*22.60;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Ringgit2'){
				  document.getElementById("secondCurrency").value=input1*1.10;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Dollar3'){
				  document.getElementById("secondCurrency").value=input1*0.27;
				  
				  
				}
				else if(document.getElementById('OutputCurrency').value=='Riyal4'){
				  document.getElementById("secondCurrency").value=input1*1;
				  
				  
				}
			 
			 
			 
				
			 
			 }
		
		
		
		
		
	}