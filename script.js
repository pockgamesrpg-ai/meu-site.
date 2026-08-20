const games = [
  {id:1,title:"God of War",category:"acao",genre:"Ação / Aventura",price:29.99,discount:"-20%",art:"art-gow",image:"assets/god-of-war.jpg",desc:"Uma aventura épica de ação e narrativa."},
  {id:2,title:"The Last of Us",category:"acao",genre:"Ação / História",price:27.99,discount:"-15%",art:"art-tlou",image:"assets/the-last-of-us.png",desc:"Sobrevivência, tensão e uma história marcante."},
  {id:3,title:"Hollow Knight",category:"indie",genre:"Indie / Metroidvania",price:19.99,discount:"-30%",art:"art-hk",image:"assets/hollow-knight.jpg",desc:"Explore um reino sombrio e misterioso."},
  {id:4,title:"Outlast",category:"terror",genre:"Terror / Survival",price:21.99,discount:"-35%",art:"art-outlast",image:"assets/outlast.jpg",desc:"Terror em primeira pessoa com muita tensão."},
  {id:5,title:"Cyberpunk 2077",category:"acao",genre:"RPG / Ação",price:29.99,discount:"-25%",art:"art-cp",image:"assets/cyberpunk-2077.jpg",desc:"Explore uma metrópole futurista gigantesca."},
  {id:6,title:"Red Dead Redemption 2",category:"acao",genre:"Ação / Mundo aberto",price:28.99,discount:"-20%",art:"art-rdr",image:"assets/red-dead-redemption-2.jpg",desc:"Um mundo aberto cinematográfico no velho oeste."},
  {id:7,title:"Elden Ring",category:"acao",genre:"RPG / Soulslike",price:29.99,discount:"-10%",art:"art-elden",image:"assets/elden-ring.jpg",desc:"Descubra um vasto mundo de fantasia e desafios."},
  {id:8,title:"Resident Evil 4",category:"terror",genre:"Terror / Ação",price:26.99,discount:"-18%",art:"art-re",image:"assets/resident-evil-4.jpg",desc:"Sobrevivência e ação em um clássico moderno."},
  {id:9,title:"Grand Theft Auto V",category:"acao",genre:"Ação / Mundo aberto",price:24.99,discount:"-35%",art:"art-gta",image:"assets/grand-theft-auto-v.jpg",desc:"Explore Los Santos em missões, corridas e caos urbano."},
  {id:10,title:"The Witcher 3",category:"acao",genre:"RPG / Aventura",price:23.99,discount:"-50%",art:"art-witcher",image:"assets/the-witcher-3.jpg",desc:"Uma jornada gigantesca em um mundo de fantasia sombria."},
  {id:11,title:"Dark Souls III",category:"acao",genre:"RPG / Soulslike",price:25.99,discount:"-25%",art:"art-dark",image:"assets/darksouls3.jpg",desc:"Combates intensos e chefes desafiadores."},
  {id:12,title:"Sekiro: Shadows Die Twice",category:"acao",genre:"Ação / Soulslike",price:29.99,discount:"-20%",art:"art-sekiro",image:"assets/sekiro-shadows-die-twice.jpg",desc:"Combates precisos em um Japão brutal e estilizado."},
  {id:13,title:"Devil May Cry 5",category:"acao",genre:"Ação / Hack and Slash",price:22.99,discount:"-45%",art:"art-dmc",image:"assets/devil-may-cry-5.jpg",desc:"Combate rápido, combos e muita ação estilosa."},
  {id:14,title:"DOOM Eternal",category:"acao",genre:"FPS / Ação",price:24.99,discount:"-40%",art:"art-doom",image:"assets/doometernal.jpg",desc:"FPS frenético com demônios e combate agressivo."},
  {id:15,title:"Far Cry 6",category:"acao",genre:"FPS / Mundo aberto",price:26.99,discount:"-35%",art:"art-farcry",image:"assets/far-cry-6.jpg",desc:"Lute em uma ilha tropical dominada por uma ditadura."},
  {id:16,title:"Assassin's Creed Valhalla",category:"acao",genre:"Ação / RPG",price:28.99,discount:"-30%",art:"art-ac",image:"assets/assvalhalla.jpg",desc:"Construa sua lenda viking em um enorme mundo aberto."},
  {id:17,title:"Hogwarts Legacy",category:"acao",genre:"RPG / Aventura",price:29.99,discount:"-15%",art:"art-hogwarts",image:"assets/hogwarts-legacy.jpg",desc:"Explore Hogwarts e domine magia em um mundo aberto."},
  {id:18,title:"Baldur's Gate 3",category:"acao",genre:"RPG / Estratégia",price:29.99,discount:"-10%",art:"art-bg3",image:"assets/baldurgate3.jpg",desc:"RPG profundo com escolhas, combate tático e narrativa."},
  {id:19,title:"Monster Hunter: World",category:"acao",genre:"RPG / Ação",price:23.99,discount:"-45%",art:"art-mhw",image:"assets/monster-hunter-world.jpg",desc:"Cace monstros gigantes e melhore seus equipamentos."},
  {id:20,title:"Nioh 2",category:"acao",genre:"RPG / Soulslike",price:25.99,discount:"-30%",art:"art-nioh",image:"assets/nioh-2.jpg",desc:"Samurais, yokais e combates exigentes."},
  {id:21,title:"Resident Evil Village",category:"terror",genre:"Terror / Ação",price:27.99,discount:"-30%",art:"art-rev",image:"assets/resident-evil-village.jpg",desc:"Terror, ação e mistérios em uma vila assustadora."},
  {id:22,title:"Resident Evil 2",category:"terror",genre:"Terror / Survival",price:24.99,discount:"-35%",art:"art-re2",image:"assets/resident-evil-2.jpg",desc:"Sobreviva a Raccoon City em um clássico renovado."},
  {id:23,title:"Dead Space",category:"terror",genre:"Terror / Ficção científica",price:28.99,discount:"-25%",art:"art-deadspace",image:"assets/dead-space.jpg",desc:"Terror espacial em corredores escuros e claustrofóbicos."},
  {id:24,title:"Alien: Isolation",category:"terror",genre:"Terror / Survival",price:21.99,discount:"-50%",art:"art-alien",image:"assets/alienisolation.jpg",desc:"Fuja de uma ameaça implacável em uma estação espacial."},
  {id:25,title:"Amnesia: The Bunker",category:"terror",genre:"Terror / Survival",price:22.99,discount:"-30%",art:"art-amnesia",image:"assets/amnesia.jpg",desc:"Sobrevivência aterrorizante dentro de um bunker."},
  {id:26,title:"Phasmophobia",category:"terror",genre:"Terror / Cooperativo",price:20.99,discount:"-15%",art:"art-phasmo",image:"assets/phasmophobia.jpg",desc:"Investigue locais assombrados com seus amigos."},
  {id:27,title:"Sons of the Forest",category:"terror",genre:"Survival / Terror",price:24.99,discount:"-20%",art:"art-sons",image:"assets/sons-of-the-forest.jpg",desc:"Construa, explore e sobreviva em uma ilha perigosa."},
  {id:28,title:"The Forest",category:"terror",genre:"Survival / Terror",price:19.99,discount:"-45%",art:"art-forest",image:"assets/the-forest.jpg",desc:"Sobreviva após um acidente em uma floresta hostil."},
  {id:29,title:"Little Nightmares II",category:"terror",genre:"Terror / Plataforma",price:23.99,discount:"-35%",art:"art-ln2",image:"assets/little-nightmares-ii.jpg",desc:"Uma aventura sombria cheia de criaturas perturbadoras."},
  {id:30,title:"Dead by Daylight",category:"terror",genre:"Terror / Multiplayer",price:21.99,discount:"-25%",art:"art-dbd",image:"assets/deadby.jpg",desc:"Caçador contra sobreviventes em partidas intensas."},
  {id:31,title:"Hades",category:"indie",genre:"Indie / Roguelike",price:22.99,discount:"-30%",art:"art-hades",image:"assets/hades.jpg",desc:"Escape do submundo em combates rápidos e viciantes."},
  {id:32,title:"Cuphead",category:"indie",genre:"Indie / Plataforma",price:19.99,discount:"-25%",art:"art-cuphead",image:"assets/cuphead.jpg",desc:"Chefes difíceis com visual inspirado em desenhos clássicos."},
  {id:33,title:"Celeste",category:"indie",genre:"Indie / Plataforma",price:19.99,discount:"-30%",art:"art-celeste",image:"assets/celest.jpg",desc:"Plataforma preciso com uma história emocionante."},
  {id:34,title:"Stardew Valley",category:"indie",genre:"Indie / Simulação",price:20.99,discount:"-15%",art:"art-stardew",image:"assets/stardew-valley.jpg",desc:"Cultive sua fazenda e construa uma nova vida."},
  {id:35,title:"Terraria",category:"indie",genre:"Indie / Sandbox",price:19.99,discount:"-20%",art:"art-terraria",image:"assets/terraria.jpg",desc:"Explore, construa e lute em um mundo 2D gigantesco."},
  {id:36,title:"Dead Cells",category:"indie",genre:"Indie / Roguelike",price:21.99,discount:"-25%",art:"art-deadcells",image:"assets/dead-cells.jpg",desc:"Ação rápida em fases desafiadoras e cheias de segredos."},
  {id:37,title:"Ori and the Will of the Wisps",category:"indie",genre:"Indie / Metroidvania",price:22.99,discount:"-35%",art:"art-ori",image:"assets/ori-and-the-will-of-the-wisps.jpg",desc:"Uma jornada bonita, emocional e cheia de exploração."},
  {id:38,title:"Undertale",category:"indie",genre:"Indie / RPG",price:19.99,discount:"-20%",art:"art-undertale",image:"assets/undertale.jpg",desc:"RPG criativo onde suas decisões realmente importam."},
  {id:39,title:"Risk of Rain 2",category:"indie",genre:"Indie / Roguelike",price:22.99,discount:"-30%",art:"art-ror2",image:"assets/risk-of-rain-2.jpg",desc:"Ação cooperativa e progressão em mundos alienígenas."},
  {id:40,title:"Dave the Diver",category:"indie",genre:"Indie / Aventura",price:21.99,discount:"-15%",art:"art-dave",image:"assets/davethediver  .jpg",desc:"Mergulho, pesca e gerenciamento em uma aventura relaxante."},
  {id:41,title:"Forza Horizon 5",category:"acao",genre:"Corrida / Mundo aberto",price:29.99,discount:"-20%",art:"art-forza",image:"assets/forza-horizon-5.jpg",desc:"Corridas em um enorme mapa inspirado no México."},
  {id:42,title:"Mortal Kombat 1",category:"acao",genre:"Luta / Ação",price:27.99,discount:"-30%",art:"art-mk",image:"assets/mortal-kombat-1.jpg",desc:"Combates brutais com elenco clássico e novos sistemas."},
  {id:43,title:"Tekken 8",category:"acao",genre:"Luta / Ação",price:29.99,discount:"-20%",art:"art-tekken",image:"assets/tekken-8.jpg",desc:"Lutas modernas com gráficos e golpes espetaculares."},
  {id:44,title:"Street Fighter 6",category:"acao",genre:"Luta / Ação",price:26.99,discount:"-25%",art:"art-sf",image:"assets/street-fighter-6.jpg",desc:"Um dos maiores jogos de luta da atualidade."},
  {id:45,title:"Dying Light 2",category:"terror",genre:"Ação / Survival",price:25.99,discount:"-35%",art:"art-dl2",image:"assets/dying-light-2.jpg",desc:"Parkour e sobrevivência em uma cidade dominada por infectados."},
  {id:46,title:"Subnautica",category:"indie",genre:"Survival / Exploração",price:21.99,discount:"-30%",art:"art-subnautica",image:"assets/subnautica.jpg",desc:"Explore um oceano alienígena e sobreviva nas profundezas."},
  {id:47,title:"No Man's Sky",category:"indie",genre:"Exploração / Survival",price:24.99,discount:"-40%",art:"art-nms",image:"assets/no-mans-sky.jpg",desc:"Explore planetas e sistemas gerados proceduralmente."},
  {id:48,title:"Valheim",category:"indie",genre:"Survival / Aventura",price:19.99,discount:"-25%",art:"art-valheim",image:"assets/valheim.jpg",desc:"Sobrevivência viking com construção e exploração cooperativa."}
];

