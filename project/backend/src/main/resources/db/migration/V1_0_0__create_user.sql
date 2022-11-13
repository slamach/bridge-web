create sequence if not exists messenger_sequence increment by 1 start with 1;

create table if not exists "user"
(
    id          bigint not null primary key,
    description varchar(255),
    image_id    bigint,
    name        varchar(255),
    password    varchar(255),
    username    varchar(255),
    version     bigint
);
