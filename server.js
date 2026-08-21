javascript
const express = require("express");
const dotenv = require("dotenv");

const {
    MercadoPagoConfig,
    Preference
} = require("mercadopago");

dotenv.config();

const app = express();


// ========================================
// CONFIGURAÇÕES
// ========================================

const PORT = process.env.PORT || 3000;

const PUBLIC_URL =
    process.env.RENDER_EXTERNAL_URL ||
    `http://localhost:${PORT}`;


// ========================================
// MIDDLEWARES
// ========================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Serve index.html, style.css, script.js, assets etc.
app.use(express.static(__dirname));


// ========================================
// VERIFICA TOKEN MERCADO PAGO
// ========================================

if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {

    console.error("");
    console.error("❌ ERRO:");
    console.error(
        "Access Token do Mercado Pago não encontrado."
    );

    console.error("");
    console.error(
        "Configure MERCADO_PAGO_ACCESS_TOKEN no Render."
    );

    console.error("");

    process.exit(1);
}


// ========================================
// MERCADO PAGO
// ========================================

const client = new MercadoPagoConfig({

    accessToken:
        process.env.MERCADO_PAGO_ACCESS_TOKEN

});

const preference =
    new Preference(client);


// ========================================
// CATÁLOGO OFICIAL
// ========================================
//
// IMPORTANTE:
//
// Os preços abaixo são os preços que
// realmente serão enviados ao Mercado Pago.
//
// Mesmo que alguém altere o preço pelo
// navegador, o servidor ignora o preço
// enviado pelo frontend.
//

const catalogo = {

    1: {
        title: "God of War",
        price: 29.99
    },

    2: {
        title: "The Last of Us",
        price: 27.99
    },

    3: {
        title: "Hollow Knight",
        price: 19.99
    },

    4: {
        title: "Outlast",
        price: 21.99
    },

    5: {
        title: "Cyberpunk 2077",
        price: 29.99
    },

    6: {
        title: "Red Dead Redemption 2",
        price: 28.99
    },

    7: {
        title: "Elden Ring",
        price: 29.99
    },

    8: {
        title: "Resident Evil 4",
        price: 26.99
    },

    9: {
        title: "Grand Theft Auto V",
        price: 24.99
    },

    10: {
        title: "The Witcher 3",
        price: 23.99
    },

    11: {
        title: "Dark Souls III",
        price: 25.99
    },

    12: {
        title: "Sekiro: Shadows Die Twice",
        price: 29.99
    },

    13: {
        title: "Devil May Cry 5",
        price: 22.99
    },

    14: {
        title: "DOOM Eternal",
        price: 24.99
    },

    15: {
        title: "Far Cry 6",
        price: 26.99
    },

    16: {
        title: "Assassin's Creed Valhalla",
        price: 28.99
    },

    17: {
        title: "Hogwarts Legacy",
        price: 29.99
    },

    18: {
        title: "Baldur's Gate 3",
        price: 29.99
    },

    19: {
        title: "Monster Hunter: World",
        price: 23.99
    },

    20: {
        title: "Nioh 2",
        price: 25.99
    },

    21: {
        title: "Resident Evil Village",
        price: 27.99
    },

    22: {
        title: "Resident Evil 2",
        price: 24.99
    },

    23: {
        title: "Dead Space",
        price: 28.99
    },

    24: {
        title: "Alien: Isolation",
        price: 21.99
    },

    25: {
        title: "Amnesia: The Bunker",
        price: 22.99
    },

    26: {
        title: "Phasmophobia",
        price: 20.99
    },

    27: {
        title: "Sons of the Forest",
        price: 24.99
    },

    28: {
        title: "The Forest",
        price: 19.99
    },

    29: {
        title: "Little Nightmares II",
        price: 23.99
    },

    30: {
        title: "Dead by Daylight",
        price: 21.99
    },

    31: {
        title: "Hades",
        price: 22.99
    },

    32: {
        title: "Cuphead",
        price: 19.99
    },

    33: {
        title: "Celeste",
        price: 19.99
    },

    34: {
        title: "Stardew Valley",
        price: 20.99
    },

    35: {
        title: "Terraria",
        price: 19.99
    },

    36: {
        title: "Dead Cells",
        price: 21.99
    },

    37: {
        title: "Ori and the Will of the Wisps",
        price: 22.99
    },

    38: {
        title: "Undertale",
        price: 19.99
    },

    39: {
        title: "Risk of Rain 2",
        price: 22.99
    },

    40: {
        title: "Dave the Diver",
        price: 21.99
    },

    41: {
        title: "Forza Horizon 5",
        price: 29.99
    },

    42: {
        title: "Mortal Kombat 1",
        price: 27.99
    },

    43: {
        title: "Tekken 8",
        price: 29.99
    },

    44: {
        title: "Street Fighter 6",
        price: 26.99
    },

    45: {
        title: "Dying Light 2",
        price: 25.99
    },

    46: {
        title: "Subnautica",
        price: 21.99
    },

    47: {
        title: "No Man's Sky",
        price: 24.99
    },

    48: {
        title: "Valheim",
        price: 19.99
    }

};