let cart = [];
let activeSlide = 0;
let toastTimer;

const money = value => value.toLocaleString("pt-BR",{
  style:"currency",
  currency:"BRL"
});

function renderGames(filter="all"){
  const grid = document.querySelector("#gamesGrid");
  const list = filter==="all" ? games : games.filter(g=>g.category===filter);

  grid.innerHTML = list.map((g,i)=>`
    <article class="game-card reveal-up" style="transition-delay:${Math.min(i*.05,.25)}s">
      <div class="game-art ${g.art}" ${g.image ? `style="background-image:linear-gradient(180deg,transparent 35%,rgba(0,0,0,.82)),url('${g.image}');background-size:cover;background-position:center;"` : ""}>
        <span class="discount">${g.discount}</span>
        <strong>${g.title}</strong>
      </div>

      <div class="game-body">

        <div class="game-meta">
          <span>${g.genre}</span>
          <span>PC</span>
        </div>

        <h3>${g.title}</h3>

        <p class="game-desc">
          ${g.desc}
        </p>

        <div class="price-row">

          <span class="price">
            ${money(g.price)}
          </span>

          <button
            class="add-btn"
            onclick="addToCart(${g.id})"
            title="Adicionar"
          >
            +
          </button>

        </div>

      </div>
    </article>
  `).join("");

  observeReveals();
}


