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
-- Table structure for table `admissionform`
--

DROP TABLE IF EXISTS `admissionform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admissionform` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admissionform`
--

LOCK TABLES `admissionform` WRITE;
/*!40000 ALTER TABLE `admissionform` DISABLE KEYS */;
INSERT INTO `admissionform` VALUES (1,'PreNursery.pdf','ADMISSION FORM FOR CLASS PRE- NURSERY','2023-06-12'),(2,'Class11th.pdf','ADMISSION FORM FOR CLASS XI','2020-04-30'),(3,'Nursery.pdf','Admission Form For Class Nursery','2018-01-12'),(4,'PreNurseryClass.pdf','ADMISSION FORM FOR PRE-NURSERY CLASS','2016-11-30'),(5,'AuditReport.jpg','AUDIT REPORT','2012-10-13'),(6,'PreNursery.pdf','SLC Students','2015-05-28'),(7,'PreNursery.pdf','Form For The Post Of Primary School Teacher','2014-09-22'),(8,'PreNursery.pdf','Form For The Post Of Headmaster/Headmistress','2014-09-15'),(9,'PreNursery.pdf','Registration Form For Shabad Gayan Competition','2013-07-09'),(10,'Class11th.doc','Class + 1','2012-08-02'),(11,'PreNursery.pdf','Part-2','2011-05-02'),(12,'Part1.pdf','Part-1','2011-05-02'),(13,'Books.docx','Books Detail Of Pre Primary Classes','2023-07-03');
/*!40000 ALTER TABLE `admissionform` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 10:55:54
