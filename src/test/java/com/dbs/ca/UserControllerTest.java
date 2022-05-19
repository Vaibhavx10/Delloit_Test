package com.dbs.ca;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import com.interview.todoapp.controller.UserController;
import com.interview.todoapp.entity.Task;
import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.TaskRepo;
import com.interview.todoapp.repo.UserRepo;
import com.interview.todoapp.service.LoginService;

@WebMvcTest(UserController.class)
public class UserControllerTest {

	@Mock
	private MockMvc mockMvc;

	@Mock
	private UserRepo userRepo;

	@Mock
	private TaskRepo taskRepo;

	@InjectMocks
	private LoginService loginService;
	
	@InjectMocks
	private UserController userController;
	
	
	


	/*
	 * @Test
	 * 
	 * @DisplayName("Add New and Task") public void addNewUserTest() { User user =
	 * new User();
	 * 
	 * }
	 */

	
	
	/*
	 * @Test
	 * 
	 * @DisplayName("Add Task") public void addTodoTaskTest() { Task user = new
	 * Task(1, "admin@gmail.com", "LAST LIFE", "", "", "Nothing", "Yes", "Ongoing",
	 * "Red","");
	 * 
	 * try { when(taskRepo.save(user)).thenReturn(user);
	 * 
	 * assertEquals(user,userController.addTodoTask(user));
	 * 
	 * 
	 * } catch (Exception e) { e.printStackTrace(); }
	 * 
	 * }
	 */
}
