CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL,
  "gender" VARCHAR(128) NOT NULL,
  	"age" INTEGER NOT NULL,
  "readyToTransfer" BOOLEAN NOT NULL,
  "notes" VARCHAR(2048)
);
INSERT INTO "koalas" ("name", "gender", "age", "readyToTransfer", "notes")
VALUES('Scotty', 'M', '4', 'Yes', 'Born in Guatemala'),
('Jean', 'F', '5', 'Yes', 'Allergic to lots of lava'),
('Ororo', 'F', '7', 'No', 'Loves listening to Paula(Abdul)'),
('Logan', 'M', '15', 'No', 'Loves the sauna'),
('Charlie', 'M', '9', 'Yes', 'Favorite band is Nirvana'),
('Betsy', 'F', '4', 'Yes', 'Has a pet iguana')