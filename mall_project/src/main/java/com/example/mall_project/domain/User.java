package com.example.mall_project.domain;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table
@DynamicInsert
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



    @Builder
    public User(String user_name, String user_identification_number,String user_phone, String user_id,
                String user_password, String user_gender, String user_birth, String user_email, String user_level, String created_date){
        this.user_name = user_name;
        this.user_identification_number =  user_identification_number;
        this.user_phone =  user_phone;
        this.user_id =  user_id;
        this.user_password =  user_password;
        this.user_gender =  user_gender;
        this.user_birth =  user_birth;
        this.user_email =  user_email;
        this.user_level =  user_level;
        this.created_date =  created_date;

    }

}
