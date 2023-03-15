-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema emausconnect
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emausconnect
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emausconnect` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `emausconnect` ;

-- -----------------------------------------------------
-- Table `emausconnect`.`etat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emausconnect`.`etat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `DEEE` TINYINT NULL,
  `reparable` TINYINT NULL,
  `bloque` TINYINT NULL,
  `reconditionnable` TINYINT NULL,
  `reconditionne` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emausconnect`.`smartphone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emausconnect`.`smartphone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marque` VARCHAR(255) NOT NULL,
  `modele` VARCHAR(255) NOT NULL,
  `ram` INT NOT NULL,
  `stockage` INT NOT NULL,
  `indice_antutu` INT NOT NULL,
  `ecran` INT NOT NULL,
  `reseau` INT NOT NULL,
  `android` INT NOT NULL,
  `chargeurcable` TINYINT NOT NULL,
  `idetat` INT NOT NULL,
  PRIMARY KEY (`id`, `idetat`),
  INDEX `fk_smartphone_etat_idx` (`idetat` ASC) VISIBLE,
  CONSTRAINT `fk_smartphone_etat`
    FOREIGN KEY (`idetat`)
    REFERENCES `emausconnect`.`etat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emausconnect`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emausconnect`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
