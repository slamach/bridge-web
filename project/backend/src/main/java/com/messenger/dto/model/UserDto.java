package com.messenger.dto.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDto {

    private Long id;
    private String username;
    private String name;
    private String description;
    private LocalDateTime registrationDate;
    private byte[] image;
}
