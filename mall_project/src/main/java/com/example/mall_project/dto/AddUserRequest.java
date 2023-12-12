package com.example.mall_project.dto;

import com.example.mall_project.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter

public class AddUserRequest {


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

    public User toEntity() {
        return User.builder()
                .user_name(user_name)
                .user_identification_number(user_identification_number)
                .user_phone(user_phone)
                .user_id(user_id)
                .user_password(user_password)
                .user_gender(user_gender)
                .user_birth(user_birth)
                .user_email(user_email)
                .user_level(user_level)
                .created_date(created_date).build();
    }


}
