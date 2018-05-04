# Criando informações no servidor

Lembrando que para acessar temos que estar com o servidor rodando:

```bash
php -S localhost:8000
```

Vamos criar dados para serem vistos na nossa aplicação:

Criaremos um [array multidimensional](https://secure.php.net/manual/pt_BR/language.types.array.php) e retornaremos um objeto do tipo JSON com a função [`json_encode`](http://php.net/manual/pt_BR/function.json-encode.php)

> Foi omitido as tags de abertura do PHP `<?php` e `?>`

```php
  $array = array(
   'name' => 'Luke Skywalker',
   'height' => '172',
   'mass' => '77',
   'hair_color' => 'blond',
   'skin_color' => 'fair',
   'eye_color' => 'blue',
   'birth_year' => '19BBY',
   'gender' => 'male',
   'homeworld' => 'https://swapi.co/api/planets/1/',
   'films' => array (
      0 => 'https://swapi.co/api/films/2/',
      1 => 'https://swapi.co/api/films/6/',
      2 => 'https://swapi.co/api/films/3/',
      3 => 'https://swapi.co/api/films/1/',
      4 => 'https://swapi.co/api/films/7/',
    ),
    'species' => array (
      0 => 'https://swapi.co/api/species/1/',
    ),
    'vehicles' => array (
      0 => 'https://swapi.co/api/vehicles/14/',
      1 => 'https://swapi.co/api/vehicles/30/',
    ),
    'starships' => array (
      0 => 'https://swapi.co/api/starships/12/',
      1 => 'https://swapi.co/api/starships/22/',
    ),
    'created' => '2014-12-09T13:50:51.644000Z',
    'edited' => '2014-12-20T21:17:56.891000Z',
    'url' => 'https://swapi.co/api/people/1/',
  );

  echo json_encode($array);
```