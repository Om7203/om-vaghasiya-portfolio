const copy = {
  en: {
    skip: 'Skip to explorer', pageNavigation: 'Page navigation', languageGroup: 'Language', proofOverview: 'Portfolio at a glance', capabilityGroup: 'Capabilities', evidencePath: 'Evidence path', panelCode: 'CAPABILITY',
    navPortfolio: 'Portfolio', navProjects: 'Projects', navContact: 'Contact',
    eyebrow: 'AN INTERACTIVE GUIDE TO MY WORK', titleOne: 'What I can do.', titleTwo: 'Where you can see it.',
    intro: 'Choose a capability to see where I used it, what I built, and what you can inspect. Company work and public projects are labelled separately.',
    tryDemo: 'Try a live demo', browse: 'Browse the map', models: 'LLMs in a professional evaluation framework', demos: 'public demos you can try', studies: 'project case studies with detail',
    sectionKicker: 'SKILL → EVIDENCE', sectionTitle: 'Choose what matters to your team.',
    sectionNote: 'Every path leads to a specific example or artifact. The public demos are prototypes, with limits documented in their case studies.',
    choose: 'CHOOSE A CAPABILITY', contextLabel: 'CONTEXT', workLabel: 'WHAT I DID', inspectLabel: 'WHAT YOU CAN INSPECT',
    copyLink: 'Copy this view', copied: 'Link copied.', copyFailed: 'Could not copy. Use the browser address bar.',
    closingKicker: 'WANT THE WHOLE STORY?', closingTitle: 'Start with a project you can actually try.',
    evidenceCase: 'Evidence Desk case study ↗', supportCase: 'Support Agent Lab case study ↗', back: 'Back to portfolio ↗'
  },
  de: {
    skip: 'Zur Übersicht springen', pageNavigation: 'Seitennavigation', languageGroup: 'Sprache', proofOverview: 'Portfolio im Überblick', capabilityGroup: 'Fähigkeiten', evidencePath: 'Weg zum Beleg', panelCode: 'FÄHIGKEIT',
    navPortfolio: 'Portfolio', navProjects: 'Projekte', navContact: 'Kontakt',
    eyebrow: 'INTERAKTIVER EINBLICK IN MEINE ARBEIT', titleOne: 'Was ich kann.', titleTwo: 'Wo man es sieht.',
    intro: 'Wähle eine Fähigkeit und sieh, wo ich sie eingesetzt habe, was ich gebaut habe und was du prüfen kannst. Berufliche Arbeit und öffentliche Projekte sind getrennt gekennzeichnet.',
    tryDemo: 'Live-Demo testen', browse: 'Übersicht öffnen', models: 'LLMs in einem beruflichen Evaluationsframework', demos: 'öffentliche Demos zum Ausprobieren', studies: 'ausführliche Projektseiten',
    sectionKicker: 'FÄHIGKEIT → BELEG', sectionTitle: 'Wähle, was für dein Team wichtig ist.',
    sectionNote: 'Jeder Weg führt zu einem konkreten Beispiel oder Artefakt. Die öffentlichen Demos sind Prototypen; ihre Grenzen stehen auf den Projektseiten.',
    choose: 'FÄHIGKEIT WÄHLEN', contextLabel: 'KONTEXT', workLabel: 'MEIN BEITRAG', inspectLabel: 'WAS DU PRÜFEN KANNST',
    copyLink: 'Diese Ansicht teilen', copied: 'Link kopiert.', copyFailed: 'Kopieren fehlgeschlagen. Nutze die Adresszeile.',
    closingKicker: 'MEHR ERFAHREN?', closingTitle: 'Starte mit einem Projekt zum Ausprobieren.',
    evidenceCase: 'Evidence Desk Projektseite ↗', supportCase: 'Support Agent Lab Projektseite ↗', back: 'Zurück zum Portfolio ↗'
  }
};

