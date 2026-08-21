// ======================================================
// BLUEVAULT GAMES
// SCRIPT PRINCIPAL
// ======================================================


// ======================================================
// PRODUTOS
// ======================================================

const games = [

    {
        id: 1,
        title: "God of War",
        category: "acao",
        genre: "Ação / Aventura",
        price: 29.99,
        discount: "-20%",
        art: "art-gow",
        image: "assets/god-of-war.jpg",
        desc: "Uma aventura épica de ação e narrativa."
    },

    {
        id: 2,
        title: "The Last of Us",
        category: "acao",
        genre: "Ação / História",
        price: 27.99,
        discount: "-15%",
        art: "art-tlou",
        image: "assets/the-last-of-us.png",
        desc: "Sobrevivência, tensão e uma história marcante."
    },

    {
        id: 3,
        title: "Hollow Knight",
        category: "indie",
        genre: "Indie / Metroidvania",
        price: 19.99,
        discount: "-30%",
        art: "art-hk",
        image: "assets/hollow-knight.jpg",
        desc: "Explore um reino sombrio e misterioso."
    },

    {
        id: 4,
        title: "Outlast",
        category: "terror",
        genre: "Terror / Survival",
        price: 21.99,
        discount: "-35%",
        art: "art-outlast",
        image: "assets/outlast.jpg",
        desc: "Terror em primeira pessoa com muita tensão."
    },

    {
        id: 5,
        title: "Cyberpunk 2077",
        category: "acao",
        genre: "RPG / Ação",
        price: 29.99,
        discount: "-25%",
        art: "art-cp",
        image: "assets/cyberpunk-2077.jpg",
        desc: "Explore uma metrópole futurista gigantesca."
    },

    {
        id: 6,
        title: "Red Dead Redemption 2",
        category: "acao",
        genre: "Ação / Mundo aberto",
        price: 28.99,
        discount: "-20%",
        art: "art-rdr",
        image: "assets/red-dead-redemption-2.jpg",
        desc: "Um mundo aberto cinematográfico no velho oeste."
    },

    {
        id: 7,
        title: "Elden Ring",
        category: "acao",
        genre: "RPG / Soulslike",
        price: 29.99,
        discount: "-10%",
        art: "art-elden",
        image: "assets/elden-ring.jpg",
        desc: "Descubra um vasto mundo de fantasia e desafios."
    },

    {
        id: 8,
        title: "Resident Evil 4",
        category: "terror",
        genre: "Terror / Ação",
        price: 26.99,
        discount: "-18%",
        art: "art-re",
        image: "assets/resident-evil-4.jpg",
        desc: "Sobrevivência e ação em um clássico moderno."
    },

    {
        id: 9,
        title: "Grand Theft Auto V",
        category: "acao",
        genre: "Ação / Mundo aberto",
        price: 24.99,
        discount: "-35%",
        art: "art-gta",
        image: "assets/grand-theft-auto-v.jpg",
        desc: "Explore Los Santos em missões, corridas e caos urbano."
    },

    {
        id: 10,
        title: "The Witcher 3",
        category: "acao",
        genre: "RPG / Aventura",
        price: 23.99,
        discount: "-50%",
        art: "art-witcher",
        image: "assets/the-witcher-3.jpg",
        desc: "Uma jornada gigantesca em um mundo de fantasia sombria."
    },

    {
        id: 11,
        title: "Dark Souls III",
        category: "acao",
        genre: "RPG / Soulslike",
        price: 25.99,
        discount: "-25%",
        art: "art-dark",
        image: "assets/darksouls3.jpg",
        desc: "Combates intensos e chefes desafiadores."
    },

    {
        id: 12,
        title: "Sekiro: Shadows Die Twice",
        category: "acao",
        genre: "Ação / Soulslike",
        price: 29.99,
        discount: "-20%",
        art: "art-sekiro",
        image: "assets/sekiro-shadows-die-twice.jpg",
        desc: "Combates precisos em um Japão brutal e estilizado."
    },

    {
        id: 13,
        title: "Devil May Cry 5",
        category: "acao",
        genre: "Ação / Hack and Slash",
        price: 22.99,
        discount: "-45%",
        art: "art-dmc",
        image: "assets/devil-may-cry-5.jpg",
        desc: "Combate rápido, combos e muita ação estilosa."
    },

    {
        id: 14,
        title: "DOOM Eternal",
        category: "acao",
        genre: "FPS / Ação",
        price: 24.99,
        discount: "-40%",
        art: "art-doom",
        image: "assets/doometernal.jpg",
        desc: "FPS frenético com demônios e combate agressivo."
    },

    {
        id: 15,
        title: "Far Cry 6",
        category: "acao",
        genre: "FPS / Mundo aberto",
        price: 26.99,
        discount: "-35%",
        art: "art-farcry",
        image: "assets/far-cry-6.jpg",
        desc: "Lute em uma ilha tropical dominada por uma ditadura."
    },

    {
        id: 16,
        title: "Assassin's Creed Valhalla",
        category: "acao",
        genre: "Ação / RPG",
        price: 28.99,
        discount: "-30%",
        art: "art-ac",
        image: "assets/assvalhalla.jpg",
        desc: "Construa sua lenda viking em um enorme mundo aberto."
    },

    {
        id: 17,
        title: "Hogwarts Legacy",
        category: "acao",
        genre: "RPG / Aventura",
        price: 29.99,
        discount: "-15%",
        art: "art-hogwarts",
        image: "assets/hogwarts-legacy.jpg",
        desc: "Explore Hogwarts e domine magia em um mundo aberto."
    },

    {
        id: 18,
        title: "Baldur's Gate 3",
        category: "acao",
        genre: "RPG / Estratégia",
        price: 29.99,
        discount: "-10%",
        art: "art-bg3",
        image: "assets/baldurgate3.jpg",
        desc: "RPG profundo com escolhas, combate tático e narrativa."
    },

    {
        id: 19,
        title: "Monster Hunter: World",
        category: "acao",
        genre: "RPG / Ação",
        price: 23.99,
        discount: "-45%",
        art: "art-mhw",
        image: "assets/monster-hunter-world.jpg",
        desc: "Cace monstros gigantes e melhore seus equipamentos."
    },

    {
        id: 20,
        title: "Nioh 2",
        category: "acao",
        genre: "RPG / Soulslike",
        price: 25.99,
        discount: "-30%",
        art: "art-nioh",
        image: "assets/nioh-2.jpg",
        desc: "Samurais, yokais e combates exigentes."
    },

    {
        id: 21,
        title: "Resident Evil Village",
        category: "terror",
        genre: "Terror / Ação",
        price: 27.99,
        discount: "-30%",
        art: "art-rev",
        image: "assets/resident-evil-village.jpg",
        desc: "Terror, ação e mistérios em uma vila assustadora."
    },

    {
        id: 22,
        title: "Resident Evil 2",
        category: "terror",
        genre: "Terror / Survival",
        price: 24.99,
        discount: "-35%",
        art: "art-re2",
        image: "assets/resident-evil-2.jpg",
        desc: "Sobreviva a Raccoon City em um clássico renovado."
    },

    {
        id: 23,
        title: "Dead Space",
        category: "terror",
        genre: "Terror / Ficção científica",
        price: 28.99,
        discount: "-25%",
        art: "art-deadspace",
        image: "assets/dead-space.jpg",
        desc: "Terror espacial em corredores escuros e claustrofóbicos."
    },

    {
        id: 24,
        title: "Alien: Isolation",
        category: "terror",
        genre: "Terror / Survival",
        price: 21.99,
        discount: "-50%",
        art: "art-alien",
        image: "assets/alienisolation.jpg",
        desc: "Fuja de uma ameaça implacável em uma estação espacial."
    },

    {
        id: 25,
        title: "Amnesia: The Bunker",
        category: "terror",
        genre: "Terror / Survival",
        price: 22.99,
        discount: "-30%",
        art: "art-amnesia",
        image: "assets/amnesia.jpg",
        desc: "Sobrevivência aterrorizante dentro de um bunker."
    },

    {
        id: 26,
        title: "Phasmophobia",
        category: "terror",
        genre: "Terror / Cooperativo",
        price: 20.99,
        discount: "-15%",
        art: "art-phasmo",
        image: "assets/phasmophobia.jpg",
        desc: "Investigue locais assombrados com seus amigos."
    },

    {
        id: 27,
        title: "Sons of the Forest",
        category: "terror",
        genre: "Survival / Terror",
        price: 24.99,
        discount: "-20%",
        art: "art-sons",
        image: "assets/sons-of-the-forest.jpg",
        desc: "Construa, explore e sobreviva em uma ilha perigosa."
    },

    {
        id: 28,
        title: "The Forest",
        category: "terror",
        genre: "Survival / Terror",
        price: 19.99,
        discount: "-45%",
        art: "art-forest",
        image: "assets/the-forest.jpg",
        desc: "Sobreviva após um acidente em uma floresta hostil."
    },

    {
        id: 29,
        title: "Little Nightmares II",
        category: "terror",
        genre: "Terror / Plataforma",
        price: 23.99,
        discount: "-35%",
        art: "art-ln2",
        image: "assets/little-nightmares-ii.jpg",
        desc: "Uma aventura sombria cheia de criaturas perturbadoras."
    },

    {
        id: 30,
        title: "Dead by Daylight",
        category: "terror",
        genre: "Terror / Multiplayer",
        price: 21.99,
        discount: "-25%",
        art: "art-dbd",
        image: "assets/deadby.jpg",
        desc: "Caçador contra sobreviventes em partidas intensas."
    },

    {
        id: 31,
        title: "Hades",
        category: "indie",
        genre: "Indie / Roguelike",
        price: 22.99,
        discount: "-30%",
        art: "art-hades",
        image: "assets/hades.jpg",
        desc: "Escape do submundo em combates rápidos e viciantes."
    },

    {
        id: 32,
        title: "Cuphead",
        category: "indie",
        genre: "Indie / Plataforma",
        price: 19.99,
        discount: "-25%",
        art: "art-cuphead",
        image: "assets/cuphead.jpg",
        desc: "Chefes difíceis com visual inspirado em desenhos clássicos."
    },

    {
        id: 33,
        title: "Celeste",
        category: "indie",
        genre: "Indie / Plataforma",
        price: 19.99,
        discount: "-30%",
        art: "art-celeste",
        image: "assets/celest.jpg",
        desc: "Plataforma preciso com uma história emocionante."
    },

    {
        id: 34,
        title: "Stardew Valley",
        category: "indie",
        genre: "Indie / Simulação",
        price: 20.99,
        discount: "-15%",
        art: "art-stardew",
        image: "assets/stardew-valley.jpg",
        desc: "Cultive sua fazenda e construa uma nova vida."
    },

    {
        id: 35,
        title: "Terraria",
        category: "indie",
        genre: "Indie / Sandbox",
        price: 19.99,
        discount: "-20%",
        art: "art-terraria",
        image: "assets/terraria.jpg",
        desc: "Explore, construa e lute em um mundo 2D gigantesco."
    },

    {
        id: 36,
        title: "Dead Cells",
        category: "indie",
        genre: "Indie / Roguelike",
        price: 21.99,
        discount: "-25%",
        art: "art-deadcells",
        image: "assets/dead-cells.jpg",
        desc: "Ação rápida em fases desafiadoras e cheias de segredos."
    },

    {
        id: 37,
        title: "Ori and the Will of the Wisps",
        category: "indie",
        genre: "Indie / Metroidvania",
        price: 22.99,
        discount: "-35%",
        art: "art-ori",
        image: "assets/ori-and-the-will-of-the-wisps.jpg",
        desc: "Uma jornada bonita, emocional e cheia de exploração."
    },

    {
        id: 38,
        title: "Undertale",
        category: "indie",
        genre: "Indie / RPG",
        price: 19.99,
        discount: "-20%",
        art: "art-undertale",
        image: "assets/undertale.jpg",
        desc: "RPG criativo onde suas decisões realmente importam."
    },

    {
        id: 39,
        title: "Risk of Rain 2",
        category: "indie",
        genre: "Indie / Roguelike",
        price: 22.99,
        discount: "-30%",
        art: "art-ror2",
        image: "assets/risk-of-rain-2.jpg",
        desc: "Ação cooperativa e progressão em mundos alienígenas."
    },

    {
        id: 40,
        title: "Dave the Diver",
        category: "indie",
        genre: "Indie / Aventura",
        price: 21.99,
        discount: "-15%",
        art: "art-dave",
        image: "assets/davethediver  .jpg",
        desc: "Mergulho, pesca e gerenciamento em uma aventura relaxante."
    },

    {
        id: 41,
        title: "Forza Horizon 5",
        category: "acao",
        genre: "Corrida / Mundo aberto",
        price: 29.99,
        discount: "-20%",
        art: "art-forza",
        image: "assets/forza-horizon-5.jpg",
        desc: "Corridas em um enorme mapa inspirado no México."
    },

    {
        id: 42,
        title: "Mortal Kombat 1",
        category: "acao",
        genre: "Luta / Ação",
        price: 27.99,
        discount: "-30%",
        art: "art-mk",
        image: "assets/mortal-kombat-1.jpg",
        desc: "Combates brutais com elenco clássico e novos sistemas."
    },

    {
        id: 43,
        title: "Tekken 8",
        category: "acao",
        genre: "Luta / Ação",
        price: 29.99,
        discount: "-20%",
        art: "art-tekken",
        image: "assets/tekken-8.jpg",
        desc: "Lutas modernas com gráficos e golpes espetaculares."
    },

    {
        id: 44,
        title: "Street Fighter 6",
        category: "acao",
        genre: "Luta / Ação",
        price: 26.99,
        discount: "-25%",
        art: "art-sf",
        image: "assets/street-fighter-6.jpg",
        desc: "Um dos maiores jogos de luta da atualidade."
    },

    {
        id: 45,
        title: "Dying Light 2",
        category: "terror",
        genre: "Ação / Survival",
        price: 25.99,
        discount: "-35%",
        art: "art-dl2",
        image: "assets/dying-light-2.jpg",
        desc: "Parkour e sobrevivência em uma cidade dominada por infectados."
    },

    {
        id: 46,
        title: "Subnautica",
        category: "indie",
        genre: "Survival / Exploração",
        price: 21.99,
        discount: "-30%",
        art: "art-subnautica",
        image: "assets/subnautica.jpg",
        desc: "Explore um oceano alienígena e sobreviva nas profundezas."
    },

    {
        id: 47,
        title: "No Man's Sky",
        category: "indie",
        genre: "Exploração / Survival",
        price: 24.99,
        discount: "-40%",
        art: "art-nms",
        image: "assets/no-mans-sky.jpg",
        desc: "Explore planetas e sistemas gerados proceduralmente."
    },

    {
        id: 48,
        title: "Valheim",
        category: "indie",
        genre: "Survival / Aventura",
        price: 19.99,
        discount: "-25%",
        art: "art-valheim",
        image: "assets/valheim.jpg",
        desc: "Sobrevivência viking com construção e exploração cooperativa."
    }

];


