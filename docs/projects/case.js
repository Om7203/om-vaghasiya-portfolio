const cases = {
  support: {
    repo: 'https://github.com/Om7203/support-agent-lab', demo: '../lab/index.html',
    en: {
      kind: 'INDEPENDENT BUILD · WORKING PROTOTYPE', title: 'Support questions,<br><em>with a visible decision path.</em>',
      summary: 'I built a small support triage workflow to make three behaviors easy to inspect: answer from a source, ask a person to take over, or say when the answer is unknown.',
      role: 'Independent learning project', period: 'September 2026', stack: 'LangGraph · Node.js · n8n',
      challenge: 'A support assistant should not sound certain when it has no evidence. It should also avoid pretending it can handle payment or account actions.',
      approach: 'The workflow checks the input, retrieves from four fictional help articles, and takes an explicit branch. Known policy questions get an answer and citation. Payment or account requests go to a handoff message. Unknown questions end with an abstention. A small web interface shows the path it took. I also ran an importable n8n workflow that calls the local API and displays its structured response.',
      nodes: [['INPUT','Question'],['CHECK','Validate & retrieve'],['DECIDE','Choose route'],['OUTPUT','Answer or handoff']],
      branches: [['ANSWER','Policy text with citation'],['HANDOFF','A person should check this'],['ABSTAIN','No matching evidence']],
      evidence: [['8 / 8','Fixed evaluation examples passed'],['7','Automated tests passed'],['3','Explicit response routes']],
      limit: 'This is a prototype, not a live customer service system. The public demo uses deterministic rules and fictional policies; it does not call an LLM, create a ticket, or access customer data.',
      next: 'I have added a small LangChain retrieval exercise. Next I want to test embeddings and a controlled LLM answer step against this baseline. I will keep the same handoff and abstention tests before claiming an improvement.'
    },
    de: {
      kind: 'EIGENSTÄNDIGES PROJEKT · FUNKTIONIERENDER PROTOTYP', title: 'Support-Anfragen<br><em>mit sichtbarem Entscheidungsweg.</em>',
      summary: 'Ich habe einen kleinen Workflow für Support-Anfragen gebaut. Er kann eine Antwort mit Quelle geben, an einen Menschen verweisen oder offen sagen, dass die Antwort nicht bekannt ist.',
      role: 'Eigenständiges Lernprojekt', period: 'September 2026', stack: 'LangGraph · Node.js · n8n',
      challenge: 'Ein Support-Assistent sollte ohne Belege keine sichere Antwort geben. Bei Zahlungs- oder Kontothemen darf er nicht so tun, als könne er selbst handeln.',
      approach: 'Der Workflow prüft die Eingabe, sucht in vier fiktiven Hilfeartikeln und wählt einen klaren Pfad. Bekannte Fragen erhalten eine Antwort mit Quelle. Zahlungs- oder Kontofragen führen zur Übergabe. Bei unbekannten Fragen bleibt das System bei einer ehrlichen Nichtantwort. Die Oberfläche zeigt den gewählten Pfad. Zusätzlich habe ich einen importierbaren n8n-Workflow ausgeführt, der die lokale API aufruft und die strukturierte Antwort zeigt.',
      nodes: [['EINGABE','Frage'],['PRÜFEN','Validieren & suchen'],['ENTSCHEIDEN','Pfad wählen'],['AUSGABE','Antwort oder Übergabe']],
      branches: [['ANTWORT','Richtlinie mit Quelle'],['ÜBERGABE','Ein Mensch sollte prüfen'],['KEINE ANTWORT','Keine passende Quelle']],
      evidence: [['8 / 8','Feste Evaluationsbeispiele bestanden'],['7','Automatisierte Tests bestanden'],['3','Klare Antwortpfade']],
      limit: 'Dies ist ein Prototyp, kein echter Kundenservice. Die öffentliche Demo verwendet feste Regeln und fiktive Richtlinien. Sie ruft kein LLM auf, erstellt kein Ticket und greift nicht auf Kundendaten zu.',
      next: 'Eine kleine LangChain-Retrieval-Übung ist bereits im Repository. Als Nächstes möchte ich Embeddings und eine kontrollierte LLM-Antwort mit dieser Basis vergleichen. Die Tests für Übergabe und Nichtantwort bleiben dabei bestehen.'
    }
  },
  emotion: {
    repo: 'https://github.com/Om7203/Emotion-detection-from-text',
    en: {
      kind: 'UNIVERSITY TEAM PROJECT · NLP', title: 'Six emotions.<br><em>One text classifier.</em>',
      summary: 'Our university team trained a model to classify short social-media-style text as joy, sadness, anger, fear, love, or surprise. The repository contains the notebook and a model card.',
      role: 'Team project (four students)', period: 'University project', stack: 'Python · GloVe · BiLSTM · Keras',
      challenge: 'Short text can be ambiguous. A useful classifier needs a repeatable preprocessing path and evaluation across all six labels, rather than one headline accuracy number.',
      approach: 'The notebook cleans and tokenizes text, uses pretrained GloVe embeddings, trains a bidirectional LSTM, and evaluates it with stratified folds and Macro-F1. A model card records the intended use and known limits.',
      nodes: [['DATA','Short text'],['PREP','Clean & tokenize'],['MODEL','GloVe + BiLSTM'],['CHECK','Cross-validation']],
      branches: [['OUTPUT','Six emotion labels'],['EVALUATION','Macro-F1 across classes'],['DOCUMENTATION','Model card']],
      evidence: [['6','Emotion classes'],['4','Students on the team'],['1','Published model card']],
      limit: 'The model is trained on a social-media dataset. Sarcasm, context, and language outside that dataset can cause mistakes. I am not presenting it as a general emotion reader or a deployed service.',
      next: 'I would add a small inference service, publish reproducible metrics from a clean run, and compare it with a transformer baseline.'
    },
    de: {
      kind: 'TEAMPROJEKT IM STUDIUM · NLP', title: 'Sechs Emotionen.<br><em>Ein Textklassifikator.</em>',
      summary: 'Unser Hochschulteam hat ein Modell trainiert, das kurze Texte als Freude, Trauer, Wut, Angst, Liebe oder Überraschung einordnet. Im Repository liegen das Notebook und eine Model Card.',
      role: 'Teamprojekt (vier Studierende)', period: 'Hochschulprojekt', stack: 'Python · GloVe · BiLSTM · Keras',
      challenge: 'Kurze Texte sind oft mehrdeutig. Deshalb braucht ein Klassifikator einen wiederholbaren Vorverarbeitungsschritt und eine Bewertung über alle sechs Klassen.',
      approach: 'Das Notebook bereinigt und tokenisiert Texte, nutzt vortrainierte GloVe-Embeddings, trainiert ein bidirektionales LSTM und bewertet es mit stratifizierten Folds und Macro-F1. Die Model Card hält Einsatzzweck und Grenzen fest.',
      nodes: [['DATEN','Kurzer Text'],['VORBEREITUNG','Bereinigen & tokenisieren'],['MODELL','GloVe + BiLSTM'],['PRÜFEN','Cross-Validation']],
      branches: [['AUSGABE','Sechs Emotionsklassen'],['EVALUATION','Macro-F1 über Klassen'],['DOKUMENTATION','Model Card']],
      evidence: [['6','Emotionsklassen'],['4','Studierende im Team'],['1','Veröffentlichte Model Card']],
      limit: 'Das Modell wurde auf Social-Media-Texten trainiert. Sarkasmus, Kontext und andere Sprachformen können zu Fehlern führen. Es ist kein allgemeiner Emotionsleser und kein produktiver Dienst.',
      next: 'Ich würde einen kleinen Inferenzdienst ergänzen, reproduzierbare Kennzahlen veröffentlichen und einen Transformer als Vergleichsbasis testen.'
    }
  },
  plate: {
    repo: 'https://github.com/Om7203/automatic_lisence_plate_recognition_and_reading',
    en: {
      kind: 'COMPUTER VISION · VIDEO PIPELINE', title: 'From video frames<br><em>to readable plates.</em>',
      summary: 'This repository connects detection, tracking, character reading, interpolation, and video rendering into a staged license-plate recognition pipeline.',
      role: 'Project repository', period: 'Computer vision project', stack: 'Python · YOLOv8 · SORT · OCR',
      challenge: 'A plate may be visible in some frames and missed in others. Reading each frame independently makes the output jump or disappear.',
      approach: 'The code processes a sample video, detects vehicles and plates with YOLOv8, associates detections over time with SORT, reads plate characters, fills missing values in an intermediate CSV, and renders the output video.',
      nodes: [['INPUT','Sample video'],['DETECT','YOLOv8 objects'],['TRACK','SORT + plate reading'],['OUTPUT','Interpolate & render']],
      branches: [['ARTIFACT','Sample output video'],['INTERMEDIATE','Detection CSV'],['LIMIT','No published benchmark']],
      evidence: [['1','Sample input video'],['1','Sample output video'],['4','Main pipeline stages']],
      limit: 'The repository has a sample output, but no published accuracy or speed benchmark. I would test varied lighting, motion blur, and plate formats before claiming reliable real-world performance.',
      next: 'I would add an annotated evaluation set, frame-level metrics, and a short visual comparison of correct and failed detections.'
    },
    de: {
      kind: 'COMPUTER VISION · VIDEO-PIPELINE', title: 'Von Videoframes<br><em>zu lesbaren Kennzeichen.</em>',
      summary: 'Dieses Repository verbindet Erkennung, Tracking, Zeichenauslesen, Interpolation und Videoausgabe zu einer mehrstufigen Kennzeichen-Pipeline.',
      role: 'Projekt-Repository', period: 'Computer-Vision-Projekt', stack: 'Python · YOLOv8 · SORT · OCR',
      challenge: 'Ein Kennzeichen ist in manchen Frames sichtbar und fehlt in anderen. Ohne Tracking springt oder verschwindet das Ergebnis zwischen den Bildern.',
      approach: 'Der Code verarbeitet ein Beispielvideo, erkennt Fahrzeuge und Kennzeichen mit YOLOv8, verbindet Erkennungen über die Zeit mit SORT, liest Zeichen aus, ergänzt fehlende Werte in einer CSV und rendert ein Ausgabevideo.',
      nodes: [['EINGABE','Beispielvideo'],['ERKENNEN','YOLOv8-Objekte'],['TRACKING','SORT + Kennzeichen'],['AUSGABE','Interpolieren & rendern']],
      branches: [['ERGEBNIS','Beispielvideo'],['ZWISCHENSTAND','Erkennungs-CSV'],['GRENZE','Kein veröffentlichter Benchmark']],
      evidence: [['1','Beispiel-Eingabevideo'],['1','Beispiel-Ausgabevideo'],['4','Hauptschritte der Pipeline']],
      limit: 'Im Repository liegt ein Beispielergebnis, aber kein veröffentlichter Benchmark für Genauigkeit oder Geschwindigkeit. Vor einem Einsatz würde ich unterschiedliche Lichtverhältnisse, Bewegungsunschärfe und Kennzeichenformate testen.',
      next: 'Ich würde einen annotierten Testsatz, Kennzahlen pro Frame und einen visuellen Vergleich gelungener und fehlgeschlagener Erkennungen ergänzen.'
    }
  }
};

