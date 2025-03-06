/**
 * Para a realizar a prática dos operadores lógicos e de comparação,
 * vamos precisar usar um banco, pode cria-lo como o nome: "operadores-Logicos-e-Comparacao,
 * apos criado utilizar a coleção produtos, que contém os seguintes documentos:
 */

//COLEÇÃO UTILIZADA
db.produtos.insertMany([
    {
        "_id": 1,
        "nome": "Notebook Dell",
        "categoria": "Eletrônicos",
        "preco": 4500,
        "estoque": 15,
        "avaliacao": 4.7
    },
    {
        "_id": 2,
        "nome": "Smartphone Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "_id": 3,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.8
    }
]);


//OPERADORES DE COMPARAÇÃO

// " Operador Igual A "
// $eq(igual a) "equal"
// " - retorna o documento cujo o valor de um campo especifico seja   igual ao valor informado. "

db.produtos.find({ "preco": { "$eq": 2500 } });


// " Operador Diferente de"
// $ne(diferente de) "not equal"
// " - retorna documento cujo o valor é diferente ao valor informado. "

db.produtos.find({ "preco": { "$ne": 2500 } });


// " Operadores Maior que, Menor que"
// $gt(maior que) "grader ther"
// " - retorna documentos cujo o valor é maior do que o informado. "

// $lt(menor que) "low ther"
// " - retorna documentos cujo o valor é menor do que o informado. "

db.produtos.find({ "preco": { "$gt": 2500 } });
db.produtos.find({ "preco": { "$lt": 4000 } });


// " Operador Maior ou Igual a, Menor ou Igual a"
// $gte(maior ou igual a) "grader ther equal"
// $lte(menor ou igual a) "low ther equal"
// " - retorna documentos cujo o valor é maior/menor ou igual ao valor informado. "

db.produtos.find({ "preco": { "$gte": 1200, "$lte": 2500 } });


//OPERADORES LOGICOS

// " Operador And "
// $and(e)
// " - passa mais de um condição no find e caso sejam verdadeira será retornado o documento "


db.produtos.find({
    "$and": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gte": 3000 } }
    ]
});


// " Operador Ou "
// $or(ou)
// " - retorna documento que satisfaçam pelo menos um das condições especificadas. "

db.produtos.find({
    "$or": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gte": 4000 } }
    ]
});


// " Operador 'Não' "
// $not(não)
// " - retorna documento que não satisfaçam a condição especificada. "

db.produtos.find({ "preco": { "$not": { "$gt": 3000 } } });


// "Operador 'Nem' "
// $nor(nem)
// " - retorna documento que não satisfaçam nenhuma das condições especificadas. "

db.produtos.find({
    "nor": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gte": 4000 } }
    ]
}); //irá retornar produtos que não sejam da categoria "eletronicos" e que tenham preco inferior ou igual a 4000


// "Operador Existe"
// $exists(existe)
// " - retorna documento que contém um campo especifico. "

db.produtos.find({ "avaliacao": { "$exists": true } });


// "Operador Tipo"
// $type(tipo)
// " - retorna documento com base no tipo de dados armazenado em um campo. "

db.produtos.find({ "preco": { "$type": "double" } });