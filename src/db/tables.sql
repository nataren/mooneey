CREATE DATABASE mooneey
DEFAULT CHARACTER SET = utf8
DEFAULT COLLATE = utf8_unicode_ci;

USE mooneey;

CREATE TABLE user (
user_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
user_first_name VARCHAR(255) NOT NULL,
user_last_name VARCHAR(255) NOT NULL,
user_email VARCHAR(255) NOT NULL,
user_password VARCHAR(255),
UNIQUE KEY (user_id, user_email)
) ENGINE = INNODB;

CREATE TABLE good (
good_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
good_name VARCHAR(255) NOT NULL,
good_date TIMESTAMP DEFAULT NOW(),
good_unit_price INT NOT NULL
) ENGINE = INNODB;

CREATE TABLE expense (
expense_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
expense_good_id INTEGER UNSIGNED,
expense_user_id INTEGER UNSIGNED,
FOREIGN KEY (expense_good_id) REFERENCES good (good_id),
FOREIGN KEY (expense_user_id) REFERENCES user (user_id),
expense_date TIMESTAMP DEFAULT NOW(),
expense_count INT NOT NULL,
PRIMARY KEY (expense_id, expense_good_id, expense_user_id)
) ENGINE = INNODB;