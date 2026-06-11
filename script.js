const graduateData = [
  [2006,1059],[2007,1290],[2008,2326],[2009,3058],[2010,3252],[2011,3564],[2012,3743],[2013,4991],[2014,3860],[2015,4140],
  [2016,4360],[2017,4903],[2018,4924],[2019,6134],[2020,4934],[2021,4173],[2022,3245],[2023,3266],[2024,3288],[2025,3280]
];

const cmeTopics = {
  "Pembedahan": ["Common Bedside Procedure: Chest Tube Drainage, Central Line Insertion, Sengstaken Blackmore Tube Insertion, Pleural and Peritoneal Tapping, Haemorrhoid Banding, Suprapubic Catheter Insertion","Upper Gastrointestinal Bleeding","Lower Gastrointestinal Bleeding","Management of Burns","Intestinal Obstruction","Approach to Acute Abdomen","Approach to Breast Lump (Benign vs Malignant)","Colorectal Cancer","Approach to Obstructive Jaundice","Principle of Antibiotics in Surgery","Fluid and Electrolyte in Surgical Patient","Trauma and Resuscitation (Abdominal and Chest Injury)","Principle and Management of Head Injury","Common Paediatric Surgical Emergency: Acute Abdomen, Intussusception, Testicular Torsion, Phimosis","Post-Operative Complications and Care","Venous Thromboembolism","Acute Limb Ischemia","Principle of Pre-Operative Preparation","Skin Infection and Basic of Sterilization"],
  "Ortopedik": ["Principle of Management for Fracture and Dislocation","Open Fracture with Vascular Injury; Sepsis and Septic Shock","Principle of Fracture Management in Children","Necrotizing Fasciitis","Septic Arthritis","Osteomyelitis","Abscess","Pelvic Injury","Spinal Cord Injury and Cauda Equina Syndrome","Vertebral Fracture (traumatic/pathological)","Metabolic Bone Disease: Tumour, Metastasis, Osteoporosis","Approach to Back Pain in Adult","Arthritis: Osteoarthritis, Rheumatoid Arthritis, Gouty Arthritis","Office Orthopedics: Carpal Tunnel, Trigger Finger, Tennis Elbow, Plantar Fasciitis, Sports Injury"],
  "Obstetrik & Ginekologi": ["Normal and Abnormal Labour","Hypertensive Disorder in Pregnancy/Eclampsia","Obstetric Emergencies: Cord Prolapse, Shoulder Dystocia, Uterine Inversion","Diabetes in Pregnancy","Other Medical Disorder in Pregnancy","Premature Prelabour Rupture of Membrane, Prelabour Rupture of Membrane, Preterm Labour","Antepartum/Post-Partum Hemorrhage","Baby Friendly Hospital","Early Pregnancy Complications","Gynaecological Tumour / Oncology / Management of Abnormal Cervical Smear","Menstrual Disorder / Per Vaginal Discharge","One Stop Crisis Centre (OSCC)","Postmenopausal Problem / Hormone Replacement Therapy","Contraception","UV Prolapse / Urinary Incontinence","Infection in Pregnancy: HIV, Syphilis, COVID-19"],
  "Perubatan": ["Dengue and Other Common Infections","Sepsis and Rational Use of Antibiotics","Tuberculosis","Diabetes Mellitus including emergencies","Hypertension including urgency and emergencies","Acute Chest Pain (Acute Coronary Syndrome)","Acute and Chronic Heart Failure","ECG Interpretation and Cardiac Arrhythmias","Acute Breathlessness","Common Respiratory Diseases and Chest X-ray Interpretation","Bronchial Asthma and COPD","Acute Confusion","Fluid and Electrolyte Disorders","Acute Kidney Injury and Chronic Kidney Disease","Shock","Counselling and Communication Skills"],
  "Pediatrik": ["Neonatal Jaundice","Respiratory Distress in Newborn","Prematurity & Neonatal Hypoglycaemia","Breastfeeding and Nutrition in Children","CNS Emergencies in Children","Child with Anemia (Thalassemia)","Pediatric Emergencies: Respiratory Failure and Shock","Growth & Development and Immunization","Acute Gastroenteritis, Fluid and Electrolyte Management","Bronchial Asthma and Acute Asthma","Nephrotic Syndrome and Acute Nephritis","Urinary Tract Infection","Common Heart Conditions in Children","Child with Bleeding Problems","Acute Respiratory Infections","Dengue Infection","Acute Abdomen in Children","COVID-19 in Children including MISC"],
  "Anestesiologi": ["Basic Pharmacology of Anaesthesia Drugs","Basic Pharmacology of Anaesthesia-related Drugs","Preoperative Assessment","Airway Adjuncts and Difficult Airway","Understanding Anaesthesia Machine","Oxygen Therapy","Arterial Blood Gas Measurement","Fluids, Blood, and Blood Products Management","Obstetric Anaesthesia","Anaesthesia for Emergency Surgery","Acute and Chronic Pain Management","Transport of the Critically Ill Patient","Organ Donation","Effective Communication with Relatives","Basic COVID-19 Management in OT and ICU","Sepsis and Septic Shock"],
  "Perubatan Kecemasan": ["Approach to Chest Pain","Approach to Undifferentiated Septic Patients","Altered Mental Status","Acute Abdominal Pain","Shortness of Breath","Acute Poisoning: Initial Approach and Resuscitation","Seizures","Upper and Lower Gastrointestinal Bleeding","Shock Patients","ECG Interpretation","Common X-Rays Interpretation","Approach to Fever","Triage","Principles in Disaster Preparedness","Approach to Violent Patient","Basic Ethical Principle","Transfer of Critically Ill Patients","Stroke","Child with Rash","Approach to Envenomation"],
  "Psikiatri": ["Psychiatric Interview and Mental State Examination","Psychiatric Management: Pharmacological, Non-Pharmacological and ECT","Management of Aggressive Patient","Management of Suicidal Patient","Schizophrenia Spectrum and Other Psychotic Disorders","Mood Disorders","Anxiety and Obsessive-Compulsive Disorders","Neurodevelopmental Disorders","Neurocognitive Disorders and Psychiatric Manifestation in Other Medical Conditions","Substance-Related and Addictive Disorders","Community and Rehabilitation Psychiatry","Mental Health Act 2001 and Mental Health Regulation 2010"],
  "Kesihatan Primer": ["Principles of Family Medicine","Immunization in Children in Malaysia","Neonatal Jaundice","Child with Special Needs: Detection and Early Intervention","Using HEADS as a Tool for Engaging Adolescents","Contraception","Management of Anaemia in Pregnancy in Primary Care","Management of Diabetes in Pregnancy in Primary Care","Management of Hypertensive Disorders in Pregnancy in Primary Care","Management of Type 2 Diabetes in Primary Care","Management of Hypertension in Primary Care","Management of Asthma in Primary Care","Management of Mental Health Problems in Primary Care","Management of Tuberculosis in Primary Care","The Giants of Geriatrics"]
};

