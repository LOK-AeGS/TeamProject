package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id", updatable = false)
    private Long category_id;

    @Column(name = "category_name", nullable = false)
    private String category_name;

    @Column(name = "created_at", columnDefinition = "datetime default NOW()",nullable = true)
    private Date created_at;


    @Column(name = "updated_at", columnDefinition = "datetime default NOW()", nullable = true)
    private Date updated_at;

}
