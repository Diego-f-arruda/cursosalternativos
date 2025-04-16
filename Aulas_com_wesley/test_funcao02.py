def positivo(numero):
  return numero>0

def teste_positivo():
  assert positivo(5) is True
  assert positivo(-5) is False