# Dr Soluções Estéticas — Site

Site institucional/catálogo focado em revenda de Botox (toxina botulínica), em Arcos, MG.
Feito em HTML, CSS e JavaScript puro — não precisa instalar nada. Basta abrir o arquivo
`index.html` no navegador (ou hospedar em qualquer serviço, como Hostinger, Netlify ou GitHub Pages).

---

## 📁 Estrutura das pastas

```
drestetica/
├── index.html              → a página do site
├── css/
│   └── style.css           → todas as cores e estilos
├── js/
│   ├── config.js           → NOME, WHATSAPP, CIDADE (edite aqui!)
│   ├── products.js         → LISTA DE PRODUTOS (edite aqui!)
│   └── script.js           → lógica do site (não precisa mexer)
├── images/
│   ├── logo.png            → (você adiciona) logo redonda do cabeçalho
│   ├── sobre.jpg           → (você adiciona) foto da seção "Sobre nós"
│   └── produtos/           → fotos dos produtos (produto-01.jpg, etc.)
└── videos/                 → vídeos dos produtos (video-01.mp4, etc.)
```

---

## ✏️ Como fazer as trocas mais comuns

### 1. Trocar o número do WhatsApp, nome ou cidade
Abra **`js/config.js`** e edite os valores entre aspas. Exemplo:
```js
whatsappNumber: "5537999855160",   // 55 + DDD 37 + número, só números
brandName: "Dr Soluções Estéticas",
cidade: "Arcos, MG",
```

### 2. Adicionar / editar produtos
Abra **`js/products.js`**. Já estão cadastrados os 64 produtos da tabela oficial.
Cada produto é um bloco assim:
```js
{ id: 31, marca: "Allergan", nome: "Botox Allergan (50 unidades)", preco: "419,00", imagem: "images/produtos/produto-31.jpg" },
```
- **Mudar preço**: altere o texto do campo `preco` (ex: `"419,00"`).
- **Adicionar produto**: copie um bloco `{ ... },`, cole no fim e use um `id` novo.
- **Remover**: apague o bloco inteiro.
- `marca` é o que aparece no selo do card e nos **botões de filtro** do site.
- Se a foto ainda não existir, o card mostra o nome do produto num fundo azul — sem erro.

### 2.1. Mostrar ou esconder os preços
Em **`js/config.js`**:
```js
mostrarPrecos: true,   // troque para false para esconder todos os preços
observacaoPreco: "Preço à vista (PIX/transferência) · vigência 2026 · frete não incluso",
```

### 3. Colocar as fotos dos produtos
Tire a foto, salve na pasta `images/produtos/` com o mesmo nome escrito no campo `imagem`
do produto (ex: `produto-01.jpg`). Prefira imagens quadradas.

### 4. Colocar a logo (cabeçalho)
1. Salve a logo redonda em `images/logo.png`.
2. Em `index.html`, procure por `id="logoCircle"` e troque o `<span>` das iniciais por:
   ```html
   <img src="images/logo.png" alt="Logo Dr Soluções Estéticas">
   ```

### 5. Colocar a foto da seção "Sobre nós"
1. Salve a foto em `images/sobre.jpg`.
2. Em `index.html`, procure por `class="foto-placeholder"` e troque a `<div>` por:
   ```html
   <img src="images/sobre.jpg" alt="Foto Dr Soluções Estéticas">
   ```
3. Ajuste também o texto de apresentação logo ao lado (dentro de `class="sobre-texto"`).

### 6. Colocar os vídeos
1. Salve os vídeos em `videos/` (ex: `video-01.mp4`).
2. Em `index.html`, procure por `class="video-placeholder"` e troque a `<div>` por:
   ```html
   <video controls src="videos/video-01.mp4"></video>
   ```
3. Ajuste a legenda logo abaixo (`class="video-legenda"`).

---

## 🎨 Cores do site
Definidas em `css/style.css` no topo (`:root`):
- Azul principal: `#253255`
- Dourado/nude: `#C79A71`
- Verde do WhatsApp: `#25D366`

Para mudar qualquer cor, altere só esses valores.

---

## 🚀 Como publicar na internet
Qualquer uma destas opções funciona (a pasta inteira é o site):
- **Netlify** (grátis): arraste a pasta em app.netlify.com/drop.
- **GitHub Pages** (grátis): suba a pasta num repositório e ative o Pages.
- **Hostinger / hospedagem tradicional**: envie os arquivos por FTP para a pasta `public_html`.
