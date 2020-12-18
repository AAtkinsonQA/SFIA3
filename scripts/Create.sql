CREATE TABLE `ticket` (
  `id` bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `author` VARCHAR(255) NOT NULL,
  `description` VARCHAR(1000),
  `email` VARCHAR(255),
  `solution` VARCHAR(255),
  `status` BIT(1),
  `time_created` DATETIME(6),
  `title` VARCHAR(255) NOT NULL,
  `topic` VARCHAR(255),
  `urgency` VARCHAR(255) NOT NULL
);