// ======================================================
// VARIÁVEIS
// ======================================================

let cart = [];

let activeSlide = 0;

let toastTimer = null;

let paymentBrickController = null;

let mercadoPago = null;

let bricksBuilder = null;

let paymentLoading = false;


// ======================================================
// DINHEIRO
// ======================================================

const money = value => {

    return Number(value).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

};


// ======================================================
// PRODUTOS
// ======================================================

function renderGames(filter = "all") {

    const grid =
        document.querySelector("#gamesGrid");

    if (!grid) {
        return;
    }

    const list =
        filter === "all"
            ? games
            : games.filter(
                game =>
                    game.category === filter
            );

    grid.innerHTML =
        list.map((game, index) => `

            <article
                class="game-card reveal-up"
                style="
                    transition-delay:
                    ${Math.min(index * 0.05, 0.25)}s
                "
            >

                <div
                    class="game-art ${game.art}"
                    ${
                        game.image
                            ? `
                                style="
                                    background-image:
                                    linear-gradient(
                                        180deg,
                                        transparent 35%,
                                        rgba(0,0,0,.82)
                                    ),
                                    url('${game.image}');
                                    background-size:cover;
                                    background-position:center;
                                "
                            `
                            : ""
                    }
                >

                    <span class="discount">
                        ${game.discount}
                    </span>

                    <strong>
                        ${game.title}
                    </strong>

                </div>


                <div class="game-body">

                    <div class="game-meta">

                        <span>
                            ${game.genre}
                        </span>

                        <span>
                            PC
                        </span>

                    </div>


                    <h3>
                        ${game.title}
                    </h3>


                    <p class="game-desc">
                        ${game.desc}
                    </p>


                    <div class="price-row">

                        <span class="price">
                            ${money(game.price)}
                        </span>

                        <button
                            class="add-btn"
                            onclick="addToCart(${game.id})"
                            title="Adicionar ao carrinho"
                        >
                            +
                        </button>

                    </div>

                </div>

            </article>

        `).join("");

    observeReveals();
}


