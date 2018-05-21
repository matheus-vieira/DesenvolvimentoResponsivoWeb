# [MySQL](https://www.mysql.com/)

MySQL é um SGBD (Sistema Gerenciador de Banco de Dados) open-source, geralmente instalado como parte do popular LAMP (Linux, Apache, MySQL, PHP/Python/Perl).

Utiliza um banco de dados relacional e o SQL (Structured Query Language)) para gerenciar seus dados.

# Instalando

No Ubuntu 16.04, somente a última versão do MySQL é incluída no repositório de pacotes do APT por padrão.

No momento dessa instalação instalaremos a versão 5.7

Para instalar o banco de dados necessitaremos dos seguintes passos:

1. ## Verifique se o sistema está atualizado:

```bash
sudo apt-get update
```

2. ## Instale MySQL:

```bash
sudo apt-get install mysql-server
```

Saída

```bash
[sudo] password for mvieira:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  libaio1 libcgi-fast-perl libcgi-pm-perl libencode-locale-perl libevent-core-2.0-5 libfcgi-perl libhtml-parser-perl libhtml-tagset-perl libhtml-template-perl libhttp-date-perl
  libhttp-message-perl libio-html-perl liblwp-mediatypes-perl liburi-perl mysql-client-5.7 mysql-client-core-5.7 mysql-common mysql-server-5.7 mysql-server-core-5.7
Suggested packages:
  libdata-dump-perl libipc-sharedcache-perl libwww-perl mailx tinyca
The following NEW packages will be installed:
  libaio1 libcgi-fast-perl libcgi-pm-perl libencode-locale-perl libevent-core-2.0-5 libfcgi-perl libhtml-parser-perl libhtml-tagset-perl libhtml-template-perl libhttp-date-perl
  libhttp-message-perl libio-html-perl liblwp-mediatypes-perl liburi-perl mysql-client-5.7 mysql-client-core-5.7 mysql-common mysql-server mysql-server-5.7 mysql-server-core-5.7
0 upgraded, 20 newly installed, 0 to remove and 4 not upgraded.
Need to get 18.7 MB of archives.
After this operation, 162 MB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Pressione `y` para continuar

```bash
Get:1 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-common all 5.7.22-0ubuntu0.16.04.1 [15.4 kB]
Get:2 http://archive.ubuntu.com/ubuntu xenial/main amd64 libaio1 amd64 0.3.110-2 [6,356 B]
Get:3 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-client-core-5.7 amd64 5.7.22-0ubuntu0.16.04.1 [6,425 kB]
2% [3 mysql-client-core-5.7 3,811 B/6,425 kB 0%][sudo] password for mvieira:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
2% [3 mysql-client-core-5.7 91.0 kB/6,425 kB 1%]ml-template-perl libhttp-date-perl5 libfcgi-perl libhtml-parser-perl libhtml-tagset-perl libht
  libhttp-message-perl libio-html-perl liblwp-mediatypes-perl liburi-perl mysql-client-5.7 mysql-client-core-5.7 mysql-common mysql-server-5.7 mysql-server-core-5.7
Suggested packages:
  libdata-dump-perl libipc-sharedcache-perl libwww-perl mailx tinyca
The following NEW packages will be installed:
  libaio1 libcgi-fast-perl libcgi-pm-perl libencode-locale-perl libevent-core-2.0-5 libfcgi-perl libhtml-parser-perl libhtml-tagset-perl libhtml-template-perl libhttp-date-perl
  libhttp-message-perl libio-html-perl liblwp-mediatypes-perl liburi-perl mysql-client-5.7 mysql-client-core-5.7 mysql-common mysql-server mysql-server-5.7 mysql-server-core-5.7
