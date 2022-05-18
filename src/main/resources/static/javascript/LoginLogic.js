/**
 * 
 */


/**Global Variables*/
var UserRole;



/**
 * Initializer function
 */
function init() {

	checkUserSession()

}

function checkUserSession() {
	var userData = JSON.parse(sessionStorage.getItem("userData"));
	if (userData == null) {
		renderLoginModal();
	}
	else {
		window.location.href = `../dashboard`;
	}
}


function renderLoginModal() {

	var elem = `<button type="button" id="btn_Modal" style="display:none" class="btn btn-primary" data-bs-target="#loginModal" data-bs-toggle="modal"></button>`;

	document.body.innerHTML = document.body.innerHTML + elem;

	document.getElementById('btn_Modal').click();
}



function validateLogin() {

	let userName = document.getElementById('userName').value;
	let userPassword = document.getElementById('userPassword').value;
	
	var Regex = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
	
	/**Validation for username*/
	if(userName=="" || userName==null || !Regex.test(userName)){
	alert("Please fill valid UserName!")
	return
	}

	/**validation for password*/
	if(userPassword=="" || userPassword==null || !Regex.test(userPassword)){
	alert("Please fill valid Password!")
	return
	}
	



	var todoUser = {
		userName: userName,
		password: userPassword
	}

	$.ajax({
		url: "/loginUser",
		type: "GET",

		data: todoUser,
		success: function(response) {
		
			if(response!="" && response!=null){
			console.log(response)
			const userDetails = { "todoUser": response['id'], "UserName": response['uname'], "UserEmail": response['email'] };
			sessionStorage.setItem("userData", JSON.stringify(userDetails));
			checkUserSession()
			}
			else{
			alert("Invlaid Login!")
			}
		},
		error: function(xhr) {
			console.log(xhr)
		}
	});

}



function createUser() {
	window.location.href = `../addtodo`;
}
