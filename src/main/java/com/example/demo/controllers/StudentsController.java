package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.engine.AttributeName;

import com.example.demo.models.Student;
import com.example.demo.models.StudentRepository;

import org.springframework.web.bind.annotation.PathVariable;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class StudentsController {
  @Autowired
  private StudentRepository studentRepo;

  @GetMapping("/students/view")
  public String getAllStudents(Model model){

    List<Student> students = studentRepo.findAll();
    model.addAttribute("st", students);
    return "students/showAll";
  }

@GetMapping("/students/studentInfo/{id}") 
public String getStudent(@PathVariable("id") int id, Model model) {
    Student student = studentRepo.findById(id);
    model.addAttribute("st", student);
    return "students/studentInfo";
}
@PostMapping("/students/delete/{id}")
    public String deleteStudent(@PathVariable("id") int id) {
        studentRepo.deleteById(id);
        return "students/addedStudent";
    }

  @PostMapping("/students/add")
  public String addStudent(@RequestParam Map<String, String> newstudent, HttpServletResponse response){
    String newName= newstudent.get("name");
    double newWeight = Double.parseDouble(newstudent.get("weight"));
    double newHeight = Double.parseDouble(newstudent.get("height"));
    String newHairColor=newstudent.get("hairColor");
    Double newGpa = Double.parseDouble(newstudent.get("gpa"));
    String newCountry=newstudent.get("country");
    studentRepo.save(new Student(newName,newWeight,newHeight,newHairColor,newGpa,newCountry));
    response.setStatus(201);
    return "students/addedStudent"; 
   }
   @PostMapping("/students/update/{id}")
public String updateStudent(
        @PathVariable("id") int id,
        @RequestParam("name") String name,
        @RequestParam("weight") double weight,
        @RequestParam("height") double height,
        @RequestParam("hairColor") String hairColor,
        @RequestParam("gpa") double gpa,
        @RequestParam("country") String country
) {
    Student student = studentRepo.findById(id);
    if (student != null) {
        student.setName(name);
        student.setWeight(weight);
        student.setHeight(height);
        student.setHairColor(hairColor);
        student.setGpa(gpa);
        student.setCountry(country);
        studentRepo.save(student);
    }
    return "redirect:/students/view";
}

}
