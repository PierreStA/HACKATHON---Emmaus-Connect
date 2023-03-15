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
  `etat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `emausconnect`.`etat` (`id`, `etat`) VALUES ('1', 'DEEE'), ('2', 'Réparable'), ('3', 'Bloqué'), ('4', 'Reconditionnable'), ('5', 'Reconditionné');

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
  `code_model` VARCHAR(45),
  PRIMARY KEY (`id`, `idetat`),
  INDEX `fk_smartphone_etat_idx` (`idetat` ASC) VISIBLE,
  CONSTRAINT `fk_smartphone_etat`
    FOREIGN KEY (`idetat`)
    REFERENCES `emausconnect`.`etat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `emausconnect`.`smartphone` (`id`, `marque`, `modele`, `ram`, `stockage`, `indice_antutu`, `ecran`, `reseau`, `android`, `chargeurcable`, `idetat`) VALUES ('1', 'Samsung', 'Galaxy S23', '8', '128', '1198962', '6.1', '5', '13', '1', '4'), ('2', 'Oppo', 'Reno 2Z', '8', '128', '213989', '6.5', '4', '10', '2', '2'), ('3', 'Xiaomi', 'Redmi Note 11', '4', '64', '248639', '6.4', '4', '11', '1', '5');
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
