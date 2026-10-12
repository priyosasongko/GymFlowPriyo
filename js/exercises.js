function page(){const f=$('#f');f.innerHTML='<option value="">Semua otot</option>'+[...new Set(EX.map(e=>e.m))].map(m=>`<option>${m}</option>`).join('');$('#q').oninput=f.onchange=list;list()}
function list(){const q=$('#q').value.toLowerCase().trim(),m=$('#f').value,r=EX.filter(e=>e.n.toLowerCase().includes(q)&&(!m||e.m==m));
$('#g').innerHTML=r.length?r.map(exCard).join(''):'<div class="empty" style="grid-column:1/-1">Tidak ada latihan yang cocok. Coba kata kunci lain.</div>';$('#c').textContent=r.length+' latihan ditemukan'}
