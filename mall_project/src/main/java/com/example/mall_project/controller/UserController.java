package com.example.mall_project.controller;

import com.example.mall_project.domain.User;
import com.example.mall_project.dto.AddUserRequest;
import com.example.mall_project.dto.UserResponse;
import com.example.mall_project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequiredArgsConstructor
@RestController
public class UserController {


    private final UserService userService;


    @PostMapping("/api/users")
    public ResponseEntity<User> addUser(@RequestBody AddUserRequest request){
        User savedUser = userService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedUser);
    }


    @GetMapping("/api/user")
    public ResponseEntity<List<UserResponse>> findAllUsers() {
        List<UserResponse> users = userService.findAll()
                .stream()
                .map(UserResponse::new)
                .toList();


        return ResponseEntity.ok()
                .body(users);
    }

}





