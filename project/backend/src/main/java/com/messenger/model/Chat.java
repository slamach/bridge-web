package com.messenger.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Chat {

    @Id
    @GeneratedValue(generator = "messenger_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "messenger_sequence", sequenceName = "messenger_sequence", allocationSize = 1)
    private Long id;
    private boolean isSecret;
    @OneToMany(targetEntity = User.class, fetch = FetchType.EAGER)
    private List<User> participants;

    public User getFirstUser() {
        return participants.get(0);
    }

    public User getSecondUser() {
        return participants.get(1);
    }

    public boolean isUserParticipant(User user) {
        for (User participant : participants) {
            if (user.equals(participant)) {
                return true;
            }
        }
        return false;
    }

    public boolean isPersonalChat() {
        final User me = participants.get(0);
        for (User participant : participants) {
            if (!participant.equals(me)) {
                return false;
            }
        }
        return true;
    }
}
