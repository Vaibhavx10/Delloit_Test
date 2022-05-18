package com.interview.todoapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.UserRepo;

@Service
public class LoginService {
	
	@Autowired
	private UserRepo userRepo;

	public User validateUser(String userName, String password) {
		User user=userRepo.findByUnameAndUpass(userName,password);
		return user;
	}

}
