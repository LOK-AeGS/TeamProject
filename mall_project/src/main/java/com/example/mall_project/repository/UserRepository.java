package com.example.mall_project.repository;

import com.example.mall_project.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long> {

}
