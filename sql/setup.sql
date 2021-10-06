DROP TABLE IF EXISTS villagers;
DROP TABLE IF EXISTS fossils;

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

-- CREATE TABLE bugs(
--      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--      name_USen TEXT NOT NULL,
--      price INTEGER NOT NULL,
--      museum_phrase TEXT NOT NULL
-- )

-- CREATE TABLE fishs(
--      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--      name_USen TEXT NOT NULL,
--      price INTEGER NOT NULL,
--      museum_phrase TEXT NOT NULL
-- )

-- CREATE TABLE seas(
--      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--      name_USen TEXT NOT NULL,
--      price INTEGER NOT NULL,
--      museum_phrase TEXT NOT NULL
-- )