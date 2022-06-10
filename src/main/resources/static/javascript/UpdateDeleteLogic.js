function init() {
checkUserSession();
hideValidationfailedMessage();
var userData = JSON.parse(sessionStorage.getItem("userData"));
var emailID = userData.UserEmail;
var targetUpdateData;





var data = {
	emailID:emailID
}


$.ajax({
		url: ctx+"/getDataOnEmailID",
		type: "POST",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify(data),
		success: function(response) {
			console.log("Success !!");
			console.log(response)
			
		var detailDescription = document.getElementById('accordionFlush');
		detailDescription.innerHTML = "";			
		
			
		for (let i = 0; i < response.length; i++) {
		
		var jsonresponse = JSON.stringify(response[i]); 
		console.log("jsonresponse :: "+jsonresponse);
		
		//So that every itteration dropdown is proper
		var collapseable = "flush-collapse"+i;
		
			var info = `<div class="accordion-item"> 
                 <h2 class="accordion-header" id="flush-headingOne">
                    <div class="container">
                      <div class="row accordion-button collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target='${"#"+collapseable}' aria-expanded="false" 
                              aria-controls="flush-collapseOne">
                        <div class="col-lg-4">
                          <button  class="btn btn-light">
                            ${response[i].description} 
                          </button>
                        </div>
                        <div class="col-lg-4">
                          <button  class="btn btn-success btn-lg"
                          		data-bs-toggle="modal" onclick='setTargetData(${jsonresponse})' data-bs-target="#updateModal" >
                            Update
                          </button>
                        </div>
                        <div class="col-lg-4" onclick='deleteIteam(${jsonresponse})'>
                          <button  class="btn btn-danger btn-lg">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div id='${collapseable}' class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                      <div class="list-group">
                        <h5 class="list-group-item list-group-item-action list-group-item-secondary">Detail Description : ${response[i].detaildescription}</h5>
                        <table class="table-style">
                          <tr>
                            <td colspan="6" class="h7 text-dark"><span id="idOrginalDate">Orginal Date : ${response[i].orginaldatetime} </span></td> 
                            <td colspan="6" class="h7 text-dark"><span id="idUpdatedDate">Updated Date : ${response[i].updateddatetime} </span></td> 
                          </tr>
                          <tr>
                            <td colspan="6" class="h7 text-dark"><span id="idStatus">Status : ${response[i].status}</span></td> 
                            <td colspan="6" class="h7 text-dark"><span id="idFlag">Flag : ${response[i].flag}</span></td> 
                          </tr>
                          <tr>
                            <td colspan="12" class="h7 text-dark"><span id="idStatus">Email ID : ${response[i].useremailid}</span></td> 
                          </tr>
                        </table>
                        <h7 class="list-group-item list-group-item-action list-group-item-secondary">Refence link : ${response[i].refrencelinks}</h7>
                      </div>
                    </div>
                  </div>
                </div>
                
                
            <!-- Modal -->
<div class="modal fade" id="updateModal" tabindex="-1"
	aria-labelledby="updateModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="text-center modal-title" id="updateModalLabel">Update the Following Fields</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body">

<!------------------------------------- info to update starts ------------------------------------------------------------>

				<div class="col-lg-12 mb-3">
					<label for="validationCustom05">Description</label> <input
						type="text" class="form-control" id="validationCustom05"
						placeholder="insert Description  !! " required>
					<div class="05invalid-feedback text-danger fw-bold fs-3">
						Please provide Description.</div>
				</div>


				<div class="col-lg-12 mb-3">
					<label for="validationCustom06">Detail Description</label> <input
						type="text" class="form-control" id="validationCustom06"
						placeholder="Detail Description  !! " required>
					<div class="06invalid-feedback text-danger fw-bold fs-3">
						Please provide Detail Description.</div>
				</div>

				<div class="col-lg-12 mb-3">
					<label for="validationCustom07">Refrence links</label> <input
						type="text" class="form-control" id="validationCustom07"
						placeholder="Refrence links ">
				</div>

				<div class="row">
					<!-- status -->
					<div class="btn-group dropend col-lg-4">
						<a class="btn btn-secondary dropdown-toggle" href="#"
							role="button" id="dropdownstatus" data-bs-toggle="dropdown"
							aria-expanded="false"> Status </a>

						<ul class="dropdown-menu" aria-labelledby="dropdownstatus"
							id="ddstatus">
							<li><a class="dropdown-item" href="#">Completed</a></li>
							<li><a class="dropdown-item" href="#">Ongoing</a></li>
							<li><a class="dropdown-item" href="#">Pending</a></li>
						</ul>
					</div>

					<!-- flag -->
					<div class="btn-group dropend col-lg-4">
						<a class="btn btn-secondary dropdown-toggle" href="#"
							role="button" id="dropdownflag" data-bs-toggle="dropdown"
							aria-expanded="false"> Flag </a>

						<ul class="dropdown-menu" aria-labelledby="dropdownflag"
							id="ddflag">
							<li><a class="dropdown-item bg-danger" href="#">Red</a></li>
							<li><a class="dropdown-item" href="#">Orange</a></li>
							<li><a class="dropdown-item bg-warning" href="#">Yellow</a></li>
						</ul>
					</div>

					<!-- Alarm Notification -->
					<div class="btn-group dropend col-lg-4">
						<a class="btn btn-secondary dropdown-toggle" href="#"
							role="button" id="dropdownalarm" data-bs-toggle="dropdown"
							aria-expanded="false"> Alarm Notification </a>

						<ul class="dropdown-menu" aria-labelledby="dropdownalarm"
							id="ddalarm">
							<li><a class="dropdown-item" href="YES">Yes !! lets get
									this done </a></li>
							<li><a class="dropdown-item" href="NO">No Im lazzy !!!</a></li>
						</ul>
					</div>
				</div>


<!---------------------------------- info to update ends ------------------------------------------->





			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary"
					data-bs-dismiss="modal">Close</button>
				<div class="col-lg-4" onclick='updateIteam()'>
                          <button  class="btn btn-primary btn-lg">
                            Update Changes
                          </button>
                        </div>
					
			</div>
		</div>
	</div>
</div>
`;
	
			detailDescription.innerHTML = detailDescription.innerHTML + info;
		}
			
		},
		error: function(xhr) {
			console.log(xhr)
		}
	});


}



 
function checkUserSession() {
	var userData = JSON.parse(sessionStorage.getItem("userData"));
	if (userData == null) {
		window.location.href = ctx+`/login`;
	}
}

