package com.example.demo.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
@Table(name="students")
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int uid;
  private String name;
  private Double weight;
  private Double height;
  private String hairColor;
  private Double gpa;
  private String country;
  public Student() {
  }

  public Student(String name, Double weight, Double height, String hairColor, Double gpa, String country) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.hairColor = hairColor;
    this.gpa = gpa;
    this.country = country;
  }
  public int getUid() {
    return uid;
  }
  public void setUid(int uid) {
    this.uid = uid;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public Double getWeight() {
    return weight;
  }
  public void setWeight(Double weight) {
    this.weight = weight;
  }
  public Double getHeight() {
    return height;
  }
  public void setHeight(Double height) {
    this.height = height;
  }
  public String getHairColor() {
    return hairColor;
  }
  public void setHairColor(String hairColor) {
    this.hairColor = hairColor;
  }
  public Double getGpa() {
    return gpa;
  }
  public void setGpa(Double gpa) {
    this.gpa = gpa;
  }
  public String getCountry() {
    return country;
  }
  public void setCountry(String country) {
    this.country = country;
  }
  
  
}
