package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class ItemColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="color_number", updatable = false)
    private Long color_number;

    @Column(name="color_code", updatable = false)
    private Long color_code;


    @Column(name = "item_number", nullable = false)
    private String item_number;


    @Column(name = "created_date", nullable = true)
    private String created_date;

}
