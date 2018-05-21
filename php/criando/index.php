<!DOCTYPE HTML>
<html>
    <head>
        <title>Exemplo</title>
    </head>
    <body>
      <?php
         $num = rand(1, 500);

         if (($num % 2) === 0)
             $nome =  "Matheus";
         else
             $nome = "Opet";

         echo "Olá, " . $nome . "!";
      ?>
    </body>
</html>