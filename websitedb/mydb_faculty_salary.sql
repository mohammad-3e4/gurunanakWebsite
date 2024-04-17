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
-- Table structure for table `faculty_salary`
--

DROP TABLE IF EXISTS `faculty_salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_salary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `qualification` varchar(45) DEFAULT NULL,
  `experience` varchar(45) DEFAULT NULL,
  `pay_scale` varchar(45) DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_salary`
--

LOCK TABLES `faculty_salary` WRITE;
/*!40000 ALTER TABLE `faculty_salary` DISABLE KEYS */;
INSERT INTO `faculty_salary` VALUES (4,'Ms. Gurdeep Kaur','TGT','B.Sc, B.Ed','09 Years','10300-34800','unaided_tgt'),(5,'Mrs. Namrta','TGT(Maths)	','B.Sc, B.Ed	','09 Years','10300-34800','unaided_tgt'),(6,'Mrs. Ruchi','Mrs. Ruchi','M.Sc, B.Ed','09 Years','10300-34800','unaided_tgt'),(7,'Mrs. Sonu Babbar','TGT','B.Sc, B.Ed','09 Years','10300-34800','unaided_tgt'),(8,'Mrs. Gurmohan Kaur','TGT(Science)','B.Sc, MA, B.Ed	','05 Years	','10300-34800','unaided_tgt'),(9,'Mrs. Gagandeep Kaur','PST','B.A, B.Ed','	06 Years','5910-20200','unaided_pst/ntt'),(10,'Paramjeet Kaur','Nursery','+2, NTT	','23 Years	','5910-20200','unaided_pst/ntt'),(11,'Rajinder Kaur','Nursery','B.A II,N.T.T','11 Years','5910-20200','unaided_pst/ntt'),(12,'Harneet Kaur','Nursery','B.A,NTT','04 Years','5910-20200','unaided_pst/ntt'),(13,'Ranbir Kaur','Computer','B.Com ,B.Ed PGDCA','11 Years	','5910-20200','unaided_pst/ntt'),(14,'Prableen Kaur','NTT','B.A, NTT','02 Years','5910-20200','unaided_pst/ntt'),(15,'Ramanjit Kaur','PST','MA, B.Ed.','01 Years','5910-20200','unaided_pst/ntt'),(16,'Mrs. Mandeep Kaur','PGT(Pbi & Comp)','M.A, B.Ed PGDCA','12 Years','10300-34800','unaided_pgt'),(17,'Mrs. Loveleenjeet Kaur','PGT(Hindi)','M.A,B.Ed','12 Years','10300-34800','unaided_pgt'),(18,'Mrs. Kamaljit Kaur','PGT(Com)','M.Com, B.EdM.Ed','20 Years','10300-34800','unaided_pgt'),(19,'Mrs. Parminder Kaur','PGT(Bio)','M.Sc., B.Ed','09 years','10300-34800','unaided_pgt'),(20,'Mrs. Parminder Kaur','PGT(Bio)','M.Sc., B.Ed','09 years','10300-34800','unaided_pgt'),(21,'Mrs. Sangeeta Sharma	','PGT(Eng)	','M.A, B.Ed','16 Years	','10300-34800','unaided_pgt'),(22,'	Mrs. Devinderjit Kaur','PGT(Maths)','M.Sc, B.Ed','11 Years	','10300-34800','unaided_pgt'),(23,'Mrs. Simmy Jain','PGT (Physics)','M.Sc, B.Ed','08 Years	','10300-34800','unaided_pgt'),(24,'Mr. Sunil Kumar','PGT(Phy Edu)','M.P.Ed	','08 Years	','10300-34800','unaided_pgt'),(25,'Mrs. Prabhdeep Kaur','PGT (Music)','M.A(Music Vocal), B.Ed','05 Years','10300-34800','unaided_pgt'),(26,'Mrs Gurpreet Kaur','PGT(Pol SC)','M.A. B.Ed','08 Years','10300-34800','unaided_pgt'),(27,'Ms. Charanjit Kaur','PGT(History)	','M.A, M.Ed	','02 Years	','10300-34800','unaided_pgt'),(28,'Ms. Jaspreet Kaur','PGT (Chemistry)','M.sc. B.Ed','','10300-34800','unaided_pgt'),(29,'Ms. Ravneet Kaur','PGT(Eng)','M.A. B.Ed','','10300-34800','unaided_pgt'),(30,'Ms. Sarina','PGT(Sociology)	','M.A. B.Ed','','10300-34800','unaided_pgt'),(31,'Ms. Rita Rani ','PGT (IT)','M.sc. IT,  B.Ed	 ','','10300-34800','unaided_pgt'),(32,'	Mrs. Ramanjeet Kaur','T.G.T( Science)','M.Sc, B.Ed','20 Years','10300-34800+Gp 5000','aided_tgt'),(33,'Mrs. Inderjeet Kaur','T.G.T (S.S.T)','M.A, B.Ed, M.Ed','11 Years','	10300-34800+Gp 5000','aided_tgt'),(34,'Mrs Vanita Sharma','TGT (English)','M.A., B.Ed','08 Years','10300-34800+Gp 5000','aided_tgt'),(35,'Mrs Rekha','TGT (S.St)','M.A(History), B.Ed','14 Years','10300-34800+Gp 5000','aided_tgt'),(36,'	Ms. Neha Handa','TGT (Sci)','M.Sc., B.Ed','08 Years','10300-34800+Gp 5000','aided_tgt'),(37,'S. Dalvinder Singh','T.G.T(Hindi)','M.A. B.Ed, LLB','12 Years','10300-34800+Gp 5000','aided_tgt'),(38,'Mrs. Manvinder Kaur','TGT (Pbi)','M.A(Punjabi), B.Ed / M.Ed','09 Years','10300-34800+Gp 5000','aided_tgt'),(39,'S. Gurcharan Singh','P.T.I','B.A, DPED, MPED','15 Years','10300-34800+Gp 5000','aided_tgt'),(40,'S. Iqbal Singh','Drg. Teacher','B.A/Dip in Arts & Craft','11 Years','10300-34800+Gp 5000','aided_tgt'),(41,'Mrs. Rachna Sharma','Home Sci Teacher','M.Sc, B.Ed','06 Years','10300-34800+GP 4200','aided_tgt'),(42,'Mr. Neeta Kumar','W.Exp','B.A,Dip.(Electrical Engineering)','25 Years','15910-20200+GP 3000','aided_tgt'),(43,'Ms. Seema Sharma','P.S.T','B.A, E.T.T','06 Years','10300+34800+GP 4200','aided_tgt'),(44,'Ms. Suman','P.S.T','B.A, M.A. E.T.T','09Years','10300+34800+GP 4200','aided_tgt'),(45,'Ms. Asha Sharma','P.S.T','B.Sc(Med.), E.T.T, B.Ed','09Years','10300+34800+GP 4200','aided_tgt'),(46,'Ms. Parminderjit Kaur','P.S.T','B.Sc, E.T.T	','04 Years	','10300+34800+GP 4200','aided_tgt'),(47,'Ms. Jaswinder Kaur','P.S.T','B.A. ETT/B.Ed','02 Years	','10300+34800+GP 4200','aided_tgt'),(48,'Ms. Saloni Sharma','P.S.T','B.A. ETT','','10300+34800+GP 4200	','aided_tgt'),(49,'Ms. Anju ','P.S.T','B.A. ETT','','10300+34800+GP 4200	','aided_tgt'),(50,'Ms. Ramanjeet Kaur','Principal',NULL,NULL,NULL,'principal');
/*!40000 ALTER TABLE `faculty_salary` ENABLE KEYS */;
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
