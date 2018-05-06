# Instalar o PHP

Estamos seguindo a instalação baseando em um Ubuntu. Para mais informações consulte o [Manual do PHP](https://secure.php.net/manual/pt_BR/install.php)

Primeiro verificamos se o PHP está instalado

```bash
php -v
```

Saída

```bash
The program 'php' can be found in the following packages:
 * php7.0-cli
 * hhvm
Try: sudo apt install <selected package>
```

```bash
sudo apt install php7.0-cli
```

Saída

```bash
[sudo] password for opet:
opet
Sorry, try again.
[sudo] password for opet:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  libfreetype6
Use 'sudo apt autoremove' to remove it.
The following additional packages will be installed:
  php-common php7.0-common php7.0-json php7.0-opcache php7.0-readline
Suggested packages:
  php-pear
The following NEW packages will be installed:
  php-common php7.0-cli php7.0-common php7.0-json php7.0-opcache php7.0-readline
0 upgraded, 6 newly installed, 0 to remove and 107 not upgraded.
Need to get 2,244 kB of archives.
After this operation, 9,627 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php-common all 1:35ubuntu6.1 [10.8 kB]
Err:2 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php7.0-common amd64 7.0.25-0ubuntu0.16.04.1
  404  Not Found [IP: 91.189.88.161 80]
Err:3 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php7.0-json amd64 7.0.25-0ubuntu0.16.04.1
  404  Not Found [IP: 91.189.88.161 80]
Err:4 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php7.0-opcache amd64 7.0.25-0ubuntu0.16.04.1
  404  Not Found [IP: 91.189.88.161 80]
Err:5 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php7.0-readline amd64 7.0.25-0ubuntu0.16.04.1
  404  Not Found [IP: 91.189.88.161 80]
Err:6 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 php7.0-cli amd64 7.0.25-0ubuntu0.16.04.1
  404  Not Found [IP: 91.189.88.161 80]
Fetched 10.8 kB in 1s (6,754 B/s)
E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/p/php7.0/php7.0-common_7.0.25-0ubuntu0.16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.161 80]

E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/p/php7.0/php7.0-json_7.0.25-0ubuntu0.16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.161 80]

E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/p/php7.0/php7.0-opcache_7.0.25-0ubuntu0.16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.161 80]

E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/p/php7.0/php7.0-readline_7.0.25-0ubuntu0.16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.161 80]

E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/p/php7.0/php7.0-cli_7.0.25-0ubuntu0.16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.161 80]

E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
```

Conforme a útlima linha acima `E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?` precisamos atualizar nossa distribuição do linux. Rode o comando abaixo

```bash
sudo apt-get update --fix-missing
```

Saída

```bash
Get:1 http://security.ubuntu.com/ubuntu xenial-security InRelease [107 kB]
Hit:2 http://archive.ubuntu.com/ubuntu xenial InRelease
Get:3 http://ppa.launchpad.net/git-core/ppa/ubuntu xenial InRelease [17.5 kB]
Get:4 http://archive.ubuntu.com/ubuntu xenial-updates InRelease [109 kB]
Get:5 http://archive.ubuntu.com/ubuntu xenial-backports InRelease [107 kB]
Get:6 http://ppa.launchpad.net/git-core/ppa/ubuntu xenial/main amd64 Packages [3,296 B]
Get:7 http://security.ubuntu.com/ubuntu xenial-security/main amd64 Packages [481 kB]
Get:8 https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial InRelease [2,845 B]
Get:9 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 Packages [767 kB]
Get:10 https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial/main amd64 Packages [36.3 kB]
Get:11 http://security.ubuntu.com/ubuntu xenial-security/main Translation-en [207 kB]
Get:12 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 Packages [344 kB]
Get:13 http://security.ubuntu.com/ubuntu xenial-security/universe Translation-en [129 kB]
Get:14 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 Packages [3,464 B]
Get:15 http://security.ubuntu.com/ubuntu xenial-security/multiverse Translation-en [1,744 B]
Get:16 http://archive.ubuntu.com/ubuntu xenial-updates/main Translation-en [317 kB]
Get:17 http://archive.ubuntu.com/ubuntu xenial-updates/universe amd64 Packages [624 kB]
Get:18 http://archive.ubuntu.com/ubuntu xenial-updates/universe Translation-en [251 kB]
Get:19 http://archive.ubuntu.com/ubuntu xenial-updates/multiverse amd64 Packages [16.4 kB]
Get:20 http://archive.ubuntu.com/ubuntu xenial-updates/multiverse Translation-en [8,344 B]
Get:21 http://archive.ubuntu.com/ubuntu xenial-backports/main amd64 Packages [4,844 B]
Get:22 http://archive.ubuntu.com/ubuntu xenial-backports/universe amd64 Packages [7,400 B]
Get:23 http://archive.ubuntu.com/ubuntu xenial-backports/universe Translation-en [3,996 B]
Fetched 3,549 kB in 11s (296 kB/s)
Reading package lists... Done
```

Agora estamos preparados para instalar o PHP

```bash
sudo apt install php7.0-cli
```

```bash
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following package was automatically installed and is no longer required:
  libfreetype6
Use 'sudo apt autoremove' to remove it.
The following additional packages will be installed:
  php-common php7.0-common php7.0-json php7.0-opcache php7.0-readline
Suggested packages:
  php-pear
The following NEW packages will be installed:
  php-common php7.0-cli php7.0-common php7.0-json php7.0-opcache php7.0-readline
0 upgraded, 6 newly installed, 0 to remove and 137 not upgraded.
Need to get 2,229 kB/2,240 kB of archives.
After this operation, 9,577 kB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Pressione o `y` para continuar e a instalação finalizará

Saída

```bash
Selecting previously unselected package php7.0-common.
Preparing to unpack .../php7.0-common_7.0.28-0ubuntu0.16.04.1_amd64.deb ...
Unpacking php7.0-common (7.0.28-0ubuntu0.16.04.1) ...
Selecting previously unselected package php7.0-json.
Preparing to unpack .../php7.0-json_7.0.28-0ubuntu0.16.04.1_amd64.deb ...
Unpacking php7.0-json (7.0.28-0ubuntu0.16.04.1) ...
Selecting previously unselected package php7.0-opcache.
Preparing to unpack .../php7.0-opcache_7.0.28-0ubuntu0.16.04.1_amd64.deb ...
Unpacking php7.0-opcache (7.0.28-0ubuntu0.16.04.1) ...
Selecting previously unselected package php7.0-readline.
Preparing to unpack .../php7.0-readline_7.0.28-0ubuntu0.16.04.1_amd64.deb ...
Unpacking php7.0-readline (7.0.28-0ubuntu0.16.04.1) ...

Creating config file /etc/php/7.0/mods-available/shmop.ini with new version

Creating config file /etc/php/7.0/mods-available/sockets.ini with new version

Creating config file /etc/php/7.0/mods-available/sysvmsg.ini with new version

Creating config file /etc/php/7.0/mods-available/sysvsem.ini with new version

Creating config file /etc/php/7.0/mods-available/sysvshm.ini with new version

Creating config file /etc/php/7.0/mods-available/tokenizer.ini with new version
Setting up php7.0-json (7.0.28-0ubuntu0.16.04.1) ...

Creating config file /etc/php/7.0/mods-available/json.ini with new version
Setting up php7.0-opcache (7.0.28-0ubuntu0.16.04.1) ...

Creating config file /etc/php/7.0/mods-available/opcache.ini with new version
Setting up php7.0-readline (7.0.28-0ubuntu0.16.04.1) ...

Creating config file /etc/php/7.0/mods-available/readline.ini with new version
Setting up php7.0-cli (7.0.28-0ubuntu0.16.04.1) ...
update-alternatives: using /usr/bin/php7.0 to provide /usr/bin/php (php) in auto mode
update-alternatives: using /usr/bin/phar7.0 to provide /usr/bin/phar (phar) in auto mode
update-alternatives: using /usr/bin/phar.phar7.0 to provide /usr/bin/phar.phar (phar.phar) in auto mode

Creating config file /etc/php/7.0/cli/php.ini with new version
```

Por fim temos podemos verificar a instalação novamente

```bash
php -v
```

Saída

```bash
PHP 7.0.28-0ubuntu0.16.04.1 (cli) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.0.28-0ubuntu0.16.04.1, Copyright (c) 1999-2017, by Zend Technologies
```
Ou

```bash
php -i
```

Nesse caso temos todas as informações sobre a instalação.

Para melhor visualização utilizaremos a função `phpinfo()`.