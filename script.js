/*

	assume you have 3 subjects with 3 requirements per subject, not 1st quarter
	- get tentative grades per subject
	- ask for previous grade
	- get final grades
	- get average grade (of the 3 final grades)
	- round to the nearest Pisay GWA grade for the quarter

*/

/////////////////////////////////////////////////////////////////////////////////////// SUBJECT 1

function getScores() {

  let req1 = parseInt(document.querySelector("#req1").value);
  let req2 = parseInt(document.querySelector("#req2").value);
  let req3 = parseInt(document.querySelector("#req3").value);

  console.log(req1 + req2 + req3);
  getSum(req1, req2, req3);
  
}

function getSum(r1, r2, r3) {

  let sum = r1 + r2 + r3;

  console.log(sum);
  getPercent(sum);

}

function getPercent(sum) {

  const HPS = 20 + 30 + 50;
  percentage = sum / HPS * 100;

  console.log(percentage);
  getTenta(percentage);
  
}

function getTenta(p) {

  if (p >= 96) {
	let tenta = 1.00;
    document.getElementById("tenta_1").innerHTML = tenta + ".00";
	return tenta;    
  }

  else if (p >= 90) {
	let tenta = 1.25;
    document.getElementById("tenta_1").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 84) {
	let tenta = 1.50;
    document.getElementById("tenta_1").innerHTML = tenta + "0";
	return tenta;
  }
    
  else if (p >= 78) {
	let tenta = 1.75;
    document.getElementById("tenta_1").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 72) {
	let tenta = 2.00;
    document.getElementById("tenta_1").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 66) {
	let tenta = 2.25;
    document.getElementById("tenta_1").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 60) {
	let tenta = 2.50;
    document.getElementById("tenta_1").innerHTML = tenta + "0";
	return tenta;
  }

  else if (p >= 55) {
	let tenta = 2.75;
    document.getElementById("tenta_1").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 50) {
	let tenta = 3.00;
    document.getElementById("tenta_1").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 40) {
	let tenta = 4.00;
    document.getElementById("tenta_1").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 0) {
	let tenta = 5.00;
    document.getElementById("tenta_1").innerHTML = tenta + ".00";
	return tenta;
  }

}

function calcTentaGrade() {

  getScores();
  
}

function calcFinalGrade() {

  let tenta = document.getElementById('tenta_1').textContent;
  let t = parseFloat(tenta);    
  let prev = parseFloat(document.querySelector("#prev_1").value);
  
  let x = 2/3 * t;
  let y = 1/3 * prev;
  
  let total = x + y;
  finalGrade = convertGrade(total);
 
  document.getElementById("final_1").innerHTML = finalGrade;
  	
}

/////////////////////////////////////////////////////////////////////////////////////// SUBJECT 2

function getScores_2() {

  let req1 = parseInt(document.querySelector("#req1_2").value);
  let req2 = parseInt(document.querySelector("#req2_2").value);
  let req3 = parseInt(document.querySelector("#req3_2").value);

  console.log(req1 + req2 + req3);
  getSum_2(req1, req2, req3);
  
}

function getSum_2(r1, r2, r3) {

  let sum = r1 + r2 + r3;

  console.log(sum);
  getPercent_2(sum);

}

function getPercent_2(sum) {

  const HPS = 20 + 30 + 50;
  percentage = sum / HPS * 100;

  console.log(percentage);
  getTenta_2(percentage);
  
}

function getTenta_2(p) {

  if (p >= 96) {
	let tenta = 1.00;
    document.getElementById("tenta_2").innerHTML = tenta + ".00";
	return tenta;    
  }

  else if (p >= 90) {
	let tenta = 1.25;
    document.getElementById("tenta_2").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 84) {
	let tenta = 1.50;
    document.getElementById("tenta_2").innerHTML = tenta + "0";
	return tenta;
  }
    
  else if (p >= 78) {
	let tenta = 1.75;
    document.getElementById("tenta_2").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 72) {
	let tenta = 2.00;
    document.getElementById("tenta_2").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 66) {
	let tenta = 2.25;
    document.getElementById("tenta_2").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 60) {
	let tenta = 2.50;
    document.getElementById("tenta_2").innerHTML = tenta + "0";
	return tenta;
  }

  else if (p >= 55) {
	let tenta = 2.75;
    document.getElementById("tenta_2").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 50) {
	let tenta = 3.00;
    document.getElementById("tenta_2").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 40) {
	let tenta = 4.00;
    document.getElementById("tenta_2").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 0) {
	let tenta = 5.00;
    document.getElementById("tenta_2").innerHTML = tenta + ".00";
	return tenta;
  }

}

function calcTentaGrade_2() {

  getScores_2();
  
}

