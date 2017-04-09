-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: cancer
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `DrugName` varchar(100) NOT NULL,
  `DrugType` varchar(100) NOT NULL,
  `DrugStartDate` varchar(100) NOT NULL,
  `DrugDose` varchar(100) NOT NULL,
  `Symptoms` varchar(100) NOT NULL,
  `DrugEndDate` varchar(100) NOT NULL,
  `CancerType` varchar(100) NOT NULL,
  `CancerStage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES ('oxaliplatin','cancer','4/7/2017','15','Hair Loss','4/10/2017','lung','2'),('','','','','','','',''),('','','','','','','',''),('','','','','','','',''),('','','','','','','',''),('DrugName','DrugType','DrugStartDate','DrugDose','Symptoms','DrugEndDate','CancerType','CancerStage'),('asdsa','acas','12 April, 2017','asda','sadas','25 April, 2017','sada','asdas'),('docetaxel','side-effect','9/12/2011','5','nausea','8/12/2016','Heart','3'),('docetaxel','side-effect','7/2/2013','5','Tumor-size','4/10/2016','Heart','2'),('irinotecan','side-effect','7/2/2013','10','Tumor-size','2/22/2016','Heart','3'),('irinotecan','side-effect','2/3/2014','12','Menopausal Symptoms','2/22/2016','Brain','3'),('docetaxel','side-effect','1/23/2010','15','nausea','4/23/2015','Breast','4'),('docetaxel','side-effect','1/23/2010','5','Tingling','4/10/2016','Brain','1'),('docetaxel','cancer','4/15/2013','5','nausea','4/23/2015','Lungs','4'),('irinotecan','cancer','9/12/2011','10','Menopausal Symptoms','4/23/2015','Lungs','4'),('docetaxel','cancer','9/12/2011','20','Tumor-size','4/10/2016','Lungs','1'),('gemcitabine','cancer','4/15/2013','5','Tingling','2/22/2016','Breast','1'),('irinotecan','cancer','7/2/2013','20','nausea','4/10/2016','Heart','4'),('irinotecan','cancer','7/2/2013','12','Neuropathy','5/23/2015','Breast','2'),('docetaxel','cancer','7/2/2013','12','Menopausal Symptoms','4/10/2016','Brain','4'),('gemcitabine','cancer','2/3/2014','12','nausea','4/23/2015','Lungs','1'),('irinotecan','side-effect','7/2/2013','10','Tumor-size','2/22/2016','Brain','1'),('irinotecan','side-effect','2/3/2014','20','Menopausal Symptoms','4/10/2016','Lungs','3'),('docetaxel','side-effect','4/15/2013','12','Tingling','8/12/2016','Lungs','1'),('irinotecan','cancer','4/15/2013','20','Tingling','2/22/2016','Lungs','2'),('docetaxel','side-effect','7/2/2013','12','Menopausal Symptoms','8/12/2016','Lungs','3'),('irinotecan','cancer','7/2/2013','15','Tingling','2/22/2016','Heart','1'),('gemcitabine','cancer','2/3/2014','10','nausea','2/22/2016','Brain','4'),('gemcitabine','side-effect','4/15/2013','10','Menopausal Symptoms','5/23/2015','Brain','4'),('docetaxel','side-effect','7/2/2013','20','Menopausal Symptoms','8/12/2016','Brain','4'),('gemcitabine','side-effect','2/3/2014','12','Tingling','5/23/2015','Breast','1'),('gemcitabine','cancer','9/12/2011','15','nausea','5/23/2015','Breast','1'),('irinotecan','cancer','4/15/2013','5','nausea','4/10/2016','Lungs','1'),('docetaxel','cancer','1/23/2010','5','Neuropathy','4/10/2016','Breast','2'),('gemcitabine','side-effect','7/2/2013','5','Tumor-size','8/12/2016','Brain','4'),('irinotecan','cancer','2/3/2014','15','Tingling','4/10/2016','Heart','1'),('irinotecan','side-effect','4/15/2013','5','Tingling','4/23/2015','Heart','2'),('irinotecan','cancer','2/3/2014','5','Neuropathy','2/22/2016','Breast','2'),('gemcitabine','cancer','2/3/2014','5','nausea','4/23/2015','Heart','1'),('docetaxel','cancer','9/12/2011','15','Tingling','2/22/2016','Breast','2'),('gemcitabine','side-effect','9/12/2011','10','Menopausal Symptoms','4/10/2016','Heart','2'),('gemcitabine','cancer','7/2/2013','15','Neuropathy','2/22/2016','Lungs','2'),('irinotecan','cancer','2/3/2014','5','nausea','5/23/2015','Breast','4'),('gemcitabine','cancer','9/12/2011','12','Tingling','8/12/2016','Brain','4'),('docetaxel','cancer','2/3/2014','20','Menopausal Symptoms','4/23/2015','Heart','4'),('gemcitabine','cancer','1/23/2010','5','Neuropathy','5/23/2015','Brain','4'),('irinotecan','cancer','1/23/2010','20','nausea','4/23/2015','Heart','4'),('docetaxel','cancer','2/3/2014','12','Neuropathy','8/12/2016','Brain','1'),('docetaxel','side-effect','9/12/2011','12','Neuropathy','8/12/2016','Brain','1'),('irinotecan','cancer','2/3/2014','10','Tingling','8/12/2016','Breast','3'),('docetaxel','side-effect','1/23/2010','15','Tingling','8/12/2016','Lungs','4'),('gemcitabine','side-effect','1/23/2010','20','Neuropathy','2/22/2016','Breast','2'),('irinotecan','side-effect','4/15/2013','20','Neuropathy','4/10/2016','Lungs','3'),('docetaxel','side-effect','2/3/2014','10','Menopausal Symptoms','4/10/2016','Breast','3'),('gemcitabine','cancer','1/23/2010','20','nausea','2/22/2016','Breast','2'),('docetaxel','side-effect','2/3/2014','10','nausea','8/12/2016','Brain','3'),('gemcitabine','side-effect','7/2/2013','10','Tingling','8/12/2016','Heart','1'),('gemcitabine','cancer','4/15/2013','5','Tingling','4/23/2015','Breast','1'),('irinotecan','side-effect','7/2/2013','10','Menopausal Symptoms','4/23/2015','Brain','4'),('gemcitabine','side-effect','4/15/2013','10','nausea','5/23/2015','Heart','2'),('gemcitabine','side-effect','4/15/2013','5','Menopausal Symptoms','4/10/2016','Heart','4'),('gemcitabine','side-effect','1/23/2010','12','nausea','2/22/2016','Heart','3'),('gemcitabine','side-effect','4/15/2013','5','Tumor-size','2/22/2016','Brain','4'),('irinotecan','side-effect','9/12/2011','12','Tingling','5/23/2015','Brain','3'),('gemcitabine','side-effect','4/15/2013','20','Tingling','2/22/2016','Breast','3'),('irinotecan','side-effect','1/23/2010','10','Menopausal Symptoms','4/10/2016','Heart','1'),('irinotecan','cancer','2/3/2014','20','Tumor-size','5/23/2015','Breast','2'),('docetaxel','side-effect','4/15/2013','15','Tumor-size','2/22/2016','Brain','2'),('gemcitabine','side-effect','1/23/2010','15','Tumor-size','4/23/2015','Brain','2'),('irinotecan','side-effect','9/12/2011','10','Neuropathy','8/12/2016','Lungs','4'),('docetaxel','cancer','9/12/2011','5','Tumor-size','5/23/2015','Brain','3'),('docetaxel','side-effect','4/15/2013','12','Tumor-size','4/23/2015','Breast','2'),('docetaxel','side-effect','4/15/2013','20','Tingling','2/22/2016','Heart','2'),('gemcitabine','side-effect','2/3/2014','15','Tumor-size','8/12/2016','Breast','1'),('docetaxel','cancer','2/3/2014','10','Tumor-size','4/10/2016','Heart','3'),('docetaxel','side-effect','7/2/2013','20','Tumor-size','4/23/2015','Brain','4'),('irinotecan','cancer','9/12/2011','15','Tumor-size','5/23/2015','Breast','1'),('docetaxel','side-effect','7/2/2013','10','Neuropathy','4/10/2016','Breast','3'),('gemcitabine','side-effect','4/15/2013','15','Menopausal Symptoms','2/22/2016','Breast','4'),('irinotecan','side-effect','7/2/2013','15','Tumor-size','8/12/2016','Breast','2'),('docetaxel','side-effect','2/3/2014','5','Tingling','8/12/2016','Breast','2'),('irinotecan','cancer','7/2/2013','12','Tumor-size','5/23/2015','Breast','2'),('docetaxel','side-effect','4/15/2013','10','Menopausal Symptoms','8/12/2016','Lungs','1'),('gemcitabine','side-effect','1/23/2010','5','Neuropathy','5/23/2015','Lungs','1'),('gemcitabine','side-effect','9/12/2011','12','Tingling','5/23/2015','Heart','3'),('docetaxel','cancer','1/23/2010','15','nausea','5/23/2015','Breast','2'),('gemcitabine','side-effect','9/12/2011','10','Tumor-size','2/22/2016','Brain','2'),('docetaxel','side-effect','7/2/2013','15','Tumor-size','2/22/2016','Heart','2'),('irinotecan','side-effect','7/2/2013','15','Neuropathy','4/10/2016','Brain','4'),('docetaxel','cancer','4/15/2013','12','Tingling','4/10/2016','Breast','4'),('docetaxel','side-effect','1/23/2010','5','Neuropathy','2/22/2016','Brain','1'),('gemcitabine','side-effect','9/12/2011','5','Menopausal Symptoms','4/23/2015','Heart','3'),('irinotecan','side-effect','9/12/2011','15','Neuropathy','2/22/2016','Breast','2'),('docetaxel','cancer','7/2/2013','15','Neuropathy','2/22/2016','Breast','1'),('gemcitabine','cancer','1/23/2010','15','Tingling','4/23/2015','Brain','1'),('docetaxel','cancer','2/3/2014','20','Menopausal Symptoms','4/23/2015','Breast','3'),('irinotecan','cancer','4/15/2013','20','Tumor-size','2/22/2016','Brain','1'),('gemcitabine','cancer','7/2/2013','12','Neuropathy','4/23/2015','Brain','2'),('gemcitabine','cancer','9/12/2011','12','Menopausal Symptoms','4/10/2016','Brain','4'),('docetaxel','cancer','2/3/2014','10','nausea','4/10/2016','Lungs','4'),('irinotecan','side-effect','7/2/2013','12','Tingling','4/10/2016','Breast','1'),('docetaxel','side-effect','9/12/2011','15','Menopausal Symptoms','4/23/2015','Brain','4'),('irinotecan','cancer','1/23/2010','15','Menopausal Symptoms','4/23/2015','Lungs','3'),('docetaxel','side-effect','9/12/2011','12','Tingling','4/10/2016','Brain','2'),('docetaxel','side-effect','4/15/2013','15','Neuropathy','5/23/2015','Heart','1'),('irinotecan','side-effect','4/15/2013','5','Tumor-size','4/10/2016','Lungs','1');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-08 21:21:44