function addToCart(id){

  const game =
    games.find(g=>g.id===id);

  if(!game){
    return;
  }

  const existing =
    cart.find(x=>x.id===id);

  if(existing){

    existing.qty++;

  }else{

    cart.push({
      ...game,
      qty:1
    });

  }

  updateCart();

  showToast(
    `${game.title} adicionado ao carrinho`
  );
}


function removeFromCart(id){

  cart =
    cart.filter(x=>x.id!==id);

  updateCart();
}


function updateCart(){

  const count =
    cart.reduce(
      (sum,x)=>sum+x.qty,
      0
    );

  const total =
    cart.reduce(
      (sum,x)=>sum+x.price*x.qty,
      0
    );

  document.querySelector("#cartCount").textContent =
    count;

  document.querySelector("#summaryItems").textContent =
    count;

  document.querySelector("#subtotal").textContent =
    money(total);

  document.querySelector("#total").textContent =
    money(total);

  document.querySelector("#checkoutTotal").textContent =
    money(total);


  const box =
    document.querySelector("#cartItems");

  const empty =
    document.querySelector("#cartEmpty");


  if(!cart.length){

    box.innerHTML="";

    empty.style.display="flex";

  }else{

    empty.style.display="none";

    box.innerHTML =
      cart.map(item=>`

        <div class="cart-item">

          <div
            class="cart-thumb ${item.art}"
            ${
              item.image
                ? `style="background-image:url('${item.image}');background-size:cover;background-position:center;"`
                : ""
            }
          ></div>

          <div>

            <h4>
              ${item.title}
            </h4>

            <small>
              ${item.qty} × ${money(item.price)}
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


  document.querySelector("#checkoutItems").innerHTML =
    cart.map(item=>`

      <div class="checkout-line">

        <span>
          ${item.qty}× ${item.title}
        </span>

        <strong>
          ${money(item.qty*item.price)}
        </strong>

      </div>

    `).join("");


  updateInstallments(
    count,
    total
  );
}


function updateInstallments(itemCount,total){

  const select =
    document.querySelector("#installments");

  const max =
    itemCount >= 5 ? 10 : 1;

  select.innerHTML =
    Array.from(
      {length:max},
      (_,i)=>{

        const n=i+1;

        return `
          <option value="${n}">
            ${n}x de ${money(total/n)}
            ${n===1 ? " à vista" : ""}
          </option>
        `;

      }
    ).join("");


  document.querySelector("#installmentHint").textContent =

    itemCount >= 5

      ? "Benefício liberado: até 10x por ter 5 ou mais itens."

      : "Adicione 5 ou mais itens para liberar parcelamento em até 10x.";
}


function showToast(text){

  const t =
    document.querySelector("#toast");

  t.textContent =
    text;

  t.classList.add(
    "active"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(
      ()=>t.classList.remove("active"),
      2200
    );
}


function setSlide(index){

  const slides =
    [...document.querySelectorAll(".showcase-panel")];

  const dots =
    [...document.querySelectorAll(".dot")];

  activeSlide =
    (index+slides.length)%slides.length;

  slides.forEach(
    (s,i)=>
      s.classList.toggle(
        "active",
        i===activeSlide
      )
  );

  dots.forEach(
    (d,i)=>
      d.classList.toggle(
        "active",
        i===activeSlide
      )
  );
}


document.querySelector("#prevSlide")
  .addEventListener(
    "click",
    ()=>setSlide(activeSlide-1)
  );


document.querySelector("#nextSlide")
  .addEventListener(
    "click",
    ()=>setSlide(activeSlide+1)
  );


document.querySelectorAll(".dot")
  .forEach(
    d=>
      d.addEventListener(
        "click",
        ()=>setSlide(Number(d.dataset.index))
      )
  );


setInterval(
  ()=>setSlide(activeSlide+1),
  5000
);


document.querySelectorAll(".filter")
  .forEach(btn=>{

    btn.addEventListener(
      "click",
      ()=>{

        document
          .querySelectorAll(".filter")
          .forEach(
            x=>x.classList.remove("active")
          );

        btn.classList.add(
          "active"
        );

        renderGames(
          btn.dataset.filter
        );

      }
    );

  });


const cartDrawer =
  document.querySelector("#cartDrawer");

const overlay =
  document.querySelector("#overlay");

const checkout =
  document.querySelector("#checkoutModal");


function openCart(){

  cartDrawer.classList.add(
    "active"
  );

  overlay.classList.add(
    "active"
  );

  document.body.classList.add(
    "locked"
  );
}


function closeCart(){

  cartDrawer.classList.remove(
    "active"
  );

  overlay.classList.remove(
    "active"
  );

  document.body.classList.remove(
    "locked"
  );
}


document.querySelector("#openCart")
  .addEventListener(
    "click",
    openCart
  );


document.querySelector("#closeCart")
  .addEventListener(
    "click",
    closeCart
  );


overlay.addEventListener(
  "click",
  closeCart
);


document.querySelector("#checkoutBtn")
  .addEventListener(
    "click",
    ()=>{

      if(!cart.length){

        showToast(
          "Adicione pelo menos um jogo ao carrinho."
        );

        return;
      }

      closeCart();

      checkout.classList.add(
        "active"
      );

      document.body.classList.add(
        "locked"
      );

    }
  );


document.querySelector("#closeCheckout")
  .addEventListener(
    "click",
    ()=>{

      checkout.classList.remove(
        "active"
      );

      document.body.classList.remove(
        "locked"
      );

    }
  );


document.querySelectorAll(".payment-tab")
  .forEach(tab=>{

    tab.addEventListener(
      "click",
      ()=>{

        document
          .querySelectorAll(".payment-tab")
          .forEach(
            x=>x.classList.remove("active")
          );

        document
          .querySelectorAll(".method-panel")
          .forEach(
            x=>x.classList.remove("active")
          );

        tab.classList.add(
          "active"
        );

        document
          .querySelector(
            `#${tab.dataset.method}`
          )
          .classList.add(
            "active"
          );

      }
    );

  });


