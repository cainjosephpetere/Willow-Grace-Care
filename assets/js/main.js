const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active');});
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');item.classList.toggle('open');btn.setAttribute('aria-expanded',String(item.classList.contains('open')));}));
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(status){status.textContent='Thank you. This is a demonstration form and is not connected to an inbox yet. Connect it to the business email or a secure form service before launch.';status.classList.add('show');}form.reset();}));