// ======================================================
// ADICIONAR AO CARRINHO
// ======================================================

function addToCart(id) {

    const game =
        games.find(
            game => game.id === id
        );

    if (!game) {
        return;
    }

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {

        existing.qty++;

    } else {

        cart.push({
            ...game,
            qty: 1
        });

    }

    updateCart();

    showToast(
        `${game.title} adicionado ao carrinho`
    );
}


// ======================================================
// REMOVER
// ======================================================

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    updateCart();
}


// ======================================================
// ATUALIZAR CARRINHO
// ======================================================

function updateCart() {

    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );

    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.qty,
            0
        );


    const cartCount =
        document.querySelector("#cartCount");

    const summaryItems =
        document.querySelector("#summaryItems");

    const subtotal =
        document.querySelector("#subtotal");

    const totalElement =
        document.querySelector("#total");

    const checkoutTotal =
        document.querySelector("#checkoutTotal");


    if (cartCount) {
        cartCount.textContent = count;
    }

    if (summaryItems) {
        summaryItems.textContent = count;
    }

    if (subtotal) {
        subtotal.textContent = money(total);
    }

    if (totalElement) {
        totalElement.textContent = money(total);
    }

    if (checkoutTotal) {
        checkoutTotal.textContent = money(total);
    }


    const box =
        document.querySelector("#cartItems");

    const empty =
        document.querySelector("#cartEmpty");


    if (box && empty) {

        if (!cart.length) {

            box.innerHTML = "";

            empty.style.display =
                "flex";

        } else {

            empty.style.display =
                "none";


            box.innerHTML =
                cart.map(item => `

                    <div class="cart-item">

                        <div
                            class="cart-thumb ${item.art}"
                            ${
                                item.image
                                    ? `
                                        style="
                                            background-image:
                                            url('${item.image}');
                                            background-size:cover;
                                            background-position:center;
                                        "
                                    `
                                    : ""
                            }
                        ></div>


                        <div>

                            <h4>
                                ${item.title}
                            </h4>

                            <small>
                                ${item.qty}
                                ×
                                ${money(item.price)}
                            </small>

                        </div>


                        <button
                            class="remove-item"
                            onclick="removeFromCart(${item.id})"
                        >
                            ×
                        </button>

                    </div>

                `).join("");

        }

    }


    const checkoutItems =
        document.querySelector(
            "#checkoutItems"
        );

    if (checkoutItems) {

        checkoutItems.innerHTML =
            cart.map(item => `

                <div class="checkout-line">

                    <span>
                        ${item.qty}×
                        ${item.title}
                    </span>

                    <strong>
                        ${
                            money(
                                item.qty *
                                item.price
                            )
                        }
                    </strong>

                </div>

            `).join("");

    }

}


