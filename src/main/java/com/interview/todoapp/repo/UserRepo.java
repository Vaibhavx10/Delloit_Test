package com.interview.todoapp.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.interview.todoapp.entity.User;


public interface UserRepo extends CrudRepository<User, Integer>{
	//CrudRepository will save or update but wont save duplicate values
	List<User> findByEmail(String emailID);
	
	User findByUnameAndUpass(String userName, String password);
 
}
