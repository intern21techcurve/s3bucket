const mysql = require('../config/connection');

create table jobMangement(purchageRequest varchar(50),purchageDescrption varchar(100), cateogry varchar(100)
, location varchar(100), purchageGroup varchar(100), purchageQuantity varchar(100), purchageUnit int,
startDate varchar(50), endDate varchar(50), delivaryDate varchar(50));