// ======================================================
// TOAST
// ======================================================

function showToast(text) {

    const toast =
        document.querySelector("#toast");

    if (!toast) {
        return;
    }

    toast.textContent =
        text;

    toast.classList.add(
        "active"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            2500
        );

}


// ======================================================
// CARROSSEL
// ======================================================

function setSlide(index) {

    const slides =
        [
            ...document.querySelectorAll(
                ".showcase-panel"
            )
        ];

    const dots =
        [
            ...document.querySelectorAll(
                ".dot"
            )
        ];

    if (!slides.length) {
        return;
    }

    activeSlide =
        (
            index +
            slides.length
        ) %
        slides.length;


    slides.forEach(
        (slide, i) => {

            slide.classList.toggle(
                "active",
                i === activeSlide
            );

        }
    );


    dots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === activeSlide
            );

        }
    );

}


// ======================================================
// ABRIR / FECHAR CARRINHO
// ======================================================

const cartDrawer =
    document.querySelector(
        "#cartDrawer"
    );

const overlay =
    document.querySelector(
        "#overlay"
    );

const checkoutModal =
    document.querySelector(
        "#checkoutModal"
    );


function openCart() {

    if (cartDrawer) {

        cartDrawer.classList.add(
            "active"
        );

    }

    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }

    document.body.classList.add(
        "locked"
    );

}


