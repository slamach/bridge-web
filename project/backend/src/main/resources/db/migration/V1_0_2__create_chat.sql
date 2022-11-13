create table chat
(
    id bigint not null primary key
);

create table chat_participants
(
    chat_id bigint not null references chat,
    participants_id bigint not null unique references "user"
);
