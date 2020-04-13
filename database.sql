-- database called react_image_gallery
CREATE TABLE "gallery"
(
    "id" SERIAL PRIMARY KEY,
    "path" varchar(150) NOT NULL,
    "description" varchar(250),
    "likes" integer NOT NULL
);

-- items inserted into table

INSERT INTO "gallery"
    ("path", "description", "likes")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);

INSERT INTO "gallery"
    ("path", "description", "likes")
VALUES
    ('images/chanel_mexico.jpg', 'Photo of Chanel in Mexico.', 0);