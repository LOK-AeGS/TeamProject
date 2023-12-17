package com.example.mall_project.controller;

import com.example.mall_project.domain.User;
import com.example.mall_project.dto.AddUserRequest;
import com.example.mall_project.dto.UserResponse;
import com.example.mall_project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {


    private final UserService userService;


    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody AddUserRequest request){
        User savedUser = userService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedUser);
    }


    @GetMapping("/info")
    public ResponseEntity<List<UserResponse>> findAllUsers() {
        List<UserResponse> users = userService.findAll()
                .stream()
                .map(UserResponse::new)
                .toList();


        return ResponseEntity.ok()
                .body(users);
    }

}


//
//@GetMapping("/members") // 회원 목록 조회
//@GetMapping("/members/{id}") // 회원 조회
//@PostMapping("/members/{id}") // 회원 등록
//@PutMapping("/members/{id}") // 회원 수정
//@DeleteMapping("/members/{id}") // 회원 삭제

