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
-- Table structure for table `managing_commitee`
--

DROP TABLE IF EXISTS `managing_commitee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managing_commitee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` text NOT NULL,
  `designation` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managing_commitee`
--

LOCK TABLES `managing_commitee` WRITE;
/*!40000 ALTER TABLE `managing_commitee` DISABLE KEYS */;
INSERT INTO `managing_commitee` VALUES (1,'	S.Charanjit Singh Channa','#3398, Sector19-D,Chandigarh	','Chairman'),(16,'S.Amritpal Singh','#1263, Sector 37-B,Chandigarh','Manager'),(17,'S.DamandeepSingh','#3252, Sector 19D,Chandigarh','Asst. Manager(Fin)'),(18,'S.Narain Singh','#3207,Sector 19D,Chandigarh','Member'),(19,'S. Manbir Singh','#114, Sector 27A,Chandigarh','Member'),(20,'D.E.O.','Chandigarh Administration','Representative of Education Dept.'),(21,'Dy D. E.O. ','Chandigarh Administration','Representative of Education Dept.'),(22,'S. Gurbax Singh','#3258, Sector 19-D,Chandigarh','President, Gurdwara Sri Guru Singh Sabha Sec-19 D, Chandigarh'),(23,'S. Pritpal Singh','#3378, Sector 19-D, Chd','Gen. Secretary , Gurdwara Sri Guru Singh Sabha Sec-19 D,'),(24,'Dr. Joginder Singh','#1271, Sector-18 C, Chandigarh','Educationist'),(25,'Dr. Gurcharan Singh Gill,','#3237,Rose Petals Society, Sector-49, Chandigarh','Educationist'),(26,'C.B.S.E, Nominee','to be nominated','C.B.S.E, Nominee'),(27,'Ms. Pritinder Kaur',' Principal,Guru Gobind Singh Public School, Sector-35 B ,Chd.','C.B.S.E, Nominee'),(28,'Ms Ramanjeet Kaur','Guru Nank Khalsa School, Sector- 30 B, Chd','Offg.Headmistress'),(29,'Ms.NehaHanda,TGT(Sci)','#6/19 (HUDA Plots), Punchkula Haryana','Member (Teacher)'),(30,'S. Gurcharan Singh','# 542, Block-5, Evergreen Towers, Desu Majra, Kharar Mohali','Member (Teacher)');
/*!40000 ALTER TABLE `managing_commitee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 10:55:55
