-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `accomodation`;
CREATE TABLE `accomodation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int(11) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `surface` int(11) DEFAULT NULL,
  `nb_night` int(11) NOT NULL,
  `electricity` tinyint(1) NOT NULL,
  `piped_water` tinyint(1) NOT NULL,
  `accessibility` tinyint(1) NOT NULL,
  `smokers` tinyint(1) NOT NULL,
  `animals` tinyint(1) NOT NULL,
  `facebook_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_validated` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `slugger` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_520D81B3C54C8C93` (`type_id`),
  KEY `IDX_520D81B3A76ED395` (`user_id`),
  CONSTRAINT `FK_520D81B3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_520D81B3C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `accomodation` (`id`, `type_id`, `user_id`, `title`, `capacity`, `description`, `price`, `adress`, `city`, `country`, `latitude`, `longitude`, `surface`, `nb_night`, `electricity`, `piped_water`, `accessibility`, `smokers`, `animals`, `facebook_link`, `instagram_link`, `is_validated`, `created_at`, `updated_at`, `slugger`) VALUES
(19,	3,	1,	'Cabane Spa Isao',	2,	'La Cabane Spa Isao est un cottage tout confort avec un jacuzzi privatif.\nD\'inspiration japonaise, Isao vous offre des moments de détente et de bien être, au cœur de la forêt !\nTout a été pensé pour que vous passiez un agréable séjour...',	80,	'1 chemin du Corot',	'Ville-sur-Illon',	'France',	NULL,	NULL,	39,	2,	1,	1,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 20:28:15',	'2020-06-11 20:36:06',	'Cabane-Spa-Isao'),
(20,	3,	1,	'La Cabane au fond du bois',	4,	'Située au beau milieu de la nature, cette jolie cabane spacieuse de 35m² est idéale pour une escapade familiale.\nSes grandes baies vitrées vous donnent une vue imprenable sur la nature environnante.\nUn véritable havre de paix qui invite à la sérénité !',	75,	'27 Avenue de la Comète',	'Valence',	'France',	NULL,	NULL,	35,	1,	1,	1,	0,	1,	0,	NULL,	NULL,	1,	'2020-06-11 20:52:40',	'2020-08-10 22:38:12',	'La-Cabane-au-fond-du-bois'),
(23,	3,	1,	'Cabane Champetre',	3,	'La Cabane Champêtre est idéale pour les couples à la recherche de dépaysement. Cette maison en rondins a été construite par les propriétaires à partir d\'arbres des forêts voisines. Très bien isolée grâce à son toit végétalisé, elle convient à nos amoureux de la nature été comme hiver puisqu\'elle assure un climat agréable en toute saison ! Venez profiter d\'un véritable séjour éco-responsable dans un hébergement qui se fond parfaitement dans son environnement !',	55,	'Route de la Vieille Eglise',	'Mimizan',	'France',	NULL,	NULL,	23,	3,	1,	1,	0,	1,	1,	NULL,	NULL,	1,	'2020-06-11 21:32:11',	'2020-06-11 21:38:57',	'Cabane-Champetre'),
(24,	1,	1,	'Tipi \"Ô Campement des Possibles\"',	4,	'Venez dormir comme les indiens !\n\nLe tipi est une tente de forme conique traditionnellement utilisée par certaines tribus nord-amérindiennes des Grandes Plaines. \nVenez apprécier l\'atmosphère unique de cet habitat nomade en famille ou entre amis !',	70,	'15 Chemin de Bize',	'Mailhac',	'France',	NULL,	NULL,	19,	2,	1,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 21:43:28',	'2020-06-11 21:46:45',	'Tipi-O-Campement-des-Possibles'),
(27,	1,	1,	'Le Tipi du Balbuzard',	4,	'En couple, en famille ou entre amis, le Tipi du Balbuzard vous invite à partager un moment atypique dans un habitat traditionnel amérindien.\nVous profiterez d\'un cadre idéal pour un séjour proche de la nature !',	55,	'Le Rouze',	'Condat-en-Combraille',	'France',	NULL,	NULL,	25,	2,	1,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 22:02:10',	'2020-06-11 22:02:59',	'Le-Tipi-du-Balbuzard'),
(28,	1,	1,	'Tipi d\'Indiens',	2,	'Vivez une expérience insolite en famille ou entre amis dans un véritable Tipi d\'Indiens !\nVous pourrez profiter de votre emplacement privatif de 150 m² et admirer le coucher du soleil face à la vue imprenable sur la Vallée du Rhône !',	70,	'10 Route de Saint-Martin',	'Albon',	'France',	NULL,	NULL,	19,	1,	1,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 22:05:18',	'2020-08-10 22:38:23',	'Tipi-d-Indiens'),
(29,	8,	1,	'Barrel Menetou',	2,	'Situé dans le parc du domaine, le tonneau Barrel Menetou vous propose de vivre un séjour détente en famille ou à deux. \nA l\'intérieur, vous retrouverez un lit double Super King size de 190x200. \nCe tonneau peut accueillir au maximum 2 adultes et 1 enfant dormant dans le lit parental',	80,	'Allogny',	'Le Rabillon',	'France',	NULL,	NULL,	8,	2,	0,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 22:11:44',	'2020-06-11 22:11:56',	'Barrel-Menetou'),
(30,	8,	1,	'Gamay: les tonneaux de Bourgogne',	4,	'Portant le nom d’un cépage de renommée internationale, l’oeno-tonneau “Gamay” vous permettra de vivre une expérience authentique en plein cœur d’un domaine viticole. Entouré de vignes et de la nature, le tonneau est l’endroit idéal pour se ressourcer dans un environnement calme et paisible. \n\nOn aime : Un cadre de séjour offrant une grande tranquillité au cœur de la nature.',	90,	'630 Chemin du Grand Bois',	'Lugny',	'France',	NULL,	NULL,	10,	2,	1,	0,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-11 22:15:47',	'2020-06-16 07:49:45',	'Gamay-les-tonneaux-de-Bourgogne'),
(31,	2,	1,	'La love Yourte',	4,	'Cette yourte est un concept unique, la Love Yourte est une yourte triple. Habituellement, les yourtes sont réalisées avec une seule pièce d’habitation où se mêlent les espaces de vie et de nuit. Le domaine a choisi 3 espaces dissociés pour plus d’intimité, salle de bain avec douche hammam et chromothérapie pour vous permettre des longs séjours en ayant de l’espace et de bonnes conditions pour vos vacances.',	75,	'Goutevert',	'Vitrac',	'France',	NULL,	NULL,	40,	4,	1,	1,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-11 22:23:23',	'2020-06-11 22:23:33',	'La-love-Yourte'),
(33,	6,	1,	'La Toue Spa Cabanée',	2,	'La Toue Spa Cabanée était autrefois un bateau traditionnel de pêche dotée d’une cabane, utilisée principalement par les pêcheurs de la Loire.\nSur le ponton, vous trouverez le bain nordique privatif, à accès illimité.',	150,	'Route de Pouillenay,',	'Chassey',	'France',	NULL,	NULL,	18,	4,	1,	1,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-11 22:36:19',	'2020-06-11 22:39:18',	'La-Toue-Spa-Cabanee'),
(34,	6,	1,	'EOS Bateau',	4,	'Eos bateau se trouve amarré au port de plaisance de Strasbourg, à quelques dizaines de mètres du parc de la citadelle.\nProche du tram et des commodités il est situé à moins de 2km du centre ville de Strasbourg, à 8 min en tram de l\'Allemagne à 15 min à pieds du centre ville de Strasbourg et de la Cathédrale .\nIdéal pour vivre un séjour insolite en famille ou entre amis.',	90,	'10 Quai des Belges',	'Strasbourg',	'France',	NULL,	NULL,	13,	2,	1,	1,	1,	0,	0,	NULL,	NULL,	1,	'2020-06-11 22:39:13',	'2020-06-11 22:39:23',	'EOS-Bateau'),
(39,	2,	12,	'Yourte de Montagne de Ratery',	6,	'Cette yourte de montagne offre une vue imprenable sur les sommets alentours.\nEn amoureux, en famille ou entre amis, vous serez enchantés de sa simplicité et de son authenticité !\nLes plus chanceux entendront les loups du Mercantour chanter sous les étoiles !',	50,	'Route du col des Champs',	'Colmars',	'France',	NULL,	NULL,	39,	3,	1,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-15 09:14:37',	'2020-06-15 09:22:01',	'Yourte-de-Montagne-de-Ratery'),
(40,	2,	12,	'La Yourte',	4,	'Dans un cadre champêtre et reposant, la Yourte vous accueillera pour une parenthèse en famille ou entre amis, ou pour un week-end de détente en amoureux. Son mobilier traditionnel mongol vous séduira par le calme et la détente qu\'il suscite.',	60,	'Rue des Marronniers',	'Parigny',	'France',	NULL,	NULL,	20,	2,	0,	0,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-15 09:24:36',	'2020-06-15 09:27:30',	'La-Yourte'),
(41,	2,	12,	'Yourte Moderne',	4,	'Et si vous vous laissiez tenter par le Glamping ? \nCette yourte contemporaine vous propose un séjour cocooning tout en confort. Dans un lieu calme, offrez vous entre amis ou en famille cette yourte cosy et lumineuse de 24m² toute aménagée. Entièrement isolée, elle est construite à partir de matériaux naturels tels que le bois, de la toile de coton...',	68,	'Chemin du Coudounie',	'Lauzerte',	'France',	NULL,	NULL,	24,	7,	0,	0,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-15 09:37:43',	'2020-06-15 09:38:07',	'Yourte-Moderne'),
(43,	4,	12,	'Tente Sibley \"le Rêve\"',	7,	'Vous avez toujours eu envie de vous retrouver au cœur de la nature mais la perte de confort vous fait peur ? \nEssayez le Glamping dans cette tente sibley spacieuse et confortable qui vous promet un retour aux sources tout en préservant un confort optimal, comme à la maison !',	85,	'3 lieu dit Vanlin',	'Berson',	'France',	NULL,	NULL,	46,	3,	1,	1,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-15 09:53:04',	'2020-06-15 09:54:08',	'Tente-Sibley-le-Reve'),
(44,	4,	12,	'Tente Spa Kawaida',	2,	'Venez profiter d\'une expérience insolite à l\'ambiance nature et sauvage, dans un espace entièrement privatisé, entre mer et montagne.\nLe logement a été soigneusement décoré et aménagé pour vous faire vire une expérience unique : le Glamping ! \n\nSur la terrasse, vous pourrez vous relaxer dans le jacuzzi privatif tout en écoutant de la musique grâce à une enceinte bluetooth étanche mise à votre disposition.',	150,	'1956 Route de Toulon',	'Carnoules',	'France',	NULL,	NULL,	48,	1,	1,	1,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-15 10:03:29',	'2020-06-15 10:06:27',	'Tente-Spa-Kawaida'),
(45,	4,	12,	'La Lodge Familiale la Peiriere',	5,	'Dans un cadre naturel et sauvage, la Lodge Familiale la Peiriere est idéale pour une expérience glamping en famille ou entre amis. \nSpacieuse et dotée de nombreux équipements, cet hébergement a été conçu pour rendre votre séjour insolite confortable.\nVous pourrez vous détendre dans le jacuzzi et profiter des services du domaine comme le restaurant ou la piscine.',	100,	'Route de Paziols',	'Tuchan',	'France',	NULL,	NULL,	30,	1,	1,	0,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-15 10:14:57',	'2020-08-10 22:38:30',	'La-Lodge-Familiale-la-Peiriere'),
(46,	4,	12,	'Tente Lodge  Raba',	2,	'Située à l’orée des bois, la tente lodge vous offre une parenthèse enchantée, loin du tumulte bordelais.\nConfortable et élégante, elle tiendra toutes ses promesses pour une nuit magique. \nLe calme qui entoure ces lieux inspirés des campements napoléoniens, ainsi que la nature environnante, vous garantissent une expérience insolite de qualité !',	145,	'35 Rue Rémi Belleau',	'Talence',	'France',	NULL,	NULL,	20,	1,	1,	1,	1,	0,	0,	NULL,	NULL,	1,	'2020-06-15 10:31:14',	'2020-06-16 09:52:45',	'Tente-Lodge-Raba'),
(47,	5,	12,	'Roulotte Isatis',	2,	'La roulotte Isatis est idéale pour un séjour à deux. Décorée avec soin et spacieuse, cette roulotte de 19m² vous fera passer un moment insolite tout en confort. Elle a été fabriquée en Ariège avec des matériaux écologiques.',	70,	'7 Chemin de la Pergue',	'Revel',	'France',	NULL,	NULL,	19,	1,	1,	1,	0,	0,	0,	NULL,	NULL,	1,	'2020-06-15 11:05:06',	'2020-06-15 11:08:04',	'Roulotte-Isatis'),
(48,	5,	12,	'Roulotte du Chateau',	3,	'La Roulotte est idéalement située dans le parc du Château de Plessis-Bourré. \nElle peut accueillir 2 adultes et 1 enfant jusqu\'à 15 ans.\nSon ambiance chaleureuse vous permettra de passer un séjour paisible et insolite !\nCommencez votre journée avec un bon petit déjeuner accompagné d\'une vue magnifique sur le château, classé monument historique.',	100,	'Rue de la Poste',	'Briollay',	'France',	NULL,	NULL,	16,	1,	1,	0,	0,	1,	0,	NULL,	NULL,	1,	'2020-06-15 11:17:11',	'2020-06-15 11:17:23',	'Roulotte-du-Chateau'),
(49,	7,	12,	'Bulle Fleurie',	2,	'Un séjour dans la Bulle Fleurie et vous êtes au summum du romantisme. Aucune fleur sur le lit mais elles sont bien là, tout autour de vous, visibles par la transparence de la bulle !\n\nSelon vos envies, vous pourrez prendre un apéritif ou dîner à l\'ombre des arbres. Terminez alors votre journée par un moment de détente et de contemplation en levant les yeux au ciel, profitez du spectacle qui s\'offre à vous. Admirez le ciel et observez les animaux sauvages qui passent à côté de vous durant la nuit...\n\nAu matin, vous pourrez prendre le petit-déjeuner au lit ou sur la terrasse, toujours entouré par les fleurs !',	120,	'Rue du Bois des Granges',	'Montendre',	'France',	NULL,	NULL,	15,	1,	0,	1,	0,	0,	1,	NULL,	NULL,	1,	'2020-06-15 13:02:56',	'2020-06-15 14:03:44',	'Bulle-Fleurie');

DROP TABLE IF EXISTS `accomodation_extra`;
CREATE TABLE `accomodation_extra` (
  `accomodation_id` int(11) NOT NULL,
  `extra_id` int(11) NOT NULL,
  PRIMARY KEY (`accomodation_id`,`extra_id`),
  KEY `IDX_4A8D3B03FD70509C` (`accomodation_id`),
  KEY `IDX_4A8D3B032B959FC6` (`extra_id`),
  CONSTRAINT `FK_4A8D3B032B959FC6` FOREIGN KEY (`extra_id`) REFERENCES `extra` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4A8D3B03FD70509C` FOREIGN KEY (`accomodation_id`) REFERENCES `accomodation` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `accomodation_extra` (`accomodation_id`, `extra_id`) VALUES