function closeCart() {

    if (cartDrawer) {

        cartDrawer.classList.remove(
            "active"
        );

    }

    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

    document.body.classList.remove(
        "locked"
    );

}


// ======================================================
// MENSAGEM DO PAGAMENTO
// ======================================================

function paymentMessage(
    html,
    type = "normal"
) {

    const box =
        document.querySelector(
            "#paymentMessage"
        );

    if (!box) {
        return;
    }

    box.style.display =
        "block";

    box.style.padding =
        "18px";

    box.style.borderRadius =
        "12px";

    box.style.background =
        "rgba(0, 20, 40, .8)";

    box.style.border =
        type === "error"
            ? "1px solid #ff4c6a"
            : "1px solid #18a8ff";

    box.innerHTML =
        html;

}


// ======================================================
// PEGAR PUBLIC KEY
// ======================================================

async function carregarMercadoPago() {

    try {

        const response =
            await fetch(
                "/api/mercadopago/public-key"
            );

        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.error ||
                "Erro ao carregar Mercado Pago."
            );

        }


        if (!data.publicKey) {

            throw new Error(
                "Public Key não encontrada."
            );

        }


        if (
            typeof MercadoPago ===
            "undefined"
        ) {

            throw new Error(
                "SDK do Mercado Pago não carregou."
            );

        }


        mercadoPago =
            new MercadoPago(
                data.publicKey,
                {
                    locale: "pt-BR"
                }
            );


        bricksBuilder =
            mercadoPago.bricks();


        console.log(
            "✅ Mercado Pago inicializado"
        );


        return true;

    }

    catch (error) {

        console.error(
            "Erro Mercado Pago:",
            error
        );

        paymentMessage(
            `
                <strong>
                    ❌ Não foi possível carregar o Mercado Pago.
                </strong>

                <br><br>

                ${error.message}
            `,
            "error"
        );

        return false;

    }

}


// ======================================================
// DESTRUIR BRICK ANTIGO
// ======================================================

async function destruirPaymentBrick() {

    if (!paymentBrickController) {
        return;
    }

    try {

        await paymentBrickController.unmount();

    }

    catch (error) {

        console.log(
            "Brick já removido."
        );

    }

    paymentBrickController =
        null;

}


// ======================================================
// CRIAR PAYMENT BRICK
// ======================================================

