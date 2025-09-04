document.addEventListener('DOMContentLoaded', () => {
      const words = Array.from(document.querySelectorAll('.skill')).map(s => s.dataset.text);
      const el = document.getElementById('typed');
      let i=0, j=0, deleting=false;
      function tick(){
        const word = words[i % words.length];
        if(!deleting){
          el.textContent = word.slice(0, j+1);
          j++;
          if(j===word.length){ deleting=true; setTimeout(tick,1200); return; }
        }else{
          el.textContent = word.slice(0, j-1);
          j--;
          if(j===0){ deleting=false; i++; }
        }
        setTimeout(tick, deleting?60:90);
      }
      tick();
    });