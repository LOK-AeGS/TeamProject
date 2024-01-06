package com.example.mall_project.service;

import com.example.mall_project.domain.User;
import com.example.mall_project.dto.UserDto;
import com.example.mall_project.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class UserService {

    @Autowired
    private final UserRepository UserRepository;

    public User save(User user){
        return UserRepository.save(user);
    }


    public User findById(Long id){
        return UserRepository.findById(id).orElse(null);

    }



    public User deleteById(Long id){

        UserRepository.deleteById(id);
        return this.findById(id);

    }



    public List<User> findAll(){

        return UserRepository.findAll();
    }

    public User updateUserById(UserDto request){
        User targetUser = request.toEntity();
        return UserRepository.save(targetUser);
    }
//    public List<User> deleteById(DeleteUserRequest request){ return UserRepository.deleteById(request.toEntity().getUser_number()); }



}
