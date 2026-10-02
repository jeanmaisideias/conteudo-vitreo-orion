const posts = [
  {
    id:'p01', date:'2026-10-05', format:'Reel', audience:'Cliente final',
    title:'Seu 2 quartos com suíte está pronto', objective:'Abrir o mês com o produto de maior giro e maior estoque.',
    hook:'“Se você procura um apartamento de 2 quartos com suíte em Joinville, olha essa planta antes de decidir.”',
    script:'Maycon abre a porta da unidade e entra falando com a câmera.\n\nMostrar rapidamente sala/cozinha, suíte, segundo dormitório, banheiros e sacada.\n\nReforçar: 65,26 m² privativos, 1 suíte + 1 dormitório e a vantagem de conhecer o espaço pronto antes da decisão.',
    capture:'Planos: porta abrindo · sala em movimento · suíte · segundo quarto · sacada · Maycon no fechamento.\nEvitar tour lento. Usar cortes curtos e sensação de descoberta.',
    cta:'“Quer conhecer pessoalmente? Me manda ORION no Direct.”'
  },
  {
    id:'p02', date:'2026-10-07', format:'Reel', audience:'Cliente final',
    title:'65 m² parecem pouco?', objective:'Quebrar objeção de metragem e valorizar aproveitamento da planta.',
    hook:'“65 metros quadrados parecem pouco? Então esquece o número por alguns segundos e olha o apartamento.”',
    script:'Mostrar os ambientes enquanto Maycon explica como a planta funciona na vida real.\n\nSuíte → segundo dormitório → sala/cozinha → circulação.\n\nFechar com a ideia de que metragem isolada não conta toda a história.',
    capture:'Usar lente mais aberta nos ambientes, mas sem distorção excessiva. Inserir texto curto na tela: SUÍTE / 2º QUARTO / ÁREA SOCIAL.',
    cta:'“Não compre apartamento olhando só o número. Agende uma visita e teste a planta.”'
  },
  {
    id:'p03', date:'2026-10-09', format:'Reel', audience:'Ambos',
    title:'Aqui você não precisa imaginar', objective:'Transformar o fato de estar pronto em argumento comercial central.',
    hook:'“Comprar na planta tem suas vantagens. Mas aqui no Orion existe outra possibilidade: você pode ver tudo antes de decidir.”',
    script:'Sequência visual: fachada → entrada → elevador → porta → vista → quarto → garagem → lazer.\n\nMaycon conduz a narrativa com frases curtas: entrar, subir, abrir, ver, testar, decidir.',
    capture:'Reel com ritmo cinematográfico e áudio ambiente em alguns cortes. Usar fachada real e ambientes reais.',
    cta:'“O Orion está pronto. Agora falta você conhecer.”'
  },
  {
    id:'p04', date:'2026-10-10', format:'Reel', audience:'Corretor',
    title:'Corretor: apareceu cliente para 2 quartos?', objective:'Gerar lembrança imediata do Orion quando o corretor receber uma demanda.',
    hook:'“Corretor de Joinville, apareceu cliente pedindo dois quartos com suíte? Lembra desse produto.”',
    script:'Maycon dentro de uma unidade resume o produto em 30–40 segundos: localização, 65,26 m², suíte + dormitório, prédio pronto e estrutura de condomínio.\n\nTerminar deixando claro que o corretor pode acionar o Maycon para visita, tabela e negociação.',
    capture:'Plano direto, comercial e sem excesso de institucional. Colocar cards curtos na tela com os 4 argumentos.',
    cta:'“Tem cliente para isso? Me chama e eu te ajudo com a operação.”'
  },
  {
    id:'p05', date:'2026-10-12', format:'Reel', audience:'Cliente final',
    title:'Localização boa é tempo economizado', objective:'Traduzir localização em benefício cotidiano.',
    hook:'“Quando dizem que um imóvel está perto de tudo, eu prefiro testar.”',
    script:'Maycon sai do Orion de carro e mostra referências de deslocamento.\n\nTrabalhar Centro, supermercado, hospital e serviços próximos.\n\nA narrativa não vende endereço: vende tempo ganho no dia a dia.',
    capture:'Usar cronômetro visual e cortes de rua. Evitar afirmar tempos exatos sem validar na gravação do dia.',
    cta:'“Quer conhecer o Orion e a região na mesma visita? Fala comigo.”'
  },
  {
    id:'p06', date:'2026-10-14', format:'Reel', audience:'Cliente final',
    title:'O apartamento não termina na porta', objective:'Transformar lazer e áreas comuns em extensão útil da unidade.',
    hook:'“Quanto espaço você realmente precisa ter dentro do apartamento quando o condomínio entrega tudo isso?”',
    script:'Mostrar piscina, academia, PUB, fireplace, salão de festas, pet place e circulação.\n\nMaycon explica que parte da experiência de morar acontece fora da unidade, sem precisar comprar metros internos para cada uso.',
    capture:'Abrir com uma área de impacto. Não fazer lista fria. Conectar cada espaço a uma situação real.',
    cta:'“Quer conhecer a estrutura completa? Agenda comigo.”'
  },
  {
    id:'p07', date:'2026-10-16', format:'Reel', audience:'Cliente final',
    title:'O Giardino: apartamento com sensação de casa', objective:'Apresentar o produto raro pelo benefício antes da ficha técnica.',
    hook:'“Eu tenho apenas um apartamento assim no Orion.”',
    script:'Começar dentro do apartamento sem revelar tudo.\n\n“Dois dormitórios... até aqui normal.”\n\nAbrir para a área externa e revelar o Giardino.\n\nDepois informar os 95,04 m² privativos e o perfil ideal de cliente.',
    capture:'Guardar a revelação da área externa para depois de 4–6 segundos. Este é o momento principal do vídeo.',
    cta:'“Existe somente uma unidade. Me chama com a palavra GIARDINO.”'
  },
  {
    id:'p08', date:'2026-10-17', format:'Carrossel', audience:'Ambos',
    title:'Só existe 1 Giardino disponível', objective:'Criar escassez objetiva sem apelar para urgência artificial.',
    hook:'Capa: “Só existe UM apartamento assim disponível no Orion.”',
    script:'Slide 1: escassez.\nSlide 2: 95,04 m² privativos.\nSlide 3: 2 dormitórios.\nSlide 4: área externa / sensação de casa.\nSlide 5: condomínio pronto.\nSlide 6: CTA para visita.',
    capture:'Usar fotos reais e limpas. Evitar excesso de texto. Uma informação principal por slide.',
    cta:'“Solicite fotos, valores e disponibilidade atualizada.”'
  },
  {
    id:'p09', date:'2026-10-19', format:'Reel', audience:'Cliente final',
    title:'Agora vamos para o último andar', objective:'Criar desejo antes de apresentar especificações da cobertura.',
    hook:'Abrir na vista. “Isso aqui não tem como mostrar direito em uma planta.”',
    script:'Vista primeiro. Depois Maycon entra no quadro e apresenta os ambientes.\n\nInformar 107,86 m² privativos e 3 dormitórios.\n\nValorizar experiência, amplitude, ventilação e posição no prédio.',
    capture:'Priorizar luz natural, vista e movimentos suaves. Menos fala, mais ambiente.',
    cta:'“Quer subir e conhecer? Me manda COBERTURA.”'
  },
  {
    id:'p10', date:'2026-10-21', format:'Reel', audience:'Ambos',
    title:'Duas coberturas. Depois disso, acabou.', objective:'Gerar ação com base em estoque realmente limitado.',
    hook:'“Hoje existem duas coberturas disponíveis no Orion.”',
    script:'Vídeo curto e direto. Mostrar vista, planta, sacadas e 2 ou 3 detalhes premium.\n\nEvitar repetir o tour completo do post anterior. Aqui o foco é disponibilidade + convite.',
    capture:'20–30 segundos. Texto grande na tela: 2 UNIDADES.',
    cta:'“Peça tabela e agende uma visita antes de escolher.”'
  },
  {
    id:'p11', date:'2026-10-23', format:'Reel', audience:'Cliente final',
    title:'3 coisas para observar antes de comprar', objective:'Gerar autoridade consultiva e compartilhamento.',
    hook:'“Antes de comprar um apartamento em Joinville, eu observaria pelo menos estas três coisas.”',
    script:'1. Planta e aproveitamento real.\n2. Localização na rotina, não apenas no mapa.\n3. O que o condomínio entrega e quanto você usará.\n\nConectar cada ponto a um exemplo visual dentro do Orion, sem transformar o vídeo em propaganda explícita.',
    capture:'Gravar 3 blocos em ambientes diferentes para aumentar retenção.',
    cta:'“Salva este vídeo para usar quando for comparar imóveis.”'
  },
  {
    id:'p12', date:'2026-10-24', format:'Reel', audience:'Corretor',
    title:'Você traz o cliente. Eu te ajudo a fechar.', objective:'Reforçar parceria e reduzir atrito para o corretor trabalhar o produto.',
    hook:'“Corretor, você não precisa decorar o Orion para vender o Orion.”',
    script:'Maycon explica o suporte: disponibilidade, tabela, apresentação do produto, agendamento, visita e apoio na negociação.\n\nMostrar rapidamente uma visita ou preparação de unidade.',
    capture:'Tom de parceria, não de treinamento. Mostrar bastidor comercial real se possível.',
    cta:'“Apareceu cliente? Me chama e vamos atender juntos.”'
  },
  {
    id:'p13', date:'2026-10-26', format:'Reel', audience:'Cliente final',
    title:'O que cabe no segundo dormitório?', objective:'Eliminar dúvida prática sobre o uso do segundo quarto.',
    hook:'“Esse segundo dormitório serve só para criança? Não.”',
    script:'Mostrar 3 possibilidades: quarto, home office, quarto híbrido.\n\nSe possível usar marcações simples de layout na edição.\n\nMaycon explica para quais perfis a planta funciona.',
    capture:'Gravar o quarto vazio de vários ângulos. Captar porta, janela e profundidade para facilitar sobreposição de layout.',
    cta:'“Quer conferir as medidas no local? Agenda uma visita.”'
  },
  {
    id:'p14', date:'2026-10-28', format:'Reel', audience:'Cliente final',
    title:'Detalhes que passam despercebidos na visita', objective:'Criar série de microdiferenciais e aumentar percepção de valor.',
    hook:'“Tem detalhe neste apartamento que muita gente só percebe depois que eu mostro.”',
    script:'Escolher 3 detalhes reais da unidade/condomínio: churrasqueira, posição de tomadas, ventilação, esquadrias, circulação, iluminação ou acabamento.\n\nImportante: somente usar características verificadas presencialmente.',
    capture:'Close dos detalhes + Maycon apontando. Roteiro deve ser finalizado no local após validar os diferenciais.',
    cta:'“Quer que eu te mostre pessoalmente? Me chama.”'
  },
  {
    id:'p15', date:'2026-10-30', format:'Carrossel', audience:'Ambos',
    title:'Qual Orion combina com você?', objective:'Segmentar a audiência por perfil e estimular autoidentificação.',
    hook:'Capa: “Qual planta do Orion combina mais com a sua vida?”',
    script:'Perfil 1: 2 quartos — casal, pequena família, praticidade.\nPerfil 2: Giardino — quem valoriza área externa.\nPerfil 3: cobertura — quem quer mais espaço e experiência no último andar.\n\nFechar convidando a conversar antes de decidir pela metragem/preço.',
    capture:'Fotos reais das três categorias. Layout comparativo simples.',
    cta:'“Me diga seu perfil e eu te mostro a opção mais adequada dentro do Orion.”'
  },
  {
    id:'p16', date:'2026-10-31', format:'Reel / Stories', audience:'Ambos',
    title:'Plantão Orion: venha conhecer pronto', objective:'Fechar o mês convertendo alcance acumulado em visitas.',
    hook:'“Você acompanhou o Orion o mês inteiro. Agora vem conhecer.”',
    script:'Maycon na entrada do empreendimento faz convite objetivo para visita.\n\nRecapitular em tela: 2 quartos · 1 Giardino · 2 coberturas · prédio pronto.\n\nSe houver plantão presencial, colocar horário real. Caso contrário, usar agendamento.',
    capture:'Gravar fachada + hall + unidade + Maycon. Fazer também cortes verticais curtos para Stories.',
    cta:'“Chama no Direct/WhatsApp e agenda seu horário.”'
  }
];

