<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/styles.css">
    <script type="module" src="../assets/admin-login.js" async></script>
    <title>..:: Login de Adminstrador ::..</title>
</head>
<body>
<div class="container">
    <h1>Login Administrador</h1>
    <form id="form-admin-login">
        <label for="email">E-mail:</label>
        <input type="text" id="email" name="email" value="fabiosantos@ifsul.edu.br">
        <label for="password">Senha:</label>
        <input type="text" id="password" name="password" value="12345678">
        <button type="submit">Enviar</button>
    </form>
    <div id="message"></div>
</div>
</body>
</html>