const glossary = {
  PPS: "Pegawai Perubatan Siswazah.",
  HLS: "Hospital Latihan Siswazah.",
  JKP: "Jawatankuasa Kelayakan Perubatan.",
  CME: "Continuing Medical Education; pembelajaran berterusan mengikut disiplin sepanjang posting.",
  Tagging: "Tempoh minimum dua minggu pada awal setiap posting untuk mengenali cara kerja jabatan dan bersedia memasuki fleksi.",
  "Off-tag": "Keputusan bahawa PPS melepasi penilaian tagging dan boleh memasuki sistem waktu bekerja fleksi.",
  Fleksi: "Sistem waktu bekerja berjadual dengan purata 60-62 jam seminggu berdasarkan penyeragaman 2019.",
  LNPT: "Laporan Nilaian Prestasi Tahunan.",
  CCP: "Certificate of Completion of Posting; sijil dan markah tamat bagi setiap posting.",
  CCHT: "Certificate of Completion of Housemanship Training; purata enam CCP selepas latihan selesai.",
  MPIS: "Medical Programme Information System, platform Buku Log Digital PPS.",
  MPM: "Majlis Perubatan Malaysia.",
  APC: "Annual Practice Certificate; sijil amalan tahunan.",
  CPD: "Continuing Professional Development."
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let currentLanguage=new URLSearchParams(location.search).get("lang")||localStorage.getItem("pps-language")||"ms";
if(!["ms","en"].includes(currentLanguage)) currentLanguage="ms";

function buildChart() {
  const chart = $("#graduate-chart"), max = Math.max(...graduateData.map(d=>d[1]));
  graduateData.forEach(([year,value]) => {
    const bar = document.createElement("button");
    bar.className = "bar"; bar.style.height = `${value/max*100}%`; bar.dataset.year=year;
    bar.title = `${year}: ${value.toLocaleString()}`;
    bar.addEventListener("click", () => {
      $$(".bar").forEach(b=>b.classList.remove("active")); bar.classList.add("active");
      $("#chart-value").textContent = `${year} · ${value.toLocaleString()} graduan`;
    });
    chart.appendChild(bar);
  });
}

function renderCme() {
  const select=$("#cme-posting"), results=$("#cme-results"), query=$("#cme-search").value.trim().toLowerCase(), chosen=select.value;
  results.innerHTML=""; let count=0;
  Object.entries(cmeTopics).forEach(([posting, topics]) => {
    if (chosen!=="all" && chosen!==posting) return;
    const filtered=topics.filter(t=>t.toLowerCase().includes(query));
    if (!filtered.length) return; count+=filtered.length;
    const group=document.createElement("details"); group.className="cme-group"; group.open=chosen!=="all" || !!query;
    group.innerHTML=`<summary>${currentLanguage==="en"?postingLabels[posting]:posting} · ${filtered.length} ${currentLanguage==="en"?"topics":"topik"}</summary><ol>${filtered.map(t=>`<li>${t}</li>`).join("")}</ol>`;
    results.appendChild(group);
  });
  $("#cme-count").textContent=currentLanguage==="en"?`${count} topics found`:`${count} topik ditemui`;
  if(!count) results.innerHTML=currentLanguage==="en"?"<p>No matching topics. Try another keyword or posting.</p>":"<p>Tiada topik sepadan. Cuba kata kunci atau posting lain.</p>";
}

function initCme() {
  const select=$("#cme-posting");
  refreshCmeOptions();
  $("#cme-search").addEventListener("input",renderCme); select.addEventListener("change",renderCme); renderCme();
}

function initNavigation() {
  const sections=$$(".learning-section"), links=$$(".side-nav a");
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    links.forEach(a=>a.classList.toggle("active",a.hash===`#${visible.target.id}`));
    $("#section-count").textContent=`${String(visible.target.dataset.index).padStart(2,"0")} / 15`;
    localStorage.setItem("pps-last-section", visible.target.id);
  },{rootMargin:"-25% 0px -60% 0px",threshold:[0,.25,.5]});
  sections.forEach(s=>observer.observe(s));
  addEventListener("scroll",()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    $("#scroll-progress").style.width=`${max ? scrollY/max*100 : 0}%`;
  },{passive:true});
  $("#menu-toggle").addEventListener("click",()=>{
    const open=$("#side-nav").classList.toggle("open"); $("#menu-toggle").setAttribute("aria-expanded",open);
  });
  links.forEach(a=>a.addEventListener("click",()=>$("#side-nav").classList.remove("open")));
  $("#resume-button").addEventListener("click",()=>document.getElementById(localStorage.getItem("pps-last-section")||"overview").scrollIntoView());
}