const id = document.documentElement.dataset.project;
const record = cases[id];
let language = localStorage.getItem('portfolio-language') === 'de' ? 'de' : 'en';

function render() {
  const item = record[language];
  document.documentElement.lang = language;
  document.title = `${item.title.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()} · Om Vaghasiya`;
  document.querySelector('.top nav a:first-child').textContent = language === 'de' ? 'Alle Projekte' : 'All projects';
  document.querySelector('.top nav a:last-child').textContent = language === 'de' ? 'Demo (Englisch)' : 'Try the demo';
  document.querySelector('.skip').textContent = language === 'de' ? 'Zum Inhalt springen' : 'Skip to content';
  document.querySelector('footer a').textContent = language === 'de' ? 'Zurück zum Portfolio' : 'Back to portfolio';
  document.querySelector('#case-root').innerHTML = `
    <section class="hero"><div><div class="eyebrow">${item.kind}</div><h1>${item.title}</h1><p class="summary">${item.summary}</p><div class="hero-links">${record.demo ? `<a class="primary" href="${record.demo}">${language === 'de' ? 'Demo ausprobieren' : 'Try the demo'}</a>` : ''}<a href="${record.repo}" target="_blank" rel="noopener noreferrer">${language === 'de' ? 'Repository ansehen' : 'Explore repository'}</a></div></div><aside class="fact-panel"><h2>${language === 'de' ? 'Auf einen Blick' : 'At a glance'}</h2><dl><dt>${language === 'de' ? 'ROLLE' : 'ROLE'}</dt><dd>${item.role}</dd><dt>${language === 'de' ? 'ZEITRAUM' : 'PERIOD'}</dt><dd>${item.period}</dd><dt>TOOLS</dt><dd>${item.stack}</dd></dl><div class="language"><button type="button" data-lang="en" aria-pressed="${language === 'en'}">EN</button><button type="button" data-lang="de" aria-pressed="${language === 'de'}">DE</button></div></aside></section>
    <div class="body-grid"><nav class="toc" aria-label="${language === 'de' ? 'Auf dieser Seite' : 'On this page'}"><a href="#problem">01 / ${language === 'de' ? 'Problem' : 'Problem'}</a><a href="#design">02 / ${language === 'de' ? 'Aufbau' : 'Design'}</a><a href="#evidence">03 / ${language === 'de' ? 'Belege' : 'Evidence'}</a><a href="#limits">04 / ${language === 'de' ? 'Grenzen' : 'Limits'}</a></nav><div class="content"><section id="problem"><span class="section-no">01 / ${language === 'de' ? 'DAS PROBLEM' : 'THE QUESTION'}</span><h2>${language === 'de' ? 'Welches Problem löst das Projekt?' : 'What problem does it solve?'}</h2><p>${item.challenge}</p></section><section id="design"><span class="section-no">02 / ${language === 'de' ? 'DER ANSATZ' : 'THE APPROACH'}</span><h2>${language === 'de' ? 'So funktioniert es.' : 'How it works.'}</h2><p>${item.approach}</p><div class="architecture" role="group" aria-label="${language === 'de' ? 'Architekturdiagramm' : 'Architecture diagram'}"><div class="arch-header"><span>${language === 'de' ? 'ARCHITEKTUR / ABLAUF' : 'ARCHITECTURE / FLOW'}</span><span>${id.toUpperCase()}</span></div><div class="nodes">${item.nodes.map(([label,text]) => `<div class="node"><b>${label}</b><strong>${text}</strong></div>`).join('')}</div><div class="branches">${item.branches.map(([label,text]) => `<div class="branch"><b>${label}</b><p>${text}</p></div>`).join('')}</div></div></section><section id="evidence"><span class="section-no">03 / ${language === 'de' ? 'BELEGE' : 'WHAT IS THERE'}</span><h2>${language === 'de' ? 'Was man prüfen kann.' : 'What you can inspect.'}</h2><div class="evidence">${item.evidence.map(([number,text]) => `<div><strong>${number}</strong><span>${text}</span></div>`).join('')}</div></section><section id="limits"><span class="section-no">04 / ${language === 'de' ? 'GRENZEN' : 'HONEST LIMITS'}</span><h2>${language === 'de' ? 'Was noch fehlt.' : 'What is still missing.'}</h2><p class="limit">${item.limit}</p><h3>${language === 'de' ? 'Nächster Schritt' : 'Next step'}</h3><p>${item.next}</p></section></div></div><div class="next"><h2>${language === 'de' ? 'Weitere Projekte ansehen.' : 'Explore another project.'}</h2><a href="${id === 'support' ? 'emotion-detection.html' : id === 'emotion' ? 'license-plate.html' : 'support-agent.html'}">${language === 'de' ? 'Nächstes Projekt' : 'Next case study'}</a></div>`;
  if (id === 'support') {
    if (language === 'de') document.querySelector('.hero-links .primary').textContent = 'Demo (Englisch)';
    const figure = document.createElement('figure');
    figure.className = 'demo-proof';
    figure.innerHTML = `<img src="assets/support-demo.png" alt="A delivery question answered by the local LangGraph server, with a citation and execution trace" loading="lazy"><figcaption>${language === 'de' ? 'Tatsächliche Ausgabe des lokal laufenden LangGraph-Servers.' : 'Actual output from the locally running LangGraph server.'}</figcaption>`;
    document.querySelector('#evidence').append(figure);
    const workflowFigure = document.createElement('figure');
    workflowFigure.className = 'demo-proof';
    workflowFigure.innerHTML = `<img src="assets/n8n-workflow.png" alt="The imported three-node workflow in the local n8n editor" loading="lazy"><figcaption>${language === 'de' ? 'Importierter Workflow in der lokalen n8n-Oberfläche.' : 'Imported workflow in the local n8n editor.'}</figcaption>`;
    document.querySelector('#evidence').append(workflowFigure);
    const integration = document.createElement('p');
    integration.className = 'integration-proof';
    integration.innerHTML = `${language === 'de' ? 'Der n8n-Workflow wurde lokal ausgeführt. ' : 'The n8n workflow was executed locally. '}<a href="${record.repo}/blob/main/docs/N8N.md" target="_blank" rel="noopener noreferrer">${language === 'de' ? 'Workflow und Ergebnis ansehen ↗' : 'See the workflow and result ↗'}</a>`;
    document.querySelector('#evidence').append(integration);
  }
  if (id === 'plate' || id === 'emotion') {
    const link = document.createElement('a');
    link.href = id === 'plate' ? `${record.repo}/blob/main/out.mp4` : `${record.repo}/blob/main/Model_card_LSTM.pdf`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = id === 'plate' ? (language === 'de' ? 'Beispielvideo ansehen' : 'Watch sample output') : (language === 'de' ? 'Model Card lesen' : 'Read model card');
    document.querySelector('.hero-links').append(link);
  }
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => { language = button.dataset.lang; localStorage.setItem('portfolio-language', language); render(); }));
}
render();
