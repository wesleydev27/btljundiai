/* ================================================
   NÚMERO DO WHATSAPP
   Altere aqui para mudar o número em todo o site
   Formato: código do país + DDD + número (sem espaços ou traços)
   ================================================ */
const WA = '5511996905490';

/* ================================================
   LISTA DE SERVIÇOS
   Cada item gera um card na seção "Serviços"
   Para adicionar um serviço: copie um bloco { } e edite
   Para remover: apague o bloco { } correspondente
   ================================================ */
const SERVICES = [
  { title: 'Conserto de Lavadora',
    desc: 'Concerto de lavadoras de todas as marcas e modelos. Instalação, conserto e manutenção.',
    icon: '<rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h2"/><circle cx="15" cy="6" r="1"/>',
    img: 'assets/conserto-de-lavadora.png' },

  { title: 'Conserto para Lava e Seca',
    desc: 'Concerto de lava e seca de todas as marcas e modelos. Instalação, conserto e manutenção.',
    icon: '<rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h2"/><circle cx="15" cy="6" r="1"/><path d="M16 8c1-1 2-1 2 1s-1 2-2 1"/>',
    img: 'assets/concerto-lava-seca.webp' }, /* troque por: assets/Lava e Seca.png */

  { title: 'Conserto para Chopeira',
    desc: 'Concerto de chopeiras de todas as marcas e modelos.',
    icon: '<path d="M8 3h8l1 4H7z"/><rect x="7" y="7" width="10" height="11" rx="1"/><path d="M12 18v3M9 21h6"/><path d="M17 10h2a2 2 0 010 4h-2"/>',
    img: 'assets/conserto-de-chopeira.png' }, /* troque por: assets/Chopeira.png */

  { title: 'Conserto para Frigobar',
    desc: 'Concerto de frigobares de todas as marcas e modelos.',
    icon: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12"/><path d="M11 6v2"/>',
    img: 'assets/concerto-de-frigobar.jpg' }, /* troque por: assets/Frigobar.png */

  { title: 'Conserto para Bebedouro',
    desc: 'Concerto de bebedouros de todas as marcas e modelos.',
    icon: '<path d="M12 2a4 4 0 014 4v2H8V6a4 4 0 014-4z"/><rect x="7" y="8" width="10" height="12" rx="2"/><path d="M12 14v3"/><circle cx="12" cy="13" r="1"/>',
    img: 'assets/concerto-de-bebedouro.jpg' }, /* troque por: assets/Bebedouro.png */

  { title: 'Concerto de Geladeira',
    desc: 'Técnico especializado geladeiras de todas as marcas e modelos. Instalação, conserto e manutenção. Diagnóstico no mesmo dia.',
    icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 10h16"/><path d="M10 6v2"/><path d="M10 15v3"/>',
    img: 'assets/concerto-de-geladeria.jpg' }, /* troque por: assets/Geladeira.png */

  { title: 'Conserto de Freezer',
    desc: 'Concerto de faz o reparo de todas as marcas e modelos. Instalação, conserto e manutenção com excelência.',
    icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 7v10M8 9l8 6M16 9l-8 6"/>',
    img: 'assets/concerto-de-freezer.jpg' }, /* troque por: assets/Freezer.png */

  { title: 'Conserto para Micro-ondas',
    desc: 'Concerto de micro-ondas de todas as marcas e modelos. Instalação, conserto e manutenção especializada para garantir o perfeito funcionamento do seu equipamento.',
    icon: '<rect x="2" y="6" width="20" height="14" rx="2"/><rect x="5" y="9" width="9" height="8" rx="1"/><circle cx="19" cy="11" r="1"/><circle cx="19" cy="15" r="1"/>',
    img: 'assets/conserto-para-micro-ondas.jpg' }, /* troque por: assets/Micro-ondas.png */

  { title: 'Conserto de Secadora',
    desc: 'Concerto de de secadoras de todas as marcas e modelos. Instalação, conserto e manutenção.',
    icon: '<rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h2M15 6h1"/><path d="M10 13c0-1 1-2 2-2"/>',
    img: 'assets/Conserto de Lavadora' }, /* troque por: assets/Secadora.png */

  { title: 'Conserto para Lava Louça',
    desc: 'Concerto de lava louças de todas as marcas e modelos. Instalação, conserto e manutenção.',
    icon: '<rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 8h18"/><path d="M7 13h10M7 16h10"/><path d="M9 11l1 2M13 11l1 2"/>',
    img: 'assets/Conserto de Lavadora' }, /* troque por: assets/Lava Louca.png */

  { title: 'Conserto de Placas Eletrônicas',
    desc: 'Nossa equipe trabalha rigorosamente no reparo de placas eletrônicas, garantindo precisão em cada reparo.',
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 2v2M10 2v2M14 2v2M18 2v2M6 20v2M18 20v2"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M7 14h10"/>',
    img: 'assets/Conserto de Lavadora' }, /* troque por: assets/Placas Eletronicas.png */

  { title: 'Conserto de Placas Inverter',
    desc: 'As placas inverter controlam a velocidade do compressor. Reparamos com técnicos especializados.',
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 12h2l2-4 2 8 2-4h4"/><circle cx="6" cy="8" r="1" fill="currentColor"/><circle cx="18" cy="16" r="1" fill="currentColor"/>',
    img: 'assets/Conserto de Lavadora' }, /* troque por: assets/Placas Inverter.png */
];

