-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `Name` varchar(200) NOT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('101.jpeg'),('103.jpeg'),('105.jpeg'),('106.jpeg'),('108.jpeg'),('112.jpg'),('113.jpeg'),('114.jpeg'),('115.jpeg'),('116.jpeg'),('117.jpeg'),('118.jpeg'),('119.jpeg'),('120.jpeg'),('123.jpeg'),('124.jpeg'),('125.jpeg'),('126.jpeg'),('127.jpeg'),('128.jpeg'),('129.jpeg'),('130.jpeg'),('132.jpeg'),('133.jpeg'),('134.jpeg'),('135.jpeg'),('136.jpeg'),('137.jpeg'),('138.jpeg'),('139.jpeg'),('140.jpeg'),('141.jpeg'),('142.jpeg'),('143.jpeg'),('144.jpeg'),('145.jpeg'),('147.jpeg'),('148.jpeg'),('149.jpeg'),('150.jpeg'),('151.jpeg'),('152.jpeg'),('155.jpeg'),('156.jpeg'),('157.jpeg'),('158.jpeg'),('159.jpeg'),('160.jpeg'),('162.jpeg'),('302.jpeg'),('303.jpeg'),('304.jpeg'),('305.jpg'),('306.jpeg'),('307.jpeg'),('61.jpg'),('62.JPG'),('71.jpg'),('73.jpg'),('76.jpeg'),('77.jpg'),('78.jpeg'),('80.jpeg'),('83.jpeg'),('84.jpeg'),('85.jpeg'),('86.jpeg'),('89.jpg'),('92.jpeg'),('95.jpeg'),('96.jpeg'),('97.jpeg'),('99.jpeg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 10:55:57