function initTabs() {
  $$("[data-tabs]").forEach(set=>$$("[data-tab]",set).forEach(btn=>btn.addEventListener("click",()=>{
    $$("[data-tab]",set).forEach(b=>b.classList.toggle("active",b===btn));
    $$("[data-panel]",set).forEach(p=>p.classList.toggle("active",p.dataset.panel===btn.dataset.tab));
  })));
}

function initChecks() {
  $$(".mini-check").forEach(check=>$$("button",check).forEach(btn=>btn.addEventListener("click",()=>{
    $$("button",check).forEach(b=>b.classList.remove("correct","wrong"));
    const ok=btn.dataset.choice===check.dataset.answer; btn.classList.add(ok?"correct":"wrong");
    $(".feedback",check).textContent=currentLanguage==="en"?(ok?"Correct. Continue.":"Not quite. Review this section and try again."):(ok?"Betul. Teruskan.":"Belum tepat. Cuba semak semula bahagian ini.");
  })));
}

function initSourceQuiz(){
  const form=$("#source-quiz"), result=$("#source-quiz-result"), progress=$("#source-quiz-progress");
  form.innerHTML=sourceQuizQuestions.map((q,i)=>`<article class="source-question" data-question="${i}" role="group" aria-labelledby="source-question-${i}"><h3 id="source-question-${i}"><span>${i+1}.</span>${q.q}</h3><div class="source-options">${q.o.map((option,j)=>`<label class="source-option"><input type="radio" name="source-q-${i}" value="${j}"><span>${option}</span></label>`).join("")}</div><p class="source-feedback" hidden></p></article>`).join("");
  const updateProgress=()=>{
    const answered=sourceQuizQuestions.filter((_,i)=>form.querySelector(`input[name="source-q-${i}"]:checked`)).length;
    progress.textContent=currentLanguage==="en"?`${answered} / 20 answered`:`${answered} / 20 dijawab`;
  };
  form.addEventListener("change",updateProgress);
  $("#source-quiz-submit").addEventListener("click",()=>{
    let score=0, firstMissing=null;
    sourceQuizQuestions.forEach((q,i)=>{
      const box=form.querySelector(`[data-question="${i}"]`), selected=box.querySelector("input:checked");
      $$(".source-option",box).forEach((label,j)=>{label.classList.remove("correct","wrong");if(j===q.a)label.classList.add("correct");});
      if(selected){const chosen=Number(selected.value);if(chosen===q.a)score++;else selected.closest(".source-option").classList.add("wrong");}
      else if(!firstMissing)firstMissing=box;
      const feedback=$(".source-feedback",box);feedback.hidden=false;
      feedback.textContent=`${currentLanguage==="en"?"Source answer":"Jawapan sumber"}: ${q.f}`;
    });
    result.hidden=false;
    result.innerHTML=currentLanguage==="en"?`<strong>${score} / 20 correct</strong><span>The original assessment questions are in Malay. Review the highlighted answers and revisit the relevant guide sections.</span>`:`<strong>${score} / 20 betul</strong><span>Semak jawapan yang ditandakan dan ulang kaji bahagian panduan yang berkaitan.</span>`;
    result.scrollIntoView({behavior:"smooth",block:"center"});
    localStorage.setItem("pps-source-quiz-score",score);
  });
  $("#source-quiz-reset").addEventListener("click",()=>{
    form.reset(); $$(".source-option",form).forEach(x=>x.classList.remove("correct","wrong")); $$(".source-feedback",form).forEach(x=>x.hidden=true);
    result.hidden=true; updateProgress(); localStorage.removeItem("pps-source-quiz-score");
  });
  window.updateSourceQuizLanguage=updateProgress; updateProgress();
}

