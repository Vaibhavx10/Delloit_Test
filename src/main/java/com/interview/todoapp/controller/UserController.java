package com.interview.todoapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.interview.todoapp.entity.Task;
import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.TaskRepo;
import com.interview.todoapp.repo.UserRepo;
import com.interview.todoapp.service.LoginService;
import com.interview.todoapp.service.TaskService;
import com.interview.todoapp.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private TaskRepo taskRepo;

	@Autowired
	private LoginService loginService;
	
	@Autowired
	private TaskService taskService;
	
	
	@Autowired
	private UserService userService;
	

	@PostMapping("/addNewUser")
	public User addNewUser(@RequestBody User user) {
		System.out.println("user :: " + user.toString());
		return userService.addNewUser(user);
	}

	@GetMapping("/getAllUsers")
	public Iterable<User> getAllUsers(User user) {
		return userRepo.findAll();
	}

	@GetMapping("/getAllUsersByEmailID")
	public List<User> getAllUsersByEmailID(String emailID) {
		return userRepo.findByEmail(emailID);
	}

	@GetMapping("/test")
	public String getxAllUsersByEmailID(String emailID) {
		return emailID;
	}

	@GetMapping("/loginUser")
	public User loginUser(String userName, String password) {
		System.out.println("userName: " + userName + " password: " + password);
		User objUser = null;
		try {
			objUser = loginService.validateUser(userName, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return objUser;
	}

	// Add user to-do tasks
	@PostMapping("/addTodoTask")
	public Task addTodoTask(@RequestBody Task task) {
		return taskService.addNewTask(task);
	}

	// Delete user to-do tasks
	@PostMapping("/deleteUserToDoIteam")
	public String deleteUserToDoIteam(@RequestBody Task task) {
		System.out.println("deleteUserToDoIteam :: | "+task);
		taskRepo.delete(task); 
		return "User Task Deleted successfully";
	}

}
