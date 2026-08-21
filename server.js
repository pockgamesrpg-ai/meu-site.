// ==========================================================
// BLUEVAULT GAMES - SERVER.JS
// Node.js + Express + Mercado Pago Payment Brick
// ==========================================================

require("dotenv").config();

const express = require("express");
const path = require("path");
const crypto = require("crypto");

const {
    MercadoPagoConfig,
    Payment
} = require("mercadopago");


// ==========================================================
// APP
// ==========================================================

const app = express();

const PORT = process.env.PORT || 3000;


// ==========================================================
// VARIÁVEIS DE AMBIENTE
// ==========================================================

const ACCESS_TOKEN =
    process.env.MERCADO_PAGO_ACCESS_TOKEN;

const PUBLIC_KEY =
    process.env.MERCADO_PAGO_PUBLIC_KEY;


// ==========================================================
// VERIFICA CREDENCIAIS
// ==========================================================

if (!ACCESS_TOKEN) {
    console.error(
        "❌ MERCADO_PAGO_ACCESS_TOKEN não configurado."
    );
}

if (!PUBLIC_KEY) {
    console.error(
        "❌ MERCADO_PAGO_PUBLIC_KEY não configurada."
    );
}


// ==========================================================
// MERCADO PAGO
// ==========================================================

const mercadoPagoClient = ACCESS_TOKEN
    ? new MercadoPagoConfig({
        accessToken: ACCESS_TOKEN
    })
    : null;

const paymentClient = mercadoPagoClient
    ? new Payment(mercadoPagoClient)
    : null;


// ==========================================================
// MIDDLEWARES
// ==========================================================

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// ==========================================================
// ARQUIVOS DO SITE
// ==========================================================

app.use(
    express.static(
        path.join(__dirname)
    )
);


// ==========================================================
// CATÁLOGO OFICIAL
//
// IMPORTANTE:
// O servidor usa estes preços.
// O navegador NÃO decide o valor final.
// ==========================================================

