package com.interview.todoapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.UserRepo;

@Service 
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public User addNewUser( User user) {
		return userRepo.save(user);
	}

}
