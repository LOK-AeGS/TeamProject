package com.example.mall_project.dto;

import com.example.mall_project.domain.User;
import lombok.Getter;

@Getter
public class UserResponse {


    private String user_name;
    private String user_identification_number;
    private String user_phone;
    private String user_id;
    private String user_password;
    private String user_gender;
    private String user_birth;
    private String user_email;
    private String user_level;
    private String created_date;

    public UserResponse(User user) {

        this.user_name = user.getUser_name();
        this.user_identification_number =  user.getUser_identification_number();
        this.user_phone =  user.getUser_phone();
        this.user_id =  user.getUser_id();
        this.user_password =  user.getUser_password();
        this.user_gender =  user.getUser_gender();
        this.user_birth =  user.getUser_birth();
        this.user_email =  user.getUser_email();
        this.user_level =  user.getUser_level();
        this.created_date =  user.getCreated_date();

    }
}
