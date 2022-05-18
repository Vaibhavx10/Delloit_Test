<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
        
</head>
<body onload="init()">

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal" data-bs-backdrop="static" id="loginModal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login</h5>

      </div>
      <div class="modal-body">
        
        <form>
          <div class="form-group">
            <label for="userName" class="col-form-label">Username:</label>
            <input type="text" required class="form-control" id="userName">
          </div>
          <div class="userPassword">
            <label for="userPassword" class="col-form-label">Password:</label>
            <input type="password" required class="form-control" id="userPassword">
          </div>
        </form>
        
      </div>
      <div class="modal-footer">
           <button type="button" class="btn btn-secondary" onclick="validateLogin()">Login</button>
           <button type="button"  data-bs-toggle="modal" onclick="createUser()" class="btn btn-outline-secondary">Create User</button>
      </div>
    </div>
  </div>
</div>






<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
        
        
<script src="../javascript/LoginLogic.js"></script>
</body>
</html>