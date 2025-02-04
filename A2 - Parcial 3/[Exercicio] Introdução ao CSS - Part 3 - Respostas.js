teste = 
{
    "NOME" : "José",
    "Idade": 38,
    "Lazer" :
    {
        "Esporte" : ["Futebol", "Basquete"],
        "Filmes"  : 
        {
            "Genero" : ["Ficção", "Drama"],
            "Décadas"  : [1980, 2000]
        }
    }
};

teste1 = 
{
    "NOME" : "José",  
    "Idade": 38,   
    "Lazer" :   
    {
        "Esporte" : ["Futebol", "Basquete"],
        "Filmes"  : 
        {
            "Genero" : ["Ficção", "Drama"],
            "Décadas"  : [1980, 2000]
        }
    }
};

resultado = (JSON.stringify(teste) == JSON.stringify(teste1))

if(resultado) console.log("iguais")
else          console.log("diferente")