document.querySelector("#confirmPayment")
  .addEventListener(
    "click",
    async () => {

      if (!cart.length) {

        showToast(
          "Seu carrinho está vazio."
        );

        return;
      }


      try {

        showToast(
          "Criando pagamento..."
        );


        const resposta =
          await fetch(
            "/criar-preferencia",
            {

              method:"POST",

              headers:{
                "Content-Type":
                  "application/json"
              },

              body:JSON.stringify({
                items:cart
              })

            }
          );


        const dados =
          await resposta.json();


        if (!resposta.ok) {

          console.error(
            dados
          );

          showToast(
            "Erro ao criar pagamento."
          );

          return;
        }


        console.log(
          "Preferência criada:",
          dados.preferenceId
        );


        const linkPagamento =

          dados.initPoint ||

          dados.sandboxInitPoint;


        if (!linkPagamento) {

          showToast(
            "Link de pagamento não encontrado."
          );

          return;
        }


        window.location.href =
          linkPagamento;


      } catch (erro) {

        console.error(
          "ERRO:",
          erro
        );

        showToast(
          "Não foi possível conectar ao servidor."
        );

      }

    }
  );


document.querySelector("#cardNumber")
  .addEventListener(
    "input",
    e=>{

      let v =
        e.target.value
          .replace(/\D/g,"")
          .slice(0,16);

      e.target.value =
        v.replace(
          /(.{4})/g,
          "$1 "
        ).trim();

    }
  );


document.querySelector("#searchBtn")
  .addEventListener(
    "click",
    ()=>{

      const q =
        prompt(
          "Digite o nome do jogo:"
        );

      if(!q){
        return;
      }


      const found =
        games.find(
          g=>
            g.title
              .toLowerCase()
              .includes(
                q.toLowerCase()
              )
        );


      if(found){

        document
          .querySelector("#jogos")
          .scrollIntoView({
            behavior:"smooth"
          });

        showToast(
          `Encontrado: ${found.title}`
        );

      }else{

        showToast(
          "Nenhum jogo encontrado."
        );

      }

    }
  );


function observeReveals(){

  const observer =
    new IntersectionObserver(
      entries=>{

        entries.forEach(
          entry=>{

            if(entry.isIntersecting){

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
        threshold:.12
      }
    );


  document
    .querySelectorAll(
      ".reveal-left,.reveal-right,.reveal-up"
    )
    .forEach(
      el=>{

        if(
          !el.classList.contains(
            "visible"
          )
        ){

          observer.observe(
            el
          );

        }

      }
    );
}


renderGames();

updateCart();

observeReveals();
