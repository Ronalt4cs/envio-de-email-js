
# Api simples de envio de email

Recomendo o uso do [Insominia](https://insomnia.rest/download) para realizar os testes.


## Instalação com NPM

para instalar todas as depêndencias e depois rodar o servidor
```bash
  cd ./caminho onde fez o fork
  npm install
  npm run dev 
```    
## Documentação da API

**Obrigatório** criação de conta no [SendGrid](https://sendgrid.com/)

- Após criação da conta e configuração, ainda no site **sendgrid** vá em email api -> integration guide, selecione o metódo SMTP e crie uma Key. Guarde todas as informações após criação da key ( Sugiro não fechar a janela )

- Agora renomeie o arquivo **.env-example** para **.env** e preencha todas as váriaveis com as informações guardadas anteriormente

- No arquivo **login.html** você pode personalizar a mensagem que quiser para ser enviada ao email do destinatário

#### Única rota da aplicalção

```http
  POST '/login'
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Insira o email que vai receber a mensagem |
| `password`| `any` | **Obrigatório**. Insira uma senha qualquer

#### Retorna uma mensagem de `SUCESSO` ou um `ERRO` caso não preencha um ou mais compos.