package com.messenger.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Message {

    @Id
    @GeneratedValue(generator = "messenger_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "messenger_sequence", sequenceName = "messenger_sequence", allocationSize = 1)
    private Long id;
    private Long chatId;
    private Long senderId;
    private String text;
    private Long imageId;
    private Date date = new Date();
    private boolean isRead = false;
}
