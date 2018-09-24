package com.sgg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgg.model.Employee;
import com.sgg.repository.EmployeeRepo;

@Service
@Transactional
public class EmployeeService {
	
@Autowired EmployeeRepo empRepo;
	
	public List<Employee>  getAllEmployes() {
		return (List<Employee>) empRepo.findAll();
		
		/*return Arrays.asList(new Employee("Jaiba","","Syed","Female","1992, 4,12","SE"),
				new Employee("Jaiba","","Syed","Female","1992, 4,12","SE1"));*/

	}

	public void addEmployee(Employee emp) {
		empRepo.save(emp);
		
	}

}