async function abrirPaymentBrick() {

    if (paymentLoading) {
        return;
    }

    paymentLoading = true;


    try {

        if (!cart.length) {

            showToast(
                "Seu carrinho está vazio."
            );

            return;
        }


        // ==============================================
        // PEGA O TOTAL OFICIAL DO SERVIDOR
        // ==============================================

        const cartResponse =
            await fetch(
                "/api/carrinho",
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            cart:
                                cart.map(
                                    item => ({

                                        id:
                                            item.id,

                                        qty:
                                            item.qty

                                    })
                                )

                        })

                }
            );


        const cartData =
            await cartResponse.json();


        if (!cartResponse.ok) {

            throw new Error(
                cartData.error ||
                "Não foi possível calcular o pedido."
            );

        }


        const totalOficial =
            Number(
                cartData.total
            );


        const checkoutTotal =
            document.querySelector(
                "#checkoutTotal"
            );

        if (checkoutTotal) {

            checkoutTotal.textContent =
                money(
                    totalOficial
                );

        }


        // ==============================================
        // INICIALIZA MP
        // ==============================================

        if (!mercadoPago) {

            const carregou =
                await carregarMercadoPago();

            if (!carregou) {
                return;
            }

        }


        await destruirPaymentBrick();


        const container =
            document.querySelector(
                "#paymentBrick_container"
            );


        if (!container) {

            throw new Error(
                "paymentBrick_container não encontrado no HTML."
            );

        }


        container.innerHTML =
            "";


        // ==============================================
        // CONFIGURAÇÃO DO PAYMENT BRICK
        // ==============================================

       const settings = {

    initialization: {
        amount: Number(totalOficial)
    },

    callbacks: {

        onReady: () => {

            console.log(
                "✅ PAYMENT BRICK CARREGOU"
            );

            paymentMessage(
                `
                    ✅ Mercado Pago carregado.

                    <br><br>

                    Total:
                    <strong>
                        ${money(totalOficial)}
                    </strong>
                `
            );

        },

        onSubmit: async ({
            selectedPaymentMethod,
            formData
        }) => {

            console.log(
                "Método:",
                selectedPaymentMethod
            );

            console.log(
                "FormData:",
                formData
            );

            const response =
                await fetch(
                    "/process_payment",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify({

                                formData,

                                cart:
                                    cart.map(
                                        item => ({
                                            id:
                                                item.id,

                                            qty:
                                                item.qty
                                        })
                                    )

                            })
                    }
                );


            const result =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    result.error ||
                    "Erro ao processar pagamento."
                );

            }


            mostrarResultadoPagamento(
                result
            );


            return result;

        },

        onError: error => {

            console.error(
                "❌ ERRO REAL DO PAYMENT BRICK:"
            );

            console.error(
                error
            );

            paymentMessage(
                `
                    ❌ Mercado Pago não conseguiu
                    carregar o checkout.

                    <br><br>

                    Abra o Console para ver o erro.
                `,
                "error"
            );

        }

    }

};


           customization: {
    paymentMethods: {
        creditCard: "all"
    }
},


            callbacks: {

                // ======================================
                // BRICK PRONTO
                // ======================================

                onReady: () => {

                    console.log(
                        "✅ Payment Brick pronto"
                    );

                    paymentMessage(
                        `
                            🔒 Pagamento protegido pelo
                            <strong>Mercado Pago</strong>.

                            <br>

                            Total:
                            <strong>
                                ${money(totalOficial)}
                            </strong>
                        `
                    );

                },


                // ======================================
                // ENVIAR PAGAMENTO
                // ======================================

                onSubmit: async ({
                    selectedPaymentMethod,
                    formData
                }) => {

                    console.log(
                        "Método selecionado:",
                        selectedPaymentMethod
                    );


                    try {

                        paymentMessage(
                            `
                                ⏳ Processando pagamento...

                                <br><br>

                                Não feche esta página.
                            `
                        );


                        const response =
                            await fetch(
                                "/process_payment",
                                {

                                    method:
                                        "POST",

                                    headers: {

                                        "Content-Type":
                                            "application/json"

                                    },

                                    body:
                                        JSON.stringify({

                                            formData:
                                                formData,

                                            cart:
                                                cart.map(
                                                    item => ({

                                                        id:
                                                            item.id,

                                                        qty:
                                                            item.qty

                                                    })
                                                )

                                        })

                                }
                            );


                        const result =
                            await response.json();


                        console.log(
                            "Pagamento:",
                            result
                        );


                        if (!response.ok) {

                            throw new Error(
                                result.error ||
                                "Pagamento não concluído."
                            );

                        }


                        mostrarResultadoPagamento(
                            result
                        );


                        return result;

                    }

                    catch (error) {

                        console.error(
                            error
                        );


                        paymentMessage(
                            `
                                <strong>
                                    ❌ Não foi possível processar o pagamento.
                                </strong>

                                <br><br>

                                ${error.message}
                            `,
                            "error"
                        );


                        throw error;

                    }

                },


                // ======================================
                // ERRO DO BRICK
                // ======================================

                onError: error => {

                    console.error(
                        "Erro Payment Brick:",
                        error
                    );

                }

            }

        };


        paymentBrickController =
            await bricksBuilder.create(
                "payment",
                "paymentBrick_container",
                settings
            );

    }

    catch (error) {

        console.error(
            "Erro ao abrir pagamento:",
            error
        );


        paymentMessage(
            `
                <strong>
                    ❌ Erro ao abrir pagamento
                </strong>

                <br><br>

                ${error.message}
            `,
            "error"
        );

    }

    finally {

        paymentLoading =
            false;

    }

}


