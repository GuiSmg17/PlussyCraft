/* ==========================================================================
   WIKI — categorias e artigos (CONTEÚDO DE EXEMPLO)
   Todos os valores (comandos, ranks, preços, horários) são fictícios.
   Substitui pelo conteúdo real do PlussyCraft.

   Estrutura:
     groups    grupos da barra lateral, cada um com várias "sections"
     articles  lista de artigos; cada artigo pertence a uma section

   Para adicionar um artigo, acrescenta um bloco a "articles":
     id        identificador único, sem espaços (aparece no URL: wiki.html#/a/<id>)
     section   id de uma section abaixo
     title     título
     summary   resumo de uma frase (aparece nas listas e na pesquisa)
     tags      palavras extra para a pesquisa
     image     (opcional) imagem de ilustração: { src: "assets/images/wiki/o-teu-ficheiro.jpg", alt: "descrição da imagem" }
               aparece no topo do artigo e nos cartões das listas. Podes também usar <figure> dentro do content.
     updated   data AAAA-MM-DD
     content   HTML do artigo (usa <h2>, <p>, <ul>, <ol>, <table>, <code>, <div class="note">)
   ========================================================================== */
window.WIKI_DATA = {
  groups: [
    {
      id: "progressao", title: "Progressão",
      sections: [
        { id: "ranks",      title: "Ranks" },
        { id: "reputacao",  title: "Reputação" },
        { id: "economia",   title: "Economia" },
        { id: "kits",       title: "Kits" }
      ]
    },
    {
      id: "servidor", title: "Servidor",
      sections: [
        { id: "sistemas",  title: "Sistemas do servidor" },
        { id: "eventos",   title: "Eventos" },
        { id: "areas",     title: "Áreas especiais" },
        { id: "missoes",   title: "Missões" }
      ]
    },
    {
      id: "comunidade", title: "Comunidade",
      sections: [
        { id: "staff",      title: "Staff" },
        { id: "discord",    title: "Discord" },
        { id: "reportar",   title: "Reportar jogador" },
        { id: "suporte",    title: "Suporte" }
      ]
    }
  ],

  articles: [

    /* ======================= PROGRESSÃO ======================= */
    {
      id: "lista-de-ranks", section: "ranks",
      title: "Lista de ranks",
      summary: "Os seis ranks da agricultura, os produtos de cada um e o valor de venda.",
      tags: ["rank", "agricultura", "agricultor", "criador", "fazendeiro", "barão", "magnata", "valores", "preços", "agrocoins"],
      updated: "2026-10-06",
      image: { src: "assets/images/wiki/placeholder.svg", alt: "Ilustração dos ranks de agricultura (imagem de exemplo)" },
      content: `
        <p>Estes são os ranks de agricultura do PlussyCraft e o valor de venda de cada produto.</p>
        <section class="rank">
          <h2>🌱 Agricultura Base</h2>
          <p class="rank__meta">Rank Inicial • Disponível para todos os jogadores</p>
          <p>Todos os jogadores começam com acesso aos produtos básicos da agricultura.</p>
          <div class="tables">
            <div><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Trigo</td><td>2</td></tr><tr><td>Cenoura</td><td>4</td></tr><tr><td>Batata</td><td>3,5</td></tr><tr><td>Sementes de Trigo</td><td>1</td></tr><tr><td>Sementes de Beterraba</td><td>2</td></tr><tr><td>Sementes de Melancia</td><td>3</td></tr><tr><td>Sementes de Abóbora</td><td>3</td></tr><tr><td>Bagas</td><td>2</td></tr><tr><td>Ovos</td><td>3</td></tr><tr><td>Fungo do Nether</td><td>3</td></tr></tbody></table></div>
          </div>
        </section>
        <section class="rank">
          <h2>🚜 Agricultor</h2>
          <p>Ao alcançar o rank Agricultor, desbloqueias novas culturas e produtos provenientes da criação de animais.</p>
          <div class="tables">
            <div><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Beterraba</td><td>5</td></tr><tr><td>Abóbora</td><td>6</td></tr><tr><td>Melancia</td><td>6</td></tr><tr><td>Fatia de Melancia</td><td>0,5</td></tr><tr><td>Costeleta Crua</td><td>8</td></tr><tr><td>Frango Cru</td><td>8</td></tr><tr><td>Carneiro Cru</td><td>8</td></tr><tr><td>Coelho</td><td>7</td></tr><tr><td>Bife Cru</td><td>9</td></tr></tbody></table></div>
          </div>
        </section>
        <section class="rank">
          <h2>🌳 Criador</h2>
          <p>O rank Criador expande a tua produção para recursos naturais, árvores e produtos provenientes dos animais.</p>
          <div class="tables">
            <div><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Muda de Carvalho</td><td>5</td></tr><tr><td>Muda de Pinheiro</td><td>6</td></tr><tr><td>Muda de Bétula</td><td>6</td></tr><tr><td>Muda de Cerejeira</td><td>8</td></tr><tr><td>Cana-de-Açúcar</td><td>10</td></tr><tr><td>Couro</td><td>8</td></tr><tr><td>Pele de Coelho</td><td>8</td></tr><tr><td>Pena</td><td>10</td></tr><tr><td>Lã Branca</td><td>15</td></tr><tr><td>Maçã</td><td>10</td></tr></tbody></table></div>
          </div>
          <p class="unlock"><strong>Desbloqueia:</strong> Vila dos Pescadores</p>
        </section>
        <section class="rank">
          <h2>🌾 Fazendeiro</h2>
          <p>No rank Fazendeiro, a tua quinta torna-se ainda mais lucrativa com novos alimentos e lãs especiais.</p>
          <div class="tables">
            <div><h3>Novos desbloqueios</h3><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Glow Berry</td><td>20</td></tr><tr><td>Pão</td><td>8</td></tr><tr><td>Batata Assada</td><td>8</td></tr><tr><td>Biscoito</td><td>5</td></tr></tbody></table></div>
            <div><h3>Lãs básicas</h3><table class="compact"><thead><tr><th>Cor</th><th>Valor</th></tr></thead><tbody><tr><td>Amarela</td><td>15</td></tr><tr><td>Vermelha</td><td>15</td></tr><tr><td>Rosa</td><td>15</td></tr></tbody></table></div>
            <div><h3>Lãs raras</h3><table class="compact"><thead><tr><th>Cor</th><th>Valor</th></tr></thead><tbody><tr><td>Ciano</td><td>25</td></tr><tr><td>Azul Claro</td><td>25</td></tr><tr><td>Azul</td><td>25</td></tr><tr><td>Roxa</td><td>25</td></tr><tr><td>Lima</td><td>25</td></tr><tr><td>Laranja</td><td>25</td></tr><tr><td>Verde</td><td>25</td></tr></tbody></table></div>
          </div>
          <p class="unlock"><strong>Desbloqueia:</strong> Clube (local frequentado pela alta sociedade, onde os produtos são comprados com AgroCoins)</p>
        </section>
        <section class="rank">
          <h2>👑 Barão</h2>
          <p>Ao atingir o rank Barão, desbloqueias novos produtos e recebes um aumento no valor de venda de vários itens.</p>
          <div class="tables">
            <div><h3>Novos desbloqueios</h3><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Bife Assado</td><td>14</td></tr><tr><td>Costeleta Assada</td><td>12</td></tr><tr><td>Frango Assado</td><td>12</td></tr><tr><td>Carneiro Assado</td><td>14</td></tr><tr><td>Torta de Abóbora</td><td>12</td></tr><tr><td>Favo de Mel</td><td>40</td></tr><tr><td>Frasco de Mel</td><td>80</td></tr></tbody></table></div>
            <div><h3>Bónus de rank</h3><table class="compact"><thead><tr><th>Item</th><th>Novo valor</th></tr></thead><tbody><tr><td>Trigo</td><td>2,4</td></tr><tr><td>Cenoura</td><td>4,8</td></tr><tr><td>Batata</td><td>4,2</td></tr><tr><td>Cana-de-Açúcar</td><td>12</td></tr><tr><td>Lã Branca</td><td>18</td></tr><tr><td>Maçã</td><td>12</td></tr></tbody></table></div>
          </div>
        </section>
        <section class="rank">
          <h2>💎 Magnata</h2>
          <p>O rank Magnata representa o topo da progressão na agricultura. Além de desbloquear produtos de grande valor, beneficia de melhorias significativas nos preços de venda.</p>
          <div class="tables">
            <div><h3>Novos desbloqueios</h3><table class="compact"><thead><tr><th>Item</th><th>Valor</th></tr></thead><tbody><tr><td>Cenoura Dourada</td><td>25</td></tr><tr><td>Maçã Dourada</td><td>100</td></tr></tbody></table></div>
            <div><h3>Bónus de rank</h3><table class="compact"><thead><tr><th>Item</th><th>Novo valor</th></tr></thead><tbody><tr><td>Trigo</td><td>2,8</td></tr><tr><td>Cenoura</td><td>5,6</td></tr><tr><td>Batata</td><td>4,9</td></tr><tr><td>Cana-de-Açúcar</td><td>14</td></tr><tr><td>Favo de Mel</td><td>55</td></tr><tr><td>Frasco de Mel</td><td>110</td></tr><tr><td>Bife Assado</td><td>18</td></tr><tr><td>Costeleta Assada</td><td>15</td></tr><tr><td>Pão</td><td>10</td></tr></tbody></table></div>
          </div>
        </section>
        <div class="note"><strong>Nota:</strong> à medida que evoluis de rank, desbloqueias novos produtos e alguns dos itens anteriormente disponíveis passam a valer mais, aumentando a rentabilidade da tua quinta.</div>`
    },
    {
      id: "como-subir-de-rank", section: "ranks",
      title: "Como subir de rank",
      summary: "Guia para ganhar Reputação e evoluir de rank.",
      tags: ["reputação", "rank", "rankup", "missões", "cooperativa", "eventos", "colheita", "dicas"],
      updated: "2026-10-06",
      image: { src: "assets/images/wiki/placeholder.svg", alt: "Ilustração da quinta e da comunidade (imagem de exemplo)" },
      content: `
        <h2>🌟 Guia: como ganhar Reputação no Farmville</h2>
        <p>A Reputação é um dos recursos mais importantes do PlussyCraft. Ao contrário de um RankUp tradicional, aqui não basta acumular dinheiro: é preciso mostrar dedicação e participar ativamente na vida do servidor.</p>
        <p>Neste guia explicamos todas as formas de ganhar Reputação.</p>

        <h3>🌾 1. Colhe as tuas plantações</h3>
        <p>Sempre que colheres as culturas da tua quinta, terás oportunidade de ganhar Reputação.</p>
        <p>Quanto mais plantares e colheres, maior será o teu progresso. Mantém a tua quinta sempre ativa e não deixes os campos por cultivar!</p>

        <h3>📦 2. Completa missões</h3>
        <p>As missões são uma excelente forma de ganhar Reputação.</p>
        <p>Terás de completar as missões nos NPCs espalhados pela ilha e, em troca, receberás recompensas valiosas, incluindo Reputação para continuares a evoluir.</p>
        <p>Quanto mais missões completares, mais rapidamente subirás de rank.</p>

        <h3>🤝 3. Participa nas encomendas da cooperativa</h3>
        <p>Criar ou juntares-te a uma cooperativa traz vantagens adicionais.</p>
        <p>As encomendas de cooperativa permitem que todos trabalhem em equipa para cumprir grandes objetivos e ganhar Reputação em conjunto. A união faz a força!</p>

        <h3>🏆 4. Vence os eventos</h3>
        <p>Ao longo da semana são realizados vários eventos exclusivos do PlussyCraft. Se conseguires conquistar a vitória, receberás Reputação como recompensa.</p>
        <p>Alguns dos eventos incluem:</p>
        <ul>
          <li>🐷 Corrida de Porcos</li>
          <li>🎯 Tiro ao Espantalho</li>
          <li>E muitos mais.</li>
        </ul>
        <p>Participa sempre que puderes. Além de serem divertidos, são uma ótima forma de evoluir.</p>

        <h3>💡 Dicas para ganhar Reputação mais rapidamente</h3>
        <ul>
          <li>🌱 Mantém a tua quinta sempre produtiva.</li>
          <li>📦 Faz missões regularmente.</li>
          <li>🤝 Junta-te a uma cooperativa ativa.</li>
          <li>🎉 Participa em todos os eventos possíveis.</li>
          <li>⏰ Entra diariamente para não perder oportunidades e ainda ganhares Reputação por atividade.</li>
        </ul>

        <div class="note">Boa sorte e lembra-te: no PlussyCraft, a tua dedicação é tão importante quanto a tua fortuna. Quanto mais contribuires para a tua quinta e para a comunidade, mais perto estarás de alcançar os ranks mais elevados! 🌾</div>`
    },
    {
      id: "o-que-e-reputacao", section: "reputacao",
      title: "O que é a reputação",
      summary: "Como ganhas e perdes reputação e porque é que ela importa.",
      tags: ["reputação", "pontos", "comportamento"],
      updated: "2026-10-01",
      content: `
        <p>A reputação mede o quanto a comunidade confia em ti. Ganha-se a ajudar, a participar e a cumprir as regras.</p>
        <h2>Como ganhar reputação</h2>
        <ul>
          <li>Completar missões e participar em eventos.</li>
          <li>Ajudar jogadores novos (a equipa pode atribuir pontos extra).</li>
          <li>Manter um bom historial sem punições.</li>
        </ul>
        <h2>Como a perder</h2>
        <p>Punições e denúncias confirmadas reduzem a reputação. Reputação baixa pode bloquear a subida de rank.</p>`
    },
    {
      id: "moedas-e-banco", section: "economia",
      title: "Moedas e banco",
      summary: "Como ganhar, guardar e enviar moedas.",
      tags: ["moedas", "dinheiro", "pay", "balance", "banco"],
      updated: "2026-10-01",
      content: `
        <p>A moeda do servidor chama-se <strong>moedas</strong>. Usa-as para comprar itens, subir de rank e negociar com outros jogadores.</p>
        <table>
          <thead><tr><th>Comando</th><th>O que faz</th></tr></thead>
          <tbody>
            <tr><td><code>/saldo</code></td><td>Mostra o teu saldo</td></tr>
            <tr><td><code>/pagar &lt;nick&gt; &lt;valor&gt;</code></td><td>Envia moedas a outro jogador</td></tr>
            <tr><td><code>/top moedas</code></td><td>Mostra os jogadores mais ricos</td></tr>
          </tbody>
        </table>
        <h2>Como ganhar moedas</h2>
        <ul>
          <li>Vender recursos no mercado ou diretamente a outros jogadores.</li>
          <li>Missões diárias e semanais.</li>
          <li>Prémios de eventos.</li>
        </ul>`
    },
    {
      id: "mercado-entre-jogadores", section: "economia",
      title: "Mercado entre jogadores",
      summary: "Como montar uma banca e comprar itens de outros jogadores.",
      tags: ["mercado", "banca", "vender", "comprar", "loja de jogador"],
      updated: "2026-10-01",
      content: `
        <p>O mercado do spawn (<code>/warp mercado</code>) é o ponto de encontro da economia.</p>
        <h2>Vender</h2>
        <ol>
          <li>Pede uma banca a um membro da staff ou usa <code>/banca criar</code>.</li>
          <li>Coloca o item no baú e define o preço com <code>/banca preco &lt;valor&gt;</code>.</li>
        </ol>
        <h2>Comprar</h2>
        <p>Clica no letreiro da banca para comprar. As moedas são transferidas automaticamente.</p>
        <div class="note">Não vendas contas, nem itens por dinheiro real. Só a loja oficial pode vender produtos por dinheiro real.</div>`
    },
    {
      id: "kits-do-servidor", section: "kits",
      title: "Kits do servidor",
      summary: "Que kits existem, de quanto em quanto tempo os podes pedir e como usá-los.",
      tags: ["kit", "iniciante", "diário", "cooldown"],
      updated: "2026-10-01",
      content: `
        <p>Os kits dão-te equipamento e recursos. Pede-os com <code>/kit &lt;nome&gt;</code>.</p>
        <table>
          <thead><tr><th>Kit</th><th>Quem pode</th><th>Intervalo</th></tr></thead>
          <tbody>
            <tr><td>Iniciante</td><td>Todos</td><td>Uma vez</td></tr>
            <tr><td>Diário</td><td>VIP Bronze ou superior</td><td>24 horas</td></tr>
            <tr><td>Semanal</td><td>VIP Silver ou superior</td><td>7 dias</td></tr>
          </tbody>
        </table>
        <p>Se o inventário estiver cheio, o kit cai no chão. Limpa espaço antes de o pedires.</p>`
    },

    /* ======================= SERVIDOR ======================= */
    {
      id: "guildas", section: "sistemas",
      title: "Guildas",
      summary: "Cria uma guilda, convida amigos e sobe no ranking.",
      tags: ["guilda", "clã", "equipa", "ranking"],
      updated: "2026-10-01",
      content: `
        <p>As guildas permitem jogar em equipa, partilhar um chat privado e competir no ranking de guildas.</p>
        <ul>
          <li><code>/guilda criar &lt;nome&gt;</code> cria a guilda.</li>
          <li><code>/guilda convidar &lt;nick&gt;</code> convida um jogador.</li>
          <li><code>/guilda sair</code> abandona a guilda.</li>
        </ul>
        <p>Cada guilda tem um líder e pode ter vários oficiais com permissões de convite e expulsão.</p>`
    },
    {
      id: "ranking-e-estatisticas", section: "sistemas",
      title: "Rankings e estatísticas",
      summary: "Os rankings do servidor e como aparecer neles.",
      tags: ["ranking", "top", "estatísticas", "tempo de jogo"],
      updated: "2026-10-01",
      content: `
        <p>Os rankings mostram os melhores jogadores e guildas em várias categorias.</p>
        <ul>
          <li><code>/top moedas</code>: os mais ricos.</li>
          <li><code>/top tempo</code>: quem mais joga.</li>
          <li><code>/top guildas</code>: as melhores guildas.</li>
        </ul>
        <p>Os rankings são atualizados a cada hora e reiniciados no início de cada temporada.</p>`
    },
    {
      id: "calendario-de-eventos", section: "eventos",
      title: "Calendário de eventos",
      summary: "Quando acontecem os eventos e como ficar a saber de todos.",
      tags: ["eventos", "calendário", "torneio", "prémios"],
      updated: "2026-10-01",
      content: `
        <p>Organizamos eventos regulares com prémios para os vencedores.</p>
        <table>
          <thead><tr><th>Evento</th><th>Quando</th></tr></thead>
          <tbody>
            <tr><td>Caça ao tesouro</td><td>Sábados, 21h00</td></tr>
            <tr><td>Torneio PvP</td><td>1.º domingo do mês</td></tr>
            <tr><td>Concurso de construção</td><td>Cada fim de temporada</td></tr>
          </tbody>
        </table>
        <p>Os avisos de cada evento são enviados no <a href="#/a/discord-oficial">Discord</a> e no chat do servidor.</p>
        <div class="note">Horários de exemplo. Atualiza-os com o calendário real.</div>`
    },
    {
      id: "como-participar-em-eventos", section: "eventos",
      title: "Como participar em eventos",
      summary: "Passos para te inscreveres e regras específicas dos eventos.",
      tags: ["inscrição", "evento", "arena", "prémios"],
      updated: "2026-10-01",
      content: `
        <ol>
          <li>Quando o evento abrir, usa <code>/evento entrar</code>.</li>
          <li>Guarda o teu inventário e segue as instruções da staff.</li>
          <li>Os prémios são entregues no fim do evento, diretamente na tua conta.</li>
        </ol>
        <p>Nos eventos aplicam-se as regras do servidor. Quem as quebrar pode ser desqualificado.</p>`
    },
    {
      id: "areas-especiais", section: "areas",
      title: "Spawn, mercado e minas",
      summary: "Um mapa rápido das principais zonas do servidor.",
      tags: ["spawn", "mercado", "minas", "warp", "zonas"],
      updated: "2026-10-01",
      content: `
        <table>
          <thead><tr><th>Zona</th><th>Warp</th><th>Para quê</th></tr></thead>
          <tbody>
            <tr><td>Spawn</td><td><code>/spawn</code></td><td>Ponto de encontro e portais</td></tr>
            <tr><td>Mercado</td><td><code>/warp mercado</code></td><td>Comprar e vender entre jogadores</td></tr>
            <tr><td>Recursos</td><td><code>/warp recursos</code></td><td>Madeira, pedra e minérios (reinicia todas as semanas)</td></tr>
            <tr><td>Minas do rank</td><td><code>/warp minas</code></td><td>Minérios melhores, por rank</td></tr>
          </tbody>
        </table>
        <div class="note">A zona de recursos reinicia semanalmente. Não construas lá a tua casa.</div>`
    },
    {
      id: "missoes-diarias", section: "missoes",
      title: "Missões diárias e semanais",
      summary: "Como funcionam as missões e quais as recompensas.",
      tags: ["missões", "diárias", "semanais", "recompensas"],
      updated: "2026-10-01",
      content: `
        <p>As missões dão-te objetivos simples com recompensas em moedas, reputação e itens.</p>
        <ul>
          <li>Abre o menu com <code>/missoes</code>.</li>
          <li>As missões diárias renovam à meia-noite; as semanais à segunda-feira.</li>
          <li>Podes ter até 3 missões ativas ao mesmo tempo.</li>
        </ul>
        <p>Ao concluir todas as missões da semana, ganhas um bónus extra.</p>`
    },

    /* ======================= COMUNIDADE ======================= */
    {
      id: "equipa-staff", section: "staff",
      title: "Como funciona a equipa",
      summary: "Quem faz parte da staff e o que cada cargo faz.",
      tags: ["staff", "cargos", "admin", "moderador", "helper"],
      updated: "2026-10-01",
      content: `
        <ul>
          <li><strong>Administração</strong> (Owner e Admin): decisões do servidor e coordenação.</li>
          <li><strong>Moderação</strong> (Moderator e Helper): regras, denúncias e apoio aos jogadores.</li>
          <li><strong>Desenvolvimento</strong> (Developer e Builder): programação e construção.</li>
        </ul>
        <p>Conhece a equipa na <a href="staff.html">página da Staff</a>. A equipa nunca pede a tua palavra-passe.</p>`
    },
    {
      id: "discord-oficial", section: "discord",
      title: "Discord oficial",
      summary: "Para que serve o Discord do PlussyCraft e como ligar a tua conta.",
      tags: ["discord", "comunidade", "anúncios", "ligar conta"],
      updated: "2026-10-01",
      content: `
        <p>O Discord é o centro da comunidade: anúncios, eventos, suporte e conversa livre.</p>
        <h2>O que encontras lá</h2>
        <ul>
          <li>Canais de anúncios e de eventos.</li>
          <li>Suporte e denúncias através de pedidos privados.</li>
          <li>Canais para guildas, construções e sugestões.</li>
        </ul>
        <p>Usa o botão <strong>Discord</strong> no topo do site para entrares. Ao entrares, lê o canal de regras.</p>`
    },
    {
      id: "como-reportar", section: "reportar",
      title: "Como reportar um jogador",
      summary: "O que incluir numa denúncia para que a equipa a possa tratar depressa.",
      tags: ["denúncia", "report", "provas", "hacker"],
      updated: "2026-10-01",
      content: `
        <p>Se viste alguém a quebrar as regras, podes denunciá-lo.</p>
        <h2>No jogo</h2>
        <p>Usa <code>/reportar &lt;nick&gt; &lt;motivo&gt;</code>.</p>
        <h2>No Discord</h2>
        <p>Abre um pedido privado com o motivo da denúncia.</p>
        <h2>O que incluir</h2>
        <ul>
          <li>O nickname do jogador e a hora aproximada.</li>
          <li>Captura de ecrã ou vídeo, se possível.</li>
          <li>Uma descrição curta do que aconteceu.</li>
        </ul>
        <div class="note">Denúncias falsas ou repetidas podem levar a punições.</div>`
    },
    {
      id: "pedir-suporte", section: "suporte",
      title: "Pedir suporte",
      summary: "Como falar com a equipa sobre problemas, compras e recursos de punições.",
      tags: ["ajuda", "ticket", "compras", "problemas", "recurso"],
      updated: "2026-10-01",
      content: `
        <p>Se precisas de ajuda, escolhe a opção que melhor se aplica:</p>
        <ul>
          <li><strong>Dúvidas sobre o jogo:</strong> pergunta no chat ou a um Helper.</li>
          <li><strong>Problemas com compras:</strong> abre um pedido no Discord com o nickname e o comprovativo.</li>
          <li><strong>Recurso de punições:</strong> abre um pedido no Discord com a tua versão dos factos.</li>
        </ul>
        <p>Tentamos responder o mais depressa possível. Não abras vários pedidos sobre o mesmo assunto.</p>`
    }
  ]
};
