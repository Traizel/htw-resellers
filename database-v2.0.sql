CREATE TABLE "item"
(
	"id" serial NOT NULL,
	"name" varchar(255),
	"sku" varchar(255) DEFAULT 'NO SKU',
	"location" INTEGER,
	"level" varchar(255) DEFAULT 'Product'
);