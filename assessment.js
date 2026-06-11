const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];

const timelineData={
  2007:["Logbook baharu","Buku log baharu dibangunkan dengan penanda aras UK, merangkumi CBD, Mini-CEX, DOPS, MSF dan CME."],
  2012:["Buku Garis Panduan Program PPS","Garis panduan program PPS diterbitkan untuk menyokong pelaksanaan latihan."],
  2014:["Panduan LNPT dan pelanjutan","Garis panduan LNPT dan garis panduan pelanjutan posting diperkenalkan."],
  2017:["Kemas kini logbook, CCP dan CCHT","Buku log dikemas kini, termasuk penilaian tagging dan CCP; garis panduan CCP dan CCHT turut diperkenalkan."],
  2020:["Permohonan semakan kepada IPK","Semakan format penilaian PPS dimohon kepada Institut Penyelidikan Kesihatan (IPK)."],
  2021:["Panduan era COVID-19","Garis panduan PPS versi 3.0 dan buku log sementara COVID-19 digunakan."],
  2022:["Keputusan penilaian digital","Laporan IPK dihantar kepada BPP pada Mac. Pada 29 Disember, JKP Bil. 2/2022 meluluskan penilaian baharu secara digital."]
};

const components={
  case:{title:"A · Case Log Entry",purpose:"Merekod dan mengesahkan pengalaman prosedur klinikal yang diperhati, dibantu atau dilakukan.",sub:"Performed · Assisted · Observed",assessor:"Mana-mana Pegawai Perubatan atau pakar dalam jabatan.",marks:"1 markah bagi setiap kes disahkan; 0 jika ditolak. Had maksimum mengikut prosedur/subkomponen.",reminder:"Pastikan nombor pendaftaran pesakit, diagnosis dan tarikh prosedur lengkap."},
  cme:{title:"B · Continuing Medical Education",purpose:"Menilai pengetahuan asas melalui pembelajaran formal berasaskan topik disiplin.",sub:"Kehadiran CME · Pembentangan CME",assessor:"Kehadiran perlu disahkan; pembentangan dinilai penyelia pakar ditetapkan sahaja.",marks:"Kehadiran: 1 setiap rekod disahkan, maksimum 8 setiap sesi. Pembentangan: skala 1–5.",reminder:"Hanya CME peringkat jabatan dikira."},
  wba:{title:"C · Workplace-Based Assessment",purpose:"Menilai prestasi klinikal sebenar dengan pemerhatian, perbincangan dan maklum balas.",sub:"DOPS · Mini-CEX · CBD",assessor:"Penyelia pakar ditetapkan sahaja.",marks:"DOPS: langkah memuaskan 1/0. Mini-CEX dan CBD: domain berskala 0–5.",reminder:"Buat temu janji dengan penilai dan lengkapkan setiap penilaian sekali dalam sesi."},
  global:{title:"D · Global Assessment",purpose:"Penilaian holistik PPS sebagai pengamal bebas yang selamat, profesional dan mampu memimpin.",sub:"Clinical Practice · Professionalism & Leadership",assessor:"Tiga kategori: penyelia pakar, MO jabatan sama, dan jururawat atau Penolong Pegawai Perubatan jabatan sama.",marks:"Semua aspek dinilai pada skala 0–5.",reminder:"Minta penilaian sebelum sesi tamat; komen major concern perlu diberi perhatian."}
};

const weightData={
  original:{items:[["Case Log Entry",5],["CME",5],["Workplace-Based Assessment",20],["Global Assessment",20]],total:50,label:"Setiap Sesi 1 atau Sesi 2"},
  extension:{items:[["Case Log Entry",10],["CME",10],["Workplace-Based Assessment",40],["Global Assessment",40]],total:100,label:"Setiap sesi pelanjutan"}
};

