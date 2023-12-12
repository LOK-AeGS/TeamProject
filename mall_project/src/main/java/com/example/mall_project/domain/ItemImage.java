package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class ItemImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_number", updatable = false)
    private Long image_number;


    @Column(name = "item_number", nullable = false)
    private String item_number;


    @Column(name = "image_link", nullable = true)
    private String image_link;


    @Column(name = "image_primary", nullable = true)
    private String image_primary;

    @Column(name = "created_date", nullable = true)
    private String created_date;

}
