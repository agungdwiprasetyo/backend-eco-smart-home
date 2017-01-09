-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1build0.15.04.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 09, 2017 at 06:33 PM
-- Server version: 5.6.28-0ubuntu0.15.04.1
-- PHP Version: 5.6.4-4ubuntu6.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


-- --------------------------------------------------------

--
-- Table structure for table `battery`
--

CREATE TABLE IF NOT EXISTS `battery` (
`id_battery` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_rumah` int(11) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `perkiraan` int(11) NOT NULL,
  `mah` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `battery`
--

INSERT INTO `battery` (`id_battery`, `id_user`, `id_rumah`, `kapasitas`, `perkiraan`, `mah`, `datetime`) VALUES
(1, 1, 1, 60, 100, 10000, '2016-11-30 06:21:28'),
(2, 1, 1, 50, 70, 8000, '2016-11-30 06:21:25');

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
`id_data` int(10) NOT NULL,
  `id_perangkat` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_rumah` int(10) DEFAULT NULL,
  `pemakaian_daya` int(10) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id_data`, `id_perangkat`, `id_user`, `id_rumah`, `pemakaian_daya`, `datetime`) VALUES
(1, 1, 1, 1, 6, '2016-11-05 01:25:51'),
(2, 1, 1, 1, 5, '2016-11-06 01:26:04'),
(3, 1, 1, 1, 10, '2016-11-07 02:26:15'),
(4, 1, 1, 1, 12, '2016-11-08 02:31:27'),
(5, 1, 1, 1, 7, '2016-11-09 02:36:27'),
(6, 1, 1, 1, 19, '2016-11-10 02:41:30'),
(7, 1, 1, 1, 13, '2016-11-11 02:46:30'),
(8, 1, 1, 1, 7, '2016-11-11 02:51:32'),
(9, 1, 1, 1, 2, '2016-11-12 02:56:34'),
(10, 1, 1, 1, 3, '2016-11-12 03:01:35'),
(11, 1, 1, 1, 5, '2016-11-15 03:06:35'),
(12, 1, 1, 1, 9, '2016-11-15 03:11:37'),
(13, 1, 1, 1, 5, '2016-11-17 03:16:38'),
(14, 1, 1, 1, 12, '2016-11-17 03:21:39'),
(15, 1, 1, 1, 20, '2016-11-17 03:26:41'),
(16, 1, 1, 1, 5, '2016-11-25 03:31:41'),
(17, 1, 1, 1, 18, '2016-11-25 03:36:42'),
(18, 1, 1, 1, 20, '2016-11-25 03:41:42'),
(19, 1, 1, 1, 12, '2016-11-25 03:46:45'),
(20, 1, 1, 1, 14, '2016-11-25 03:51:45'),
(21, 1, 1, 1, 10, '2016-12-01 03:56:46'),
(22, 1, 1, 1, 16, '2016-12-01 04:01:47'),
(23, 1, 1, 1, 3, '2016-12-01 04:06:48'),
(24, 1, 1, 1, 15, '2016-12-01 04:16:31'),
(25, 1, 1, 1, 11, '2016-12-01 04:16:31'),
(26, 1, 1, 1, 20, '2016-12-06 04:21:39'),
(27, 1, 1, 1, 9, '2016-12-06 04:26:40'),
(28, 22, 1, 1, 4, '2016-12-06 04:49:26'),
(29, 22, 1, 1, 15, '2016-12-06 04:54:26'),
(30, 22, 1, 1, 18, '2016-12-06 04:59:27'),
(31, 22, 1, 1, 4, '2016-12-06 05:04:28'),
(32, 22, 1, 1, 3, '2016-12-06 05:09:28'),
(33, 22, 1, 1, 3, '2016-12-06 05:14:29'),
(34, 22, 1, 1, 1, '2016-12-06 05:19:30'),
(35, 22, 1, 1, 2, '2016-12-06 05:24:31'),
(36, 22, 1, 1, 19, '2016-12-06 05:29:31'),
(37, 22, 1, 1, 15, '2016-12-06 05:34:32'),
(38, 22, 1, 1, 6, '2016-12-06 06:14:44'),
(39, 22, 1, 1, 14, '2016-12-06 06:15:05'),
(40, 22, 1, 1, 19, '2016-12-06 06:15:25'),
(41, 22, 1, 1, 16, '2016-12-06 06:15:46'),
(42, 22, 1, 1, 17, '2016-12-06 06:16:06'),
(43, 22, 1, 1, 17, '2016-12-06 06:16:27'),
(44, 22, 1, 1, 15, '2016-12-06 06:16:48'),
(45, 22, 1, 1, 20, '2016-12-06 06:17:09'),
(46, 22, 1, 1, 18, '2016-12-06 06:17:54'),
(47, 22, 1, 1, 15, '2016-12-06 06:18:14'),
(48, 22, 1, 1, 14, '2016-12-06 06:18:35');

-- --------------------------------------------------------

--
-- Table structure for table `perangkat`
--

CREATE TABLE IF NOT EXISTS `perangkat` (
`id_perangkat` int(10) NOT NULL,
  `deviceId` int(11) NOT NULL,
  `id_user` int(10) NOT NULL,
  `id_rumah` int(10) NOT NULL,
  `deviceName` varchar(255) NOT NULL,
  `deviceStatus` int(5) NOT NULL,
  `safeStatus` tinyint(1) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perangkat`
--

INSERT INTO `perangkat` (`id_perangkat`, `deviceId`, `id_user`, `id_rumah`, `deviceName`, `deviceStatus`, `safeStatus`, `datetime`) VALUES
(1, 22, 1, 1, 'LED 1', 0, 0, '2017-01-09 16:32:01'),
(2, 23, 1, 1, 'LED 2', 0, 0, '2017-01-09 16:31:14'),
(3, 24, 1, 1, 'LED 3', 0, 0, '2017-01-09 16:30:44'),
(4, 25, 1, 1, 'LED 4', 0, 0, '2017-01-09 04:16:56'),
(5, 26, 1, 1, 'LED 5', 0, 0, '2017-01-09 04:17:01'),
(6, 27, 1, 1, 'LED 6', 0, 0, '2017-01-09 04:35:23'),
(7, 28, 1, 1, 'LED 7', 0, 0, '2017-01-09 04:17:11'),
(12, 29, 1, 1, 'LED 8', 0, 0, '2017-01-09 04:17:17'),
(13, 30, 1, 1, 'LED 9', 0, 0, '2017-01-09 04:17:22'),
(14, 38, 1, 1, 'Relay 1', 0, 0, '2017-01-09 17:59:52'),
(15, 39, 1, 1, 'Relay 2', 0, 0, '2017-01-08 18:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `safe_mode`
--

CREATE TABLE IF NOT EXISTS `safe_mode` (
`id_safe` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status_safe` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `safe_mode`
--

INSERT INTO `safe_mode` (`id_safe`, `id_user`, `status_safe`, `datetime`) VALUES
(1, 1, 1, '2016-12-06 06:20:01'),
(2, 1, 1, '2016-12-06 06:20:42'),
(3, 1, 1, '2016-12-06 06:21:43'),
(4, 1, 1, '2016-12-06 06:22:04'),
(5, 1, 1, '2016-12-06 06:22:25'),
(6, 1, 1, '2016-12-06 06:23:05'),
(7, 1, 1, '2016-12-06 06:23:26'),
(8, 1, 1, '2016-12-06 06:24:59'),
(9, 1, 1, '2016-12-06 06:25:40'),
(10, 1, 1, '2016-12-06 06:26:21'),
(11, 1, 1, '2016-12-06 06:27:02'),
(12, 1, 1, '2016-12-06 06:27:22'),
(13, 1, 1, '2016-12-06 06:28:03');

-- --------------------------------------------------------

--
-- Table structure for table `status_perangkat`
--

CREATE TABLE IF NOT EXISTS `status_perangkat` (
  `id_status` int(11) NOT NULL,
  `port_perangkat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status_perangkat`
--

INSERT INTO `status_perangkat` (`id_status`, `port_perangkat`, `id_user`, `status`) VALUES
(1, 22, 1, 1),
(2, 23, 1, 0),
(3, 24, 1, 0),
(4, 25, 1, 0),
(5, 26, 1, 0),
(6, 27, 1, 0),
(7, 28, 1, 0),
(8, 29, 1, 0),
(9, 30, 1, 0),
(10, 31, 1, 0),
(11, 32, 1, 0),
(12, 33, 1, 0),
(13, 34, 1, 0),
(14, 35, 1, 0),
(15, 36, 1, 0),
(16, 37, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tdl`
--

CREATE TABLE IF NOT EXISTS `tdl` (
  `id_tdl` int(11) NOT NULL,
  `daya` int(11) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tdl`
--

INSERT INTO `tdl` (`id_tdl`, `daya`, `harga`) VALUES
(1, 1300, 1459),
(2, 2200, 1520);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id_user` int(10) NOT NULL,
  `kategori_user` int(11) NOT NULL,
  `nama_user` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `id_rumah` int(10) NOT NULL,
  `daya` int(11) NOT NULL,
  `status_notif` int(1) NOT NULL,
  `sleep_time` time NOT NULL,
  `wake_time` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `kategori_user`, `nama_user`, `email`, `password`, `id_rumah`, `daya`, `status_notif`, `sleep_time`, `wake_time`, `created_at`) VALUES
(1, 1, 'Ivan Maulana', 'ivanmaulana@apps.ipb.ac.id', 'nasigoreng', 1, 2200, 1, '21:00:00', '04:30:00', '2016-11-23 17:55:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `battery`
--
ALTER TABLE `battery`
 ADD PRIMARY KEY (`id_battery`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
 ADD PRIMARY KEY (`id_data`), ADD KEY `id_user` (`id_user`), ADD KEY `id_perangkat` (`id_perangkat`), ADD KEY `id_user_2` (`id_user`);

--
-- Indexes for table `perangkat`
--
ALTER TABLE `perangkat`
 ADD PRIMARY KEY (`id_perangkat`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `safe_mode`
--
ALTER TABLE `safe_mode`
 ADD PRIMARY KEY (`id_safe`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `status_perangkat`
--
ALTER TABLE `status_perangkat`
 ADD PRIMARY KEY (`id_status`), ADD KEY `id_perangkat` (`port_perangkat`,`id_user`);

--
-- Indexes for table `tdl`
--
ALTER TABLE `tdl`
 ADD PRIMARY KEY (`id_tdl`), ADD KEY `daya` (`daya`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id_user`), ADD KEY `id_user` (`id_user`), ADD KEY `kategori_user` (`kategori_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `battery`
--
ALTER TABLE `battery`
MODIFY `id_battery` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
MODIFY `id_data` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `perangkat`
--
ALTER TABLE `perangkat`
MODIFY `id_perangkat` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `safe_mode`
--
ALTER TABLE `safe_mode`
MODIFY `id_safe` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
