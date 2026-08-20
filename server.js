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

const PORT = 3000;

// Coloque aqui sua URL atual do Cloudflare Tunnel
const PUBLIC_URL =
    "https://appreciated-hearts-sue-picking.trycloudflare.com";


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
// VERIFICA TOKEN
// ========================================

if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {

    console.error("");
    console.error("❌ ERRO:");
    console.error("Access Token do Mercado Pago não encontrado.");
    console.error("");
    console.error("Confira seu arquivo .env:");
    console.error(
        "MERCADO_PAGO_ACCESS_TOKEN=SEU_TOKEN_AQUI"
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
// TESTE DO SERVIDOR
// ========================================

app.get("/teste", (req, res) => {

    res.json({

        servidor: "online",

        loja: "BlueVault Games",

        mercadoPago: "configurado",

        webhook:
            `${PUBLIC_URL}/webhook`

    });

});


// ========================================
// CRIAR PAGAMENTO
// ========================================

app.post(
    "/criar-preferencia",
    async (req, res) => {

        try {

            console.log("");
            console.log(
                "==============================="
            );
            console.log(
                "NOVO PEDIDO RECEBIDO"
            );
            console.log(
                "==============================="
            );

            const { items } = req.body;


            // ============================
            // VERIFICA CARRINHO
            // ============================

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


            // ============================
            // MONTA PRODUTOS
            // ============================

            const produtos =
                items.map(item => {

                    return {

                        id:
                            String(
                                item.id
                            ),

                        title:
                            String(
                                item.title
                            ),

                        quantity:
                            Number(
                                item.qty
                            ),

                        unit_price:
                            Number(
                                item.price
                            ),

                        currency_id:
                            "BRL"

                    };

                });


            console.log(
                "Produtos:"
            );

            console.log(
                produtos
            );


            // ============================
            // CRIA PREFERÊNCIA
            // ============================

            const resultado =
                await preference.create({

                    body: {

                        items:
                            produtos,


                        // =================
                        // RETORNOS
                        // =================

                        back_urls: {

                            success:
                                `${PUBLIC_URL}/pagamento-sucesso`,

                            failure:
                                `${PUBLIC_URL}/pagamento-erro`,

                            pending:
                                `${PUBLIC_URL}/pagamento-pendente`

                        },


                        // Volta automaticamente
                        // quando aprovado
                        auto_return:
                            "approved",


                        // =================
                        // WEBHOOK
                        // =================

                        notification_url:
                            `${PUBLIC_URL}/webhook`,


                        // =================
                        // NOME NO CHECKOUT
                        // =================

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


            // ============================
            // ENVIA PARA O FRONTEND
            // ============================

            res.json({

                preferenceId:
                    resultado.id,

                initPoint:
                    resultado.init_point,

                sandboxInitPoint:
                    resultado.sandbox_init_point

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
        IMPORTANTE:

        Primeiro respondemos 200.

        Depois podemos processar
        a notificação.

        Isso evita timeout.
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
                ] || "não enviado"
            );


            console.log("");
            console.log(
                "X-REQUEST-ID:"
            );

            console.log(
                req.headers[
                    "x-request-id"
                ] || "não enviado"
            );


            // ============================
            // PEGAR ID DO PAGAMENTO
            // ============================

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
            <body
                style="
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

                        ✅ A rota /webhook
                        está funcionando.

                    </p>

                    <p>

                        O Mercado Pago
                        deve enviar
                        requisições POST
                        para esta URL.

                    </p>

                </div>

            </body>
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
            "✅ CLIENTE RETORNOU:"
        );

        console.log(
            "Pagamento aprovado."
        );

        console.log(
            req.query
        );


        res.send(`

<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

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

font-family:
Arial,
sans-serif;

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

padding:
15px 30px;

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

padding:
15px 25px;

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
// PAGAMENTO COM ERRO
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

padding:
15px 25px;

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
            `✅ Local:`
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log("");

        console.log(
            "🌐 Público:"
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
);const express = require("express");
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

const PORT = 3000;

// Coloque aqui sua URL atual do Cloudflare Tunnel
const PUBLIC_URL =
    "https://bluevault-games.onrender.com";


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
// VERIFICA TOKEN
// ========================================

if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {

    console.error("");
    console.error("❌ ERRO:");
    console.error("Access Token do Mercado Pago não encontrado.");
    console.error("");
    console.error("Confira seu arquivo .env:");
    console.error(
        "MERCADO_PAGO_ACCESS_TOKEN=SEU_TOKEN_AQUI"
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
// TESTE DO SERVIDOR
// ========================================

app.get("/teste", (req, res) => {

    res.json({

        servidor: "online",

        loja: "BlueVault Games",

        mercadoPago: "configurado",

        webhook:
            `${PUBLIC_URL}/webhook`

    });

});


// ========================================
// CRIAR PAGAMENTO
// ========================================

app.post(
    "/criar-preferencia",
    async (req, res) => {

        try {

            console.log("");
            console.log(
                "==============================="
            );
            console.log(
                "NOVO PEDIDO RECEBIDO"
            );
            console.log(
                "==============================="
            );

            const { items } = req.body;


            // ============================
            // VERIFICA CARRINHO
            // ============================

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


            // ============================
            // MONTA PRODUTOS
            // ============================

            const produtos =
                items.map(item => {

                    return {

                        id:
                            String(
                                item.id
                            ),

                        title:
                            String(
                                item.title
                            ),

                        quantity:
                            Number(
                                item.qty
                            ),

                        unit_price:
                            Number(
                                item.price
                            ),

                        currency_id:
                            "BRL"

                    };

                });


            console.log(
                "Produtos:"
            );

            console.log(
                produtos
            );


            // ============================
            // CRIA PREFERÊNCIA
            // ============================

            const resultado =
                await preference.create({

                    body: {

                        items:
                            produtos,


                        // =================
                        // RETORNOS
                        // =================

                        back_urls: {

                            success:
                                `${PUBLIC_URL}/pagamento-sucesso`,

                            failure:
                                `${PUBLIC_URL}/pagamento-erro`,

                            pending:
                                `${PUBLIC_URL}/pagamento-pendente`

                        },


                        // Volta automaticamente
                        // quando aprovado
                        auto_return:
                            "approved",


                        // =================
                        // WEBHOOK
                        // =================

                        notification_url:
                            `${PUBLIC_URL}/webhook`,


                        // =================
                        // NOME NO CHECKOUT
                        // =================

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


            // ============================
            // ENVIA PARA O FRONTEND
            // ============================

            res.json({

                preferenceId:
                    resultado.id,

                initPoint:
                    resultado.init_point,

                sandboxInitPoint:
                    resultado.sandbox_init_point

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
        IMPORTANTE:

        Primeiro respondemos 200.

        Depois podemos processar
        a notificação.

        Isso evita timeout.
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
                ] || "não enviado"
            );


            console.log("");
            console.log(
                "X-REQUEST-ID:"
            );

            console.log(
                req.headers[
                    "x-request-id"
                ] || "não enviado"
            );


            // ============================
            // PEGAR ID DO PAGAMENTO
            // ============================

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
            <body
                style="
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

                        ✅ A rota /webhook
                        está funcionando.

                    </p>

                    <p>

                        O Mercado Pago
                        deve enviar
                        requisições POST
                        para esta URL.

                    </p>

                </div>

            </body>
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
            "✅ CLIENTE RETORNOU:"
        );

        console.log(
            "Pagamento aprovado."
        );

        console.log(
            req.query
        );


        res.send(`

<!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="UTF-8">

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

font-family:
Arial,
sans-serif;

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

padding:
15px 30px;

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

padding:
15px 25px;

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
// PAGAMENTO COM ERRO
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

padding:
15px 25px;

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
            `✅ Local:`
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log("");

        console.log(
            "🌐 Público:"
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