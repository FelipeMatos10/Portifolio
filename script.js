function mascara_telefone ()
        {
         var tel = document.getElementById("input3").value
            console.log(tel)
          tel=tel.slice(0,14)
          console.log(tel)
          document.getElementById("input3").value=tel
     tel=document.getElementById("input3").value.slice(0,10)
            console.log(tel)
            var tel_formatado = document.getElementById("input3").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("input3").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("input3").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("input3").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }
const form = document.querySelector('#container5 form');
const modal = document.querySelector('.modal');
const fecharModalBtn = document.getElementById('fechar');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    modal.style.display = 'block';
});




window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


function dark() {
      let darkelement =  document.body;
    if (checkbox.checked) {
        darkelement.classList.add("darkmode");
        localStorage.setItem("dark-mode", "true");
    }
    else {
        darkelement.classList.remove("darkmode");
        localStorage.setItem("dark-mode", "false");
    }
}
addEventListener("DOMContentLoaded", () => {
    const darkModeStatus = localStorage.getItem("dark-mode");
    
    if (darkModeStatus === "true") {
        checkbox.checked = true;
    }
    else {
        checkbox.checked = false;
    }

    dark();
    const elNome = document.getElementById('efeito-nome');
const elSubtitulo = document.getElementById('efeito-subtitulo');

const textoNome = "Felipe";
const textoSubtitulo = "Desenvolvedor C# e Front-End";

const velDigitando = 120;
const velApagando = 70;
const velPausa = 2000;

let indexNome = 0;
let isApagando = false;

function loopNome() {
    const textoAtual = textoNome.substring(0, indexNome);
    elNome.innerHTML = textoAtual;

    if (isApagando) {
        indexNome--;
        if (indexNome === 0) {
            isApagando = false;
            setTimeout(loopNome, 500);
        } else {
            setTimeout(loopNome, velApagando);
        }
    } else {
        indexNome++;
        if (indexNome > textoNome.length) {
            indexNome = textoNome.length;
            isApagando = true;
            setTimeout(loopNome, velPausa);
        } else {
            setTimeout(loopNome, velDigitando);
        }
    }
}

let indexSub = 0;

function typeSubtitulo() {
    if (indexSub < textoSubtitulo.length) {
        elSubtitulo.innerHTML += textoSubtitulo.charAt(indexSub);
        indexSub++;
        setTimeout(typeSubtitulo, velDigitando);
    } else {
        elSubtitulo.classList.add('cursor-parado');
    }
}

setTimeout(loopNome, 500);
setTimeout(typeSubtitulo, 1000);
});
const skillSection = document.getElementById('container3');

const targetWidths = {
    'html': '60%',
    'css': '60%',
    'csharp': '70%',
    'sql': '40%',
    'js': '5%'
};

function animateSkills(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            document.getElementById('html').style.width = targetWidths.html;
            document.getElementById('css').style.width = targetWidths.css;
            document.getElementById('csharp').style.width = targetWidths.csharp;
            document.getElementById('sql').style.width = targetWidths.sql;
            document.getElementById('js').style.width = targetWidths.js;
            
        }
        else {
            document.getElementById('html').style.width = '0%';
            document.getElementById('css').style.width = '0%';
            document.getElementById('csharp').style.width = '0%';
            document.getElementById('sql').style.width = '0%';
            document.getElementById('js').style.width = '0%';
        }
    });
}

const skillObserverOptions = {
    root: null,
    threshold: 0.4
};

const skillObserver = new IntersectionObserver(animateSkills, skillObserverOptions);

skillObserver.observe(skillSection);
