def salarioPagamento(salario, comissao, inss):
    salarioFinal = (salario * comissao) + salario - (salario * inss) 
    return salarioFinal 