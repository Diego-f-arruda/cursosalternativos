def maiuscula(nome):
    if any(x.isupper() for x in nome):
        return  True
    return False