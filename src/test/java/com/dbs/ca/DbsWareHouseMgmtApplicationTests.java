package com.dbs.ca;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.interview.todoapp.ToDoApplication;
import com.interview.todoapp.entity.Task;
import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.TaskRepo;
import com.interview.todoapp.repo.UserRepo;
import com.interview.todoapp.service.TaskService;
import com.interview.todoapp.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ToDoApplication.class)
class ToDoApplicationTests {

	@MockBean
	private TaskRepo taskrepo;

	@MockBean
	private UserRepo userRepo;

	@Autowired
	private TaskService taskService;

	@Autowired
	private UserService userService;

	@Test
	void contextLoads() {
	}

	@Test
	@DisplayName("Add Task")
	public void saveTask() {
		Task task = new Task(10, "admin@gmail.com", "LAST LIFE", "", "", "Nothing", "Yes", "Ongoing", "Red", "");
		when(taskrepo.save(task)).thenReturn(task);
		assertEquals(task, taskService.addNewTask(task));
	}

	@Test
	@DisplayName("Add User and Task")
	public void saveUserWithTask() {
		try {

			List<Task> tasklist = new ArrayList<Task>();
			tasklist.add(new Task(100, "admin@gmail.com", "LAST LIFE", "", "", "Nothing", "Yes", "Ongoing", "Red", "NO"));
			User user = new User(100, "admin", "vaibhav", "admin", "dadas", "Xadmin@gmail.com", tasklist);
			when(userRepo.save(user)).thenReturn(user);
			assertEquals(user, userService.addNewUser(user));

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
