/*Cria a base de dados*/
create database eCommerce;

/*Utiliza a base de dados*/
use eCommerce;

/*Cria uma tabela de clientes*/
create table clients_ecommerce(
	id_client int not null auto_increment,
    ds_name varchar(255),
    nm_cpf int,
    fl_status enum('A','I') default 'A',
    dt_created_at datetime default current_timestamp,
    primary key(id_client)
);

/*Cria uma tabela de produtos*/
create table products_ecommerce(
	id_product int not null auto_increment,
    ds_name varchar(120) not null,
    ds_description varchar(255),
    nm_value float not null,
    ds_brand varchar(120),
    fl_status enum('A','I') default 'A',
    dt_created_at datetime default current_timestamp,
    primary key(id_product)
);

/*Cria uma tabela do carrinho de compras do ecommerce*/
create table cart(
	id_cart int not null auto_increment,
    id_client int,
    id_product int,
    primary key(id_cart),
    foreign key(id_client) references clients_ecommerce(id_client),
    foreign key(id_product) references products_ecommerce(id_product)
);

/*Exibe as tabelas*/
select*from clients_ecommerce;
select*from products_ecommerce;
select c.id_client, p.id_product from clients_ecommerce c, products_ecommerce p where c.id_client = p.id_product;

insert into clients_ecommerce(ds_name, nm_cpf) values('Suarez',0280967709);
insert into products_ecommerce(ds_name, ds_description, nm_value, ds_brand) values('Geladeira','Geladeira 5000 mil litros','5999', 'Brastemp');