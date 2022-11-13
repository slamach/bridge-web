create table image
(
    id          bigint not null primary key,
    image_bytes bytea,
    name        varchar(255),
    owner_id    bigint references "user",
    type        varchar(255)
);
