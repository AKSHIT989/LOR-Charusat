-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lor
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lor
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lor` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `lor` ;

-- -----------------------------------------------------
-- Table `lor`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `charusat_id` VARCHAR(50) NOT NULL,
  `user_type` VARCHAR(10) NULL DEFAULT NULL,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `institute` VARCHAR(50) NULL DEFAULT NULL,
  `counsellor` VARCHAR(100) NULL DEFAULT NULL,
  `hod` VARCHAR(100) NULL DEFAULT NULL,
  `department` VARCHAR(50) NULL DEFAULT NULL,
  `mobile` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `github_url` VARCHAR(255) NULL DEFAULT NULL,
  `linkedin_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `charusat_id` (`charusat_id` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`academic_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`academic_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `sem` INT NULL DEFAULT NULL,
  `cgpa` FLOAT NULL DEFAULT NULL,
  `attendance` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `academic_details_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 65
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`admission_card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`admission_card` (
  `ac_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `parent_mobile` VARCHAR(15) NULL DEFAULT NULL,
  `passout_date` DATE NULL DEFAULT NULL,
  `c_exam_details` JSON NULL DEFAULT NULL,
  `faculty_preference` JSON NULL DEFAULT NULL,
  `ac_status` VARCHAR(10) NULL DEFAULT NULL,
  `request_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`ac_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `admission_card_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`comp_exam_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`comp_exam_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `exam_name` VARCHAR(15) NULL DEFAULT NULL,
  `mark` INT NULL DEFAULT NULL,
  `upload_file` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `comp_exam_details_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`faculty_pref`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`faculty_pref` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `faculty_name` VARCHAR(100) NULL DEFAULT NULL,
  `faculty_email` VARCHAR(50) NULL DEFAULT NULL,
  `stu_upload` VARCHAR(255) NULL DEFAULT NULL,
  `faculty_upload` VARCHAR(255) NULL DEFAULT NULL,
  `approved` TINYINT(1) NULL DEFAULT NULL,
  `remark` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `faculty_pref_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`institute_department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`institute_department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `institute` VARCHAR(100) NULL DEFAULT NULL,
  `department` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`lor_request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`lor_request` (
  `lor_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `parent_mobile` VARCHAR(15) NULL DEFAULT NULL,
  `passout_date` DATE NULL DEFAULT NULL,
  `placed_cdpc` TINYINT(1) NULL DEFAULT NULL,
  `company` VARCHAR(50) NULL DEFAULT NULL,
  `bond_completed` TINYINT(1) NULL DEFAULT NULL,
  `letter_head` INT NULL DEFAULT NULL,
  `lor_status` VARCHAR(10) NULL DEFAULT NULL,
  `issue_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`lor_id`),
  UNIQUE INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `lor_request_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `lor`.`uni_pref`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lor`.`uni_pref` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `course_name` VARCHAR(50) NULL DEFAULT NULL,
  `country_name` VARCHAR(50) NULL DEFAULT NULL,
  `university_name` VARCHAR(255) NULL DEFAULT NULL,
  `intake_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `uni_pref_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lor`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
