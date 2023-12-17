package com.example.mall_project.domain;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import javax.persistence.*;



@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table
@DynamicInsert
@Builder
public class Ordering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ordering_number", updatable = false)
    private Long image_number;


    @Column(name = "order_number", nullable = false)
    private String order_number;


    @Column(name = "ordering_status", nullable = true)
    private String ordering_status;


    @Column(name = "image_primary", nullable = true)
    private String image_primary;

    @Column(name = "created_date", nullable = true)
    private String created_date;
}