const glossary={
  PPS:"Pegawai Perubatan Siswazah.",
  MPIS:"Medical Programme Information System; platform yang mengandungi HRM Module untuk penilaian digital PPS.",
  "HRM Module":"Modul dalam MPIS yang digunakan bagi pelaksanaan format penilaian kompetensi PPS baharu.",
  JKP:"Jawatankuasa Kelayakan Perubatan.",
  BPP:"Bahagian Perkembangan Perubatan.",
  IPK:"Institut Penyelidikan Kesihatan.",
  "Case Log Entry":"Rekod kes atau prosedur yang diperhati, dibantu atau dilakukan dan disahkan.",
  CME:"Continuing Medical Education; pembelajaran formal peringkat jabatan.",
  DOPS:"Direct Observation of Procedural Skills.",
  "Mini-CEX":"Mini Clinical Evaluation Exercise.",
  CBD:"Case-Based Discussion.",
  "Global Assessment":"Penilaian holistik Clinical Practice serta Professionalism and Leadership.",
  "Cuti Latihan":"Kuota cuti tanpa pelanjutan posting, merangkumi semua jenis cuti yang layak; 10 hari bagi setiap posting."
};

const finalQuestions=[
  {q:"Berapa markah minimum bagi setiap sesi penilaian yang diperlukan?",a:"60%",o:["50%","60%","75%"]},
  {q:"Siapa boleh menilai pembentangan CME?",a:"Penyelia pakar ditetapkan",o:["Mana-mana PPS","Penyelia pakar ditetapkan","Pentadbir hospital"]},
  {q:"Apakah tindakan selepas gagal kompetensi pada Sesi 4?",a:"Hospital memaklumkan BPP",o:["Lulus automatik","Hospital memaklumkan BPP","Ulang Sesi 1"]}
];

function initNavigation(){
  const sections=$$(".learning-section"),links=$$(".side-nav a");
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    links.forEach(a=>a.classList.toggle("active",a.hash===`#${visible.target.id}`));
    $("#section-count").textContent=`${String(visible.target.dataset.index).padStart(2,"0")} / 14`;
    localStorage.setItem("assessment-last-section",visible.target.id);
  },{rootMargin:"-25% 0px -60% 0px",threshold:[0,.25,.5]});
  sections.forEach(section=>observer.observe(section));
  addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;$("#scroll-progress").style.width=`${max?scrollY/max*100:0}%`;},{passive:true});
  $("#menu-toggle").addEventListener("click",()=>{$("#side-nav").classList.toggle("open")});
  links.forEach(link=>link.addEventListener("click",()=>$("#side-nav").classList.remove("open")));
  $("#resume-button").addEventListener("click",()=>document.getElementById(localStorage.getItem("assessment-last-section")||"overview").scrollIntoView());
}

function renderTimeline(year=2007){
  const [title,text]=timelineData[year];
  $("#timeline-detail").innerHTML=`<p class="kicker">${year}</p><h3>${title}</h3><p>${text}</p>`;
  $$("#history-timeline button").forEach(button=>button.classList.toggle("active",Number(button.dataset.year)===year));
}

function renderComponent(key="case"){
  const item=components[key];
  $("#component-detail").innerHTML=`<p class="kicker">Komponen penilaian</p><h3>${item.title}</h3><p>${item.purpose}</p><div class="component-columns"><div><strong>Subkomponen</strong><p>${item.sub}</p></div><div><strong>Siapa boleh menilai?</strong><p>${item.assessor}</p></div><div><strong>Markah</strong><p>${item.marks}</p></div><div><strong>Peringatan</strong><p>${item.reminder}</p></div></div>`;
  $$(".component-tabs button").forEach(button=>button.classList.toggle("active",button.dataset.component===key));
}

function renderWeights(key="original"){
  const data=weightData[key],max=Math.max(...data.items.map(item=>item[1]));
  $("#weight-explorer").innerHTML=data.items.map(([name,value])=>`<article class="weight-block"><div class="weight-visual" style="--height:${80+(value/max)*100}px">${value}%</div><strong>${name}</strong><small>${data.label}</small></article>`).join("")+`<div class="weight-total">Jumlah: ${data.total}%</div>`;
  $$(".weight-controls button").forEach(button=>button.classList.toggle("active",button.dataset.weight===key));
}