function calcFinalGrade_2() {

  let tenta = document.getElementById('tenta_2').textContent;
  let t = parseFloat(tenta);    
  let prev = parseFloat(document.querySelector("#prev_2").value);
  
  let x = 2/3 * t;
  let y = 1/3 * prev;
  
  let total = x + y;
  finalGrade = convertGrade(total);
 
  document.getElementById("final_2").innerHTML = finalGrade;
  	
}

/////////////////////////////////////////////////////////////////////////////////////// SUBJECT 3

function getScores_3() {

  let req1 = parseInt(document.querySelector("#req1_3").value);
  let req2 = parseInt(document.querySelector("#req2_3").value);
  let req3 = parseInt(document.querySelector("#req3_3").value);

  console.log(req1 + req2 + req3);
  getSum_3(req1, req2, req3);
  
}

function getSum_3(r1, r2, r3) {

  let sum = r1 + r2 + r3;

  console.log(sum);
  getPercent_3(sum);

}

function getPercent_3(sum) {

  const HPS = 20 + 30 + 50;
  percentage = sum / HPS * 100;

  console.log(percentage);
  getTenta_3(percentage);
  
}

function getTenta_3(p) {

  if (p >= 96) {
	let tenta = 1.00;
    document.getElementById("tenta_3").innerHTML = tenta + ".00";
	return tenta;    
  }

  else if (p >= 90) {
	let tenta = 1.25;
    document.getElementById("tenta_3").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 84) {
	let tenta = 1.50;
    document.getElementById("tenta_3").innerHTML = tenta + "0";
	return tenta;
  }
    
  else if (p >= 78) {
	let tenta = 1.75;
    document.getElementById("tenta_3").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 72) {
	let tenta = 2.00;
    document.getElementById("tenta_3").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 66) {
	let tenta = 2.25;
    document.getElementById("tenta_3").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 60) {
	let tenta = 2.50;
    document.getElementById("tenta_3").innerHTML = tenta + "0";
	return tenta;
  }

  else if (p >= 55) {
	let tenta = 2.75;
    document.getElementById("tenta_3").innerHTML = tenta;
	return tenta;
  }

  else if (p >= 50) {
	let tenta = 3.00;
    document.getElementById("tenta_3").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 40) {
	let tenta = 4.00;
    document.getElementById("tenta_3").innerHTML = tenta + ".00";
	return tenta;
  }

  else if (p >= 0) {
	let tenta = 5.00;
    document.getElementById("tenta_3").innerHTML = tenta + ".00";
	return tenta;
  }

}

function calcTentaGrade_3() {

  getScores_3();
  
}

function calcFinalGrade_3() {

  let tenta = document.getElementById('tenta_3').textContent;
  let t = parseFloat(tenta);    
  let prev = parseFloat(document.querySelector("#prev_3").value);
  
  let x = 2/3 * t;
  let y = 1/3 * prev;
  
  let total = x + y;
  finalGrade = convertGrade(total);
 
  document.getElementById("final_3").innerHTML = finalGrade;
  	
}

/////////////////////////////////////////////////////////////////////////////////////// AVERAGE FINAL


function calcGrade() {
	
	let final_1 = parseFloat(document.getElementById('final_1').textContent);
	let final_2 = parseFloat(document.getElementById('final_2').textContent);
	let final_3 = parseFloat(document.getElementById('final_3').textContent);

	let sum = final_1 + final_2 + final_3;
	
	let average = sum / 3;
	let grade = convertGrade(average);
	
    document.getElementById("grade").innerHTML = "Average Final Grade of the 3 Subjects: " + grade;	

}


/////////////////////////////////////////////////////////////////////////////////////// GRADE CONVERSION

function convertGrade(t) {
	
  if ( (1.00 <= t) && (t <= 1.125) ) {
	 return 1.00;
  }

  else if ( ((1.125 < t) && (t <= 1.375) )) {
	 return 1.25;
  }

  else if ( ((1.375 < t) && (t <= 1.625) )) {
	 return 1.50;	
  }

  else if ( ((1.625 < t) && (t <= 1.875) )) {
	 return 1.75;
  }

  else if ( ((1.875 < t) && (t <= 2.125) )) {
	 return 2.00;
  }

  else if ( ((2.125 < t) && (t <= 2.375) )) {
	 return 2.25;
  }

  else if ( ((2.375 < t) && (t <= 2.625) )) {
	 return 2.50;
  }

  else if ( ((2.625 < t) && (t <= 2.875) )) {
	 return 2.75;
  }

  else if ( ((2.875 < t) && (t <= 3.125) )) {
	 return 3.00;	
  }

  else if ( ((3.125 < t) && (t <= 4.125) )) {
	 return 4.00;
  }

  else if ( ((3.125 < t) && (t <= 5) )) {
	 return 5.00;
  }
  
  else {	
  }
	
}