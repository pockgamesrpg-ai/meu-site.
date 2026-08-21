const express = require("express");
const dotenv = require("dotenv");
const crypto = require("crypto");

const {
    MercadoPagoConfig,
    Payment
} = require("mercadopago");

dotenv.config();

const app = express();

// ======================================================
// CONFIGURAÇÕES
// ======================================================

const PORT = process.env.PORT || 3000;

const PUBLIC_URL =
    process.env.RENDER_EXTERNAL_URL ||
    `http://localhost:${PORT}`;

// ======================================================
// MIDDLEWARES
// ======================================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname));

// ======================================================
// VERIFICA CREDENCIAIS
// ======================================================

if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {

    console.error(
        "❌ MERCADO_PAGO_ACCESS_TOKEN não configurado."
    );

    process.exit(1);
}

if (!process.env.MERCADO_PAGO_PUBLIC_KEY) {

    console.error(
        "❌ MERCADO_PAGO_PUBLIC_KEY não configurada."
    );

    process.exit(1);
}

// ======================================================
// MERCADO PAGO
// ======================================================

const client = new MercadoPagoConfig({

    accessToken:
        process.env.MERCADO_PAGO_ACCESS_TOKEN,

    options: {
        timeout: 5000
    }

});

const payment = new Payment(client);

// ======================================================
// CATÁLOGO OFICIAL BLUEVAULT
// ======================================================
//
// O preço REAL vem daqui.
//
// NÃO usamos transaction_amount enviado
// pelo navegador para determinar o valor.
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

// ======================================================
// CALCULAR CARRINHO NO SERVIDOR
// ======================================================

function calcularCarrinho(cart) {

    if (
        !Array.isArray(cart) ||
        cart.length === 0
    ) {

        throw new Error(
            "Carrinho vazio."
        );
    }

    const produtos = [];

    let total = 0;

    for (const item of cart) {

        const produto =
            catalogo[Number(item.id)];

        if (!produto) {

            throw new Error(
                `Produto inválido: ${item.id}`
            );
        }

        const quantidade =
            Number(item.qty);

        if (
            !Number.isInteger(quantidade) ||
            quantidade < 1 ||
            quantidade > 20
        ) {

            throw new Error(
                `Quantidade inválida: ${item.id}`
            );
        }

        const subtotal =
            produto.price *
            quantidade;

        total += subtotal;

        produtos.push({

            id: Number(item.id),

            title:
                produto.title,

            price:
                produto.price,

            qty:
                quantidade,

            subtotal:
                Number(
                    subtotal.toFixed(2)
                )

        });

    }

    return {

        produtos,

        total:
            Number(
                total.toFixed(2)
            )

    };

}

// ======================================================
// PUBLIC KEY
// ======================================================
//
// O navegador pode conhecer a Public Key.
// O Access Token NUNCA é enviado.
//

app.get(
    "/api/mercadopago/public-key",
    (req, res) => {

        res.json({

            publicKey:
                process.env
                    .MERCADO_PAGO_PUBLIC_KEY

        });

    }
);

// ======================================================
// CONSULTAR TOTAL REAL
// ======================================================

app.post(
    "/api/carrinho",
    (req, res) => {

        try {

            const resultado =
                calcularCarrinho(
                    req.body.cart
                );

            res.json(resultado);

        }

        catch (erro) {

            res
                .status(400)
                .json({

                    error:
                        erro.message

                });

        }

    }
);

// ======================================================
// PROCESSAR PAGAMENTO
// ======================================================
//
// Essa é a rota usada pelo Payment Brick.
//