let decisionStep="attendance",history=[];
function renderDecision(){
  const question=$("#decision-question"),actions=$("#decision-actions");
  const screens={
    attendance:["Adakah kehadiran sesi lengkap dan cuti dalam kuota?",[["Ya","marks"],["Tidak","noncomp"]]],
    marks:["Adakah markah sesi sekurang-kurangnya 60%?",[["Ya","pass"],["Tidak","competency"]]],
    pass:["Lulus sesi / posting",[]],
    noncomp:["Pelanjutan Bukan Kompetensi",[]],
    competency:["Pelanjutan Masalah Kompetensi",[]]
  };
  const [title,choices]=screens[decisionStep];
  question.innerHTML=choices.length?`<p class="kicker">Langkah keputusan</p><h3>${title}</h3>`:`<div class="decision-result"><p class="kicker">Keputusan</p><h3>${title}</h3><p>${decisionStep==="pass"?"Jika semua sesi wajib selesai, PPS bergerak ke posting baharu.":decisionStep==="noncomp"?"Lengkapkan isu kehadiran atau pentadbiran sebelum keputusan kompetensi.":"Teruskan ke sesi pelanjutan; jika masih gagal selepas Sesi 4, hospital memaklumkan BPP."}</p></div>`;
  actions.innerHTML=choices.map(([label,next])=>`<button data-next="${next}">${label}</button>`).join("");
  $("#decision-history").innerHTML=history.map(item=>`<span>${item}</span>`).join("");
  $$("[data-next]",actions).forEach(button=>button.addEventListener("click",()=>{history.push(`${title}: ${button.textContent}`);decisionStep=button.dataset.next;renderDecision();}));
}

function initGlossary(){
  const render=(query="")=>{$("#glossary-list").innerHTML=Object.entries(glossary).filter(([term,text])=>`${term} ${text}`.toLowerCase().includes(query.toLowerCase())).map(([term,text])=>`<details><summary>${term}</summary><p>${text}</p></details>`).join("")||"<p>Tiada istilah ditemui.</p>";};
  render();
  $("#glossary-open").addEventListener("click",()=>$("#glossary-dialog").showModal());
  $("#glossary-close").addEventListener("click",()=>$("#glossary-dialog").close());
  $("#glossary-search").addEventListener("input",event=>render(event.target.value));
}

function initChecks(){
  $$(".mini-check").forEach(check=>$$("button",check).forEach(button=>button.addEventListener("click",()=>{
    $$("button",check).forEach(item=>item.classList.remove("correct","wrong"));
    const correct=button.dataset.choice===check.dataset.answer;
    button.classList.add(correct?"correct":"wrong");$(".feedback",check).textContent=correct?"Betul. Teruskan.":"Belum tepat. Semak semula bahagian ini.";
  })));
  $("#final-check").innerHTML=finalQuestions.map((item,index)=>`<article data-final="${index}"><h3>${index+1}. ${item.q}</h3>${item.o.map(option=>`<button data-answer="${option}">${option}</button>`).join("")}<p></p></article>`).join("");
  $$("#final-check article").forEach((article,index)=>$$("button",article).forEach(button=>button.addEventListener("click",()=>{
    $$("button",article).forEach(item=>item.classList.remove("correct","wrong"));
    const correct=button.dataset.answer===finalQuestions[index].a;button.classList.add(correct?"correct":"wrong");$("p",article).textContent=correct?"Betul.":"Semak semula panduan berkaitan.";
  })));
}

function init(){
  if(localStorage.getItem("pps-theme")==="dark")document.body.classList.add("dark");
  initNavigation();renderTimeline();renderComponent();renderWeights();renderDecision();initGlossary();initChecks();
  $$("#history-timeline button").forEach(button=>button.addEventListener("click",()=>renderTimeline(Number(button.dataset.year))));
  $$(".component-tabs button").forEach(button=>button.addEventListener("click",()=>renderComponent(button.dataset.component)));
  $$(".weight-controls button").forEach(button=>button.addEventListener("click",()=>renderWeights(button.dataset.weight)));
  $("#decision-reset").addEventListener("click",()=>{decisionStep="attendance";history=[];renderDecision();});
  $("#theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("pps-theme",document.body.classList.contains("dark")?"dark":"light");});
  $("#print-button").addEventListener("click",()=>print());
  initAssessmentLanguage();
}
init();
