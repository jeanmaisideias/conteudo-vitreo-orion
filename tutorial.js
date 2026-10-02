(() => {
  const steps = [
    {
      title:'Comece pelo calendário',
      text:'A agenda mostra os conteúdos na ordem prevista a partir de 05/10. Cada card traz a data, o formato, o público e o objetivo da postagem.',
      tip:'Use a ordem das datas como linha de produção. O calendário já intercala cliente final, corretor e conteúdos para ambos.'
    },
    {
      title:'Encontre o conteúdo certo',
      text:'Use a busca para localizar um tema pelo título, gancho ou objetivo. Os filtros “Cliente”, “Corretor” e “Ambos” ajudam a enxergar rapidamente o que serve para cada público.',
      tip:'No celular, os filtros aparecem em uma grade 2 × 2 para facilitar o toque.'
    },
    {
      title:'Abra o card para ver o roteiro',
      text:'Toque ou clique em qualquer postagem. O card abre e mostra gancho, roteiro, CTA, orientações de captação, data e campo de observações.',
      tip:'O roteiro é uma base de gravação. O Maycon pode falar de forma natural, mantendo o argumento e a chamada para ação.'
    },
    {
      title:'Marque cada etapa da produção',
      text:'Cada conteúdo possui quatro checkboxes: Roteiro, Gravado, Editado e Publicado. Marque conforme a equipe avançar.',
      tip:'O percentual do card é atualizado automaticamente. Ao marcar “Publicado”, o conteúdo passa a ser considerado concluído.'
    },
    {
      title:'Registre observações importantes',
      text:'Dentro do card, use “Observações” para anotar unidade escolhida, alteração de roteiro, condição comercial, pendência de edição ou qualquer informação que a equipe precise lembrar.',
      tip:'As marcações e observações ficam salvas neste navegador. Ao voltar ao painel no mesmo aparelho e navegador, o andamento permanece.'
    },
    {
      title:'Use a aba Stories',
      text:'Na aba “Stories” estão as ações de apoio entre os conteúdos principais. Cada item também pode ser marcado como feito e receber observações.',
      tip:'Stories funcionam como frequência comercial: disponibilidade, bastidores, visitas, perguntas e chamadas rápidas para corretores e clientes.'
    },
    {
      title:'Acompanhe o progresso no topo',
      text:'Os indicadores mostram o progresso geral, quantos conteúdos já foram publicados, quantos estão em produção e quantos Stories foram feitos.',
      tip:'Isso permite identificar rapidamente se o gargalo está em gravação, edição ou publicação.'
    },
    {
      title:'Exporte ou reinicie quando precisar',
      text:'“Exportar CSV” gera uma planilha simples com o status de todos os conteúdos. “Imprimir” cria uma versão para consulta. “Limpar marcações” apaga o andamento e as observações deste navegador.',
      tip:'Use “Limpar marcações” somente quando quiser realmente zerar o painel. O sistema pede confirmação antes de apagar.'
    }
  ];

  const modal = document.getElementById('tutorialModal');
  const openBtn = document.getElementById('tutorialBtn');
  const closeBtn = document.getElementById('tutorialClose');
  const prevBtn = document.getElementById('tutorialPrev');
  const nextBtn = document.getElementById('tutorialNext');
  const title = document.getElementById('tutorialTitle');
  const text = document.getElementById('tutorialText');
  const tip = document.getElementById('tutorialTip');
  const label = document.getElementById('tutorialStepLabel');
  const bar = document.getElementById('tutorialProgressBar');
  let index = 0;
  let lastFocused = null;

  function render(){
    const step = steps[index];
    title.textContent = step.title;
    text.textContent = step.text;
    tip.textContent = step.tip;
    label.textContent = `Passo ${index + 1} de ${steps.length}`;
    bar.style.width = `${((index + 1) / steps.length) * 100}%`;
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === steps.length - 1 ? 'Concluir' : 'Prosseguir';
  }

  function openTutorial(){
    lastFocused = document.activeElement;
    index = 0;
    render();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('tutorial-open');
    requestAnimationFrame(() => closeBtn.focus());
  }

  function closeTutorial(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('tutorial-open');
    if(lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function next(){
    if(index < steps.length - 1){ index++; render(); }
    else closeTutorial();
  }

  function prev(){
    if(index > 0){ index--; render(); }
  }

  openBtn?.addEventListener('click',openTutorial);
  closeBtn?.addEventListener('click',closeTutorial);
  nextBtn?.addEventListener('click',next);
  prevBtn?.addEventListener('click',prev);
  modal?.addEventListener('click',(event)=>{ if(event.target === modal) closeTutorial(); });
  document.addEventListener('keydown',(event)=>{
    if(!modal?.classList.contains('open')) return;
    if(event.key === 'Escape') closeTutorial();
    if(event.key === 'ArrowRight') next();
    if(event.key === 'ArrowLeft') prev();
  });
})();
