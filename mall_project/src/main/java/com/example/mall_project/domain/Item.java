package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="item_number", updatable = false)
    private Long item_number;


    @Column(name = "category_number", nullable = false)
    private String category_number;


    @Column(name = "item_name", nullable = true)
    private String item_name;


    @Column(name = "item_price", nullable = true)
    private String item_price;


    @Column(name = "item_size", nullable = true)
    private String item_size;


    @Column(name = "item_model", nullable = true)
    private String item_model;

    @Column(name = "item_install", nullable = true)
    private String item_install;


    @Column(name = "created_date", nullable = true)
    private String created_date;

}
