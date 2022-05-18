package com.interview.todoapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.interview.todoapp.repo.UserRepo;

@RestController
public class AddToPageController {
	
	@Autowired
	private UserRepo userrepo;
	
	
	

}
