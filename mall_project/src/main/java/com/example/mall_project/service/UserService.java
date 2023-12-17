package com.example.mall_project.service;

import com.example.mall_project.domain.User;
import com.example.mall_project.dto.AddUserRequest;
import com.example.mall_project.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class UserService {

    @Autowired
    private final UserRepository UserRepository;




    public User save(AddUserRequest request){
        return UserRepository.save(request.toEntity());
    }


    public List<User> findAll(){
        return UserRepository.findAll();
    }

}
