var n1 , n2 , subtracao

n1=parseInt(prompt("entre com um valor"))
n2=parseInt(prompt("entre com outro valor"))

if(n1>n2)
{
    subtracao=n1-n2
    alert("o resultado "+subtracao)
}
else{
    alert("o programa não permite exibir resultado negativo")
}