const CATALOGO = {

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


// ==========================================================
// CALCULAR CARRINHO
// ==========================================================

function calcularCarrinho(cart) {

    if (!Array.isArray(cart)) {
        throw new Error(
            "Carrinho inválido."
        );
    }

    if (cart.length === 0) {
        throw new Error(
            "Carrinho vazio."
        );
    }

    let total = 0;

    const produtos = [];


    for (const item of cart) {

        const id =
            Number(item.id);

        const qty =
            Number(item.qty);


        if (
            !Number.isInteger(id) ||
            !CATALOGO[id]
        ) {
            throw new Error(
                `Produto inválido: ${item.id}`
            );
        }


        if (
            !Number.isInteger(qty) ||
            qty < 1 ||
            qty > 10
        ) {
            throw new Error(
                `Quantidade inválida para ${CATALOGO[id].title}.`
            );
        }


        const produto =
            CATALOGO[id];

        const subtotal =
            Number(
                (
                    produto.price *
                    qty
                ).toFixed(2)
            );


        total += subtotal;


        produtos.push({

            id,

            title:
                produto.title,

            price:
                produto.price,

            qty,

            subtotal

        });

    }


    total =
        Number(
            total.toFixed(2)
        );


    return {
        total,
        produtos
    };

}


// ==========================================================
// TESTE DO SERVIDOR
// ==========================================================

app.get(
    "/api/status",
    (req, res) => {

        res.json({

            online: true,

            mercadoPago:
                Boolean(
                    ACCESS_TOKEN &&
                    PUBLIC_KEY
                )

        });

    }
);


// ==========================================================
// PUBLIC KEY DO MERCADO PAGO
//
// ESSA É A ROTA QUE ESTAVA DANDO "NOT FOUND"
// ==========================================================

app.get(
    "/api/mercadopago/public-key",
    (req, res) => {

        if (!PUBLIC_KEY) {

            return res
                .status(500)
                .json({

                    error:
                        "MERCADO_PAGO_PUBLIC_KEY não configurada."

                });

        }


        return res.json({

            publicKey:
                PUBLIC_KEY

        });

    }
);


// ==========================================================
// CALCULAR TOTAL OFICIAL
// ==========================================================

app.post(
    "/api/carrinho",
    (req, res) => {

        try {

            const resultado =
                calcularCarrinho(
                    req.body.cart
                );


            return res.json(
                resultado
            );

        }

        catch (error) {

            console.error(
                "❌ Erro no carrinho:",
                error.message
            );


            return res
                .status(400)
                .json({

                    error:
                        error.message

                });

        }

    }
);


// ==========================================================
// PROCESSAR PAGAMENTO
// ==========================================================

app.post(
    "/process_payment",
    async (req, res) => {

        try {

            if (!paymentClient) {

                return res
                    .status(500)
                    .json({

                        error:
                            "Mercado Pago não configurado no servidor."

                    });

            }


            const {
                formData,
                cart
            } = req.body;


            if (
                !formData ||
                typeof formData !== "object"
            ) {

                return res
                    .status(400)
                    .json({

                        error:
                            "Dados do pagamento não recebidos."

                    });

            }


            // ==========================================
            // RECALCULA PREÇO NO SERVIDOR
            // ==========================================

            const pedido =
                calcularCarrinho(
                    cart
                );


            console.log(
                "💰 Total oficial:",
                pedido.total
            );


            // ==========================================
            // DADOS RECEBIDOS DO PAYMENT BRICK
            // ==========================================

            const paymentBody = {

                ...formData,

                transaction_amount:
                    pedido.total

            };


            // Não confiamos no valor enviado pelo navegador.
            paymentBody.transaction_amount =
                pedido.total;


            // Converte parcelas caso venha como texto.
            if (
                paymentBody.installments !==
                undefined
            ) {

                paymentBody.installments =
                    Number(
                        paymentBody.installments
                    );

            }


            // ==========================================
            // DESCRIÇÃO
            // ==========================================

            paymentBody.description =
                pedido.produtos
                    .map(
                        produto =>
                            `${produto.qty}x ${produto.title}`
                    )
                    .join(", ")
                    .slice(0, 250);


            // ==========================================
            // EXTERNAL REFERENCE
            // ==========================================

            paymentBody.external_reference =
                `BLUEVAULT-${Date.now()}`;


            console.log(
                "💳 Criando pagamento..."
            );


            // ==========================================
            // IDEMPOTENCY KEY
            // Evita pagamento duplicado em uma mesma
            // tentativa/requisição.
            // ==========================================

            const idempotencyKey =
                crypto.randomUUID();


            const payment =
                await paymentClient.create({

                    body:
                        paymentBody,

                    requestOptions: {

                        idempotencyKey:
                            idempotencyKey

                    }

                });


            console.log(
                "✅ Pagamento criado:",
                payment.id
            );

            console.log(
                "📌 Status:",
                payment.status
            );


            // ==========================================
            // PIX
            // ==========================================

            const transactionData =
                payment
                    ?.point_of_interaction
                    ?.transaction_data ||
                {};


            // ==========================================
            // BOLETO
            // ==========================================

            const ticketUrl =
                payment
                    ?.transaction_details
                    ?.external_resource_url ||
                null;


            // ==========================================
            // RESPOSTA PARA O SCRIPT.JS
            // ==========================================

            return res.json({

                success:
                    true,

                id:
                    payment.id,

                status:
                    payment.status,

                statusDetail:
                    payment.status_detail,

                paymentMethodId:
                    payment.payment_method_id,

                paymentTypeId:
                    payment.payment_type_id,

                total:
                    pedido.total,

                externalReference:
                    payment.external_reference,

                qrCode:
                    transactionData.qr_code ||
                    null,

                qrCodeBase64:
                    transactionData.qr_code_base64 ||
                    null,

                ticketUrl:
                    ticketUrl

            });

        }

        catch (error) {

            console.error(
                "=================================="
            );

            console.error(
                "❌ ERRO NO PAGAMENTO"
            );

            console.error(
                error
            );

            console.error(
                "=================================="
            );


            const message =
                error?.message ||
                error?.cause?.[0]?.description ||
                "Erro ao processar pagamento.";


            return res
                .status(500)
                .json({

                    success:
                        false,

                    error:
                        message

                });

        }

    }
);


// ==========================================================
// PÁGINA PRINCIPAL
// ==========================================================

app.get(
    "/",
    (req, res) => {

        res.sendFile(
            path.join(
                __dirname,
                "index.html"
            )
        );

    }
);


// ==========================================================
// 404 DAS ROTAS /API
// ==========================================================

app.use(
    "/api",
    (req, res) => {

        res
            .status(404)
            .json({

                error:
                    "Rota da API não encontrada."

            });

    }
);


// ==========================================================
// INICIAR SERVIDOR
// ==========================================================

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            "=================================="
        );

        console.log(
            "🎮 BLUEVAULT GAMES"
        );

        console.log(
            `🚀 Servidor rodando na porta ${PORT}`
        );

        console.log(
            ACCESS_TOKEN
                ? "✅ Access Token configurado"
                : "❌ Access Token NÃO configurado"
        );

        console.log(
            PUBLIC_KEY
                ? "✅ Public Key configurada"
                : "❌ Public Key NÃO configurada"
        );

        console.log(
            "=================================="
        );

    }
);