(19,	3),
(19,	4),
(20,	2),
(20,	3),
(23,	2),
(23,	3),
(24,	2),
(27,	2),
(28,	3),
(29,	2),
(30,	2),
(30,	3),
(31,	3),
(33,	3),
(33,	4),
(34,	2),
(34,	3),
(39,	2),
(39,	7),
(40,	2),
(40,	7),
(41,	1),
(41,	2),
(41,	3),
(41,	7),
(41,	8),
(43,	4),
(43,	5),
(43,	6),
(43,	8),
(44,	3),
(44,	5),
(44,	6),
(45,	3),
(45,	5),
(45,	6),
(45,	7),
(46,	3),
(46,	4),
(46,	7),
(47,	2),
(47,	6),
(47,	7),
(48,	2),
(48,	7),
(48,	8),
(49,	2),
(49,	3),
(49,	6);

DROP TABLE IF EXISTS `accomodation_service`;
CREATE TABLE `accomodation_service` (
  `accomodation_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  PRIMARY KEY (`accomodation_id`,`service_id`),
  KEY `IDX_1D80C4D8FD70509C` (`accomodation_id`),
  KEY `IDX_1D80C4D8ED5CA9E6` (`service_id`),
  CONSTRAINT `FK_1D80C4D8ED5CA9E6` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_1D80C4D8FD70509C` FOREIGN KEY (`accomodation_id`) REFERENCES `accomodation` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `accomodation_service` (`accomodation_id`, `service_id`) VALUES
(19,	3),
(19,	4),
(20,	3),
(20,	4),
(20,	5),
(20,	6),
(23,	3),
(23,	4),
(23,	5),
(24,	3),
(27,	3),
(28,	2),
(30,	1),
(30,	2),
(30,	3),
(30,	4),
(30,	5),
(30,	6),
(31,	3),
(31,	4),
(31,	6),
(33,	3),
(33,	4),
(33,	5),
(33,	6),
(34,	3),
(34,	4),
(34,	5),
(39,	3),
(39,	4),
(39,	7),
(40,	1),
(40,	10),
(40,	11),
(41,	1),
(41,	3),
(41,	4),
(41,	7),
(41,	9),
(41,	10),
(43,	2),
(43,	4),
(43,	6),
(43,	7),
(43,	10),
(43,	11),
(43,	13),
(44,	1),
(44,	3),
(44,	4),
(44,	7),
(44,	10),
(44,	12),
(45,	3),
(45,	4),
(45,	7),
(45,	10),
(45,	11),
(46,	6),
(46,	10),
(47,	1),
(47,	3),
(47,	4),
(47,	7),
(48,	3),
(48,	4),
(48,	7),
(48,	13),
(49,	10);

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accomodation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entrance` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `departure` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E00CEDDEFD70509C` (`accomodation_id`),
  KEY `IDX_E00CEDDEA76ED395` (`user_id`),
  CONSTRAINT `FK_E00CEDDEA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_E00CEDDEFD70509C` FOREIGN KEY (`accomodation_id`) REFERENCES `accomodation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `booking` (`id`, `accomodation_id`, `user_id`, `entrance`, `departure`) VALUES
(12,	19,	12,	'20-06-2020',	'26-06-2020'),
(14,	20,	2,	'18-06-2020',	'18-06-2020'),
(18,	19,	8,	'18-06-2020',	'25-06-2020'),
(19,	19,	1,	'18-06-2020',	'25-06-2020');

DROP TABLE IF EXISTS `extra`;
CREATE TABLE `extra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `extra` (`id`, `name`, `icon`, `created_at`, `updated_at`) VALUES
(1,	'Animaux',	'Animaux.png',	'2020-06-10 09:36:37',	NULL),
(2,	'Panier pique-nique',	'Panier-pique-nique.png',	'2020-06-10 09:37:00',	NULL),
(3,	'Petit déjeuner',	'Petit-dejeuner.png',	'2020-06-10 09:37:17',	NULL),
(4,	'Spa',	'Spa.png',	'2020-06-10 09:37:31',	NULL),
(5,	'Massage',	'Massage.png',	'2020-06-14 21:12:14',	NULL),
(6,	'Diner romantique',	'Diner-romantique.png',	'2020-06-14 21:13:48',	NULL),
(7,	'Location de vélo',	'Location-de-velo.png',	'2020-06-14 21:14:39',	NULL),
(8,	'Repas d\'hôte',	'Repas-d-hote.png',	'2020-06-14 21:16:48',	NULL);

DROP TABLE IF EXISTS `migration_versions`;
CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20200525091209',	'2020-06-10 08:54:02'),
('20200525124848',	'2020-06-10 08:54:02'),
('20200527104839',	'2020-06-10 08:54:02'),
('20200528074305',	'2020-06-10 08:54:02'),
('20200531214204',	'2020-06-10 08:54:02'),
('20200610082754',	'2020-06-10 08:54:02');

DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accomodation_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `main` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_16DB4F89FD70509C` (`accomodation_id`),
  CONSTRAINT `FK_16DB4F89FD70509C` FOREIGN KEY (`accomodation_id`) REFERENCES `accomodation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `picture` (`id`, `accomodation_id`, `name`, `main`, `created_at`, `updated_at`) VALUES
(25,	19,	'Cabane-Spa-Isao0.jpg',	1,	'2020-06-11 20:28:15',	NULL),
(26,	19,	'Cabane-Spa-Isao1.jpg',	0,	'2020-06-11 20:28:15',	NULL),
(27,	19,	'Cabane-Spa-Isao2.jpg',	0,	'2020-06-11 20:28:15',	NULL),
(28,	19,	'Cabane-Spa-Isao3.jpg',	0,	'2020-06-11 20:28:15',	NULL),
(29,	19,	'Cabane-Spa-Isao4.jpg',	0,	'2020-06-11 20:28:15',	NULL),
(30,	19,	'Cabane-Spa-Isao5.jpg',	0,	'2020-06-11 20:28:15',	NULL),
(31,	20,	'La-Cabane-au-fond-du-bois0.jpg',	1,	'2020-06-11 20:52:40',	NULL),
(32,	20,	'La-Cabane-au-fond-du-bois1.jpg',	0,	'2020-06-11 20:52:40',	NULL),
(33,	20,	'La-Cabane-au-fond-du-bois2.jpg',	0,	'2020-06-11 20:52:40',	NULL),
(34,	20,	'La-Cabane-au-fond-du-bois3.jpg',	0,	'2020-06-11 20:52:40',	NULL),
(41,	23,	'Cabane-Champetre0.jpg',	1,	'2020-06-11 21:32:11',	NULL),
(42,	23,	'Cabane-Champetre1.jpg',	0,	'2020-06-11 21:32:11',	NULL),
(43,	23,	'Cabane-Champetre2.jpg',	0,	'2020-06-11 21:32:11',	NULL),
(44,	23,	'Cabane-Champetre3.jpg',	0,	'2020-06-11 21:32:11',	NULL),
(45,	23,	'Cabane-Champetre4.jpg',	0,	'2020-06-11 21:32:11',	NULL),
(46,	24,	'Tipi-O-Campement-des-Possibles0.jpg',	1,	'2020-06-11 21:43:29',	NULL),
(47,	24,	'Tipi-O-Campement-des-Possibles1.jpg',	0,	'2020-06-11 21:43:29',	NULL),
(48,	24,	'Tipi-O-Campement-des-Possibles2.jpg',	0,	'2020-06-11 21:43:29',	NULL),
(49,	24,	'Tipi-O-Campement-des-Possibles3.jpg',	0,	'2020-06-11 21:43:29',	NULL),
(54,	27,	'Le-Tipi-du-Balbuzard0.jpg',	1,	'2020-06-11 22:02:11',	NULL),
(55,	27,	'Le-Tipi-du-Balbuzard1.jpg',	0,	'2020-06-11 22:02:11',	NULL),
(56,	27,	'Le-Tipi-du-Balbuzard2.jpg',	0,	'2020-06-11 22:02:11',	NULL),
(57,	27,	'Le-Tipi-du-Balbuzard3.jpg',	0,	'2020-06-11 22:02:11',	NULL),
(63,	29,	'Barrel-Menetou1.jpg',	0,	'2020-06-11 22:11:44',	NULL),
(64,	29,	'Barrel-Menetou2.jpg',	0,	'2020-06-11 22:11:44',	NULL),
(65,	29,	'Barrel-Menetou3.jpg',	0,	'2020-06-11 22:11:44',	NULL),
(66,	29,	'Barrel-Menetou4.jpg',	0,	'2020-06-11 22:11:44',	NULL),
(67,	30,	'Gamay-les-tonneaux-de-Bourgogne0.jpg',	1,	'2020-06-11 22:15:47',	NULL),
(68,	30,	'Gamay-les-tonneaux-de-Bourgogne1.jpg',	0,	'2020-06-11 22:15:47',	NULL),
(69,	30,	'Gamay-les-tonneaux-de-Bourgogne2.jpg',	0,	'2020-06-11 22:15:47',	NULL),
(70,	30,	'Gamay-les-tonneaux-de-Bourgogne3.jpg',	0,	'2020-06-11 22:15:47',	NULL),
(71,	30,	'Gamay-les-tonneaux-de-Bourgogne4.jpg',	0,	'2020-06-11 22:15:47',	NULL),
(72,	31,	'La-love-Yourte0.jpg',	1,	'2020-06-11 22:23:23',	NULL),
(73,	31,	'La-love-Yourte1.jpg',	0,	'2020-06-11 22:23:23',	NULL),
(74,	31,	'La-love-Yourte2.jpg',	0,	'2020-06-11 22:23:23',	NULL),
(75,	31,	'La-love-Yourte3.jpg',	0,	'2020-06-11 22:23:23',	NULL),
(79,	33,	'La-Toue-Spa-Cabanee0.jpg',	1,	'2020-06-11 22:36:19',	NULL),
(80,	33,	'La-Toue-Spa-Cabanee1.jpg',	0,	'2020-06-11 22:36:19',	NULL),
(81,	33,	'La-Toue-Spa-Cabanee2.jpg',	0,	'2020-06-11 22:36:19',	NULL),
(82,	33,	'La-Toue-Spa-Cabanee3.jpg',	0,	'2020-06-11 22:36:19',	NULL),
(83,	33,	'La-Toue-Spa-Cabanee4.jpg',	0,	'2020-06-11 22:36:19',	NULL),
(84,	34,	'EOS-Bateau0.jpg',	1,	'2020-06-11 22:39:13',	NULL),
(85,	34,	'EOS-Bateau1.jpg',	0,	'2020-06-11 22:39:13',	NULL),
(86,	34,	'EOS-Bateau2.jpg',	0,	'2020-06-11 22:39:13',	NULL),
(87,	34,	'EOS-Bateau3.jpg',	0,	'2020-06-11 22:39:13',	NULL),
(88,	34,	'EOS-Bateau4.jpg',	0,	'2020-06-11 22:39:13',	NULL),
(106,	39,	'Yourte-de-Montagne-de-Ratery0.jpg',	1,	'2020-06-15 09:14:37',	NULL),
(107,	39,	'Yourte-de-Montagne-de-Ratery1.jpg',	0,	'2020-06-15 09:14:37',	NULL),
(108,	39,	'Yourte-de-Montagne-de-Ratery2.jpg',	0,	'2020-06-15 09:14:37',	NULL),
(109,	39,	'Yourte-de-Montagne-de-Ratery3.jpg',	0,	'2020-06-15 09:14:37',	NULL),
(110,	40,	'La-Yourte0.jpg',	1,	'2020-06-15 09:24:36',	NULL),
(111,	40,	'La-Yourte1.jpg',	0,	'2020-06-15 09:24:36',	NULL),
(112,	40,	'La-Yourte2.jpg',	0,	'2020-06-15 09:24:36',	NULL),
(113,	40,	'La-Yourte3.jpg',	0,	'2020-06-15 09:24:36',	NULL),
(114,	40,	'La-Yourte4.jpg',	0,	'2020-06-15 09:24:36',	NULL),
(115,	41,	'Yourte-Moderne0.jpg',	1,	'2020-06-15 09:37:43',	NULL),
(116,	41,	'Yourte-Moderne1.jpg',	0,	'2020-06-15 09:37:43',	NULL),
(117,	41,	'Yourte-Moderne2.jpg',	0,	'2020-06-15 09:37:43',	NULL),
(118,	41,	'Yourte-Moderne3.jpg',	0,	'2020-06-15 09:37:43',	NULL),
(125,	43,	'Tente-Sibley-le-Reve0.jpg',	1,	'2020-06-15 09:53:04',	NULL),
(126,	43,	'Tente-Sibley-le-Reve1.jpg',	0,	'2020-06-15 09:53:04',	NULL),
(127,	43,	'Tente-Sibley-le-Reve2.jpg',	0,	'2020-06-15 09:53:04',	NULL),
(128,	43,	'Tente-Sibley-le-Reve3.jpg',	0,	'2020-06-15 09:53:04',	NULL),
(130,	44,	'Tente-Spa-Kawaida0.jpg',	1,	'2020-06-15 10:03:29',	NULL),
(131,	44,	'Tente-Spa-Kawaida1.jpg',	0,	'2020-06-15 10:03:29',	NULL),
(132,	44,	'Tente-Spa-Kawaida2.jpg',	0,	'2020-06-15 10:03:29',	NULL),
(133,	44,	'Tente-Spa-Kawaida3.jpg',	0,	'2020-06-15 10:03:29',	NULL),
(134,	45,	'La-Lodge-Familiale-la-Peiriere0.jpg',	1,	'2020-06-15 10:14:57',	NULL),
(135,	45,	'La-Lodge-Familiale-la-Peiriere1.jpg',	0,	'2020-06-15 10:14:57',	NULL),
(136,	45,	'La-Lodge-Familiale-la-Peiriere2.jpg',	0,	'2020-06-15 10:14:57',	NULL),
(137,	45,	'La-Lodge-Familiale-la-Peiriere3.jpg',	0,	'2020-06-15 10:14:57',	NULL),
(138,	45,	'La-Lodge-Familiale-la-Peiriere4.jpg',	0,	'2020-06-15 10:14:57',	NULL),
(143,	46,	'Tente-Lodge-Raba0.jpg',	0,	'2020-06-15 10:33:55',	NULL),
(144,	46,	'Tente-Lodge-Raba1.jpg',	0,	'2020-06-15 10:33:55',	NULL),
(145,	46,	'Tente-Lodge-Raba2.jpg',	0,	'2020-06-15 10:33:55',	NULL),
(146,	46,	'Tente-Lodge-Raba3.jpg',	0,	'2020-06-15 10:33:55',	NULL),
(147,	47,	'Roulotte-Isatis0.jpg',	1,	'2020-06-15 11:05:06',	NULL),
(148,	47,	'Roulotte-Isatis1.jpg',	0,	'2020-06-15 11:05:06',	NULL),
(150,	47,	'Roulotte-Isatis3.jpg',	0,	'2020-06-15 11:05:06',	NULL),
(151,	47,	'Roulotte-Isatis4.jpg',	0,	'2020-06-15 11:05:06',	NULL),
(152,	47,	'Roulotte-Isatis5.jpg',	0,	'2020-06-15 11:05:06',	NULL),
(153,	48,	'Roulotte-du-Chateau0.jpg',	1,	'2020-06-15 11:17:11',	NULL),
(154,	48,	'Roulotte-du-Chateau1.jpg',	0,	'2020-06-15 11:17:11',	NULL),
(155,	48,	'Roulotte-du-Chateau2.jpg',	0,	'2020-06-15 11:17:11',	NULL),
(156,	49,	'Bulle-Fleurie0.jpg',	1,	'2020-06-15 13:02:56',	NULL),
(157,	49,	'Bulle-Fleurie1.jpg',	0,	'2020-06-15 13:02:56',	NULL),
(158,	49,	'Bulle-Fleurie2.jpg',	0,	'2020-06-15 13:02:56',	NULL),
(159,	49,	'Bulle-Fleurie3.jpg',	0,	'2020-06-15 13:02:56',	NULL),
(195,	28,	'Tipi-d-Indiens0.jpg',	0,	'2020-07-11 22:50:56',	NULL),
(196,	28,	'Tipi-d-Indiens1.jpg',	0,	'2020-07-11 22:50:56',	NULL),
(197,	28,	'Tipi-d-Indiens2.jpg',	0,	'2020-07-11 22:50:56',	NULL),
(198,	28,	'Tipi-d-Indiens3.jpg',	0,	'2020-07-11 22:50:56',	NULL);

DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `service` (`id`, `name`, `icon`, `created_at`, `updated_at`) VALUES
(1,	'Chauffage',	'Chauffage.png',	'2020-06-10 09:34:36',	NULL),
(2,	'Hamac',	'Hamac.png',	'2020-06-10 09:34:52',	NULL),
(3,	'Micro onde',	'Micro-onde.png',	'2020-06-10 09:35:22',	NULL),
(4,	'Refrigerateur',	'Refrigerateur.png',	'2020-06-10 09:35:39',	NULL),
(5,	'Televison',	'Televison.png',	'2020-06-10 09:35:57',	NULL),
(6,	'Wifi',	'Wifi.png',	'2020-06-10 09:36:17',	NULL),
(7,	'Cafetière',	'Cafetiere.png',	'2020-06-14 20:49:28',	NULL),
(8,	'Four',	'Four.png',	'2020-06-14 20:50:58',	NULL),
(9,	'Chaise bébé',	'Chaise-bebe.png',	'2020-06-14 20:52:49',	NULL),
(10,	'Mobilier de jardin',	'Mobilier-de-jardin.png',	'2020-06-14 20:55:28',	NULL),
(11,	'Barbecue',	'Barbecue.png',	'2020-06-14 20:56:46',	NULL),
(12,	'Spa',	'Spa.png',	'2020-06-15 09:43:54',	NULL),
(13,	'Petit-déjeuner',	'Petit-dejeuner.png',	'2020-06-15 09:50:41',	NULL);

DROP TABLE IF EXISTS `thematic`;
CREATE TABLE `thematic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `thematic` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'Habitat nomade',	'2020-06-10 09:12:56',	NULL),
(2,	'Crusoé',	'2020-06-10 09:13:03',	NULL),
(3,	'Habitat Mobile',	'2020-06-10 09:13:15',	NULL),
(4,	'Inclassable',	'2020-06-10 09:13:23',	NULL);

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thematic_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_8CDE57292395FCED` (`thematic_id`),
  CONSTRAINT `FK_8CDE57292395FCED` FOREIGN KEY (`thematic_id`) REFERENCES `thematic` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `type` (`id`, `thematic_id`, `name`, `description`, `picture`, `icon`, `created_at`, `updated_at`) VALUES
(1,	1,	'Tipi',	'Mettez vous dans la peau des tribus amérindiennes, en vous coupant, le temps d\'un séjour, du superflu du quotidien.',	'Tipi.jpg',	'Tipi.png',	'2020-06-10 09:21:25',	'2020-08-10 21:50:13'),
(2,	1,	'Yourte',	'Envie d\'authenticité ? Faîtes un bond en Asie et vivez à la façon des Mongols',	'Yourte.jpg',	'Yourte.png',	'2020-06-10 09:22:49',	'2020-08-10 21:50:26'),
(3,	2,	'Cabane',	'Sur terre ou dans les airs, venez visiter nos cabanes et réalisez vos rêves d’enfant.',	'Cabane.jpg',	'Cabane.png',	'2020-06-10 09:27:48',	'2020-08-10 21:50:39'),
(4,	1,	'Tente-lodge',	'Une invitation au voyage avec un parfum d’aventure',	'Tente-lodge.jpg',	'Tente-lodge.png',	'2020-06-10 09:29:00',	'2020-08-10 21:51:19'),
(5,	3,	'Roulotte',	'Tzigane, Irlandaise ou même Gitane... à vous de choisir votre style.',	'Roulotte.jpg',	'Roulotte.png',	'2020-06-10 09:29:38',	'2020-06-15 10:45:54'),
(6,	3,	'Bateau',	'Laissez vous bercer par les flots et passez une nuit sur l’un de nos bateaux.',	'Bateau.jpg',	'Bateau.png',	'2020-06-10 09:30:39',	'2020-08-10 21:51:39'),
(7,	4,	'Bulle',	'Passer une nuit à la belle étoile n\'a jamais aussi bien porté son nom.',	'Bulle.jpg',	'Bulle.png',	'2020-06-10 09:30:39',	'2020-06-15 11:46:49'),
(8,	4,	'Tonneau',	'Les grands fûts n’attendent que vous  pour un dépaysement total !',	'Tonneau.jpg',	'Tonneau.png',	'2020-06-10 09:32:04',	'2020-08-10 21:51:54');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `email`, `password`, `pseudo`, `firstname`, `lastname`, `avatar`, `created_at`, `updated_at`, `roles`) VALUES
(1,	'admin@atipik.io',	'$argon2id$v=19$m=65536,t=4,p=1$uYeqBXQuylGS47toRS6xlQ$WoSHzmsvSp5tNWyQ+LWIk/SDmKLaoAtYztgyBUyYOag',	'Administrateur',	'Elisa',	'Bracco',	'User1.png',	'2020-06-10 09:10:18',	'2020-06-15 08:51:17',	'[\"ROLE_ADMIN\"]'),
(2,	'kevin@atipik.io',	'$argon2id$v=19$m=65536,t=4,p=1$wqTmLDF1qARAEtksPdRyMA$ptT8wH5G2+Mo8DIg/kX1NHgNFEEI+p+G/3s1zmkRnao',	'Kevin',	'Kevin',	'Lanvin',	'avatar.png',	'2020-06-10 09:39:34',	'2020-06-16 10:27:27',	'[\"ROLE_ADMIN\"]'),
(8,	'mickaelbesthelper@gmail.com',	'$argon2id$v=19$m=65536,t=4,p=1$G4zCwqch3OQI3Dk9P2sEIg$NAkmWa/6FSwDVkTfJtDdfI6Z3nIQDTWMf7yI7apMCuw',	'Micka',	'Mickael',	'Crusoe',	'avatar.png',	'2020-06-11 20:02:35',	'2020-06-16 15:12:16',	'[]'),
(10,	'charlesbesthelper@gmail.com',	'$argon2id$v=19$m=65536,t=4,p=1$8fwJaxnOj5FV2NYIIPMIOA$HgtFh1HLGTmuG55OpghzZu4lifHMW3GZ/DiLDd/y69o',	'Charles',	'Charles',	'Oclock',	'avatar.png',	'2020-06-11 20:21:09',	'2020-06-11 20:21:57',	'[]'),
(12,	'alexandra@atipik.io',	'$argon2id$v=19$m=65536,t=4,p=1$q5W0NniU74RoXp7WRA1uxw$URR4GFyPZ1I9wt5CvbLhgCKKFdpYoMK+B6LtxTZlovA',	'Alex',	'Alexandra',	'Pelletier',	'avatar.png',	'2020-06-15 08:53:21',	'2020-06-15 08:54:42',	'[\"ROLE_ADMIN\"]'),
(13,	'virginie@atipik.io',	'$argon2id$v=19$m=65536,t=4,p=1$cqfMEaSOuOzfn9VsgPJ5ew$r150KJ1ESodQbSfudWofiXNfNWkQe5rLohahoeN4aZI',	'Virginie',	'Virginie',	'Givelet',	'avatar.png',	'2020-06-15 12:01:30',	NULL,	'[\"ROLE_ADMIN\"]');

-- 2020-08-12 21:01:47