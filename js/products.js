// ============================================================
// LISTA DE PRODUTOS — Dr Soluções Estéticas
// Extraída da tabela oficial (vigência 2026 — Preço à vista/PIX).
//
// COMO EDITAR:
//   - Para mudar um preço: altere o texto do campo "preco".
//   - Para trocar a foto: coloque a imagem em images/produtos/ com o
//     nome indicado no campo "imagem" (ex: produto-01.jpg).
//   - Para adicionar produto: copie um bloco { ... }, cole no fim e
//     use um "id" novo (sem repetir).
//   - "marca" é usada nos botões de filtro do site.
// ============================================================

const PRODUCTS = [
  // ---------------- RENNOVA ----------------
  { id: 1,  marca: "Rennova", nome: "Rennova Nabota (100 unidades)", preco: "599,00", imagem: "images/produtos/produto-01.jpg" },
  { id: 2,  marca: "Rennova", nome: "Rennova Fill (seringa 1mL)", preco: "229,00", imagem: "images/produtos/produto-02.jpg" },
  { id: 3,  marca: "Rennova", nome: "Renova Lift (seringa 1mL)", preco: "259,00", imagem: "images/produtos/produto-03.jpg" },
  { id: 4,  marca: "Rennova", nome: "Rennova Deepline-lido (seringa 1mL)", preco: "269,00", imagem: "images/produtos/produto-04.jpg" },
  { id: 5,  marca: "Rennova", nome: "Rennova Lift Plus-lido (seringa 1mL)", preco: "289,00", imagem: "images/produtos/produto-05.jpg" },
  { id: 6,  marca: "Rennova", nome: "Rennova Ultra Volume-lido (seringa 2mL)", preco: "459,00", imagem: "images/produtos/produto-06.jpg" },
  { id: 7,  marca: "Rennova", nome: "Rennova Ultra Volume-lido (seringa 1mL)", preco: "279,00", imagem: "images/produtos/produto-07.jpg" },
  { id: 8,  marca: "Rennova", nome: "Rennova Lips Plus-lido ou Soft Lips-lido (seringa 1,10mL)", preco: "289,00", imagem: "images/produtos/produto-08.jpg" },
  { id: 9,  marca: "Rennova", nome: "Rennova Shape Lido (seringa 2mL)", preco: "449,00", imagem: "images/produtos/produto-09.jpg" },
  { id: 10, marca: "Rennova", nome: "Rennova Diamond Intense (seringa 1,25mL)", preco: "499,00", imagem: "images/produtos/produto-10.jpg" },
  { id: 11, marca: "Rennova", nome: "Rennova Diamond X (seringa 3 mL)", preco: "999,00", imagem: "images/produtos/produto-11.jpg" },
  { id: 12, marca: "Rennova", nome: "Rennova Elleva (frasco 150mg PLLA)", preco: "599,00", imagem: "images/produtos/produto-12.jpg" },
  { id: 13, marca: "Rennova", nome: "Rennova Elleva (frasco 210mg PLLA)", preco: "799,00", imagem: "images/produtos/produto-13.jpg" },
  { id: 14, marca: "Rennova", nome: "Rennova Elleva X (frasco 630mg PLLA)", preco: "2.199,00", imagem: "images/produtos/produto-14.jpg" },
  { id: 15, marca: "Rennova", nome: "Rennova Eyes Lines Lido (seringa 1,1 mL)", preco: "269,00", imagem: "images/produtos/produto-15.jpg" },
  { id: 16, marca: "Rennova", nome: "Rennova Lift Shape Plus Lido Club (seringa 10 mL)", preco: "899,00", imagem: "images/produtos/produto-16.jpg" },
  { id: 17, marca: "Rennova", nome: "Rennova Fill Hyaluronic 30 (seringa 3mL)", preco: "449,00", imagem: "images/produtos/produto-17.jpg" },

  // ---------------- GALDERMA ----------------
  { id: 18, marca: "Galderma", nome: "Dysport Galderma (300 unidades)", preco: "880,00", imagem: "images/produtos/produto-18.jpg" },
  { id: 19, marca: "Galderma", nome: "Dysport Galderma (500 unidades)", preco: "1.259,00", imagem: "images/produtos/produto-19.jpg" },
  { id: 20, marca: "Galderma", nome: "Sculptra (1 frasco avulso 150mg PLLA)", preco: "990,00", imagem: "images/produtos/produto-20.jpg" },
  { id: 21, marca: "Galderma", nome: "Sculptra (embalagem 2 frascos 150mg PLLA)", preco: "1.880,00", imagem: "images/produtos/produto-21.jpg" },
  { id: 22, marca: "Galderma", nome: "Skinbooster Vital (seringa 1mL)", preco: "359,00", imagem: "images/produtos/produto-22.jpg" },
  { id: 23, marca: "Galderma", nome: "Skinbooster Vital Light (seringa 1mL)", preco: "359,00", imagem: "images/produtos/produto-23.jpg" },
  { id: 24, marca: "Galderma", nome: "Restylane Kysse (seringa 1mL)", preco: "439,00", imagem: "images/produtos/produto-24.jpg" },
  { id: 25, marca: "Galderma", nome: "Restylane Gel (seringa 1mL)", preco: "310,00", imagem: "images/produtos/produto-25.jpg" },
  { id: 26, marca: "Galderma", nome: "Restylane Lyft (seringa 1mL)", preco: "399,00", imagem: "images/produtos/produto-26.jpg" },
  { id: 27, marca: "Galderma", nome: "Restylane Defyne (seringa 1mL)", preco: "450,00", imagem: "images/produtos/produto-27.jpg" },
  { id: 28, marca: "Galderma", nome: "Restylane Refyne (seringa 1mL)", preco: "319,00", imagem: "images/produtos/produto-28.jpg" },
  { id: 29, marca: "Galderma", nome: "Restylane Volyme (seringa 2mL)", preco: "360,00", imagem: "images/produtos/produto-29.jpg" },
  { id: 30, marca: "Galderma", nome: "Restylane Shaype (seringa 1mL)", preco: "490,00", imagem: "images/produtos/produto-30.jpg" },

  // ---------------- ALLERGAN ----------------
  { id: 31, marca: "Allergan", nome: "Botox Allergan (50 unidades)", preco: "419,00", imagem: "images/produtos/produto-31.jpg" },
  { id: 32, marca: "Allergan", nome: "Botox Allergan (100 unidades)", preco: "669,00", imagem: "images/produtos/produto-32.jpg" },
  { id: 33, marca: "Allergan", nome: "Botox Allergan (200 unidades)", preco: "1.120,00", imagem: "images/produtos/produto-33.jpg" },
  { id: 34, marca: "Allergan", nome: "Volbela (caixa com 2 seringas de 1mL)", preco: "599,00", imagem: "images/produtos/produto-34.jpg" },
  { id: 35, marca: "Allergan", nome: "Voluma (caixa com 2 seringas de 1mL)", preco: "769,00", imagem: "images/produtos/produto-35.jpg" },
  { id: 36, marca: "Allergan", nome: "Volux (caixa com 2 seringas de 1mL)", preco: "825,00", imagem: "images/produtos/produto-36.jpg" },
  { id: 37, marca: "Allergan", nome: "Volift (caixa com 2 seringas de 1mL)", preco: "699,00", imagem: "images/produtos/produto-37.jpg" },
  { id: 38, marca: "Allergan", nome: "Ultra Plus XC (caixa com 2 seringas de 1mL)", preco: "639,00", imagem: "images/produtos/produto-38.jpg" },
  { id: 39, marca: "Allergan", nome: "Ultra XC (caixa com 2 seringas de 1 mL)", preco: "585,00", imagem: "images/produtos/produto-39.jpg" },
  { id: 40, marca: "Allergan", nome: "HarmonyCa (caixa com 2 seringas de 1 mL)", preco: "1.249,00", imagem: "images/produtos/produto-40.jpg" },
  { id: 41, marca: "Allergan", nome: "Skinvive (caixa com 2 seringas de 1mL)", preco: "509,00", imagem: "images/produtos/produto-41.jpg" },

  // ---------------- FIOS ----------------
  { id: 42, marca: "Fios", nome: "Fio Liso Mono (PDO) 30G - agulha 25mm x fio 30mm - USP 6-0 (Bag 10 fios)", preco: "380,00", imagem: "images/produtos/produto-42.jpg" },
  { id: 43, marca: "Fios", nome: "Fio Liso Mono (PDO) 30G - agulha 40mm x fio 50mm - USP 6-0 (Bag 10 fios)", preco: "380,00", imagem: "images/produtos/produto-43.jpg" },
  { id: 44, marca: "Fios", nome: "Fio Parafuso Mono Screw (PDO) 27G - agulha 50mm x fio 70mm - USP 5-0 (Bag 10 fios)", preco: "550,00", imagem: "images/produtos/produto-44.jpg" },
  { id: 45, marca: "Fios", nome: "Fio Multi Filler (PDO) 21G - cânula 38mm x 10 fios 50mm - USP 6-0 (Bag 4 fios)", preco: "510,00", imagem: "images/produtos/produto-45.jpg" },
  { id: 46, marca: "Fios", nome: "Fio Espiculado Barbed Cutting (PDO) 18G - cânula 100mm x fio 150mm - USP 2 (Bag 6 fios)", preco: "550,00", imagem: "images/produtos/produto-46.jpg" },
  { id: 47, marca: "Fios", nome: "Fio Espiculado Molding (PDO) 18G - cânula 100mm x fio 185mm - USP 2 (Bag 6 fios)", preco: "1.249,00", imagem: "images/produtos/produto-47.jpg" },

  // ---------------- MERZ ----------------
  { id: 48, marca: "Merz", nome: "Belotero Intense (seringa 1 mL)", preco: "309,00", imagem: "images/produtos/produto-48.jpg" },
  { id: 49, marca: "Merz", nome: "Belotero Balance (seringa 1 mL)", preco: "295,00", imagem: "images/produtos/produto-49.jpg" },
  { id: 50, marca: "Merz", nome: "Radiesse Duo (seringa 1,5 mL)", preco: "770,00", imagem: "images/produtos/produto-50.jpg" },

  // ---------------- UNIQMED (seringas, microcânulas e insumos) ----------------
  { id: 51, marca: "Uniqmed", nome: "Seringa Toxina Botulínica (unidade) - 0,3/0,5/1,0 mL", preco: "3,00", imagem: "images/produtos/produto-51.jpg" },
  { id: 52, marca: "Uniqmed", nome: "Seringa Toxina Botulínica (cx c/100)", preco: "195,00", imagem: "images/produtos/produto-52.jpg" },
  { id: 53, marca: "Uniqmed", nome: "Uniqmed Microcânula + agulha pertuito (unidade)", preco: "25,00", imagem: "images/produtos/produto-53.jpg" },
  { id: 54, marca: "Uniqmed", nome: "Uniqmed Microcânula + agulha pertuito (cx c/24)", preco: "415,00", imagem: "images/produtos/produto-54.jpg" },
  { id: 55, marca: "Uniqmed", nome: "Torneira Three Way \"3 vias\" (unidade)", preco: "3,00", imagem: "images/produtos/produto-55.jpg" },
  { id: 56, marca: "Uniqmed", nome: "Torneira Three Way \"3 vias\" (cx c/50)", preco: "95,00", imagem: "images/produtos/produto-56.jpg" },
  { id: 57, marca: "Uniqmed", nome: "Curativo Redondo \"PEIM\" 25mm (rolo c/500)", preco: "40,00", imagem: "images/produtos/produto-57.jpg" },
  { id: 58, marca: "Uniqmed", nome: "Lenço Assepsia \"Álcool 70%\" (cx c/100)", preco: "25,00", imagem: "images/produtos/produto-58.jpg" },
  { id: 59, marca: "Uniqmed", nome: "Soro Fisiológico 0,9% flaconete injetável estéril 10mL", preco: "3,50", imagem: "images/produtos/produto-59.jpg" },
  { id: 60, marca: "Uniqmed", nome: "Água Bidestilada flaconete injetável estéril 10mL", preco: "3,50", imagem: "images/produtos/produto-60.jpg" },
  { id: 61, marca: "Uniqmed", nome: "Hialuronidase Optimus 3000 UTR (pó liofilizado)", preco: "65,00", imagem: "images/produtos/produto-61.jpg" },

  // ---------------- EVO ----------------
  { id: 62, marca: "EVO", nome: "EVO PDRN (cx c/5 x 3 mL)", preco: "1.049,00", imagem: "images/produtos/produto-62.jpg" },
  { id: 63, marca: "EVO", nome: "EVO PDRN (unidade 3 mL)", preco: "240,00", imagem: "images/produtos/produto-63.jpg" },

  // ---------------- PERFECTHA ----------------
  { id: 64, marca: "Perfectha", nome: "Subskin (3 seringas 1 mL)", preco: "716,00", imagem: "images/produtos/produto-64.jpg" },
];
