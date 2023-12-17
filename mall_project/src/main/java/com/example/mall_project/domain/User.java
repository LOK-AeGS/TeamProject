package com.example.mall_project.domain;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table
@DynamicInsert
@Builder
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_number", updatable = false)
    @Id
    private Long user_number;


    @Column(name = "user_name", nullable = true)
    private String user_name;

    @Column(name = "user_identification_number", nullable = true)
    private String user_identification_number;

    @Column(name = "user_phone", nullable = true)
    private String user_phone;

    @Column(name = "user_id", nullable = true)
    private String user_id;

    @Column(name = "user_password", nullable = true)
    private String user_password;

    @Column(name = "user_gender", nullable = true)
    private String user_gender;

    @Column(name = "user_birth", nullable = true)
    private String user_birth;


    @Column(name = "user_email", nullable = true)
    private String user_email;


    @Column(name = "user_level", nullable = true)
    private String user_level;


    @Column(name = "created_date", nullable = true)
    private String created_date;





}
