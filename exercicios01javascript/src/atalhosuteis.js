export function moeda(valor){
    return moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

export function monetario(form){
     form = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency:"BRL"
    })
}