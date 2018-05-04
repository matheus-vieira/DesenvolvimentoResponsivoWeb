# [Rodando o PHP](https://secure.php.net/manual/pt_BR/features.commandline.webserver.php)

Crie uma pasta chamada `public_html` e acesse ela

```bash
mkdir public_html && cd public_html
```

Crie um arquivo chamado `index.php` e chame a função `phpinfo()`

```bash
echo "<?php phpinfo(); ?>" > index.php
```

O php vem com um servidor embutido para executá-lo chame o comando abaixo:

```bash
php -S localhost:8000
```

Saída

```bash
PHP 7.0.28-0ubuntu0.16.04.1 Development Server started at Thu May  3 22:38:47 2018
Listening on http://localhost:8000
Document root is /home/opet/public_html
Press Ctrl-C to quit.
```