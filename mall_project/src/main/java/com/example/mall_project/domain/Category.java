package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_number", updatable = false)
    private Long category_number;


    @Column(name = "category_name", nullable = false)
    private String category_name;

    @Column(name = "created_date", nullable = true)
    private String created_date;

}