const stories = [
  ['s01','2026-10-06','Disponibilidade da semana','Mostrar rapidamente quais tipos estão disponíveis e chamar para tabela atualizada.','Ambos'],
  ['s02','2026-10-08','Pergunta para audiência','Maycon dentro de uma unidade: “Qual detalhe do Orion você quer que eu mostre?” + caixinha.','Cliente final'],
  ['s03','2026-10-11','Bastidor de visita','Mostrar preparação ou trecho de visita sem expor cliente. Texto: “Hoje teve visita no Orion.”','Ambos'],
  ['s04','2026-10-13','Enquete: 2 quartos x Giardino','Enquete visual com fotos reais das duas opções.','Cliente final'],
  ['s05','2026-10-15','Corretor: tabela da semana','Story direto do Maycon oferecendo tabela e disponibilidade atualizada aos corretores.','Corretor'],
  ['s06','2026-10-18','Domingo de visita','Abrir caixa: “Quer visitar o Orion nesta semana? Deixa seu contato.”','Cliente final'],
  ['s07','2026-10-20','Maycon responde','Responder uma pergunta real sobre financiamento, vaga, condomínio ou planta.','Cliente final'],
  ['s08','2026-10-22','Detalhe do dia','Mostrar um único detalhe físico do empreendimento com 1 frase de contexto.','Ambos'],
  ['s09','2026-10-25','Pergunta para corretor','“Qual tipo de cliente mais pede 2 quartos com suíte para você?” + enquete/caixinha.','Corretor'],
  ['s10','2026-10-27','Por dentro da unidade','Sequência de 3 Stories entrando em uma unidade e mostrando 3 ambientes.','Cliente final'],
  ['s11','2026-10-29','Últimas disponibilidades do mês','Atualizar estoque real e destacar qualquer mudança ocorrida durante outubro.','Ambos'],
  ['s12','2026-10-31','Convite para visita','Story do Maycon na entrada: “Quer conhecer? Me chama agora e agenda.”','Ambos']
];