app.post(
    "/process_payment",
    async (req, res) => {

        try {

            console.log("");
            console.log(
                "================================="
            );

            console.log(
                "💳 NOVO PAGAMENTO"
            );

            console.log(
                "================================="
            );

            const {
                cart,
                formData
            } = req.body;

            // ==========================================
            // CALCULA VALOR PELO SERVIDOR
            // ==========================================

            const pedido =
                calcularCarrinho(cart);

            const total =
                pedido.total;

            console.log(
                "Total oficial:",
                total
            );

            // ==========================================
            // VALIDA FORM DATA
            // ==========================================

            if (
                !formData ||
                typeof formData !== "object"
            ) {

                return res
                    .status(400)
                    .json({

                        error:
                            "Dados de pagamento não recebidos."

                    });

            }

            const paymentMethodId =
                formData.payment_method_id;

            if (!paymentMethodId) {

                return res
                    .status(400)
                    .json({

                        error:
                            "Forma de pagamento não informada."

                    });

            }

            // ==========================================
            // PAGADOR
            // ==========================================

            const payer = {
                ...(formData.payer || {})
            };

            if (!payer.email) {

                return res
                    .status(400)
                    .json({

                        error:
                            "E-mail do comprador não informado."

                    });

            }

            // ==========================================
            // DESCRIÇÃO
            // ==========================================

            const descricao =
                pedido.produtos
                    .map(
                        produto =>
                            `${produto.qty}x ${produto.title}`
                    )
                    .join(", ")
                    .slice(0, 250);

            // ==========================================
            // BODY MERCADO PAGO
            // ==========================================

            const paymentBody = {

                transaction_amount:
                    total,

                description:
                    descricao,

                payment_method_id:
                    paymentMethodId,

                payer:
                    payer,

                external_reference:
                    `BLUEVAULT-${Date.now()}`,

                notification_url:
                    `${PUBLIC_URL}/webhook`

            };

            // ==========================================
            // CARTÃO
            // ==========================================

            if (formData.token) {

                paymentBody.token =
                    formData.token;

            }

            if (formData.installments) {

                paymentBody.installments =
                    Number(
                        formData.installments
                    );

            }

            if (formData.issuer_id) {

                paymentBody.issuer_id =
                    String(
                        formData.issuer_id
                    );

            }

            // ==========================================
            // DADOS ADICIONAIS DO BRICK
            // ==========================================

            if (formData.additional_info) {

                paymentBody.additional_info =
                    formData.additional_info;

            }

            // ==========================================
            // IDEMPOTÊNCIA
            // ==========================================

            const idempotencyKey =
                crypto.randomUUID();

            // ==========================================
            // CRIA PAGAMENTO
            // ==========================================

            const resultado =
                await payment.create({

                    body:
                        paymentBody,

                    requestOptions: {

                        idempotencyKey:
                            idempotencyKey

                    }

                });

            console.log(
                "✅ PAGAMENTO CRIADO"
            );

            console.log(
                "ID:",
                resultado.id
            );

            console.log(
                "STATUS:",
                resultado.status
            );

            console.log(
                "MÉTODO:",
                resultado.payment_method_id
            );

            // ==========================================
            // PIX
            // ==========================================

            const transactionData =
                resultado
                    .point_of_interaction
                    ?.transaction_data ||
                {};

            const qrCode =
                transactionData.qr_code ||
                null;

            const qrCodeBase64 =
                transactionData
                    .qr_code_base64 ||
                null;

            const ticketUrl =
                transactionData
                    .ticket_url ||
                resultado
                    .transaction_details
                    ?.external_resource_url ||
                null;

            // ==========================================
            // RESPOSTA PARA FRONTEND
            // ==========================================

            return res.json({

                success: true,

                id:
                    resultado.id,

                status:
                    resultado.status,

                statusDetail:
                    resultado.status_detail,

                paymentMethodId:
                    resultado.payment_method_id,

                paymentTypeId:
                    resultado.payment_type_id,

                total:
                    total,

                qrCode:
                    qrCode,

                qrCodeBase64:
                    qrCodeBase64,

                ticketUrl:
                    ticketUrl

            });

        }

        catch (erro) {

            console.error("");
            console.error(
                "❌ ERRO AO PROCESSAR PAGAMENTO"
            );

            console.error(
                erro
            );

            const mensagem =

                erro?.message ||

                erro?.cause?.[0]?.description ||

                "Erro ao processar pagamento.";

            return res
                .status(500)
                .json({

                    success:
                        false,

                    error:
                        mensagem

                });

        }

    }
);

// ======================================================
// WEBHOOK
// ======================================================

app.post(
    "/webhook",
    (req, res) => {

        // Mercado Pago deve receber resposta rapidamente.
        res.sendStatus(200);

        try {

            console.log("");
            console.log(
                "================================="
            );

            console.log(
                "🔔 WEBHOOK MERCADO PAGO"
            );

            console.log(
                "================================="
            );

            console.log(
                JSON.stringify(
                    req.body,
                    null,
                    2
                )
            );

            const paymentId =

                req.body?.data?.id ||

                req.query?.id ||

                req.query?.["data.id"];

            if (paymentId) {

                console.log(
                    "Pagamento:",
                    paymentId
                );

            }

        }

        catch (erro) {

            console.error(
                "Erro webhook:",
                erro
            );

        }

    }
);

// ======================================================
// TESTE WEBHOOK
// ======================================================

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
min-height:100vh;
text-align:center;
"
>

<div>

<h1 style="color:#18a8ff;">
Webhook BlueVault
</h1>

<p>
✅ Webhook funcionando.
</p>

<a
href="/"
style="
color:#18a8ff;
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

// ======================================================
// TESTE SERVIDOR
// ======================================================

app.get(
    "/teste",
    (req, res) => {

        res.json({

            servidor:
                "online",

            loja:
                "BlueVault Games",

            mercadoPago:
                "Payment Brick",

            publicKey:
                process.env
                    .MERCADO_PAGO_PUBLIC_KEY
                    ? "configurada"
                    : "não configurada",

            accessToken:
                process.env
                    .MERCADO_PAGO_ACCESS_TOKEN
                    ? "configurado"
                    : "não configurado",

            webhook:
                `${PUBLIC_URL}/webhook`

        });

    }
);

// ======================================================
// SERVIDOR
// ======================================================

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

        console.log(
            `✅ Porta: ${PORT}`
        );

        console.log(
            `🌐 URL: ${PUBLIC_URL}`
        );

        console.log(
            "💳 Payment Brick configurado"
        );

        console.log(
            `🔔 Webhook: ${PUBLIC_URL}/webhook`
        );

        console.log(
            "================================="
        );

    }
);
