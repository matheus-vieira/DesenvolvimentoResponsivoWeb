# Javascript

Como podemos trabalhar com mudança de fluxo

## Condições

Quando precisamos comparar valore, exemplo

> Comparação (com coerção de valores, tenta comparar o números)
>```js
> 1 == 1 // true
> 1 == "1" // true
>```

> Comparação (sem coerção de valores, antes compara o tipo)
>```js
> 1 === 1 // true
> 1 === "1" // false, tipos de objetos diferentes
>```

> Diferentes
>```js
> 1 != 2 // true
> "Matheus" != "Ciclano" // true
>```

> Maior
>```js
> 1 > 2 // false
> 4 > 1 // true
>```

> Menor
>```js
> 1 < 2 // true
> 4 < 1 // false
>```

> Maior ou igual
>```js
> 1 >= 0 // true
> 1 >= 1 // true
> 1 >= 2 // false
>```

> Menor ou igual
>```js
> 1 <= 2 // true
> 2 <= 1 // false
>```

## Mudança de fluxo

Quando queremos que a execução mude de caminho

[if](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

>```js
> if (condição) {
>  // faça somente se a condição for verdadeira    
> }
>```

[if..else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

>```js
> if (condicao) {
>  /* faça somente se a condição for verdadeira    */
> } else if (condicao) {
>  /* faça somente se a condição if for false    */
>  /* e se a condição else if for true    */
> } else {
>  /* caso nenhuma condição seja verdadeira    */
> }
>```