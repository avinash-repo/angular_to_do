-- Adminer 4.8.1 PostgreSQL 11.18 (Ubuntu 11.18-1.pgdg18.04+1) dump

DROP TABLE IF EXISTS "Users";
DROP SEQUENCE IF EXISTS "Users_id_seq";
CREATE SEQUENCE "Users_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Users" (
    "id" integer DEFAULT nextval('"Users_id_seq"') NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    "username" character varying(255) NOT NULL,
    "hash" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Users" ("id", "firstName", "lastName", "username", "hash", "createdAt", "updatedAt") VALUES
(1,	'Jason',	'Watmore',	'jason',	'$2a$10$KaDOaOFd1hRqUXYlXuswd.0R1Yyydubx6bir97rl6djvbzFf.sAai',	'2023-02-07 17:03:09.811+00',	'2023-02-07 17:03:09.811+00'),
(2,	'Jasof fn',	'Watmorffe',	'jasofn',	'$2a$10$qT884h2Y.1N4G3nANU62TOFdu7t3OPLSquDxT7tRo9VW2Bekti3Za',	'2023-02-07 17:03:55.64+00',	'2023-02-07 17:03:55.64+00');

DROP TABLE IF EXISTS "addresses";
DROP SEQUENCE IF EXISTS addresses_id_seq;
CREATE SEQUENCE addresses_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."addresses" (
    "id" integer DEFAULT nextval('addresses_id_seq') NOT NULL,
    "title" character varying(255),
    "content" character varying(255),
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "addresses" ("id", "title", "content", "createdAt", "updatedAt") VALUES
(1,	NULL,	NULL,	'2023-02-07 15:14:20.996+00',	'2023-02-07 15:14:20.996+00');

DROP TABLE IF EXISTS "categories";
DROP SEQUENCE IF EXISTS categories_id_seq;
CREATE SEQUENCE categories_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."categories" (
    "id" integer DEFAULT nextval('categories_id_seq') NOT NULL,
    "title" character varying(255) NOT NULL,
    CONSTRAINT "categories_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "categories_title_key" UNIQUE ("title")
) WITH (oids = false);

INSERT INTO "categories" ("id", "title") VALUES
(1,	'Shoes'),
(2,	'Electronics');

DROP TABLE IF EXISTS "orders";
CREATE TABLE "public"."orders" (
    "id" integer NOT NULL,
    "user_id" integer NOT NULL
) WITH (oids = false);


DROP TABLE IF EXISTS "orders_details";
CREATE TABLE "public"."orders_details" (
    "id" integer NOT NULL,
    "order_id" integer NOT NULL,
    "product_id" integer NOT NULL,
    "quantity" integer DEFAULT '1' NOT NULL
) WITH (oids = false);


DROP VIEW IF EXISTS "pg_stat_statements";
CREATE TABLE "pg_stat_statements" ("userid" oid, "dbid" oid, "queryid" bigint, "query" text, "calls" bigint, "total_time" double precision, "min_time" double precision, "max_time" double precision, "mean_time" double precision, "stddev_time" double precision, "rows" bigint, "shared_blks_hit" bigint, "shared_blks_read" bigint, "shared_blks_dirtied" bigint, "shared_blks_written" bigint, "local_blks_hit" bigint, "local_blks_read" bigint, "local_blks_dirtied" bigint, "local_blks_written" bigint, "temp_blks_read" bigint, "temp_blks_written" bigint, "blk_read_time" double precision, "blk_write_time" double precision);


DROP TABLE IF EXISTS "posts";
DROP SEQUENCE IF EXISTS posts_id_seq;
CREATE SEQUENCE posts_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."posts" (
    "id" integer DEFAULT nextval('posts_id_seq') NOT NULL,
    "title" character varying(255),
    "content" character varying(255),
    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "posts" ("id", "title", "content") VALUES
(1,	'Getting Started with PostgreSQL and Sequelize2',	'Hello there2'),
(2,	'Getting Started with PostgreSQL and Sequelize2',	'Hello there2'),
(3,	'Getting Started with PostgreSQL and Sequelize3',	'Hello there3'),
(4,	'Getting Started with PostgreSQL and Sequelize4',	'Hello there4'),
(5,	'Getting Started with PostgreSQL and Sequelize4',	'Hello there4'),
(6,	'Getting Started with PostgreSQL and Sequelize4',	'Hello there4'),
(7,	'Getting Started with PostgreSQL and Sequelize4',	'Hello there4'),
(8,	'Getting Started with PostgreSQL and Sequelize4',	'Hello there4');

DROP TABLE IF EXISTS "products";
CREATE TABLE "public"."products" (
    "id" integer NOT NULL,
    "title" character varying(255) NOT NULL,
    "image" character varying(255) NOT NULL,
    "images" text,
    "description" text NOT NULL,
    "price" double precision NOT NULL,
    "quantity" integer NOT NULL,
    "short_desc" character varying(255) NOT NULL,
    "cat_id" integer
) WITH (oids = false);

INSERT INTO "products" ("id", "title", "image", "images", "description", "price", "quantity", "short_desc", "cat_id") VALUES
(1,	'PlayStation 4',	'',	'',	'With ate companion device.',	240.99,	1000,	'Gaming console',	2);

DROP TABLE IF EXISTS "todo";
DROP SEQUENCE IF EXISTS todo_id_seq;
CREATE SEQUENCE todo_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."todo" (
    "id" integer DEFAULT nextval('todo_id_seq') NOT NULL,
    "isCompleted" integer,
    "isFavorite" integer,
    "date" text,
    "title" text,
    "user_id" integer,
    "isStatus" integer,
    "isDeleted" integer DEFAULT '0',
    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "todo" ("id", "isCompleted", "isFavorite", "date", "title", "user_id", "isStatus", "isDeleted") VALUES
(28,	NULL,	1,	'2023-02-11 17:13:36',	'asfasd',	1,	NULL,	1),
(25,	NULL,	1,	'2023-02-16 17:06:52',	'fsff',	1,	NULL,	1),
(23,	NULL,	NULL,	'2023-02-16 16:34:18',	'wadsa',	13,	NULL,	NULL),
(24,	NULL,	NULL,	'2023-02-16 16:56:25',	'fff',	5,	NULL,	NULL),
(26,	NULL,	NULL,	'2023-02-16 17:08:03',	'dadad',	22,	NULL,	NULL),
(20,	NULL,	NULL,	'2023-02-15 06:18:05',	'wadsa',	2,	NULL,	NULL),
(27,	NULL,	NULL,	'2023-02-16 17:09:59',	'adasd',	13,	NULL,	NULL),
(30,	NULL,	0,	'2023-02-16 21:24:39',	'saddd',	1,	NULL,	1),
(32,	NULL,	1,	'2023-02-17 04:38:21',	'Radha',	1,	NULL,	1),
(31,	1,	1,	'w',	'fsf',	22,	1,	0),
(34,	NULL,	NULL,	'2023-02-17 11:57:18',	'Sudhama Ji',	1,	NULL,	0),
(33,	NULL,	1,	'2023-02-17 11:51:17',	'Krishna Ji',	1,	NULL,	0),
(29,	NULL,	NULL,	'2023-02-16 18:47:36',	'sdsfsdf',	1,	NULL,	1),
(9,	NULL,	1,	'2023-02-13 22:07:36',	'usi testit',	2,	NULL,	100);

DROP TABLE IF EXISTS "tutorials";
DROP SEQUENCE IF EXISTS tutorials_id_seq;
CREATE SEQUENCE tutorials_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tutorials" (
    "id" integer DEFAULT nextval('tutorials_id_seq') NOT NULL,
    "title" character varying(255),
    "description" character varying(255),
    "published" boolean,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "tutorials_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "tutorials" ("id", "title", "description", "published", "createdAt", "updatedAt") VALUES
(1,	'asdfa',	'sdfasd',	'f',	'2023-02-06 11:46:51.655+00',	'2023-02-06 11:46:51.655+00'),
(2,	'asdfa',	'sdfasd',	'f',	'2023-02-06 11:46:59.405+00',	'2023-02-06 11:46:59.405+00'),
(3,	'asdfa',	'sdfasd',	'f',	'2023-02-06 11:47:01.042+00',	'2023-02-06 11:47:01.042+00');

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."users" (
    "user_id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "username" character varying(255) DEFAULT 'ss' NOT NULL,
    "password" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    "full_name" character varying(255) DEFAULT 'not set',
    "age" integer DEFAULT '18',
    "role" integer DEFAULT '555',
    "photourl" text,
    "type" character varying(255) DEFAULT 'local' NOT NULL,
    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
) WITH (oids = false);

INSERT INTO "users" ("user_id", "username", "password", "email", "full_name", "age", "role", "photourl", "type") VALUES
(1,	'',	'6d3ab8228d1336d7a60022e56231ce82',	'ado@gmail.com',	'adones evangelista',	18,	555,	NULL,	'local');

DROP TABLE IF EXISTS "pg_stat_statements";
CREATE VIEW "pg_stat_statements" AS SELECT pg_stat_statements.userid,
    pg_stat_statements.dbid,
    pg_stat_statements.queryid,
    pg_stat_statements.query,
    pg_stat_statements.calls,
    pg_stat_statements.total_time,
    pg_stat_statements.min_time,
    pg_stat_statements.max_time,
    pg_stat_statements.mean_time,
    pg_stat_statements.stddev_time,
    pg_stat_statements.rows,
    pg_stat_statements.shared_blks_hit,
    pg_stat_statements.shared_blks_read,
    pg_stat_statements.shared_blks_dirtied,
    pg_stat_statements.shared_blks_written,
    pg_stat_statements.local_blks_hit,
    pg_stat_statements.local_blks_read,
    pg_stat_statements.local_blks_dirtied,
    pg_stat_statements.local_blks_written,
    pg_stat_statements.temp_blks_read,
    pg_stat_statements.temp_blks_written,
    pg_stat_statements.blk_read_time,
    pg_stat_statements.blk_write_time
   FROM pg_stat_statements(true) pg_stat_statements(userid, dbid, queryid, query, calls, total_time, min_time, max_time, mean_time, stddev_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time, blk_write_time);

-- 2023-02-25 13:21:23.244647+00
