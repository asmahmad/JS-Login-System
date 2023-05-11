package com.coderscampus.week21.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coderscampus.week21.domain.User;
import com.coderscampus.week21.service.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/exists")
	@ResponseBody
	public Boolean postExists (@RequestBody User user) {
		user = userService.findByUsername(user.getUsername());
		return (user != null);
	}
	
	@GetMapping("/validateUsername")
	@ResponseBody
	public Boolean getValidUsername(String name) {
		return true;
	}
	
	@GetMapping("/validatePassword")
	@ResponseBody
	public Boolean getValidPassword (String password) {
		return true;
	}
	
	@GetMapping("/register")
	public String getRegister(ModelMap model) {
		User user = new User();
		
		model.put("user", user);
		
		return "register";
	}
	
	@PostMapping("/register")
	public String postRegister (User user) {
		userService.save(user);
		
		return "redirect:/login";
	}
	
}