function initGlossary() {
  const render=()=>$("#glossary-list").innerHTML=Object.entries(currentLanguage==="en"?englishGlossary:glossary).map(([term,meaning])=>`<details><summary>${term}</summary><p>${meaning}</p></details>`).join("");
  render(); window.renderGlossary=render;
  $("#glossary-open").addEventListener("click",()=>$("#glossary-dialog").showModal());
  $("#glossary-close").addEventListener("click",()=>$("#glossary-dialog").close());
}

function initSiteSearch(){
  const dialog=$("#lookup-dialog"), input=$("#site-search"), results=$("#site-search-results");
  const open=()=>{dialog.showModal();setTimeout(()=>input.focus(),50);render();};
  const render=()=>{
    const q=input.value.trim().toLowerCase();
    const sections=$$(".learning-section").map(section=>({
      id:section.id,
      title:$("h2",section)?.textContent.trim()||section.id,
      text:section.textContent.replace(/\s+/g," ").trim()
    }));
    const matches=(q?sections.filter(x=>x.text.toLowerCase().includes(q)):sections.filter(x=>["kompetensi","pelanjutan","fleksi","cme","penamatan","selepas"].includes(x.id))).slice(0,8);
    results.innerHTML=matches.length?matches.map(x=>`<a class="search-result" href="#${x.id}"><strong>${x.title}</strong><span>${q?(x.text.match(new RegExp(`.{0,45}${q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}.{0,70}`,"i"))?.[0]||x.text.slice(0,120)):x.text.slice(0,120)}…</span></a>`).join(""):`<p class="search-empty">${currentLanguage==="en"?"No matching section found. Try a shorter term.":"Tiada bahagian sepadan. Cuba istilah yang lebih ringkas."}</p>`;
    $$(".search-result",results).forEach(a=>a.addEventListener("click",()=>dialog.close()));
  };
  $("#lookup-open").addEventListener("click",open); $("#lookup-hub-open").addEventListener("click",open);
  $("#lookup-close").addEventListener("click",()=>dialog.close()); input.addEventListener("input",render);
  addEventListener("keydown",event=>{
    const typing=["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName);
    if((event.key==="/" && !typing)||(event.key.toLowerCase()==="k"&&(event.ctrlKey||event.metaKey))){
      event.preventDefault(); open();
    }
  });
  window.renderSiteSearch=render;
}

function initThemeAndPrint() {
  const saved=localStorage.getItem("pps-theme");
  if(saved==="dark") document.body.classList.add("dark");
  const update=()=>$("#theme-toggle").textContent=currentLanguage==="en"?(document.body.classList.contains("dark")?"Light mode":"Dark mode"):(document.body.classList.contains("dark")?"Mod cerah":"Mod gelap"); update();
  $("#theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("pps-theme",document.body.classList.contains("dark")?"dark":"light");update();});
  $("#print-button").addEventListener("click",()=>print());
}

function initLanguage(){
  const button=$("#language-toggle");
  const apply=()=>{
    translateStaticPage(currentLanguage);
    button.dataset.mobileLabel=currentLanguage==="en"?"BM":"EN";
    localStorage.setItem("pps-language",currentLanguage);
  };
  button.addEventListener("click",()=>{currentLanguage=currentLanguage==="en"?"ms":"en";apply();refreshCmeOptions();renderCme();if(window.renderGlossary)window.renderGlossary();if(window.renderSiteSearch)window.renderSiteSearch();if(window.updateSourceQuizLanguage)window.updateSourceQuizLanguage();initThemeAndPrintLabel();});
  apply();
}

function refreshCmeOptions(){
  const select=$("#cme-posting"), chosen=select.value;
  select.innerHTML=`<option value="all">${currentLanguage==="en"?"All postings":"Semua posting"}</option>`;
  Object.keys(cmeTopics).forEach(name=>select.insertAdjacentHTML("beforeend",`<option value="${name}">${currentLanguage==="en"?postingLabels[name]:name}</option>`));
  select.value=chosen;
  $("#cme-search").placeholder=currentLanguage==="en"?"Example: sepsis, chest pain, jaundice":"Contoh: sepsis, chest pain, jaundice";
}

function initThemeAndPrintLabel(){
  $("#theme-toggle").textContent=currentLanguage==="en"?(document.body.classList.contains("dark")?"Light mode":"Dark mode"):(document.body.classList.contains("dark")?"Mod cerah":"Mod gelap");
}

initLanguage(); buildChart(); initCme(); initNavigation(); initTabs(); initChecks(); initGlossary(); initSiteSearch(); initSourceQuiz(); initThemeAndPrint();
