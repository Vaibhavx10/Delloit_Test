<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">



<!-- Bootstrap CSS -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Referd from this stylesheet for curisve login style  -->
<link href="https://fonts.googleapis.com/css?family=Kaushan+Script"
	rel="stylesheet">
<script type="text/javascript" async src="https://tenor.com/embed.js"></script>

<title>Register</title>
<style>
</style>
</head>
<body onload="initialize()">
	<div class="container card ">
		<jsp:include page="/WEB-INF/views/header.jsp" />
		<h2 class="text-center" id="regPage">Add New To do List</h2>

		<div class="row card-body">
			<div class="col-md-4 mb-3"></div>

			<div class="col-md-4 mb-3"></div>
			<div class="row" id="idfnamelname">
				<div class="col-lg-6 col-md-4 mb-3">
					<label for="validationCustom01">First name</label> <input
						type="text" class="form-control" id="validationCustom01"
						placeholder="First name" value="Mark" required>
					<div class="valid-feedback">Looks good!</div>
					<div class="01invalid-feedback text-danger fw-bold fs-3">
						Please choose a first Name</div>
				</div>
				<div class="col-lg-6 col-md-4 mb-3">
					<label for="validationCustom02">Last name</label> <input
						type="text" class="form-control" id="validationCustom02"
						placeholder="Last name" value="Otto" required>
					<div class="valid-feedback">Looks good!</div>
					<div class="02invalid-feedback text-danger fw-bold fs-3">
						Please choose a Last Name</div>
				</div>
			</div>

			<div class="row" id="idunamepass">
				<div class="col-lg-6 col-md-4 mb-3">
					<label for="validationCustom03">User Name</label> <input
						type="text" class="form-control" id="validationCustom03"
						placeholder="User Name !! " required>
					<div class="03invalid-feedback text-danger fw-bold fs-3">
						Please provide a valid UserName.</div>
				</div>

				<div class="col-lg-6 col-md-3 mb-3">
					<label for="validationCustom04">Password</label> <input type="text"
						class="form-control" id="validationCustom04"
						placeholder="Choose a strong password !! " required>
					<div class="04invalid-feedback text-danger fw-bold fs-3">
						Please provide a valid Password.</div>
				</div>
			</div>







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
			
			<div class="col-lg-12 mb-3" id="idemailID">
				<label for="validationCustom07">Email ID</label> <input
					type="text" class="form-control" id="validationCustom08"
					placeholder="Email ID ">
					<div class="08invalid-feedback text-danger fw-bold fs-3">
					Please provide Email ID.</div>
			</div>

			<div class="row">
				<!-- status -->
				<div class="btn-group dropend col-lg-4">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button"
						id="dropdownstatus" data-bs-toggle="dropdown"
						aria-expanded="false"> Status </a>

					<ul class="dropdown-menu" aria-labelledby="dropdownstatus" id="ddstatus">
						<li><a class="dropdown-item" href="#">Completed</a></li>
						<li><a class="dropdown-item" href="#">Ongoing</a></li>
						<li><a class="dropdown-item" href="#">Pending</a></li>
					</ul>
				</div>

				<!-- flag -->
				<div class="btn-group dropend col-lg-4">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button"
						id="dropdownflag" data-bs-toggle="dropdown" aria-expanded="false">
						Flag </a>

					<ul class="dropdown-menu" aria-labelledby="dropdownflag" id="ddflag">
						<li><a class="dropdown-item bg-danger" href="#">Red</a></li>
						<li><a class="dropdown-item" href="#">Orange</a></li>
						<li><a class="dropdown-item bg-warning" href="#">Yellow</a></li>
					</ul>
				</div>
				
				<!-- Alarm Notification -->
				<div class="btn-group dropend col-lg-4">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button"
						id="dropdownalarm" data-bs-toggle="dropdown" aria-expanded="false">
						Alarm Notification </a>

					<ul class="dropdown-menu" aria-labelledby="dropdownalarm" id="ddalarm">
						<li><a class="dropdown-item" href="YES">Yes !! lets get this done </a></li>
						<li><a class="dropdown-item" href="NO">No Im lazzy !!!</a></li>
					</ul>
				</div>
			</div>

			<div class="col-lg-12 text-center" data-bs-toggle="modal"
				data-bs-target="#staticBackdrop">
				<button class="btn btn-primary " onclick="sendtoDB()" type="submit">Submit
					form</button>
			</div>
			</form>




			<!-- Modal -->
			<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
				data-bs-keyboard="false" tabindex="-1"
				aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="staticBackdropLabel">Response
								!!!</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div class="modal-body" id="ajaxresponse"></div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary"
								data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<!-- Modal end-->




		</div>
	</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>	
<script src="../javascript/AddToDoLogic.js"></script>
</body>
</html>