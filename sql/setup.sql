DROP TABLE IF EXISTS villagers;
DROP TABLE IF EXISTS fossils;
DROP TABLE IF EXISTS bugs;
DROP TABLE IF EXISTS fishes;
DROP TABLE IF EXISTS seas;

CREATE TABLE villagers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    villager TEXT NOT NULL,
    personality TEXT NOT NULL,
    saying TEXT NOT NULL,
    hobby TEXT NOT NULL
);

CREATE TABLE fossils (
     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     fossil TEXT NOT NULL,
     price INTEGER NOT NULL,
     museum TEXT NOT NULL
);

CREATE TABLE bugs(
     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     bug TEXT NOT NULL,
     price INTEGER NOT NULL,
     museum TEXT NOT NULL 
);

CREATE TABLE fishes(
     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     fish TEXT NOT NULL,
     price INTEGER NOT NULL,
     museum TEXT NOT NULL
);

CREATE TABLE seas(
     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     sea TEXT NOT NULL,
     price INTEGER NOT NULL,
     museum TEXT NOT NULL
);