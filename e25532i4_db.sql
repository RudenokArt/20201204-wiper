-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 24 2020 г., 20:00
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
  `id` int(10) NOT NULL,
  `brand` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_brand`
--

INSERT INTO `catalog_brand` (`id`, `brand`) VALUES
(4745540, 'BMW2'),
(6256147, 'Audi');

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_detail`
--

CREATE TABLE `catalog_detail` (
  `id` int(10) NOT NULL,
  `detail` varchar(100) NOT NULL,
  `modification` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_model`
--

CREATE TABLE `catalog_model` (
  `id` int(11) NOT NULL,
  `model` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_model`
--

INSERT INTO `catalog_model` (`id`, `model`, `brand`) VALUES
(600137, 'A80;1985-2000', '6256147'),
(3789399, 'A100;1980-2005', '6256147'),
(4996638, '2.0', '4745540'),
(7709303, '2.0', ''),
(9280864, '2.5', '4745540');

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_modification`
--

CREATE TABLE `catalog_modification` (
  `id` int(10) NOT NULL,
  `modification` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_modification`
--

INSERT INTO `catalog_modification` (`id`, `modification`, `model`) VALUES
(5107337, 'v12;2.5;250', '3789399'),
(6385373, 'v8;2.0;180лс', '3789399');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalog_brand`
--
ALTER TABLE `catalog_brand`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `catalog_detail`
--
ALTER TABLE `catalog_detail`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `catalog_model`
--
ALTER TABLE `catalog_model`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `catalog_modification`
--
ALTER TABLE `catalog_modification`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalog_brand`
--
ALTER TABLE `catalog_brand`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6256148;

--
-- AUTO_INCREMENT для таблицы `catalog_detail`
--
ALTER TABLE `catalog_detail`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `catalog_model`
--
ALTER TABLE `catalog_model`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9280865;

--
-- AUTO_INCREMENT для таблицы `catalog_modification`
--
ALTER TABLE `catalog_modification`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6385374;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
