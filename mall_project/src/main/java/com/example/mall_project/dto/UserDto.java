package com.example.mall_project.dto;

import com.example.mall_project.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;

@Getter
@Builder
@AllArgsConstructor

public class UserDto {

        private Long user_id;
        private String user_name;
        private String user_identification_number;
        private String user_phone;
        private String user_account_id;
        private String user_account_password;
        private String user_gender;
        private String user_birth;
        private String user_email;
        private String user_level;
        private Date created_at;
        private Date updated_at;

    public UserDto(User user) {

        this.user_id = user.getUser_id();
        this.user_name = user.getUser_name();
        this.user_identification_number =  user.getUser_identification_number();
        this.user_phone =  user.getUser_phone();
        this.user_account_id =  user.getUser_account_id();
        this.user_account_password =  user.getUser_account_password();
        this.user_gender =  user.getUser_gender();
        this.user_birth =  user.getUser_birth();
        this.user_email =  user.getUser_email();
        this.user_level =  user.getUser_level();
        this.created_at =  user.getCreated_at();
        this.updated_at =  user.getUpdated_at();

    }


        public User toEntity() {
            return User.builder()
                    .user_id(user_id)
                    .user_name(user_name)
                    .user_identification_number(user_identification_number)
                    .user_phone(user_phone)
                    .user_account_id(user_account_id)
                    .user_account_password(user_account_password)
                    .user_gender(user_gender)
                    .user_birth(user_birth)
                    .user_email(user_email)
                    .user_level(user_level)
                    .created_at(created_at)
                    .updated_at(updated_at).build();
        }

        public UserDto toDto() {
            return UserDto.builder()
                    .user_id(user_id)
                    .user_name(user_name)
                    .user_identification_number(user_identification_number)
                    .user_phone(user_phone)
                    .user_account_id(user_account_id)
                    .user_account_password(user_account_password)
                    .user_gender(user_gender)
                    .user_birth(user_birth)
                    .user_email(user_email)
                    .user_level(user_level)
                    .created_at(created_at)
                    .updated_at(updated_at).build();
        }

    }





// Refactored AddUserRequest, DeleteUserRequest.. dto의 요청이 많아지면서 파일의 개수가 필요 이상으로 많아짐.
// Solution : userDto 클래스 만들기 : UserDto와 InnerClass로 선언하고, Service단에서 이를 이용하여 깔끔하게 관리할 수 있다