0 upgraded, 20 newly installed, 0 to remove and 4 not upgraded.
Need to get 18.7 MB of archives.
After this operation, 162 MB of additional disk space will be used.
Get:4 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-client-5.7 amd64 5.7.22-0ubuntu0.16.04.1 [1,673 kB]
Get:5 http://179.184.208.141:80/data/0130ae7f80b35389/archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-server-core-5.7 amd64 5.7.22-0ubuntu0.16.04.1 [7,268 kB]
Get:6 http://179.184.208.141:80/data/0130ea7f5ab44aa3/archive.ubuntu.com/ubuntu xenial-updates/main amd64 libevent-core-2.0-5 amd64 2.0.21-stable-2ubuntu0.16.04.1 [70.6 kB]
Get:7 http://179.184.208.141:80/data/0130507f37b577c5/archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-server-5.7 amd64 5.7.22-0ubuntu0.16.04.1 [2,583 kB]
Get:8 http://179.184.208.141:80/data/0130f47f35b6dddd/archive.ubuntu.com/ubuntu xenial/main amd64 libhtml-tagset-perl all 3.20-2 [13.5 kB]
Get:9 http://179.184.208.141:80/data/0130e47fdeb8c528/archive.ubuntu.com/ubuntu xenial/main amd64 liburi-perl all 1.71-1 [76.9 kB]
Get:10 http://179.184.208.141:80/data/0130fa7f87b96b45/archive.ubuntu.com/ubuntu xenial/main amd64 libhtml-parser-perl amd64 3.72-1 [86.1 kB]
Get:11 http://179.184.208.141:80/data/0130b27f8dba3c5f/archive.ubuntu.com/ubuntu xenial/main amd64 libcgi-pm-perl all 4.26-1 [185 kB]
Get:12 http://179.184.208.141:80/data/0130fa7fe5bb5183/archive.ubuntu.com/ubuntu xenial/main amd64 libfcgi-perl amd64 0.77-1build1 [32.3 kB]
Get:13 http://179.184.208.141:80/pdata/0130cb7f36bcbaaa/archive.ubuntu.com/ubuntu xenial/main amd64 libcgi-fast-perl all 1:2.10-1 [10.2 kB]
Get:14 http://179.184.208.141:80/data/01300c7fa4bd6ec3/archive.ubuntu.com/ubuntu xenial/main amd64 libencode-locale-perl all 1.05-1 [12.3 kB]
Get:15 http://179.184.208.141:80/data/01307d7febbe63e9/archive.ubuntu.com/ubuntu xenial/main amd64 libhtml-template-perl all 2.95-2 [60.4 kB]
Get:16 http://179.184.208.141:80/data/0130827fc3c01721/archive.ubuntu.com/ubuntu xenial/main amd64 libhttp-date-perl all 6.02-1 [10.4 kB]
Get:17 http://179.184.208.141:80/data/0130797f56c15040/archive.ubuntu.com/ubuntu xenial/main amd64 libio-html-perl all 1.001-1 [14.9 kB]
Get:18 http://179.184.208.141:80/data/0130d27f82c2fd54/archive.ubuntu.com/ubuntu xenial/main amd64 liblwp-mediatypes-perl all 6.02-1 [21.7 kB]
Get:19 http://179.184.208.141:80/data/0130f77f36c32a69/archive.ubuntu.com/ubuntu xenial/main amd64 libhttp-message-perl all 6.11-1 [74.3 kB]
Get:20 http://179.184.208.141:80/data/01300b7f07c4046e/archive.ubuntu.com/ubuntu xenial-updates/main amd64 mysql-server all 5.7.22-0ubuntu0.16.04.1 [10.8 kB]
Fetched 18.7 MB in 38s (479 kB/s)
Preconfiguring packages ...
Selecting previously unselected package mysql-common.
(Reading database ... 34677 files and directories currently installed.)
Preparing to unpack .../mysql-common_5.7.22-0ubuntu0.16.04.1_all.deb ...
Unpacking mysql-common (5.7.22-0ubuntu0.16.04.1) ...
Selecting previously unselected package libaio1:amd64.
Preparing to unpack .../libaio1_0.3.110-2_amd64.deb ...
Unpacking libaio1:amd64 (0.3.110-2) ...
Selecting previously unselected package mysql-client-core-5.7.
Preparing to unpack .../mysql-client-core-5.7_5.7.22-0ubuntu0.16.04.1_amd64.deb ...
Unpacking mysql-client-core-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Selecting previously unselected package mysql-client-5.7.
Preparing to unpack .../mysql-client-5.7_5.7.22-0ubuntu0.16.04.1_amd64.deb ...
Unpacking mysql-client-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Selecting previously unselected package mysql-server-core-5.7.
Preparing to unpack .../mysql-server-core-5.7_5.7.22-0ubuntu0.16.04.1_amd64.deb ...
Unpacking mysql-server-core-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Selecting previously unselected package libevent-core-2.0-5:amd64.
Preparing to unpack .../libevent-core-2.0-5_2.0.21-stable-2ubuntu0.16.04.1_amd64.deb ...
Unpacking libevent-core-2.0-5:amd64 (2.0.21-stable-2ubuntu0.16.04.1) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for man-db (2.7.5-1) ...
Setting up mysql-common (5.7.22-0ubuntu0.16.04.1) ...
update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Selecting previously unselected package mysql-server-5.7.
(Reading database ... 34845 files and directories currently installed.)
Preparing to unpack .../mysql-server-5.7_5.7.22-0ubuntu0.16.04.1_amd64.deb ...
Unpacking mysql-server-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Selecting previously unselected package libhtml-tagset-perl.
Preparing to unpack .../libhtml-tagset-perl_3.20-2_all.deb ...
Unpacking libhtml-tagset-perl (3.20-2) ...
Selecting previously unselected package liburi-perl.
Preparing to unpack .../liburi-perl_1.71-1_all.deb ...
Unpacking liburi-perl (1.71-1) ...
Selecting previously unselected package libhtml-parser-perl.
Preparing to unpack .../libhtml-parser-perl_3.72-1_amd64.deb ...
Unpacking libhtml-parser-perl (3.72-1) ...
Selecting previously unselected package libcgi-pm-perl.
Preparing to unpack .../libcgi-pm-perl_4.26-1_all.deb ...
Unpacking libcgi-pm-perl (4.26-1) ...
Selecting previously unselected package libfcgi-perl.
Preparing to unpack .../libfcgi-perl_0.77-1build1_amd64.deb ...
Unpacking libfcgi-perl (0.77-1build1) ...
Selecting previously unselected package libcgi-fast-perl.
Preparing to unpack .../libcgi-fast-perl_1%3a2.10-1_all.deb ...
Unpacking libcgi-fast-perl (1:2.10-1) ...
Selecting previously unselected package libencode-locale-perl.
Preparing to unpack .../libencode-locale-perl_1.05-1_all.deb ...
Unpacking libencode-locale-perl (1.05-1) ...
Selecting previously unselected package libhtml-template-perl.
Preparing to unpack .../libhtml-template-perl_2.95-2_all.deb ...
Unpacking libhtml-template-perl (2.95-2) ...
Selecting previously unselected package libhttp-date-perl.
Preparing to unpack .../libhttp-date-perl_6.02-1_all.deb ...
Unpacking libhttp-date-perl (6.02-1) ...
Selecting previously unselected package libio-html-perl.
Preparing to unpack .../libio-html-perl_1.001-1_all.deb ...
Unpacking libio-html-perl (1.001-1) ...
Selecting previously unselected package liblwp-mediatypes-perl.
Preparing to unpack .../liblwp-mediatypes-perl_6.02-1_all.deb ...
Unpacking liblwp-mediatypes-perl (6.02-1) ...
Selecting previously unselected package libhttp-message-perl.
Preparing to unpack .../libhttp-message-perl_6.11-1_all.deb ...
Unpacking libhttp-message-perl (6.11-1) ...
Selecting previously unselected package mysql-server.
Preparing to unpack .../mysql-server_5.7.22-0ubuntu0.16.04.1_all.deb ...
Unpacking mysql-server (5.7.22-0ubuntu0.16.04.1) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Processing triggers for systemd (229-4ubuntu21.2) ...
Setting up libaio1:amd64 (0.3.110-2) ...
Setting up mysql-client-core-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Setting up mysql-client-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Setting up mysql-server-core-5.7 (5.7.22-0ubuntu0.16.04.1) ...
Setting up libevent-core-2.0-5:amd64 (2.0.21-stable-2ubuntu0.16.04.1) ...
Setting up mysql-server-5.7 (5.7.22-0ubuntu0.16.04.1) ...
invoke-rc.d: could not determine current runlevel
 * Stopping MySQL database server mysqld                                                                                                                                            [ OK ]
