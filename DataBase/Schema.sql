CREATE DATABASE IF NOT EXISTS Sprout; 

USE Sprout; 

CREATE TABLE IF NOT EXISTS `Matches` (
  `idMatch` INT NOT NULL,
  `matcher_key` BIGINT(20) NULL,
  `matchee_key` BIGINT(20) NULL,
  PRIMARY KEY (`idMatch`));

CREATE TABLE IF NOT EXISTS `Report` (
  `idReport` INT NOT NULL,
  `reporting_user_id` BIGINT(20) NULL,
  `Reason` VARCHAR(45) NULL,
  PRIMARY KEY (`idReport`));

CREATE TABLE IF NOT EXISTS `Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(25) NULL,
  `last_name` VARCHAR(25) NULL,
  `email` VARCHAR(100) NULL,
  `pwd` VARCHAR(257) NULL,
  `ib_question` VARCHAR(256) NULL,
  `ib_answer_one` VARCHAR(128) NULL,
  `ib_answer_two` VARCHAR(128) NULL,
  `ib_answer` TINYINT(4) NULL,
  `photo_one_image_path` VARCHAR(1024) NULL,
  `photo_two_image_path` VARCHAR(1024) NULL,
  `photo_three_image_path` VARCHAR(1024) NULL,
  `Match_idMatch` INT NOT NULL,
  `Report_idReport` INT NOT NULL,
  `gender` enum('male','female','other','') NOT NULL,
  `gender_interested` enum('male','female','other','') NOT NULL
  PRIMARY KEY (`idUsers`, `Report_idReport`),
  INDEX `fk_Users_Match_idx` (`Match_idMatch` ASC),
  INDEX `fk_Users_Report1_idx` (`Report_idReport` ASC),
  CONSTRAINT `fk_Users_Match`
    FOREIGN KEY (`Match_idMatch`)
    REFERENCES `Matches` (`idMatch`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_Report1`
    FOREIGN KEY (`Report_idReport`)
    REFERENCES `Report` (`idReport`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



INSERT INTO Report (`idReport`) VALUES (0);
INSERT INTO Matches (`idMatch`) VALUES (0);
