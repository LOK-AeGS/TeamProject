package com.example.mall_project.controller;

import com.example.mall_project.domain.User;
import com.example.mall_project.dto.UserDto;
import com.example.mall_project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;


@CrossOrigin(origins = "http:localhost:3000")
@RequiredArgsConstructor
@RestController
public class UserController {


    @Autowired
    private final UserService userService;



    @PostMapping("/users/new")
    public ResponseEntity<User> addUser(@RequestBody UserDto request){
        User savedUser = request.toEntity();
        userService.save(savedUser);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedUser);
    }


    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> findAllUsers() {
        List<UserDto> users = userService.findAll()
                .stream()
                .map(UserDto::new)
                .toList();


        return ResponseEntity.ok()
                .body(users);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> findUserById(@PathVariable Long id) {
        User user = userService.findById(id);

        return ResponseEntity.ok()
                .body(user);
    }



    @PutMapping("/users")
    public ResponseEntity<User> updateUserById(Long id, @RequestBody UserDto request) {
        User updatedUser = userService.updateUserById(request);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(updatedUser);
    }



//
    @DeleteMapping("/users/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable Long id) {
        User deletedUser = userService.deleteById(id);

        return ResponseEntity.ok()
                .body(deletedUser);

        // service에서는 userRepository의 deletebyId를 호출하는 것이기 때문에,
        // return type이 void이고,
        // 여기에서는 ResponseEntity의 httpstatus코드와 삭제된 user의 body가 출력되므로, 반환타입이 ResponseEntity<User>이다.
    }


        // 개발방향 같이 정할 것.
}


//
//@GetMapping("/members") // 회원 목록 조회
//@GetMapping("/members/{id}") // 회원 조회
//@PostMapping("/members/{id}") // 회원 등록
//@PutMapping("/members/{id}") // 회원 수정
//@DeleteMapping("/members/{id}") // 회원 삭제