// ======================================================
// RESULTADO DO PAGAMENTO
// ======================================================

function mostrarResultadoPagamento(
    result
) {

    // ==================================================
    // PIX
    // ==================================================

    if (
        result.qrCode ||
        result.qrCodeBase64
    ) {

        let qrImage = "";

        if (result.qrCodeBase64) {

            qrImage = `

                <img
                    src="data:image/png;base64,${result.qrCodeBase64}"
                    alt="QR Code PIX"
                    style="
                        width:220px;
                        max-width:100%;
                        background:white;
                        padding:10px;
                        border-radius:12px;
                        margin:15px 0;
                    "
                >

            `;

        }


        paymentMessage(
            `
                <h3>
                    💠 PIX gerado!
                </h3>

                <p>
                    Escaneie o QR Code ou copie
                    o código PIX.
                </p>

                ${qrImage}

                ${
                    result.qrCode
                        ? `
                            <textarea
                                id="pixCode"
                                readonly
                                style="
                                    width:100%;
                                    min-height:90px;
                                    padding:12px;
                                    border-radius:10px;
                                    box-sizing:border-box;
                                "
                            >${result.qrCode}</textarea>

                            <button
                                type="button"
                                onclick="copiarPix()"
                                style="
                                    margin-top:10px;
                                    width:100%;
                                    padding:13px;
                                    border:0;
                                    border-radius:10px;
                                    cursor:pointer;
                                    font-weight:bold;
                                "
                            >
                                Copiar código PIX
                            </button>
                        `
                        : ""
                }

                <p>
                    Valor:
                    <strong>
                        ${money(result.total)}
                    </strong>
                </p>

                <p>
                    Status:
                    <strong>
                        ${traduzirStatus(result.status)}
                    </strong>
                </p>
            `
        );

        return;

    }


    // ==================================================
    // BOLETO
    // ==================================================

    if (result.ticketUrl) {

        paymentMessage(
            `
                <h3>
                    ▤ Boleto gerado!
                </h3>

                <p>
                    Valor:
                    <strong>
                        ${money(result.total)}
                    </strong>
                </p>

                <a
                    href="${result.ticketUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                        display:inline-block;
                        padding:14px 20px;
                        background:#18a8ff;
                        color:white;
                        text-decoration:none;
                        border-radius:10px;
                        font-weight:bold;
                    "
                >
                    Abrir boleto
                </a>

                <p>
                    Status:
                    <strong>
                        ${traduzirStatus(result.status)}
                    </strong>
                </p>
            `
        );

        return;

    }


    // ==================================================
    // CARTÃO APROVADO
    // ==================================================

    if (result.status === "approved") {

        paymentMessage(
            `
                <h3>
                    ✅ Pagamento aprovado!
                </h3>

                <p>
                    Sua compra foi confirmada.
                </p>

                <p>
                    Valor:
                    <strong>
                        ${money(result.total)}
                    </strong>
                </p>

                <p>
                    Pagamento:
                    <strong>
                        #${result.id}
                    </strong>
                </p>
            `
        );

        return;

    }


    // ==================================================
    // PENDENTE
    // ==================================================

    if (
        result.status === "pending" ||
        result.status === "in_process"
    ) {

        paymentMessage(
            `
                <h3>
                    ⏳ Pagamento pendente
                </h3>

                <p>
                    Estamos aguardando a confirmação
                    do Mercado Pago.
                </p>

                <p>
                    Valor:
                    <strong>
                        ${money(result.total)}
                    </strong>
                </p>
            `
        );

        return;

    }


    // ==================================================
    // RECUSADO
    // ==================================================

    paymentMessage(
        `
            <h3>
                ❌ Pagamento não aprovado
            </h3>

            <p>
                Status:
                <strong>
                    ${traduzirStatus(result.status)}
                </strong>
            </p>

            <p>
                ${
                    result.statusDetail ||
                    "Tente novamente ou escolha outra forma de pagamento."
                }
            </p>
        `,
        "error"
    );

}