/* ================================================
   DEPOIMENTOS DE CLIENTES
   Cada item gera um card no carrossel de avaliações
   Para adicionar: copie um bloco { } e edite
   "stars" aceita valores de 1 a 5
   ================================================ */
const TESTIMONIALS = [
  { name: 'Douglas Silva',     text: 'Ótimo atendimento! Profissional pontual, resolveu o problema da minha geladeira no mesmo dia. Super indico!',                         stars: 5 },
  { name: 'Luciana Fernandes', text: 'Excelente profissional! Competente e com alto nível de conhecimento. Identificou o defeito na minha lavadora de imediato.',           stars: 5 },
  { name: 'Geraldo Lima',      text: 'Agradeço imensamente pelo serviço. A geladeira foi consertada com qualidade, troca de componentes e valores honestos.',               stars: 5 },
  { name: 'Carla Souza',       text: 'Rápido e eficiente! Minha secadora voltou a funcionar perfeitamente. Recomendo demais o serviço!',                                    stars: 5 },
  { name: 'Roberto Alves',     text: 'Serviço de qualidade, preço justo e muita transparência. Com certeza voltarei a contratar.',                                          stars: 5 },
];

/* ================================================
   FUNÇÃO: RENDERIZAR CARDS DE SERVIÇOS
   Lê o array SERVICES acima e monta o HTML dos cards
   automaticamente na div id="services-grid" do HTML
   ================================================ */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return; /* Sai se o elemento não existir na página */

  grid.innerHTML = SERVICES.map(s => `
    <article class="service-card reveal">
      <div class="service-img">
        ${s.img
          ? `<img src="${s.img}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;display:block">`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="#1253a4" stroke-width="1.2" aria-hidden="true" style="width:56px;height:56px;opacity:.35">${s.icon}</svg>`
        }
      </div>
      <div class="service-body">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <!-- Botão abre o WhatsApp com mensagem pré-preenchida com o nome do serviço -->
        <a href="https://wa.me/${WA}?text=${encodeURIComponent('Olá! Preciso de Conserto para: ' + s.title)}"
           class="btn-service" target="_blank" rel="noopener noreferrer">Pedir Orçamento</a>
      </div>
    </article>
  `).join('');

  /* Ativa a animação de entrada nos cards gerados dinamicamente */
  document.querySelectorAll('.service-card.reveal').forEach(el => observer.observe(el));
}

/* ================================================
   FUNÇÃO: RENDERIZAR DEPOIMENTOS
   Lê o array TESTIMONIALS e monta o carrossel.
   Os depoimentos são duplicados (html + html) para
   criar o efeito de rolagem infinita sem pausa
   ================================================ */
function renderTestimonials() {
  const track = document.getElementById('testi-track');
  if (!track) return; /* Sai se o elemento não existir na página */

  const html = TESTIMONIALS.map(t => {
    /* Gera as estrelas em SVG conforme a nota (1 a 5) */
    const stars = Array(t.stars).fill(
      '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    ).join('');

    return `
    <div class="testi-card">
      <div class="testi-header">
        <!-- Avatar com a inicial do nome do cliente -->
        <div class="testi-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-date">Cliente verificado</div>
        </div>
      </div>
      <div class="testi-stars">${stars}</div>
      <p class="testi-text">${t.text}</p>
      <!-- Badge "Avaliado no Google" com logo colorido -->
      <div class="google-badge">
        <svg viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Avaliado no Google
      </div>
    </div>`;
  }).join('');

  /* Duplica os cards para que a animação de rolagem seja contínua e sem salto */
  track.innerHTML = html + html;
}

/* ================================================
   ANIMAÇÃO DE ENTRADA AO ROLAR (SCROLL REVEAL)
   Elementos com a classe "reveal" no HTML ficam
   invisíveis e aparecem suavemente quando entram
   na área visível da tela (viewport)
   threshold: 0.12 = elemento precisa estar 12%
   visível para a animação disparar
   ================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible'); /* Adiciona classe que torna visível (ver CSS) */
      observer.unobserve(e.target);     /* Para de observar após animar (não repete) */
    }
  });
}, { threshold: 0.12 });

/* Aplica o observer em todos os elementos com classe "reveal" */
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ================================================
   HEADER — MUDA DE FUNDO AO ROLAR
   Adiciona a classe "scrolled" quando o usuário
   rola mais de 50px, ativando o fundo azul escuro
   ================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

/* ================================================
   ROLAGEM SUAVE AO CLICAR NOS LINKS ÂNCORA
   Intercepta cliques em links âncora (#secao) e
   rola suavemente até o elemento, descontando
   75px do header fixo para não cobrir o conteúdo.
   ================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return; /* Ignora links que apontam só para o topo (#) */

    const target = document.querySelector(href);
    if (!target) return; /* Ignora se o elemento alvo não existir */

    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 75, /* -75 = altura do header */
      behavior: 'smooth'
    });
  });
});

/* ================================================
   EFEITO MÁQUINA DE ESCREVER
   Digita o texto do elemento caractere por caractere.
   - elemento : o elemento HTML alvo
   - velocidade: milissegundos entre cada caractere (padrão 38ms)
   - delay     : tempo de espera antes de começar (em ms)
   ================================================ */
function maquinaDeEscrever(elemento, velocidade = 38, delay = 0) {
  const textoCompleto = elemento.textContent.trim();

  /* Guarda o texto completo para leitores de tela (acessibilidade) */
  elemento.setAttribute('aria-label', textoCompleto);
  elemento.textContent = '';
  elemento.style.visibility = 'visible';

  setTimeout(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      elemento.textContent += textoCompleto[i];
      i++;
      if (i >= textoCompleto.length) clearInterval(intervalo); /* Para ao terminar */
    }, velocidade);
  }, delay);
}

/* ================================================
   TEXTOS ROTATIVOS DO HERO
   Cada item tem um título (com HTML) e um subtítulo.
   Mudam a cada 60 segundos — sincronizado com o slideshow.
   Para editar: altere os textos abaixo.
   ================================================ */
const HERO_TEXTOS = [
  {
    titulo:    'Seu Eletrodoméstico <span class="highlight">Funcionando</span><br>Hoje Mesmo',
    subtitulo: 'Conserto rápido, peças originais e garantia em todos os serviços.'
  },
  {
    titulo:    'Geladeira Parou? <span class="highlight">Resolvemos</span><br>no Mesmo Dia',
    subtitulo: 'Diagnóstico rápido, orçamento grátis e garantia em todos os serviços.'
  },
  {
    titulo:    'Consertar Custa Menos<br>do que <span class="highlight">Você Imagina</span>',
    subtitulo: 'Preço justo, sem surpresas. Você aprova o orçamento antes de qualquer serviço.'
  },
];

/* Referências dos elementos do hero que serão trocados */
const heroH1       = document.querySelector('#hero h1');
const heroSubtitulo = document.querySelector('#hero > .hero-content > p');
let heroIndice     = 0; /* Começa no primeiro texto */

/* Aplica o efeito de máquina de escrever no subtítulo e troca o título */
function aplicarTextoHero(indice, primeiraVez = false) {
  const texto = HERO_TEXTOS[indice];
  const delay = primeiraVez ? 900 : 400; /* Na primeira vez espera as animações CSS */

  /* Troca o título com fade */
  if (heroH1) {
    heroH1.style.opacity    = '0';
    heroH1.style.transform  = 'translateY(20px)';
    heroH1.style.transition = 'opacity .4s, transform .4s';
    setTimeout(() => {
      heroH1.innerHTML       = texto.titulo;
      heroH1.style.opacity   = '1';
      heroH1.style.transform = 'translateY(0)';
    }, primeiraVez ? 0 : 350);
  }

  /* Troca o subtítulo com efeito de digitação */
  if (heroSubtitulo) {
    heroSubtitulo.style.visibility = 'hidden';
    heroSubtitulo.textContent      = texto.subtitulo;
    maquinaDeEscrever(heroSubtitulo, 38, delay);
  }
}

/* Inicia o primeiro texto ao carregar */
aplicarTextoHero(heroIndice, true);

/* Rotaciona os textos a cada 60 segundos */
setInterval(() => {
  heroIndice = (heroIndice + 1) % HERO_TEXTOS.length; /* Avança e volta ao início */
  aplicarTextoHero(heroIndice);
}, 60000);

/* ================================================
   INICIALIZAÇÃO — EXECUTA AO CARREGAR A PÁGINA
   ================================================ */
renderServices();      /* Monta os cards de serviços */
renderTestimonials();  /* Monta o carrossel de depoimentos */

/* Garante que a página sempre abre no topo */
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

