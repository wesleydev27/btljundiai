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
  { title: 'Conserto de Lavadora',          desc: 'Assistência Técnica especializada em lavadoras de todas as marcas e modelos. Instalação, conserto e manutenção.' },
  { title: 'Assistência para Lava e Seca',  desc: 'Assistência técnica em lava e seca de todas as marcas e modelos. Instalação, conserto e manutenção.' },
  { title: 'Assistência para Chopeira',  desc: 'Assistência técnica em chopeiras de todas as marcas e modelos.'},
  { title: 'Assistência para Frigobar',  desc: 'Assistência técnica em frigobares de todas as marcas e modelos.' },
  { title: 'Assistência Técnica Geladeira', desc: 'Técnico especializado em geladeiras de todas as marcas e modelos. Instalação, conserto e manutenção. Diagnóstico no mesmo dia.' },
  { title: 'Conserto de Freezer',           desc: 'Assistência técnica faz o reparo de todas as marcas e modelos. Instalação, conserto e manutenção com excelência.' },
  { title: 'Assistência para Micro-ondas',  desc: 'Assistência técnica em micro-ondas de todas as marcas e modelos. Instalação, conserto e manutenção especializada para garantir o perfeito funcionamento do seu equipamento.' },
  { title: 'Conserto de Secadora',          desc: 'Assistência técnica de secadoras de todas as marcas e modelos. Instalação, conserto e manutenção.' },
  { title: 'Assistência para Lava Louça',   desc: 'Assistência técnica em lava louças de todas as marcas e modelos. Instalação, conserto e manutenção.' },
  { title: 'Conserto de Placas Eletrônicas',desc: 'Nossa equipe trabalha rigorosamente no reparo de placas eletrônicas, garantindo precisão em cada reparo.' },
  { title: 'Conserto de Placas Inverter',   desc: 'As placas inverter controlam a velocidade do compressor. Reparamos com técnicos especializados.' },
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
        <!-- Ícone placeholder — substitua por <img src="assets/nome.jpg"> -->
        <svg viewBox="0 0 24 24" fill="none" stroke="#1253a4" stroke-width="1.2" style="width:52px;height:52px;opacity:.25">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <path d="M7 5V3m10 2V3M2 10h20"/>
        </svg>
      </div>
      <div class="service-body">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <!-- Botão abre o WhatsApp com mensagem pré-preenchida com o nome do serviço -->
        <a href="https://wa.me/${WA}?text=${encodeURIComponent('Olá! Preciso de assistência para: ' + s.title)}"
           class="btn-service" target="_blank">Pedir Orçamento</a>
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
   INICIALIZAÇÃO — EXECUTA AO CARREGAR A PÁGINA
   ================================================ */
renderServices();      /* Monta os cards de serviços */
renderTestimonials();  /* Monta o carrossel de depoimentos */

/* Ativa ícones da biblioteca Lucide (se estiver sendo usada) */
if (typeof lucide !== 'undefined') lucide.createIcons();