// ========================================
// TESTE DO SERVIDOR
// ========================================

app.get(
    "/teste",
    (req, res) => {

        res.json({

            servidor:
                "online",

            loja:
                "BlueVault Games",

            mercadoPago:
                "configurado",

            webhook:
                `${PUBLIC_URL}/webhook`

        });

    }
);


// ========================================
// CRIAR PAGAMENTO
// ========================================

app.post(
    "/criar-preferencia",
    async (req, res) => {

        try {

            console.log("");
            console.log(
                "================================="
            );

            console.log(
                "🛒 NOVO PEDIDO RECEBIDO"
            );

            console.log(
                "================================="
            );


            const {
                items
            } = req.body;


            // =================================
            // VERIFICA CARRINHO
            // =================================

            if (
                !items ||
                !Array.isArray(items) ||
                items.length === 0
            ) {

                return res
                    .status(400)
                    .json({

                        error:
                            "Carrinho vazio."

                    });

            }


            // =================================
            // CRIA PRODUTOS USANDO
            // PREÇO OFICIAL DO SERVIDOR
            // =================================

            const produtos =
                items.map(item => {

                    const produtoOficial =
                        catalogo[item.id];


                    // Produto inexistente
                    if (!produtoOficial) {

                        throw new Error(
                            `Produto inválido: ${item.id}`
                        );

                    }


                    const quantidade =
                        Number(item.qty);


                    // Proteção contra quantidade inválida
                    if (
                        !Number.isInteger(quantidade) ||
                        quantidade <= 0 ||
                        quantidade > 20
                    ) {

                        throw new Error(
                            `Quantidade inválida para o produto ${item.id}`
                        );

                    }


                    return {

                        id:
                            String(item.id),

                        title:
                            produtoOficial.title,

                        quantity:
                            quantidade,

                        unit_price:
                            produtoOficial.price,

                        currency_id:
                            "BRL"

                    };

                });


            // =================================
            // MOSTRA PEDIDO NO LOG
            // =================================

            console.log(
                "Produtos:"
            );

            console.log(
                produtos
            );


            const total =
                produtos.reduce(
                    (soma, produto) => {

                        return (
                            soma +
                            (
                                produto.unit_price *
                                produto.quantity
                            )
                        );

                    },
                    0
                );


            console.log(
                `Total: R$ ${total.toFixed(2)}`
            );


            // =================================
            // CRIA PREFERÊNCIA MERCADO PAGO
            // =================================

            const resultado =
                await preference.create({

                    body: {

                        items:
                            produtos,


                        // =====================
                        // PÁGINAS DE RETORNO
                        // =====================

                        back_urls: {

                            success:
                                `${PUBLIC_URL}/pagamento-sucesso`,

                            failure:
                                `${PUBLIC_URL}/pagamento-erro`,

                            pending:
                                `${PUBLIC_URL}/pagamento-pendente`

                        },


                        // Retorna automaticamente
                        // para o site se aprovado
                        auto_return:
                            "approved",


                        // =====================
                        // WEBHOOK
                        // =====================

                        notification_url:
                            `${PUBLIC_URL}/webhook`,


                        // =====================
                        // IDENTIFICAÇÃO
                        // =====================

                        statement_descriptor:
                            "BLUEVAULT"

                    }

                });


            console.log("");
            console.log(
                "✅ PREFERÊNCIA CRIADA"
            );

            console.log(
                "ID:",
                resultado.id
            );


            // =================================
            // ENVIA PARA O FRONTEND
            // =================================

            res.json({

                preferenceId:
                    resultado.id,

                initPoint:
                    resultado.init_point,

                sandboxInitPoint:
                    resultado.sandbox_init_point,

                total:
                    Number(
                        total.toFixed(2)
                    )

            });

        }

        catch (erro) {

            console.error("");
            console.error(
                "❌ ERRO MERCADO PAGO"
            );

            console.error(
                erro
            );


            res
                .status(500)
                .json({

                    error:
                        "Erro ao criar pagamento.",

                    details:
                        erro.message

                });

        }

    }
);


