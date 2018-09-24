package com.sgg.rest;

import java.util.List;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sgg.model.Employee;
import com.sgg.service.EmployeeService;

@RestController
public class EmployeeHub {
	
	@Autowired
	private EmployeeService service;
	
	@RequestMapping(method = RequestMethod.GET, value="api/employees")
	public Response getEmployees() {
		List<Employee> empList = service.getAllEmployes();
		return Response.status(200).entity(empList).build();
		
	}
	

	@RequestMapping(method=RequestMethod.POST,value="api/employee", consumes ="application/JSON", produces = "application/JSON")
	public Response addEmployee(@RequestBody Employee emp) {
		 service.addEmployee(emp);
		return Response.status(200).build();
		
	}

}
