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
-- Table structure for table `faculty_joining`
--

DROP TABLE IF EXISTS `faculty_joining`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_joining` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `qualification` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `date_of_appointment` date DEFAULT NULL,
  `date_of_retirement` date DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_joining`
--

LOCK TABLES `faculty_joining` WRITE;
/*!40000 ALTER TABLE `faculty_joining` DISABLE KEYS */;
INSERT INTO `faculty_joining` VALUES (1,'Ms. Rajni Sharma','Assistant','B.A','1972-02-12','1997-03-20','2030-02-28','unaided_nonteaching'),(2,'Ms. Manpreet Kaur','Clerk',NULL,'1972-04-17','2008-07-19','2032-06-21','unaided_nonteaching'),(3,'Mr. Ram Jas','Mali','10th','1989-04-11','2009-09-01','2047-12-31','unaided_nonteaching'),(5,'Ms. Noori','Aya','5th','1982-09-07','2007-07-04','2040-09-30','unaided_nonteaching'),(6,'Mr. Raj Kumar','Mali','8th','0978-07-01','2007-09-19','2038-07-31','unaided_nonteaching'),(7,'S.Balveer Singh','Gate Keepe','5th','1968-04-03','2007-10-16','2028-04-30','unaided_nonteaching'),(8,'Ms. Raj Kumari','Aya','5th','1966-01-01','2007-02-27','2026-01-31','unaided_nonteaching'),(9,'Ms.Anureet Kaur','Assistant','PGD E.COM., PDCA M.A. (History) ','1981-01-11','2015-01-01','2039-01-31','unaided_nonteaching'),(10,'Charanpreet Kaur','Librarian','M.Lib.,Inf.Sci.M. Phill(Lib Sc)','1979-07-25','2007-07-09','2037-07-31','unaided_librarian'),(11,'Ms. Harpreet Kaur','Librarian','B. Lib','1989-07-01','2013-03-01','2047-07-31','unaided_librarian'),(12,'Mrs. Gagandeep Kaur','PST','B.A, B.Ed','1973-01-04','2010-07-01','0031-12-04','unaided_pst/ntt'),(13,'Ms. Ramanjeet Kaur','PST','M.A (Eng), B.Ed','1985-05-18','2016-05-01','2043-05-31','unaided_pst/ntt'),(14,'Ms. Paramjeet Kaur','NTT','+2, NTT','1965-01-17','1993-09-06','2023-01-31','unaided_pst/ntt'),(15,'Ms. Rajinder Kaur','NTT','B.A II,N.T.T','1964-04-14','2005-10-14','2022-04-30','unaided_pst/ntt'),(16,'Ms. Harneet Kaur','NTT','B.A,NTT','1982-12-28','2012-07-02','2040-12-31','unaided_pst/ntt'),(17,'Ms. Prabhleen Kaur','NTT','M.A (pbi), NTT','1984-04-23','2016-02-11','2042-02-28','unaided_pst/ntt'),(18,'Ms. Gurdeep Kaur','TGT','B.Sc, B.Ed','1975-08-18','2006-04-01','2033-08-31','unaided_tgt'),(19,'Mrs. Namrta','TGT(Maths)','B.Sc, B.Ed','1974-07-02','2007-07-09','2032-08-31','unaided_tgt'),(20,'Ms.ruchi','TGT(Sci)','M.Sc, B.Ed','1981-11-19','2007-07-09','2039-11-30','unaided_tgt'),(21,'Mrs. Sonu','TGT','B.Sc, B.Ed','1972-04-01','2007-07-09','2030-04-30','unaided_tgt'),(22,'Mrs. Gurmohan Kaur','TGT(Science)','B.Sc, MA, B.Ed','1975-01-01','2009-12-01','2033-01-31','unaided_tgt'),(23,'S. Gurcharan Singh','P.T.I','B.A DPEd MPEd','1975-07-02','2001-05-07','2033-07-31','aided_pti'),(24,'S. Iqbal Singh','Drg. Teacher','B.A/Dip in Arts & Craft','1981-07-11','2006-07-03','2039-07-31','aided_drawing'),(25,'Mrs. Rachna Sharma','Home Science Teacher','M.Sc, B.Ed','1981-08-10','2010-09-21','2039-08-31','aided_homescience'),(26,'Mr. Neeta Kumar','Work Experience','B.A, Dip.(Electrical Engineering)','1969-02-02','1990-11-12','2027-02-28','aided_workexperience'),(27,'Mrs. Ramanjeet Kaur','T.G.T( Science)','M.Sc, B.Ed','1968-09-25','1999-05-07','2026-09-30','aided_tgt'),(28,'Mrs. Inderjeet Kaur','T.G.T (S.S.T)','M.A, B.Ed,M.Ed','1970-06-16','2004-11-11','2028-06-30','aided_tgt'),(29,'Mrs Vanita Sharma','TGT(English)','M.A., B.Ed','1976-10-19','2009-02-27','2034-10-31','aided_tgt'),(30,'Mrs Rekha','TGT (S.St)','M.A(History), B.Ed','1982-07-28','2012-03-15','2040-07-31','aided_tgt'),(31,'Ms. Neha Handa','TGT (Sci)','M.Sc., B.Ed','1984-05-17','2010-02-09','2042-05-30','aided_tgt'),(32,'S. Dalvinder Singh','T.G.T(Hindi)','M.A. B.Ed, LLB','1972-04-09','2006-07-03','2030-04-30','aided_tgt'),(33,'Mrs Satinder Kaur','TGT (Pbi)','M.A., B.Ed., Giani','1962-12-15','2010-03-06','2020-12-31','aided_tgt'),(34,'Mrs. Manvinder Kaur','T.G.T(Pbi)','M.A(Punbi), B.Ed/M.Ed','1979-11-22','2013-10-08','2037-11-30','aided_tgt'),(35,'Mr. Satish Kumar','Lab. Att.','10+2','1972-02-12','1997-03-20','2030-02-28','aided_nonteaching'),(36,'S. Balwant Singh','Chowkidar','10th','1974-05-23','2004-07-30','2034-05-31','aided_nonteaching'),(37,'S. Pargat Singh','Mali','10th','1964-08-08','1986-07-14','2024-08-31','aided_nonteaching'),(38,'Ms. Ravinder Kaur','Peon','10th','1974-10-04','2010-09-21','2034-10-31','aided_nonteaching'),(39,'Ms. Seema Sharma','P.S.T','B.A, E.T.T','1983-02-11','2009-03-02','2041-02-28','aided_primary'),(40,'Ms. Suman','P.S.T','B.A, M.A. E.T.T','1984-10-19','2010-03-05','2042-10-31','aided_primary'),(41,'Ms. Asha Sharma','P.S.T','B.Sc(Med.), E.T.T, B.Ed','1979-10-25','2010-03-05','2037-10-31','aided_primary'),(42,'Ms. Parminderjit Kaur','P.S.T','B.Sc, E.T.T','1987-09-17','2012-06-30','2045-09-30','aided_primary'),(43,'Ms. Jaswinder Kaur','P.S.T','B.A. ETT/B.Ed','1990-03-25','2014-12-01','2048-09-30','aided_primary'),(44,'Ms Anju','P.S.T','BA, MA, DEID, BED','1986-10-01','2018-09-26','2044-10-31','aided_primary'),(45,'Ms. Saloni Sharma','P.S.T','B.Com, M.Com, DEID','1994-05-29','2018-11-17','2052-05-31','aided_primary'),(46,'Mrs. Mandeep Kaur','PGT(Pbi & Comp)','M.A, B.Ed &PGDCA','1981-09-20','2004-04-01','2039-09-30','unaided_pgt'),(47,'Mrs. Loveleenjeet Kaur','PGT(Hindi)','M.A,B.Ed','1969-07-11','2004-07-01','2027-07-31','unaided_pgt'),(48,'Mrs. Kamaljit Kaur','PGT(Com)','M.Com, B.EdM.Ed','1969-08-01','2005-07-01','2027-08-31','unaided_pgt'),(49,'Mrs. Parminder Kaur','PGT(Bio)','M.Sc., B.Ed','1974-07-26','2007-07-09','2032-07-31','unaided_pgt'),(50,'Mrs. Sangeeta Sharma','PGT(Eng)','M.A,B.Ed','1972-02-16','2008-08-30','2030-02-28','unaided_pgt'),(51,'Mrs. Devinderjit Kaur','PGT(Maths)','M.Sc,B.Ed','1974-06-06','2008-10-13','2032-09-30','unaided_pgt'),(52,'Mrs. Simmy Jain','PGT(Physics)','M.Sc,B.Ed','1983-07-06','2008-10-23','2041-07-31','unaided_pgt'),(53,'Mr. Sunil Kumar','PGT(Phy Edu)','M.P.Ed','1978-10-17','2009-01-01','2036-10-31','unaided_pgt'),(54,'Mrs. Prabhdeep Kaur','PGT(Music)','M.A(Music Vocal), B.Ed','1985-10-13','2009-09-17','2043-10-31','unaided_pgt'),(55,'Ms. Charanjit Kaur','PGT(His)','MA (History), M.Ed','1987-03-26','2016-05-01','2045-03-31','unaided_pgt'),(56,'Ms. Anuradha','PGT(Eco)','M.A, B.Ed, M.Ed','1991-12-22','2016-09-01','2049-12-31','unaided_pgt'),(57,'Ms. Jaspreet Kaur','PGT(Chem)','M.Sc. (Chem)','1988-12-27','2017-11-01','2046-12-31','unaided_pgt'),(58,'Ms. Kulwinderjit Kaur','PGT(Pol Sc)','MA(Pol Sc), B.Ed','1987-05-14','2019-07-06','2045-05-31','unaided_pgt');
/*!40000 ALTER TABLE `faculty_joining` ENABLE KEYS */;
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