// ========================================
// WEBHOOK MERCADO PAGO
// ========================================

app.post(
    "/webhook",
    async (req, res) => {

        /*
            O Mercado Pago precisa receber
            resposta rapidamente.

            Então enviamos HTTP 200 primeiro.
        */

        res.sendStatus(200);


        try {

            console.log("");
            console.log(
                "================================="
            );

            console.log(
                "🔔 WEBHOOK RECEBIDO"
            );

            console.log(
                "================================="
            );


            console.log(
                "BODY:"
            );

            console.log(
                JSON.stringify(
                    req.body,
                    null,
                    2
                )
            );


            console.log("");
            console.log(
                "QUERY:"
            );

            console.log(
                req.query
            );


            console.log("");
            console.log(
                "X-SIGNATURE:"
            );

            console.log(

                req.headers[
                    "x-signature"
                ] ||

                "não enviado"

            );


            console.log("");
            console.log(
                "X-REQUEST-ID:"
            );

            console.log(

                req.headers[
                    "x-request-id"
                ] ||

                "não enviado"

            );


            // =================================
            // PEGA ID DO PAGAMENTO
            // =================================

            const paymentId =

                req.body?.data?.id ||

                req.query?.id ||

                req.query?.[
                    "data.id"
                ];


            if (paymentId) {

                console.log("");
                console.log(
                    "💳 ID DO PAGAMENTO:"
                );

                console.log(
                    paymentId
                );

            }


            console.log(
                "================================="
            );

            console.log("");

        }

        catch (erro) {

            console.error(
                "Erro no webhook:"
            );

            console.error(
                erro
            );

        }

    }
);


// ========================================
// TESTE GET DO WEBHOOK
// ========================================

app.get(
    "/webhook",
    (req, res) => {

        res.send(`
<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Webhook BlueVault
</title>

</head>

<body
style="
margin:0;
background:#030814;
color:white;
font-family:Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
text-align:center;
"
>

<div>

<h1
style="
color:#18a8ff;
"
>

Webhook BlueVault

</h1>

<p>

✅ A rota /webhook está funcionando.

</p>

<p>

O Mercado Pago deve enviar
requisições POST para esta URL.

</p>

</div>

</body>

</html>
        `);

    }
);


// ========================================
// PAGAMENTO APROVADO
// ========================================

