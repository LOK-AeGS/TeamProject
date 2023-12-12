package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="address_number", updatable = false)
    private Long address_number;

    @Column(name = "user_number", nullable = false)
    private String user_number;

    @Column(name = "address_name", nullable = true)
    private String address_name;

    @Column(name = "address_post", nullable = true)
    private String address_post;

    @Column(name = "address_location", nullable = true)
    private String address_location;

    @Column(name = "address_detail", nullable = true)
    private String address_detail;

    @Column(name = "created_date", nullable = true)
    private String created_date;
    
}
