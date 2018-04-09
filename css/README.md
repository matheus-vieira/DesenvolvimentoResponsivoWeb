# Estrutura de um estilo CSS

> seletor css
>
> abre chave ({)
>
> lista de estilos
>
> > nome do estilo
> > 
> > dois pontos
> > 
> > valor do estilo
> >
> > nome-do-estilo:"valor do estilo"
> >
> > ex.: color: red;
> >
> > ponto e vírgula (o último estilo listado é opcional)
>
> fecha chave (})
>

```css
seletor-css {
    nome-do-estilo: valor;
    nome-do-estilo-2: valor;
}
```

```css
seletor-css {
    nome-do-estilo: valor;
    nome-do-estilo-2: valor
}
```

> Exemplos
> 
> ```css
> p {
>   color: red;
> }
>
> .minha-classe {
>   border: 1px solid red;
> }
>
> .minha-classe > p {
>   border: 1px solid red;
>   color: magenta
> }
> ```