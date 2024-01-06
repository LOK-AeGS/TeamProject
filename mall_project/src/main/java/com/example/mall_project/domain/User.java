package com.example.mall_project.domain;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table
@DynamicInsert
@Builder

public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id", updatable = false)
    @Id
    private Long user_id;

    @Column(name = "user_name", length = 20, nullable = true)
    private String user_name;

    @Column(name = "user_identification_number", length = 20, nullable = true)
    private String user_identification_number;

    @Column(name = "user_phone", length = 20, nullable = true)
    private String user_phone;

    @Column(name = "user_account_id", length = 20, nullable = true)
    private String user_account_id;

    @Column(name = "user_account_password", length = 20, nullable = true)
    private String user_account_password;

    @Column(name = "user_gender", columnDefinition = "CHAR default 'F'", nullable = true)
    private String user_gender;

    @Column(name = "user_birth", length = 20, nullable = true)
    private String user_birth;

    @Column(name = "user_email", length = 20, nullable = true)
    private String user_email;

    @Column(name = "user_level", columnDefinition = "CHAR default 'B'", nullable = true)
    private String user_level;

    @Column(name = "created_at", columnDefinition = "datetime default NOW()",
            nullable = true)
    private Date created_at;

    @Column(name = "updated_at", columnDefinition = "datetime default NOW()",
    nullable = true)
    private Date updated_at;


}
