// ============================================================
// LÓGICA DO SITE — normalmente não precisa mexer aqui.
// Para trocar textos/números, edite js/config.js
// Para trocar produtos, edite js/products.js
// ============================================================

// Estado atual dos filtros (busca + marca selecionada)
const estadoFiltro = { termo: "", marca: "Todos" };

document.addEventListener("DOMContentLoaded", () => {
  aplicarConfiguracoes();
  montarFiltrosMarca();
  aplicarFiltros();
  configurarBusca();
  configurarMenuMobile();
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
});

// -------------------- Configurações gerais --------------------
function montarLinkWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${texto}`;
}

function aplicarConfiguracoes() {
  document.title = `${SITE_CONFIG.brandName} — Produtos de Estética em ${SITE_CONFIG.cidade}`;

  document.querySelectorAll(".brand-name").forEach((el) => {
    el.textContent = SITE_CONFIG.brandName;
  });

  const linkPadrao = montarLinkWhatsapp(SITE_CONFIG.whatsappMensagemPadrao);
  document.getElementById("heroWhatsapp").href = linkPadrao;
  document.getElementById("contatoWhatsapp").href = linkPadrao;
  document.getElementById("whatsappFlutuante").href = linkPadrao;

  document.getElementById("contatoCidade").textContent = `Atendimento em ${SITE_CONFIG.cidade}`;
  document.getElementById("contatoHorario").textContent = SITE_CONFIG.horario;

  const obs = document.getElementById("produtosObservacao");
  if (obs) {
    obs.textContent = SITE_CONFIG.mostrarPrecos ? (SITE_CONFIG.observacaoPreco || "") : "";
  }

  const linkInstagram = document.getElementById("contatoInstagram");
  if (SITE_CONFIG.instagram) {
    linkInstagram.href = SITE_CONFIG.instagram;
    linkInstagram.hidden = false;
  } else {
    // Sem Instagram configurado: remove o botão para não ficar um link vazio
    linkInstagram.remove();
  }
}

// -------------------- Produtos --------------------
function criarCardProduto(produto) {
  const card = document.createElement("article");
  card.className = "produto-card";

  const imagem = document.createElement("div");
  imagem.className = "produto-imagem";
  imagem.textContent = produto.nome;

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;
  img.loading = "lazy";
  img.onerror = () => { img.remove(); };
  img.onload = () => { imagem.textContent = ""; imagem.appendChild(img); };

  const corpo = document.createElement("div");
  corpo.className = "produto-corpo";

  const marca = document.createElement("span");
  marca.className = "produto-categoria";
  marca.textContent = produto.marca;

  const nome = document.createElement("h3");
  nome.className = "produto-nome";
  nome.textContent = produto.nome;

  corpo.append(marca, nome);

  if (SITE_CONFIG.mostrarPrecos && produto.preco) {
    const preco = document.createElement("p");
    preco.className = "produto-preco";
    preco.textContent = `R$ ${produto.preco}`;
    corpo.appendChild(preco);
  }

  const botao = document.createElement("a");
  botao.className = "btn btn-whatsapp";
  botao.target = "_blank";
  botao.rel = "noopener";
  botao.textContent = "Pedir no WhatsApp";
  const precoTexto = SITE_CONFIG.mostrarPrecos && produto.preco ? ` (R$ ${produto.preco})` : "";
  botao.href = montarLinkWhatsapp(`Olá! Tenho interesse no produto: ${produto.nome}${precoTexto}`);

  corpo.appendChild(botao);
  card.append(imagem, corpo);
  return card;
}

function renderizarProdutos(lista) {
  const grid = document.getElementById("produtosGrid");
  const vazio = document.getElementById("produtosVazio");
  grid.innerHTML = "";

  if (lista.length === 0) {
    vazio.hidden = false;
    return;
  }
  vazio.hidden = true;
  lista.forEach((produto) => grid.appendChild(criarCardProduto(produto)));
}

// -------------------- Busca --------------------
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Aplica busca por texto + filtro de marca ao mesmo tempo
function aplicarFiltros() {
  const termoNormalizado = normalizarTexto(estadoFiltro.termo.trim());
  const lista = PRODUCTS.filter((produto) => {
    const casaMarca = estadoFiltro.marca === "Todos" || produto.marca === estadoFiltro.marca;
    const casaTermo = !termoNormalizado ||
      normalizarTexto(`${produto.nome} ${produto.marca}`).includes(termoNormalizado);
    return casaMarca && casaTermo;
  });
  renderizarProdutos(lista);
}

// Cria os botões de filtro por marca (Todos + cada marca presente na lista)
function montarFiltrosMarca() {
  const container = document.getElementById("filtrosMarca");
  if (!container) return;

  const marcas = ["Todos", ...new Set(PRODUCTS.map((p) => p.marca))];
  marcas.forEach((marca) => {
    const botao = document.createElement("button");
    botao.className = "filtro-chip" + (marca === "Todos" ? " ativo" : "");
    botao.textContent = marca;
    botao.addEventListener("click", () => {
      estadoFiltro.marca = marca;
      container.querySelectorAll(".filtro-chip").forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      aplicarFiltros();
    });
    container.appendChild(botao);
  });
}

function configurarBusca() {
  const inputDesktop = document.getElementById("buscaInput");
  const inputMobile = document.getElementById("buscaInputMobile");

  function onBuscar(valor, origem) {
    estadoFiltro.termo = valor;
    if (origem !== inputDesktop) inputDesktop.value = valor;
    if (origem !== inputMobile) inputMobile.value = valor;
    aplicarFiltros();
  }

  inputDesktop.addEventListener("input", () => onBuscar(inputDesktop.value, inputDesktop));
  inputMobile.addEventListener("input", () => onBuscar(inputMobile.value, inputMobile));

  [inputDesktop, inputMobile].forEach((input) => {
    input.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") {
        evento.preventDefault();
        document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// -------------------- Menu mobile --------------------
function configurarMenuMobile() {
  const botao = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}
