function init() {
checkUserSession();
var userData = JSON.parse(sessionStorage.getItem("userData"));
var emailID = userData.UserEmail;


var data = {
	emailID:emailID
}


$.ajax({
		url: "${pageContext.servletContext.contextPath}/getDataOnEmailID",
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
		var collapseable = "flush-collapse"+i;
			var info = `<div class="accordion-item"> 
                 <h2 class="accordion-header" id="flush-headingOne">
                    <div class="container">
                      <div class="row accordion-button collapsed" type="button" 
                              data-bs-toggle="collapse" data-bs-target='${"#"+collapseable}' aria-expanded="false" 
                              aria-controls="flush-collapseOne">
                        <div class="col-lg-6">
                          <button  class="btn btn-light">
                            ${response[i].description} 
                          </button>
                        </div>
                        <div id="accordemailID" class="text-end col-lg-4">
                          email ID : ${response[i].useremailid} 
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div id='${collapseable}' class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                      <div class="list-group">
                        <h5 class="list-group-item list-group-item-action list-group-item-secondary">Detail Description : ${response[i].detaildescription} </h5>
                        <table class="table-style">
                          <tr>
                            <td colspan="6" class="h7 text-dark"><span id="idOrginalDate">Orginal Date : ${response[i].orginaldatetime} </span></td> 
                            <td colspan="6" class="h7 text-dark"><span id="idUpdatedDate">Updated Date : ${response[i].updateddatetime} </span></td> 
                          </tr>
                          <tr>
                            <td colspan="6" class="h7 text-dark"><span id="idStatus">Status : ${response[i].status}</span></td> 
                            <td colspan="6" class="h7 text-dark"><span id="idFlag">Flag : ${response[i].flag}</span></td> 
                          </tr>
                        </table>
                        <h7 class="list-group-item list-group-item-action list-group-item-secondary">Refence link : ${response[i].refrencelinks}</h7>
                      </div>
                    </div>
                  </div>
                </div>`;
	
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
		window.location.href = `${pageContext.servletContext.contextPath}/login`;
	}
}