function deleteIteam(data) {
	$.ajax({
		url: ctx+"/deleteUserToDoIteam",
		type: "POST",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),
		success: function(response) {
			console.log("Success !!!");
			console.log(response)
			init();
			
		}, 
		error: function(xhr) {
			console.log(xhr)
		}
	});
}


function updateIteam(){
	
	hideValidationfailedMessage();
	var jsondata = targetUpdateData;
	console.log("update Data :"+JSON.stringify(jsondata))
	
	var description = validation("05");
	var detaildescription = validation("06");
	var refrencelinks = $('#validationCustom07').val().trim();
	
	var alarm = $("#dropdownalarm").attr("href");
	var status = $("#dropdownstatus").text();
	var flag = $("#dropdownflag").text();
	
	if(description && detaildescription && refrencelinks){
		
		jsondata.updateddatetime = new Date().toLocaleString();
		jsondata.description = description;
		jsondata.detaildescription= detaildescription;
		jsondata.refrencelinks = refrencelinks;
		jsondata.alarm = alarm;
		jsondata.status = status;
		jsondata.flag = flag;
		
		
		$.ajax({
		url: ctx+"/addTodoTask",
		type: "POST",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(jsondata),
		success: function(response) {
			console.log("update task "+response);
			init();
			$('.modal-backdrop').remove();
		},
		error: function(xhr) {
			console.log(xhr)
		}
	});
	
	}
	
	


}



function hideValidationfailedMessage(){
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
  $('.05invalid-feedback').hide();
  $('.06invalid-feedback').hide();
  $('.07invalid-feedback').hide();
}

//This is a generic method for all types of validation and error response
function validation(num){
	

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

function setTargetData(data){
	hideValidationfailedMessage();
	targetUpdateData = data;
}