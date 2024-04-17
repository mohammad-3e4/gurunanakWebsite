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
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `description` text NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'News-27.jpeg','ADMISSION OPEN','2020-03-06'),(2,'News-36.jpg','Admission Schedule And Procedure Nursery Class (Session 2019-20)','2018-01-12'),(3,'News-2.pdf','AN ADMISSION SCHEDULE AND PROCEDURE OF PRE-NURSERY HAS BEEN ISSUED FOR SESSION 2024-25','2023-06-12'),(4,'News-7.pdf','APPLICATION FORM','2023-09-22'),(5,'News-15.pdf','APPLICATION FORM-2','2023-06-08'),(6,'','As Declared By Chandigarh Administration Today, Moday 28th Jan.2019 Observed As A Holiday','2019-01-26'),(7,'News-28.jpeg','Available School Counsellor For Help To Everyone','2020-11-04'),(8,'News-20.jpeg','Boxing Players Secured Positions In State Boxing Championship. 1.Aditya Tiwari Silver Medal 2. Susheel Silver Medal 3. Anjali Browns Medal','2021-07-26'),(9,'News-26.jpeg','CBS RESULT OF CLASS X','2020-07-17'),(10,'News-29.docx','DIRECTORATE OF EDUCATION CHANDIGARH ADMINISTRATION','2020-04-03'),(11,'News-1.pdf','FIRST LIST OF STUDENTS SELECTED FOR PRE-NURSERY HAS BEEN ISSUED FOR SESSION 2024-25','2024-01-23'),(12,NULL,'Form And Rules For Inter School Shabad Gayan Competition','2019-10-16'),(13,'','Interview For The Posts Of Receptionist And Clerk Will Be Held On 07.11.2023 At 9:00 Am In The School Premises.','2023-11-03'),(14,NULL,'Interview For The Posts Of TGT Maths, TGT S.St And PRT Will Be Held On 03.11.2023 At 9:00 Am In The School Premises.','2023-10-30'),(15,'News-12.jpeg','Its A Proud Moment For All Of Us As Our School Boys Under Fourteen Won Silver Madel In Inter Scool Handball Competition Held AtGovt. Model School Sector 23, Chandigarh','2023-06-09'),(16,'News-22.pdf','Mandatory Public Disclosure','2021-04-19'),(17,'News-25.jpeg','Marvellous Result','2020-07-17'),(18,'News-30.jpeg','Our Proud Student Mst. Abhishek Jain S/O- Mr. Pankaj Jain Scored 99.12 Percentile In JEE (Mains) Jan 2020. Heartiest Congratulation To Parents And Mst. Abhishek Jain From Management, Principal & Staff.','2020-01-23'),(19,'News-19.jpg','Pariksha Pe Charcha 2022','2022-03-31'),(20,'News-23.jpg','Pledge On Covid -19','2020-10-08'),(21,'News-33.docx','Post For PGT Pol Science, History And English','2019-06-20'),(22,'News-9.pdf','Proud Moment For All As Our School Handball Under 14 Girls Team Secured Silver Medal In Inter School Competition','2023-11-09'),(23,'News-9.pdf','Proud Moment For All As Our School Handball Under 19 Girls Team Secured Bronze Medal In Inter School Competition','2023-11-09'),(24,'News-11.jpeg','Proud Moment For All Our School Volleyball Under 17 Girls Team Secured Silver Medal In Inter School Competition','2023-11-09'),(25,'News-21.jpeg','Rajvir Singh Benipal Class 12 Sci. Student Secured 3rd Position In Roller Skating National Tournament.','2021-04-26'),(26,'News-8.pdf','RECRUITMENT NOTICE FOR APPOINTMENT OF UNAIDED TEACHING AND NON TEACHING STAFF','2023-09-22'),(27,'News-6.jpeg','RECRUITMENT NOTICE FOR APPOINTMENT OF UNAIDED TEACHING AND NON TEACHING STAFF-2','2023-10-13'),(28,'News-14.pdf','RECRUITMENT NOTICE FOR APPOINTMENT OF UNAIDED TEACHING AND NON TEACHING STAFF-3','2023-06-08'),(29,NULL,'REQUIREMENT FOR THE POST OF PRIMARY TEACHER','2022-06-08'),(30,NULL,'SCHOOL WILL REMAIN CLOSED ON 10TH MAY 2019 I.E. FRIDAY ON ACCOUNT OF 100% RESULTS OF 10TH AND 12TH','2019-09-05'),(31,'News-24.pdf','SOP','2020-09-21'),(32,'News-37.gif','Swachh Abhiyan','2018-01-09'),(33,'News-13.pdf','Tenders Are Hereby Invited From Reputed Government Enlisted Firms For Providing And Fixing Tile Terracing, Electric And Plumbing Works With Material, White Wash And Painting Of School, Construction Of Two Wash Rooms, Preparation Of Botanical Garden And Sports Grounds. The Total Cost Of Tender Is Approximately Rs. 35,00,000/-.','2023-08-08'),(34,'News-5.jpeg','TENDERS ARE INVITED FOR COMPUTER LAB RESOURCES','2023-10-13'),(36,NULL,'The School Will Remain Closed On 9/11/2019 In Lieu Of 16/11/2019.','2019-08-11'),(37,NULL,'WALK IN INTERVIEW Guru Nanak Khalsa Sr. Secondary School, Sector 30 B, Chandigarh Invites Application From Interested Candidates For The Post Of Primary Teachers. Eligibility As Per CBSE Norms. Last Date To Submit Resume 31st August 2022. Interview On 3rd September 2022 At 1:00PM.','2022-06-08'),(38,'News-16.pdf','Walk In Interview On 19.06.2023 At 11:00 AM For Following Unaided Posts (A) One PGT, IT (B) One Counselor-Psychology (C) One PRT, Physical Education (D) One Clerk. Posts Are On Purely Temporary Contractual Basis. Qua Teaching Staff, Other Conditions As Per CBSE Norms. Application Form May Be Submitted At Reception Counter On All Working Days Or Through Post Latest By 16.06.2023 Till 01:00 P.M.','2023-06-08');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
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
