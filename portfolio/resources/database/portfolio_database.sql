-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 19, 2021 at 09:30 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `username`, `content`, `project`) VALUES
(1, 'user1', 'content content', 'woe.png\r\n'),
(2, 'user1', 'content content', 'woe.png\r\n'),
(3, 'user1', 'content content', 'woe.png'),
(4, 'admin1', 'Comment', 'projectx'),
(5, 'admin1', 'Comment', 'projectx'),
(6, 'admin1', 'Comment', 'projectx'),
(7, 'admin1', 'Comment', 'projectx'),
(8, 'admin1', 'Comment', 'projectx'),
(9, 'admin1', 'Comment', 'projectx'),
(10, 'admin1', '123123123123123', 'projectx'),
(11, 'admin1', '23123123123123123', 'woe.jpg'),
(21, 'admin1', 'Comment', 'csa.png'),
(22, 'admin1', 'Comment', 'announce_flask.png'),
(23, 'admin1', 'Comment', 'csa.png'),
(24, 'admin1', 'asdddd', 'gpa.png'),
(25, 'admin1', 'Comment', 'csa.png'),
(26, 'admin1', 'aaaaaa', 'announce_flask.png'),
(27, 'admin1', 'qweqee', 'gogame_java.png'),
(28, 'admin1', 'Comment', 'announce_flask.png'),
(29, 'admin1', 'Comment', 'csa.png'),
(30, 'admin1', 'asdddd', 'csa.png'),
(31, 'admin1', 'Comment123123', 'gwi.png'),
(32, 'admin1', 'Comment11111111111', 'gogame_java.png'),
(33, 'admin1', 'Comment', 'csa.png'),
(34, 'admin1', NULL, NULL),
(35, 'admin1', 'aaaaaa', 'woe.jpg'),
(36, 'admin1', 'asddddd', 'csa.png'),
(37, 'admin1', 'Comment', NULL),
(38, 'admin1', 'Comment2222', 'shopping_bot.png'),
(39, 'admin1', 'Comment222', 'woe.jpg'),
(40, 'admin1', 'Comment111111111111111111111111111111111', 'woe.jpg'),
(41, 'admin1', 'Commentw', 'woe.jpg'),
(42, 'admin1', '222222222222222222222222', 'woe.jpg'),
(43, 'admin1', 'Comment', 'woe.jpg'),
(44, 'admin1', 'Comment', 'woe.jpg'),
(45, 'admin1', 'asddddd', 'woe.jpg'),
(46, 'admin1', '3333333', 'woe.jpg'),
(47, 'admin1', 'Comment', 'woe.jpg'),
(48, 'admin1', 'Comment', 'woe.jpg'),
(49, 'admin1', 'Comment2', 'woe.jpg'),
(50, 'admin1', 'Comment222', 'woe.jpg'),
(51, 'admin1', 'Comment222', 'woe.jpg'),
(52, 'admin1', 'Comment', 'woe.jpg'),
(53, 'admin1', 'Comment', 'woe.jpg'),
(54, 'admin1', 'Comment', 'woe.jpg'),
(55, 'admin1', 'Comment', 'woe.jpg'),
(56, 'admin1', 'Comment222', 'woe.jpg'),
(57, 'admin1', 'Comment1111', 'woe.jpg'),
(58, 'admin1', 'Comment77', 'woe.jpg'),
(59, 'admin1', 'Comment3333333333333', 'woe.jpg'),
(60, 'admin1', 'Comment6666666666666666666', 'portfolio.png'),
(61, 'admin1', 'Comment2', 'portfolio.png'),
(62, 'admin1', 'Comment12333', 'shopping_bot.png'),
(63, 'qwerty', 'Commentaaaaaaaaaaaaa', 'portfolio.png'),
(64, 'admin1', 'wwwwww', 'portfolio.png'),
(65, 'admin123', 'Comment2222222222', 'shopping_bot.png'),
(66, 'admin123', 'Comment88888888888', 'shopping_bot.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(2, 'qwerty', '$2y$10$4G2c6Ko9ZnSO52BJBLlVyejK7OHAJfat1eVQpMYlc5pHZExxvbMF6', '2021-05-18 00:59:54'),
(3, 'admin123', '$2y$10$qyb0zFYoUxQWrzoWYc7bue3ew2wesPEIQkD8tO6Azx9qPfZeg10Wi', '2021-05-18 19:15:29');

-- --------------------------------------------------------

--
-- Table structure for table `visits`
--

CREATE TABLE `visits` (
  `id` int(11) NOT NULL,
  `ip` varchar(60) DEFAULT NULL,
  `last_visit` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visits`
--

INSERT INTO `visits` (`id`, `ip`, `last_visit`) VALUES
(1, 'x.x.x.x', '2021-05-18'),
(2, 'x.x.x.x', '2021-05-18'),
(3, '127.0.0.1', '2021-05-18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `visits`
--
ALTER TABLE `visits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
