const DATA_KEY="btb-data-v2";
const defaultData={checkins:[],roots:[],reflections:[],letters:{future:"",younger:"",unsent:""}};
function getData(){return JSON.parse(localStorage.getItem(DATA_KEY)||JSON.stringify(defaultData))}
function saveData(d){localStorage.setItem(DATA_KEY,JSON.stringify(d))}
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
const savedTheme=localStorage.getItem("btb-theme");
if(savedTheme==="dark")document.body.classList.add("dark");
function updateThemeButton(){const dark=document.body.classList.contains("dark");const b=document.getElementById("theme-toggle");if(b)b.innerHTML=dark?'☀ <span>Light mode</span>':'◐ <span>Dark mode</span>'}
const toggle=document.getElementById("theme-toggle");
if(toggle)toggle.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("btb-theme",document.body.classList.contains("dark")?"dark":"light");updateThemeButton()});
updateThemeButton();
const now=new Date();
const todayEl=document.getElementById("today");
if(todayEl)todayEl.textContent=now.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"});
