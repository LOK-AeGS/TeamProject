package com.example.mall_project.domain;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

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

    @Column(name = "created_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date created_at;

    @Column(name = "updated_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date updated_at;

}
