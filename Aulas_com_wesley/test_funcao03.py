def somar(a,b):
    return a + b
def comprimento(lista):
    return len(lista)

def test_soma_comprimento():
    assert somar (3,2) == 5
    assert comprimento ([1,2,2,2,2]) == 5