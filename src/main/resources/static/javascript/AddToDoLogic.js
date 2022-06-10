var userData; // globally declared 

function initialize() {
	checkUserSession()
	hidefeedback();

	//Setting Alarm Flag onChange event
	
	$("#ddalarm a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		var selhref = $(this).attr("href");
		$("#dropdownalarm").attr("href",selhref);
		$("#dropdownalarm").text(selText);
	});
	
	//Setting priority flag
	$("#ddflag a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropdownflag").text(selText);
	});
	
	//Setting status flag
	$("#ddstatus a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropdownstatus").text(selText);
	}); 
	
	
}




function checkUserSession() {
	userData = JSON.parse(sessionStorage.getItem("userData"));
	if (userData != null) {
		$("#idunamepass").hide();
		$("#idfnamelname").hide();
		$("#idfnamelname").hide();
		$("#idemailID").hide();
	}
}




function hidefeedback(){
  $('.01invalid-feedback').hide();
  $('.02invalid-feedback').hide();
  $('.03invalid-feedback').hide();
  $('.04invalid-feedback').hide();
  $('.05invalid-feedback').hide();
  $('.06invalid-feedback').hide();
  $('.07invalid-feedback').hide();
  $('.08invalid-feedback').hide();
}



function sendtoDB(){
document.getElementById("ajaxresponse").innerHTML = "";
var submitRes = document.getElementById("ajaxresponse");
userSessionData = JSON.parse(sessionStorage.getItem("userData"));

  	hidefeedback();
	//if we have user data in session Storage no need to validate this
	if (userSessionData == null) {
	  	var fname = validation("01");
		var lname = validation("02");
		var uname = validation("03");
		var pass = validation("04");
		var emailID = validation("08");
	}
	
	var description = validation("05");
	var detaildescription = validation("06");
	var refrencelink = $('#validationCustom07').val().trim();
	
	var alarm = $("#dropdownalarm").attr("href");
	var status = $("#dropdownstatus").text();
	var flag = $("#dropdownflag").text();
	
	
	if(fname && lname && uname && pass && description && detaildescription && status && alarm){
		var data = {
					"uname": uname,
					"upass":pass,
					"fname":fname,
					"lname": lname,
					"email": emailID, 
				    "tasks":[{
				"useremailid":emailID,
				"description":description,
				"detaildescription":detaildescription,
				"orginaldatetime":new Date().toLocaleString(),
				"updateddatetime": new Date().toLocaleString(),
				"refrencelinks":refrencelink,
				"alarm":alarm, 
				"status":status, 
				"flag":flag
				}]
				}		
				
				
            $.ajax({
              url: '/addNewUser',
			  type: 'POST',
			  contentType: "application/json; charset=utf-8",
              data:JSON.stringify(data),
              success: function (response) {
                  console.log(response)
                  var res = `<h1> Success in Registering <h1>`
                  submitRes.innerHTML = submitRes.innerHTML + res
                } , error: function (xhr) {
					console.log("error :: data : ");
					console.log(xhr)
                  var res = `<h1> Failed To Register User <h1>`
                  submitRes.innerHTML = submitRes.innerHTML + res
                }
              })
	
	
	}else{
	
	var taskdata = {
				"useremailid":userSessionData.UserEmail,
				"description":description,
				"detaildescription":detaildescription,
				"orginaldatetime":new Date().toLocaleString(),
				"updateddatetime": new Date().toLocaleString(),
				"refrencelinks":refrencelink,
				"alarm":alarm, 
				"status":status, 
				"flag":flag
				}
						
		
		
	if(description && detaildescription){
			 $.ajax({
		              url: '/addTodoTask',
					  type: 'POST',
					  contentType: "application/json; charset=utf-8",
		              data:JSON.stringify(taskdata),
		              success: function (response) {
		                  console.log(response)
		                  var res = `<h1> Success in Registering <h1>`
		                  submitRes.innerHTML = submitRes.innerHTML + res
		                } , error: function (xhr) {
							console.log("error :: data : ");
							console.log(xhr)
		                  var res = `<h1> Failed To Register User <h1>`
		                  submitRes.innerHTML = submitRes.innerHTML + res
		                }
		              })
		}
	
	}



  
}


//This is a generic method for all types of validation and error response
function validation(num){
	document.getElementById("ajaxresponse").innerHTML = "";
  	var submitRes = document.getElementById("ajaxresponse");

	var genricFieldData = $('#validationCustom'+num).val().trim();	
	if(genricFieldData.length == 0){ 
      $('.'+num+'invalid-feedback').show();
      var res = `<h3> Validation Failed Error code ERR`+num+`<h3> `  
      submitRes.innerHTML = submitRes.innerHTML + res
      return false;
    }else {
	  return genricFieldData;
	}

} 





