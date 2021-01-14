INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Coffee", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Milk Tea", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Fresh Tea", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Specialty", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Bean Lovers", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Tea Latte", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Milk Foam", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Brown Sugar", null);
INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Winter Melon", null);
INSERT INTO `Product`(`categoryId`, `name`, `description`, `image`) VALUES (1, "Flat White", null, null);
INSERT INTO `Product`(`categoryId`, `name`, `description`, `image`) VALUES (1, "Cappucino", null, null);
INSERT INTO `Product`(`categoryId`, `name`, `description`, `image`) VALUES (2, "Boboa Milktea", null, null);
INSERT INTO `Product`(`categoryId`, `name`, `description`, `image`) VALUES (3, "Mango Fresh Tea", null, null);

INSERT INTO `Attribute`(`name`, `categoryId`) VALUES ("Size", 1);
INSERT INTO `Attribute`(`name`, `categoryId`) VALUES ("Size", 2);

INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (1, 1, "Small", 4);
INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (1, 1, "Medium",5);
INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (1, 1, "Large", 6);
INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (3, 2, "Small", 5);
INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (3, 2, "Medium", 6);
INSERT INTO `ProductAttribute`(`productId`, `attributeId`, `description`, `cost`) VALUES (3, 2, "Large", 7);

INSERT INTO `User`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("firstname", "lastname", "email", "password", "role" );
INSERT INTO `User`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("firstname", "lastname", "email", "password", "role" );
INSERT INTO `User`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("firstname", "lastname", "email", "password", "role" );
INSERT INTO `User`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("firstname", "lastname", "email", "password", "role" );

-- drop DATABASE LoginSystem