update-alternatives: using /etc/mysql/mysql.cnf to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Renaming removed key_buffer and myisam-recover options (if present)
invoke-rc.d: could not determine current runlevel
Setting up libhtml-tagset-perl (3.20-2) ...
Setting up liburi-perl (1.71-1) ...
Setting up libhtml-parser-perl (3.72-1) ...
Setting up libcgi-pm-perl (4.26-1) ...
Setting up libfcgi-perl (0.77-1build1) ...
Setting up libcgi-fast-perl (1:2.10-1) ...
Setting up libencode-locale-perl (1.05-1) ...
Setting up libhtml-template-perl (2.95-2) ...
Setting up libhttp-date-perl (6.02-1) ...
Setting up libio-html-perl (1.001-1) ...
Setting up liblwp-mediatypes-perl (6.02-1) ...
Setting up libhttp-message-perl (6.11-1) ...
Setting up mysql-server (5.7.22-0ubuntu0.16.04.1) ...
Processing triggers for libc-bin (2.23-0ubuntu10) ...
Processing triggers for systemd (229-4ubuntu21.2) ...
Processing triggers for ureadahead (0.100.0-19) ...
```

Ao final inicie o MySQL com o comando:

```bash
sudo /etc/init.d/mysql start
```

Saída

```bash
 * Starting MySQL database server mysqld
