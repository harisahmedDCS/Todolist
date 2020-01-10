document.getElementById('loan-form').addEventListener('submit',function(e){
   
  document.getElementById('loading').style.display='block';
  setTimeout(calculateresults,2000);

e.preventDefault();
});
//calculate results
function calculateresults(){
    
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalpayment=document.getElementById('Total-payment');
    const totalInterest=document.getElementById('Total-Interest');

    const principal=parseFloat(amount.value);
    const calculateInterest=parseFloat(interest.value)/100/12;
    const calculatePayment=parseFloat(years.value)*12;
    //compute monthly payment;
    const x=Math.pow(1+calculateInterest,calculatePayment);
    const monthly=(principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
    	monthlyPayment.value=monthly.toFixed(2);
    	totalpayment.value=(monthly*calculatePayment).toFixed(2);
    		totalInterest.value=((monthly*calculatePayment)-principal).toFixed(2);
    		 document.getElementById('results').style.display='block';
    		 document.getElementById('loading').style.display='none';
    }else{
    	showError('show check your number');
    }

	console.log('Calculating');
	
}
function showError(error){
	const errorDiv=document.createElement('div');
	//get element
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');


	errorDiv.className='alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));
	card.insertBefore(errorDiv,heading);
	//settimeout
	setTimeout(clearError,3000);
}
//clearError
function clearError(){
	document.querySelector('.alert').remove();
	document.getElementById('loading').style.display='none';
}



























