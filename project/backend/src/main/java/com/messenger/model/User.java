package com.messenger.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "`user`")
public class User {

    @Id
    @GeneratedValue(generator = "messenger_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "messenger_sequence", sequenceName = "messenger_sequence", allocationSize = 1)
    private Long id;
    private String username;
    private String password;
    private Long version = 0L;
    private String name;
    private String description;
    private LocalDateTime registrationDate = LocalDateTime.now();
    private Long imageId;
    private String publicKey;
}