No directory, logging in with HOME=/
                                                                                                                                                                                    [ OK ]
```

```bash
mysql --version
```

Saída

```bash
mysql  Ver 14.14 Distrib 5.7.22, for Linux (x86_64) using  EditLine wrapper
```

3. ## Configurando o MySQL

```bash
mysql_secure_installation
```

Saída

```bash
Securing the MySQL server deployment.

Enter password for user root:
```

Digite a senha que havia criado

```bash
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No:
```
Você pode pressionar Y e, em seguida, ENTER para aceitar os padrões para todas as perguntas subsequentes, com exceção do que pergunta se você deseja alterar a senha de root

```bash
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:
```

Digite `0`, como estamos criando para estudo não necessitamos de uma senha tão segura

Saída

```bash
Using existing password for root.

Estimated strength of the password: 100
Change the password for root ? ((Press y|Y for Yes, any other key for No) : 
```

Digite `no`

```bash
 ... skipping.
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) :
```

Digite `y`

```bash
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) :
```

Digite `y`

```bash
Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) :
```

Digite `y`

```bash
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) :
```

Digite `y`

```bash
Success.

All done!
```

Pronto, tudo configurado

Reinicie o MySQL

```bash
sudo /etc/init.d/mysql restart
[sudo] password for mvieira:
 * Stopping MySQL database server mysqld                                                                                                                                            [ OK ]
 * Starting MySQL database server mysqld
No directory, logging in with HOME=/
                                                                                                                                                                                    [ OK ]
```

Verificando o status do serviço MySQL

```bash
mysqladmin -p -u root version
Enter password:
mysqladmin  Ver 8.42 Distrib 5.7.22, for Linux on x86_64
Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Server version          5.7.22-0ubuntu0.16.04.1
Protocol version        10
Connection              Localhost via UNIX socket
UNIX socket             /var/run/mysqld/mysqld.sock
Uptime:                 14 min 49 sec

Threads: 1  Questions: 14  Slow queries: 0  Opens: 107  Flush tables: 1  Open tables: 26  Queries per second avg: 0.015
```

Agora precisamos instalar o driver de acesso ao MySQL no php

```bash
sudo apt-get install php-mysql
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  php7.0-mysql
The following NEW packages will be installed:
  php-mysql php7.0-mysql
0 upgraded, 2 newly installed, 0 to remove and 4 not upgraded.
Need to get 126 kB of archives.
After this operation, 497 kB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Pression `y` e aguarde o término da instalação

[Criando um banco de dados]({{ 'php/database/criando-banco' | relative_url }})