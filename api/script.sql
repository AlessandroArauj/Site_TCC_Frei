use infocdb;

drop table TB_CADASTRO_USER;
drop table TB_CADASTRO_ADM;
drop table TB_LOGIN_USER;
drop table TB_PRODUTO;
drop table TB_CATEGORIA;
drop table TB_PEDIDO;
drop table TB_PEDIDO_ITEM;
drop table TB_CLIENTE;
drop table TB_ENDERECO;
drop table TB_MARCAS;
drop table TB_PREFE_PRODUTO;
drop table TB_CARTOES;
drop table TB_FORMAS_PAGAMENTO;
drop table TB_AVALIACAO;
drop table TB_CARRINHO;


USE TOTH_Music;

show tables from TOTH_Music;


CREATE TABLE TB_CADASTRO_USER (
	ID_USER int primary key auto_increment,
	NM_NOME_COMP varchar(200) NOT NULL,
	DT_NASC DATE NOT NULL,
	DS_TELEFONE varchar(400) NOT NULL,
	DS_CPF varchar(400) NOT NULL,
	DS_ENDEREÇO varchar(400) NOT NULL,
	DS_CIDADE varchar(400) NOT NULL,
	DS_EMAIL varchar(400) NOT NULL,
	ds_SENHA varchar(400) NOT NULL
);


CREATE TABLE TB_CADASTRO_ADM (
	ID_ADM int PRIMARY KEY auto_increment,
    NM_NOME_COMP varchar(200) NOT NULL,
    DS_EMAIL VARCHAR(400),
    DS_SENHA VARCHAR(400)


);


CREATE TABLE TB_CATEGORIA(
	ID_CATEGORIA INT PRIMARY KEY auto_increment,
    NM_CATEGORIA varchar(400)
);


CREATE TABLE TB_ENDERECO(
	ID_ENDERECO int PRIMARY KEY auto_increment,
	DS_CEP varchar(400),
	DS_ENDERECO varchar(400),
	NR_ENDERECO varchar(400),
	DS_CIDADE varchar(400)

);


CREATE TABLE TB_MARCAS(
	ID_MARCAS INT PRIMARY KEY auto_increment,
    NM_MARCA varchar(400)

);


CREATE TABLE TB_PRODUTO(
	ID_INSTRUMENTOS INT PRIMARY KEY auto_increment,
	ID_MARCAS INT,
	ID_CATEGORIA INT,
	NM_PRODUTO varchar(400),
	NR_PRECO decimal(10, 2),
	NR_PRECO_PROMOCIONAL decimal(10, 2),
	BT_DESTAQUE boolean,
	BT_PROMOCAO boolean,
	BT_DISPONIVEL boolean,
	QTD_ESTOQUE int,
	DS_DETALHES varchar(500),
    IMG_PRODUTO varchar(500),
    
    foreign key (ID_MARCAS) references TB_MARCAS (ID_MARCAS),
    foreign key (ID_CATEGORIA) REFERENCES TB_CATEGORIA (ID_CATEGORIA)

);


CREATE TABLE TB_PEDIDO(
	ID_PEDIDO int PRIMARY KEY auto_increment,
	ID_USER int,
	ID_ENDERECO int,
	DS_NOTA_FISCAL varchar(400),
	TP_FORMA_PAG varchar(400),
	QTD_PARCELAS int,
	DT_PEDIDO datetime,
	DS_SITUACAO varchar(400),
    foreign key (ID_USER) references TB_CADASTRO_USER (ID_USER),
    foreign key (ID_ENDERECO) REFERENCES TB_ENDERECO (ID_ENDERECO)


);


CREATE TABLE TB_PEDIDO_ITEM(
	ID_PEDIDO_ITEM int PRIMARY KEY auto_increment,
	ID_PEDIDO int,
	ID_INSTRUMENTOS int,
	QTD_ITENS int,
    foreign key (ID_PEDIDO) REFERENCES TB_PEDIDO (ID_PEDIDO),
    foreign key (ID_INSTRUMENTOS) REFERENCES TB_PRODUTO (ID_INSTRUMENTOS)

);





CREATE TABLE TB_PREFE_PRODUTO(
	ID_PREF_PRODUTO int PRIMARY KEY auto_increment,
    ID_USER INT,
    ID_INSTRUMENTOS INT,
    foreign key (ID_INSTRUMENTOS) REFERENCES TB_PRODUTO (ID_INSTRUMENTOS),
    foreign key (ID_USER) REFERENCES TB_CADASTRO_USER (ID_USER)
    
);

CREATE TABLE TB_CARTOES(
	ID_CARTOES int PRIMARY KEY auto_increment,
	ID_USER int,
	NM_TITULAR varchar(200),
	DS_CARTAO varchar(200),
	foreign key (ID_USER) REFERENCES TB_CADASTRO_USER (ID_USER)

);

CREATE TABLE TB_FORMAS_PAGAMENTO(
	ID_FORMAS_PAGAMENTO int primary KEY auto_increment,
	ID_CARTOES int,
	TP_FORMA_PAG varchar(200),
    foreign key (ID_CARTOES) REFERENCES TB_CARTOES (ID_CARTOES)

);

CREATE TABLE TB_AVALIACAO(
	ID_AVALIACAO int PRIMARY KEY auto_increment,
	ID_USER int,
	ID_INSTRUMENTOS int,
	VL_AVALIACAO int,
	DS_COMENTARIO varchar(600),
    foreign key (ID_USER) REFERENCES TB_CADASTRO_USER (ID_USER),
    foreign key (ID_INSTRUMENTOS) REFERENCES TB_PRODUTO (ID_INSTRUMENTOS)


);


CREATE TABLE TB_CARRINHO(
	ID_CARRINHO int PRIMARY KEY auto_increment,
	ID_USER int,
	ID_INSTRUMENTOS int,
	QTD_PRODUTO int,
    foreign key (ID_USER) REFERENCES TB_CADASTRO_USER (ID_USER),
    foreign key (ID_INSTRUMENTOS) REFERENCES TB_PRODUTO (ID_INSTRUMENTOS)


);


insert TB_MARCAS (NM_MARCA)
		values 	('Yamaha'),
				('Fender'),
                ('Gibson'),
                ('Steinway & Sons e Selmer'),
                ('Boss');


insert TB_CATEGORIA (NM_CATEGORIA)
		values ('Audios'), 
			   ('Cordas'), 
               ('Teclas'), 
               ('Bateria e Percussão'), 
               ('Sopro');                


insert into TB_CADASTRO_ADM (NM_NOME_COMP ,DS_EMAIL, DS_SENHA)
            values      ('Denis Dias' ,'denistodias@hotmail.com', '2308@Admin'),
                        ('Diogo Alves', 'tavaresfalcon5@gmail.com', '2512@Admin'),
                        ('Thiago Almeida', 'thisouza640@gmail.com', '7362@Admin'),
                        ('Alessandro Araujo', 'araujobr1903@gmail.com', '1903@Admin');


select * from TB_PRODUTO;