const capabilities = [
  {
    id: 'evaluation',
    en: { name: 'LLM evaluation', hint: 'Professional work', category: 'PROFESSIONAL EXPERIENCE', lead: 'Comparing models is useful only when the tasks and criteria reflect the work they are meant to support.', context: 'At Drees & Sommer I worked on a framework covering more than 30 LLMs. My bachelor thesis with Bauhaus Luftfahrt compares local and cloud models for MATLAB engineering tasks.', work: 'I helped structure datasets and evaluation criteria, and I build task-level checks for coding, analysis, and tool use.', inspect: 'The portfolio describes both roles and the thesis approach. The employer code and evaluation data are private.', boundary: 'Professional work is described here; it is not presented as a public repository.', links: [{label:'Experience',href:'../index.html#experience'},{label:'Thesis',href:'../index.html#credentials'}] },
    de: { name: 'LLM-Evaluation', hint: 'Berufliche Arbeit', category: 'BERUFSERFAHRUNG', lead: 'Ein Modellvergleich ist nur nützlich, wenn Aufgaben und Kriterien die spätere Arbeit widerspiegeln.', context: 'Bei Drees & Sommer habe ich an einem Framework für mehr als 30 LLMs gearbeitet. Meine Bachelorarbeit mit Bauhaus Luftfahrt vergleicht lokale und Cloud-Modelle für MATLAB-Aufgaben.', work: 'Ich habe an Datensätzen und Bewertungskriterien mitgearbeitet und entwickle aufgabenbezogene Tests für Programmierung, Analyse und Tool-Nutzung.', inspect: 'Das Portfolio beschreibt beide Rollen und den Ansatz der Bachelorarbeit. Unternehmenscode und Evaluationsdaten sind privat.', boundary: 'Berufliche Arbeit wird beschrieben, aber nicht als öffentliches Repository ausgegeben.', links: [{label:'Erfahrung',href:'../index.html#experience'},{label:'Bachelorarbeit',href:'../index.html#credentials'}] }
  },
  {
    id: 'tools',
    en: { name: 'Tool workflows', hint: 'MCP · LangGraph · n8n', category: 'WORK + PUBLIC PROJECT', lead: 'I care about the path through a workflow: what tool ran, what it returned, and when a person should take over.', context: 'At Bauhaus Luftfahrt I connected models with MATLAB and engineering context. In Support Agent Lab I built an independent support workflow.', work: 'The public project routes a question through validation, retrieval, an answer with a citation, human handoff, or abstention. I also ran a local n8n integration.', inspect: 'Run the browser demo to see the path, then inspect the LangGraph server, tests, and architecture in the repository.', boundary: 'Support Agent Lab is deterministic and uses fictional policies. It does not call a live LLM or a real ticket system.', links: [{label:'Try workflow',href:'../lab/'},{label:'Case study',href:'../projects/support-agent.html'},{label:'Source code',href:'https://github.com/Om7203/support-agent-lab'}] },
    de: { name: 'Tool-Workflows', hint: 'MCP · LangGraph · n8n', category: 'ARBEIT + ÖFFENTLICHES PROJEKT', lead: 'Mir ist wichtig, welcher Pfad durch einen Workflow führt: welches Tool lief, was es zurückgab und wann ein Mensch übernehmen sollte.', context: 'Bei Bauhaus Luftfahrt habe ich Modelle mit MATLAB und Engineering-Kontext verbunden. Im Support Agent Lab habe ich einen eigenständigen Support-Workflow gebaut.', work: 'Das öffentliche Projekt führt Fragen durch Validierung, Suche, Antwort mit Quelle, Übergabe oder Nichtantwort. Eine lokale n8n-Integration wurde ebenfalls ausgeführt.', inspect: 'Teste die Browser-Demo und prüfe danach LangGraph-Server, Tests und Architektur im Repository.', boundary: 'Support Agent Lab arbeitet deterministisch mit fiktiven Richtlinien. Es ruft kein Live-LLM und kein echtes Ticketsystem auf.', links: [{label:'Workflow testen',href:'../lab/'},{label:'Projektseite',href:'../projects/support-agent.html'},{label:'Quellcode',href:'https://github.com/Om7203/support-agent-lab'}] }
  },
  {
    id: 'documents',
    en: { name: 'Document intelligence', hint: 'OCR · cited search', category: 'WORK + PUBLIC PROJECT', lead: 'A result should let the reader check the source instead of trusting a confident-looking answer.', context: 'At Drees & Sommer I worked with OCR and vision-language models for document analysis. Evidence Desk is my separate public retrieval experiment.', work: 'Evidence Desk extracts two public NIST PDFs page by page and ranks passages. Its browser version uses BM25; a local Python API uses TF-IDF.', inspect: 'Try a question, open the cited PDF page, and review the code and small evaluation, including the documented misses.', boundary: 'Browser search is extractive. An optional Gemini answer uses a separate server-side search over the same public PDFs; no private documents are processed.', links: [{label:'Try document search',href:'../evidence/'},{label:'Case study',href:'../projects/evidence-desk.html'},{label:'Source code',href:'https://github.com/Om7203/evidence-desk'}] },
    de: { name: 'Dokumenten-KI', hint: 'OCR · Suche mit Quellen', category: 'ARBEIT + ÖFFENTLICHES PROJEKT', lead: 'Ein Ergebnis soll die Quelle prüfbar machen, statt nur überzeugend zu klingen.', context: 'Bei Drees & Sommer habe ich mit OCR- und Vision-Language-Modellen für Dokumentanalyse gearbeitet. Evidence Desk ist mein separates öffentliches Suchexperiment.', work: 'Evidence Desk verarbeitet zwei öffentliche NIST-PDFs seitenweise und sortiert Textstellen. Die Browser-Version nutzt BM25, eine lokale Python-API TF-IDF.', inspect: 'Stelle eine Frage, öffne die zitierte PDF-Seite und sieh dir Code sowie die kleine Evaluation mit dokumentierten Fehlern an.', boundary: 'Die Browser-Suche zeigt Textstellen. Eine optionale Gemini-Antwort nutzt eine separate Suche auf dem Server über dieselben öffentlichen PDFs; private Dokumente werden nicht verarbeitet.', links: [{label:'Dokumentensuche testen',href:'../evidence/'},{label:'Projektseite',href:'../projects/evidence-desk.html'},{label:'Quellcode',href:'https://github.com/Om7203/evidence-desk'}] }
  },
  {
    id: 'nlp',
    en: { name: 'Applied NLP', hint: 'BiLSTM · GloVe', category: 'UNIVERSITY TEAM PROJECT', lead: 'Model architecture matters, but so do the split, metric, and limitations of the dataset.', context: 'In a university team project, we classified short texts into six emotion categories.', work: 'Our pipeline used GloVe embeddings, a BiLSTM, stratified cross-validation, early stopping, and macro-F1 evaluation.', inspect: 'The case study links the repository and model card, and explains where short-text emotion classification can fail.', boundary: 'This was team work. The portfolio does not present it as a solo project.', links: [{label:'Case study',href:'../projects/emotion-detection.html'},{label:'Repository',href:'https://github.com/Om7203/Emotion-detection-from-text'}] },
    de: { name: 'Angewandtes NLP', hint: 'BiLSTM · GloVe', category: 'HOCHSCHUL-TEAMPROJEKT', lead: 'Neben der Modellarchitektur sind Datenaufteilung, Metrik und Grenzen des Datensatzes entscheidend.', context: 'In einem Hochschul-Teamprojekt haben wir kurze Texte in sechs Emotionsklassen eingeteilt.', work: 'Unsere Pipeline nutzte GloVe-Embeddings, ein BiLSTM, stratifizierte Cross-Validation, Early Stopping und Macro-F1.', inspect: 'Die Projektseite verlinkt Repository und Model Card und erklärt Grenzen der Emotionserkennung in kurzen Texten.', boundary: 'Das war Teamarbeit. Im Portfolio wird es nicht als Einzelprojekt dargestellt.', links: [{label:'Projektseite',href:'../projects/emotion-detection.html'},{label:'Repository',href:'https://github.com/Om7203/Emotion-detection-from-text'}] }
  },
  {
    id: 'vision',
    en: { name: 'Computer vision', hint: 'YOLOv8 · tracking', category: 'PUBLIC PROJECT', lead: 'I built a staged video pipeline rather than a single model call.', context: 'The license-plate project starts with vehicle video and produces annotated output with detected and read plates.', work: 'The pipeline combines vehicle and plate detection, SORT tracking, character recognition, and output rendering.', inspect: 'The case study walks through the stages and the repository includes example input and output video.', boundary: 'No performance benchmark has been published for this project, so the page does not claim one.', links: [{label:'Case study',href:'../projects/license-plate.html'},{label:'Repository',href:'https://github.com/Om7203/automatic_lisence_plate_recognition_and_reading'}] },
    de: { name: 'Computer Vision', hint: 'YOLOv8 · Tracking', category: 'ÖFFENTLICHES PROJEKT', lead: 'Ich habe eine mehrstufige Videopipeline gebaut, nicht nur einen einzelnen Modellaufruf.', context: 'Das Kennzeichenprojekt verarbeitet Fahrzeugvideos und erzeugt Ausgaben mit erkannten und ausgelesenen Kennzeichen.', work: 'Die Pipeline kombiniert Fahrzeug- und Kennzeichenerkennung, SORT-Tracking, Zeichenauslesen und Ergebnisdarstellung.', inspect: 'Die Projektseite erklärt die Schritte; im Repository liegen Beispielvideos für Ein- und Ausgabe.', boundary: 'Für dieses Projekt wurde kein Leistungsbenchmark veröffentlicht. Die Seite behauptet daher keinen.', links: [{label:'Projektseite',href:'../projects/license-plate.html'},{label:'Repository',href:'https://github.com/Om7203/automatic_lisence_plate_recognition_and_reading'}] }
  },
  {
    id: 'quality',
    en: { name: 'Testing & delivery', hint: 'tests · evals · CI', category: 'PUBLIC REPOSITORIES', lead: 'A demo is stronger when its behavior can be checked again after changes.', context: 'Evidence Desk and Support Agent Lab are independent learning projects with runnable code and documented limits.', work: 'I added automated tests, fixed evaluation cases, architecture notes, and CI workflows to both repositories.', inspect: 'Read the tests and CI files, compare evaluation results, and try the browser demos. The README files explain what is still missing for real deployment.', boundary: 'These are production-minded prototypes, not live customer-facing services.', links: [{label:'Evidence Desk repo',href:'https://github.com/Om7203/evidence-desk'},{label:'Support Agent repo',href:'https://github.com/Om7203/support-agent-lab'}] },
    de: { name: 'Tests & Bereitstellung', hint: 'Tests · Evaluation · CI', category: 'ÖFFENTLICHE REPOSITORIES', lead: 'Eine Demo ist überzeugender, wenn ihr Verhalten nach Änderungen erneut geprüft werden kann.', context: 'Evidence Desk und Support Agent Lab sind eigenständige Lernprojekte mit ausführbarem Code und dokumentierten Grenzen.', work: 'Ich habe in beiden Repositories automatisierte Tests, feste Evaluationsfälle, Architekturhinweise und CI-Workflows ergänzt.', inspect: 'Prüfe Tests, CI-Dateien und Evaluationsergebnisse oder teste die Browser-Demos. Die READMEs nennen noch offene Schritte für einen echten Einsatz.', boundary: 'Es sind produktionsorientierte Prototypen, keine produktiven Kundendienste.', links: [{label:'Evidence Desk Repo',href:'https://github.com/Om7203/evidence-desk'},{label:'Support Agent Repo',href:'https://github.com/Om7203/support-agent-lab'}] }
  }
];

