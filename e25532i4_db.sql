-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 25 2020 г., 19:07
-- Версия сервера: 5.6.34
-- Версия PHP: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `e25532i4_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_brand`
--

CREATE TABLE `catalog_brand` (
  `id` int(11) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `N` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_detail`
--

CREATE TABLE `catalog_detail` (
  `id` int(10) NOT NULL,
  `detail` varchar(100) NOT NULL,
  `modification` varchar(100) NOT NULL,
  `N` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_model`
--

CREATE TABLE `catalog_model` (
  `id` int(10) NOT NULL,
  `model` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `N` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_modification`
--

CREATE TABLE `catalog_modification` (
  `id` int(10) NOT NULL,
  `modification` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `N` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalog_brand`
--
ALTER TABLE `catalog_brand`
  ADD PRIMARY KEY (`N`);

--
-- Индексы таблицы `catalog_detail`
--
ALTER TABLE `catalog_detail`
  ADD PRIMARY KEY (`N`);

--
-- Индексы таблицы `catalog_model`
--
ALTER TABLE `catalog_model`
  ADD PRIMARY KEY (`N`);

--
-- Индексы таблицы `catalog_modification`
--
ALTER TABLE `catalog_modification`
  ADD PRIMARY KEY (`N`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalog_brand`
--
ALTER TABLE `catalog_brand`
  MODIFY `N` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `catalog_detail`
--
ALTER TABLE `catalog_detail`
  MODIFY `N` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `catalog_model`
--
ALTER TABLE `catalog_model`
  MODIFY `N` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `catalog_modification`
--
ALTER TABLE `catalog_modification`
  MODIFY `N` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
