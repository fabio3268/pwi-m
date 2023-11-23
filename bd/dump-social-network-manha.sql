-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: social_network
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `name` varchar(255) NOT NULL,
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Amigos'),(2,'Família'),(3,'Trabalho');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
                            `id` int NOT NULL AUTO_INCREMENT,
                            `content` varchar(255) NOT NULL,
                            `post_id` int NOT NULL,
                            PRIMARY KEY (`id`),
                            KEY `fk_comments_posts1_idx` (`post_id`),
                            CONSTRAINT `fk_comments_posts1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `content` varchar(255) NOT NULL,
                         `category_id` int NOT NULL,
                         `user_id` int NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `fk_posts_categories_idx` (`category_id`),
                         KEY `fk_posts_users1_idx` (`user_id`),
                         CONSTRAINT `fk_posts_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
                         CONSTRAINT `fk_posts_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Fui dar uma caminhada no parque hoje.',1,1),(2,'Tive um ótimo jantar em família.',2,1),(3,'Terminei um grande projeto no trabalho.',3,1),(4,'Aproveitei uma noite de cinema com amigos.',1,2),(5,'A reunião de família foi incrível.',2,2),(6,'Promovido a posição sênior no trabalho.',3,2),(7,'Joguei futebol com amigos.',1,3),(8,'Comemorei o aniversário do meu filho.',2,3),(9,'O trabalho é desafiador, mas gratificante.',3,3),(10,'Fiz uma viagem de carro com amigos.',1,4),(11,'Tive um adorável piquenique em família.',2,4),(12,'Trabalhei até tarde para cumprir o prazo.',3,4),(13,'Participei do casamento de um amigo.',1,5),(14,'Passei um tempo de qualidade com a família.',2,5),(15,'Consegui um novo cliente no trabalho.',3,5),(16,'Tive uma noite divertida com amigos.',1,6),(17,'Cozinhei o jantar para a família.',2,6),(18,'O trabalho está me mantendo ocupado.',3,6),(19,'Fui fazer uma caminhada com amigos.',1,7),(20,'A noite de jogos em família foi divertida.',2,7),(21,'Participei de uma conferência de trabalho.',3,7),(22,'Joguei videogames com amigos.',1,8),(23,'Visitei os avós durante o fim de semana.',2,8),(24,'O projeto de trabalho foi um sucesso.',3,8),(25,'Assisti a uma partida de futebol com amigos.',1,9),(26,'Tive um churrasco em família.',2,9),(27,'A viagem de trabalho foi produtiva.',3,9),(28,'Fui a um concerto com amigos.',1,10),(29,'As férias em família foram incríveis.',2,10),(30,'O trabalho está indo muito bem.',3,10);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `name` varchar(255) NOT NULL,
                         `email` varchar(255) NOT NULL,
                         `password` varchar(255) NOT NULL,
                         `image` varchar(255) DEFAULT NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John Doe','john.doe@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(2,'Jane Smith','jane.smith@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(3,'Alice Johnson','alice.j@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(4,'Bob Anderson','bob.anderson@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(5,'Eva Williams','eva.w@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(6,'Daniel Lee','daniel.lee@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(7,'Sophia Brown','sophia.b@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(8,'David Miller','david.m@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(9,'Olivia Davis','olivia.d@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL),(10,'Michael White','michael.w@example.com','$2y$10$erjR7RQMmDObQaWisjoOvuOAsuUa2yfLnA5yF.LkBekUSMidKheve',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 10:49:13