// ======================================================
// COPIAR PIX
// ======================================================

async function copiarPix() {

    const field =
        document.querySelector(
            "#pixCode"
        );

    if (!field) {
        return;
    }

    try {

        await navigator.clipboard.writeText(
            field.value
        );

        showToast(
            "Código PIX copiado!"
        );

    }

    catch (error) {

        field.select();

        document.execCommand(
            "copy"
        );

        showToast(
            "Código PIX copiado!"
        );

    }

}


// ======================================================
// TRADUZ STATUS
// ======================================================

function traduzirStatus(status) {

    const statuses = {

        approved:
            "Aprovado",

        pending:
            "Pendente",

        in_process:
            "Em processamento",

        rejected:
            "Recusado",

        cancelled:
            "Cancelado",

        refunded:
            "Reembolsado"

    };


    return (
        statuses[status] ||
        status ||
        "Desconhecido"
    );

}


// ======================================================
// EVENTOS
// ======================================================

const prevSlide =
    document.querySelector(
        "#prevSlide"
    );

if (prevSlide) {

    prevSlide.addEventListener(
        "click",
        () =>
            setSlide(
                activeSlide - 1
            )
    );

}


const nextSlide =
    document.querySelector(
        "#nextSlide"
    );

if (nextSlide) {

    nextSlide.addEventListener(
        "click",
        () =>
            setSlide(
                activeSlide + 1
            )
    );

}


document
    .querySelectorAll(".dot")
    .forEach(dot => {

        dot.addEventListener(
            "click",
            () => {

                setSlide(
                    Number(
                        dot.dataset.index
                    )
                );

            }
        );

    });


setInterval(
    () => {

        setSlide(
            activeSlide + 1
        );

    },
    5000
);


// ======================================================
// FILTROS
// ======================================================

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                renderGames(
                    button.dataset.filter
                );

            }
        );

    });


// ======================================================
// BOTÕES CARRINHO
// ======================================================

const openCartButton =
    document.querySelector(
        "#openCart"
    );

if (openCartButton) {

    openCartButton.addEventListener(
        "click",
        openCart
    );

}


const closeCartButton =
    document.querySelector(
        "#closeCart"
    );

if (closeCartButton) {

    closeCartButton.addEventListener(
        "click",
        closeCart
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        closeCart
    );

}


// ======================================================
// IR PARA PAGAMENTO
// ======================================================

const checkoutButton =
    document.querySelector(
        "#checkoutBtn"
    );

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        async () => {

            if (!cart.length) {

                showToast(
                    "Adicione pelo menos um jogo."
                );

                return;
            }


            closeCart();


            if (checkoutModal) {

                checkoutModal.classList.add(
                    "active"
                );

            }


            document.body.classList.add(
                "locked"
            );


            paymentMessage(
                "⏳ Carregando formas de pagamento..."
            );


            await abrirPaymentBrick();

        }
    );

}


// ======================================================
// FECHAR CHECKOUT
// ======================================================

const closeCheckoutButton =
    document.querySelector(
        "#closeCheckout"
    );

if (closeCheckoutButton) {

    closeCheckoutButton.addEventListener(
        "click",
        async () => {

            if (checkoutModal) {

                checkoutModal.classList.remove(
                    "active"
                );

            }


            document.body.classList.remove(
                "locked"
            );


            await destruirPaymentBrick();

        }
    );

}


// ======================================================
// PESQUISA
// ======================================================

const searchButton =
    document.querySelector(
        "#searchBtn"
    );

if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            const query =
                prompt(
                    "Digite o nome do jogo:"
                );


            if (!query) {
                return;
            }


            const found =
                games.find(
                    game =>
                        game.title
                            .toLowerCase()
                            .includes(
                                query.toLowerCase()
                            )
                );


            if (found) {

                const jogos =
                    document.querySelector(
                        "#jogos"
                    );


                if (jogos) {

                    jogos.scrollIntoView({
                        behavior:
                            "smooth"
                    });

                }


                showToast(
                    `Encontrado: ${found.title}`
                );

            }

            else {

                showToast(
                    "Nenhum jogo encontrado."
                );

            }

        }
    );

}


// ======================================================
// ANIMAÇÕES
// ======================================================

function observeReveals() {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList.add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    document
        .querySelectorAll(
            ".reveal-left, .reveal-right, .reveal-up"
        )
        .forEach(element => {

            if (
                !element.classList.contains(
                    "visible"
                )
            ) {

                observer.observe(
                    element
                );

            }

        });

}


// ======================================================
// INICIALIZA SITE
// ======================================================

renderGames();

updateCart();

observeReveals();

console.log(
    "🎮 BlueVault Games carregado"
);
