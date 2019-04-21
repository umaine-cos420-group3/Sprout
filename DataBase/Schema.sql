-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 21, 2019 at 07:44 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `idMatch` int(11) NOT NULL,
  `matcher_key` bigint(20) DEFAULT NULL,
  `matchee_key` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`idMatch`, `matcher_key`, `matchee_key`) VALUES
(0, 4, 5),
(1, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `sender_id` int(255) NOT NULL,
  `receiver_id` int(255) NOT NULL,
  `text` varchar(1024) NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `idReport` int(11) NOT NULL,
  `reporting_user_id` bigint(20) DEFAULT NULL,
  `Reason` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`idReport`, `reporting_user_id`, `Reason`) VALUES
(0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pwd` varchar(257) DEFAULT NULL,
  `ib_question` varchar(100) DEFAULT NULL,
  `ib_answer_one` varchar(128) DEFAULT NULL,
  `ib_answer_two` varchar(128) DEFAULT NULL,
  `ib_answer` tinyint(4) DEFAULT NULL,
  `photo_one_image_path` varchar(1024) DEFAULT NULL,
  `photo_two_image_path` varchar(1024) DEFAULT NULL,
  `photo_three_image_path` varchar(1024) DEFAULT NULL,
  `Match_idMatch` int(11) NOT NULL,
  `Report_idReport` int(11) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `gender_interested` enum('male','female','other') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`idMatch`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`idReport`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`,`Report_idReport`),
  ADD KEY `fk_Users_Match_idx` (`Match_idMatch`),
  ADD KEY `fk_Users_Report1_idx` (`Report_idReport`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_Users_Match` FOREIGN KEY (`Match_idMatch`) REFERENCES `matches` (`idMatch`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Users_Report1` FOREIGN KEY (`Report_idReport`) REFERENCES `report` (`idReport`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