const list = document.querySelector('#capability-list');
const copyStatus = document.querySelector('#copy-status');
const knownIds = new Set(capabilities.map(({id}) => id));
const urlLanguage = new URL(location.href).searchParams.get('lang');
let language = ['en', 'de'].includes(urlLanguage) ? urlLanguage : (localStorage.getItem('portfolio-language') || 'en');
if (!['en', 'de'].includes(language)) language = 'en';
let activeId = knownIds.has(location.hash.slice(1)) ? location.hash.slice(1) : 'evaluation';

function setUrl() {
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  url.hash = activeId;
  history.replaceState(null, '', url);
}

function renderList() {
  list.replaceChildren(...capabilities.map((capability, index) => {
    const button = document.createElement('button');
    const item = capability[language];
    button.type = 'button';
    button.className = 'capability';
    button.id = `tab-${capability.id}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'evidence-panel');
    button.setAttribute('aria-selected', String(capability.id === activeId));
    button.tabIndex = capability.id === activeId ? 0 : -1;
    button.dataset.capability = capability.id;
    const count = document.createElement('span'); count.className = 'capability-index'; count.textContent = String(index + 1).padStart(2, '0');
    const labels = document.createElement('span');
    const name = document.createElement('span'); name.className = 'capability-name'; name.textContent = item.name;
    const hint = document.createElement('span'); hint.className = 'capability-hint'; hint.textContent = item.hint;
    labels.append(name, hint);
    const arrow = document.createElement('span'); arrow.className = 'capability-arrow'; arrow.setAttribute('aria-hidden', 'true'); arrow.textContent = '↗';
    button.append(count, labels, arrow);
    return button;
  }));
}

function renderPanel() {
  const index = capabilities.findIndex(({id}) => id === activeId);
  const data = capabilities[index][language];
  document.querySelector('#selection-count').textContent = `${String(index + 1).padStart(2, '0')} / ${String(capabilities.length).padStart(2, '0')}`;
  document.querySelector('#panel-code').textContent = `${copy[language].panelCode} / ${String(index + 1).padStart(2, '0')}`;
  document.querySelector('#panel-category').textContent = data.category;
  document.querySelector('#panel-title').textContent = data.name;
  document.querySelector('#panel-lead').textContent = data.lead;
  document.querySelector('#panel-context').textContent = data.context;
  document.querySelector('#panel-work').textContent = data.work;
  document.querySelector('#panel-inspect').textContent = data.inspect;
  document.querySelector('#panel-boundary').textContent = data.boundary;
  const links = document.querySelector('#artifact-links');
  links.replaceChildren(...data.links.map(({label, href}) => {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.textContent = `${label} ↗`;
    if (href.startsWith('https://')) { anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; }
    return anchor;
  }));
  document.querySelector('#evidence-panel').setAttribute('aria-labelledby', `tab-${activeId}`);
  list.querySelectorAll('[role="tab"]').forEach((button) => {
    const selected = button.dataset.capability === activeId;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  copyStatus.textContent = '';
}

function renderLanguage() {
  document.documentElement.lang = language;
  document.title = language === 'de' ? 'Arbeit entdecken · Om Vaghasiya' : 'Explore my work · Om Vaghasiya';
  document.querySelectorAll('[data-copy]').forEach((element) => { element.textContent = copy[language][element.dataset.copy]; });
  document.querySelector('header nav').setAttribute('aria-label', copy[language].pageNavigation);
  document.querySelector('.language-switcher').setAttribute('aria-label', copy[language].languageGroup);
  document.querySelector('.proof-bar').setAttribute('aria-label', copy[language].proofOverview);
  list.setAttribute('aria-label', copy[language].capabilityGroup);
  document.querySelector('.path').setAttribute('aria-label', copy[language].evidencePath);
  document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  renderList();
  renderPanel();
  localStorage.setItem('portfolio-language', language);
  setUrl();
}

list.addEventListener('click', (event) => {
  const button = event.target.closest('[data-capability]');
  if (!button) return;
  activeId = button.dataset.capability;
  renderPanel();
  setUrl();
});
list.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const index = capabilities.findIndex(({id}) => id === activeId);
  let next = index;
  if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (index + 1) % capabilities.length;
  if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (index + capabilities.length - 1) % capabilities.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = capabilities.length - 1;
  activeId = capabilities[next].id;
  renderPanel();
  list.querySelector(`[data-capability="${activeId}"]`).focus();
  setUrl();
});
window.addEventListener('hashchange', () => {
  const requested = location.hash.slice(1);
  if (!knownIds.has(requested)) return;
  activeId = requested;
  renderPanel();
});
document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => { language = button.dataset.lang; renderLanguage(); }));
document.querySelector('#copy-link').addEventListener('click', async () => {
  const url = new URL(location.href);
  url.hash = activeId;
  try { await navigator.clipboard.writeText(url.href); copyStatus.textContent = copy[language].copied; }
  catch { copyStatus.textContent = copy[language].copyFailed; }
});
renderLanguage();
