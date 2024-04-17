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
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `Name` varchar(500) NOT NULL,
  `activity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES ('801.JPG','sports'),('802.JPG','sports'),('803.JPG','sports'),('804.JPG','ardas'),('805.JPG','ardas'),('806.JPG','ardas'),('807.JPG','ardas'),('809.JPG','chart'),('810.JPG','ardas'),('811.JPG','ardas'),('813.JPG','interschool'),('814.JPG','interschool'),('815.JPG','interschool'),('816.JPG','ardas'),('817.JPG','ind-2015'),('818.JPG','ind-2015'),('819.JPG','ind-2015'),('820.JPG','ind-2015'),('821.JPG','ind-2015'),('822.JPG','ind-2015'),('823.JPG','ind-2015'),('824.JPG','ind_2015'),('825.JPG','ind-2015'),('826.JPG','ind-2015'),('827.JPG','inauguration'),('829.JPG','inauguration'),('830.JPG','inauguration'),('831.JPG','inauguration'),('832.JPG','inauguration'),('833.JPG','sports'),('834.JPG','sports'),('835.JPG','sports'),('836.JPG','sports'),('837.JPG','sports'),('838.JPG','sports'),('839.JPG','nagar'),('840.JPG','nagar'),('841.JPG','nagar'),('842.JPG','chart'),('843.JPG','chart'),('844.JPG','healthy'),('845.JPG','healthy'),('846.JPG','healthy'),('847.JPG','healthy'),('848.JPG','teej'),('849.JPG','teej'),('850.JPG','teej'),('851.JPG','swachhta'),('852.JPG','swachhta'),('853.JPG','swachhta'),('854.JPG','swachhta'),('855.JPG','plantation'),('856.JPG','honour'),('857.JPG','honour'),('858.JPG','honour'),('859.JPG','honour'),('860.JPG','theatre'),('861.JPG','theatre'),('862.JPG','theatre'),('863.JPG','chart'),('864.JPG','chart'),('865.JPG','chart'),('866.JPG','ind-2016'),('867.JPG','ind-2016'),('868.JPG','ind-2016'),('869.JPG','ind-2016'),('870.JPG','nagar'),('871.JPG','nagar'),('872.JPG','management'),('873.JPG','management'),('874.JPG','management'),('875.JPG','interschool'),('876.JPG','interschool'),('877.JPG','interschool'),('878.JPG','antidrug'),('879.JPG','antidrug'),('880.JPG','poster'),('881.JPG','poster'),('882.JPG','poster'),('883.JPG','plantation'),('884.JPG','plantation'),('885.JPG','plantation'),('886.JPG','annual'),('887.JPG','annual'),('888.JPG','annual'),('889.JPG','annual'),('890.JPG','annual'),('891.JPG','annual'),('894.JPG','annual'),('895.JPG','annual'),('896.jpeg','chandrayaan'),('897.jpeg','chandrayaan'),('898.jpeg','chandrayaan'),('899.jpeg','chandrayaan'),('900.jpeg','chandrayaan'),('901.jpeg','tabacco'),('902.jpeg','tabacco'),('903.jpeg','tabacco'),('904.jpeg','chandrayaan'),('905.jpeg','ind-pre'),('906.jpeg','ind-pre'),('907.jpeg','ind-pre'),('908.jpeg','ind-pre'),('909.jpeg','ind-pre'),('910.jpeg','ind-pre'),('911.jpeg','ind-pre'),('912.jpeg','ind-pre'),('913.jpeg','chandrayaan'),('914.jpeg','rakhi'),('915.jpeg','rakhi'),('916.jpeg','rakhi'),('917.jpeg','rakhi'),('918.jpeg','rakhi'),('919.jpeg','rakhi'),('920.jpeg','rakhi');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
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
