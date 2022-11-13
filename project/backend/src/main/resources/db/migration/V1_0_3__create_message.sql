create table message
(
    id        bigint  not null primary key,
    chat_id   bigint references chat,
    date      timestamp,
    image_id  bigint references image,
    is_read   boolean not null,
    sender_id bigint references "user",
    text      varchar(255)
);
