package com.messenger.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Image {

    @Id
    @GeneratedValue(generator = "messenger_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "messenger_sequence", sequenceName = "messenger_sequence", allocationSize = 1)
    private Long id;
    private Long ownerId;
    private String name;
    private String type;
    private byte[] imageBytes;
}
