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
-- Table structure for table `pta`
--

DROP TABLE IF EXISTS `pta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `designation` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pta`
--

LOCK TABLES `pta` WRITE;
/*!40000 ALTER TABLE `pta` DISABLE KEYS */;
INSERT INTO `pta` VALUES (1,'Mrs. Harpreet Kaur','Chairperson'),(2,'Mr. Shishpal Singh','Vice Chairperson'),(3,'Ms. Ramanjeet Kaur ( Offg. Headmistress)','Vice Chairperson'),(4,'Ms. Ramanjeet Kaur','School Teacher'),(5,'S. Dalvinder Singh','School Teacher'),(6,'Ms. Devinderjit Kaur','School Teacher'),(7,'Ms. Suman Saharan','School Teacher'),(8,'Ms. Parminderjit Kaur','School Teacher'),(9,'Ms. Sonu Babber','School Teacher'),(10,'Ms. Anu','Parent Member'),(11,'Mr. Amandeep Gir','Parent Member'),(13,'Ms. Kalpana','Parent Member'),(14,'Ms. Ranjeet Kaur','Parent Member'),(15,'Ms. Paramjit Kaur ','Parent Member'),(16,'Ms. Satnam Kaur','Parent Member'),(17,'Mr. Rajesh Kumar','Parent Member'),(18,'Mr. Ashok Tiwari','Parent Member'),(19,'Mr. Ranjan Kumar','Parent Member'),(20,'Ms. Geeta','Parent Member'),(21,'Ms. Kamla Bhatt','Parent Member '),(22,'S. Jaskaran Singh','Parent Member'),(23,'S. Shukhwinder Singh','Parent Member');
/*!40000 ALTER TABLE `pta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 10:55:56
