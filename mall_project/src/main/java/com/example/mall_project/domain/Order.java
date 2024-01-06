package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_number", updatable = false)
    private Long order_number;


    @Column(name = "user_number", nullable = false)
    private String user_number;


    @Column(name = "order_ea", nullable = true)
    private String order_ea;


    @Column(name = "", nullable = true)
    private String order_price;


    @Column(name = "order_size", nullable = true)
    private String order_size;


    @Column(name = "order_model", nullable = true)
    private String order_model;

    @Column(name = "order_install", nullable = true)
    private String order_install;

    @Column(name = "created_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date created_at;

    @Column(name = "updated_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date updated_at;

}
