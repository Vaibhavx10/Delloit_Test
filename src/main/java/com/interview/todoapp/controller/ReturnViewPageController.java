package com.interview.todoapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReturnViewPageController {
	
	@GetMapping("/home")
	public String homePage(Model model) {
		model.addAttribute("hey", "valuessss");
		return "home";
	}

	@GetMapping("/dashboard")
	public String dashboard(Model model) {
		model.addAttribute("hey", "valuessss");
		return "dashboard";
	}
	
	@GetMapping("/")
	public String loginPage(Model model) {
		return "login";
	}
	
	@GetMapping("/login")
	public String loginView(Model model) {
		return "login";
	}
	
	@GetMapping("/addtodo")
	public String addtodo(Model model) {
		return "addtodo";
	}
	
	@GetMapping("/updatedelete")
	public String updatedelete(Model model) {
		return "updatedelete";
	}


}
