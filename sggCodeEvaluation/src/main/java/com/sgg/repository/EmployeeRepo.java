package com.sgg.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sgg.model.Employee;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, String>{

}
