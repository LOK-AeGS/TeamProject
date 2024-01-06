package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="address_id", updatable = false)
    private Long address_id;

    @Column(name = "user_id", nullable = false)
    private String user_id;

    @Column(name = "address_name", nullable = true)
    private String address_name;

    @Column(name = "address_post", nullable = true)
    private String address_post;

    @Column(name = "address_location", nullable = true)
    private String address_location;

    @Column(name = "address_detail", nullable = true)
    private String address_detail;

    @Column(name = "created_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date created_at;

    @Column(name = "updated_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date updated_at;

    
}