app.get(
    "/pagamento-sucesso",
    (req, res) => {

        console.log("");
        console.log(
            "✅ PAGAMENTO APROVADO"
        );

        console.log(
            req.query
        );


        res.send(`
<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Pagamento aprovado
</title>

</head>

<body
style="
margin:0;
background:
linear-gradient(
135deg,
#020711,
#071b30
);
color:white;
font-family:Arial,sans-serif;
display:flex;
align-items:center;
justify-content:center;
height:100vh;
text-align:center;
"
>

<div>

<div
style="
font-size:70px;
margin-bottom:20px;
"
>

✅

</div>

<h1
style="
color:#18a8ff;
font-size:40px;
"
>

Pagamento aprovado!

</h1>

<p
style="
color:#9bb4cc;
font-size:17px;
"
>

Sua compra foi recebida
com sucesso.

</p>

<a
href="/"
style="
display:inline-block;
margin-top:25px;
padding:15px 30px;
background:
linear-gradient(
135deg,
#18a8ff,
#0068ff
);
color:white;
text-decoration:none;
border-radius:12px;
font-weight:bold;
"
>

Voltar para BlueVault

</a>

</div>

</body>

</html>
        `);

    }
);


// ========================================
// PAGAMENTO PENDENTE
// ========================================

app.get(
    "/pagamento-pendente",
    (req, res) => {

        console.log("");
        console.log(
            "⏳ PAGAMENTO PENDENTE"
        );

        console.log(
            req.query
        );


        res.send(`
<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Pagamento pendente
</title>

</head>

<body
style="
margin:0;
background:#030814;
color:white;
font-family:Arial;
display:flex;
align-items:center;
justify-content:center;
height:100vh;
text-align:center;
"
>

<div>

<div
style="
font-size:70px;
"
>

⏳

</div>

<h1
style="
color:#ffd84d;
"
>

Pagamento pendente

</h1>

<p
style="
color:#9bb4cc;
"
>

Estamos aguardando
a confirmação do pagamento.

</p>

<a
href="/"
style="
display:inline-block;
margin-top:20px;
padding:15px 25px;
background:#18a8ff;
color:white;
text-decoration:none;
border-radius:10px;
"
>

Voltar para a loja

</a>

</div>

</body>

</html>
        `);

    }
);


// ========================================
// PAGAMENTO NÃO CONCLUÍDO
// ========================================

app.get(
    "/pagamento-erro",
    (req, res) => {

        console.log("");
        console.log(
            "❌ PAGAMENTO NÃO CONCLUÍDO"
        );

        console.log(
            req.query
        );


        res.send(`
<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>
Pagamento não concluído
</title>

</head>

<body
style="
margin:0;
background:#030814;
color:white;
font-family:Arial;
display:flex;
align-items:center;
justify-content:center;
height:100vh;
text-align:center;
"
>

<div>

<div
style="
font-size:70px;
"
>

❌

</div>

<h1
style="
color:#ff4c6a;
"
>

Pagamento não concluído

</h1>

<p
style="
color:#9bb4cc;
"
>

Tente novamente
ou escolha outra
forma de pagamento.

</p>

<a
href="/"
style="
display:inline-block;
margin-top:20px;
padding:15px 25px;
background:#18a8ff;
color:white;
text-decoration:none;
border-radius:10px;
"
>

Voltar para a loja

</a>

</div>

</body>

</html>
        `);

    }
);


// ========================================
// INICIA SERVIDOR
// ========================================

app.listen(
    PORT,
    () => {

        console.log("");
        console.log(
            "================================="
        );

        console.log(
            "🎮 BLUEVAULT GAMES"
        );

        console.log(
            "================================="
        );

        console.log("");

        console.log(
            "✅ Servidor iniciado"
        );

        console.log(
            `Porta: ${PORT}`
        );

        console.log("");

        console.log(
            "🌐 URL:"
        );

        console.log(
            PUBLIC_URL
        );

        console.log("");

        console.log(
            "🔔 Webhook:"
        );

        console.log(
            `${PUBLIC_URL}/webhook`
        );

        console.log("");

        console.log(
            "================================="
        );

    }
);
```
