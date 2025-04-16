def cadastrar_usuario(nome, idade, telefone, email):
    if " " in nome and "48" in telefone and "@" in email and ".com" in email:
        return {
            "nome": nome,
            "idade": idade,
            "telefone": telefone,
            "email": email,
        }
    else:
        return "Dados invalidos"