<body>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">ToDoApp</a>
				<button class="navbar-toggler" type="button"
					data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link active" aria-current="page" href="${pageContext.servletContext.contextPath}/dashboard">Dashboard</a>
						<a class="nav-link active" aria-current="page" href="${pageContext.servletContext.contextPath}/addtodo">Add New Task</a> 
						<a class="nav-link" href="${pageContext.servletContext.contextPath}/updatedelete">Update / Delete Task</a>
						<a class="nav-link" href="${pageContext.servletContext.contextPath}/login">Login</a>
					</div>
				</div>
			</div>
		</nav>

</body>