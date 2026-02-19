  function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            if(body.classList.contains('light-theme')){ 
                icon.classList.replace('fa-sun', 'fa-moon'); 
                localStorage.setItem('theme-cr', 'light'); 
            } else { 
                icon.classList.replace('fa-moon', 'fa-sun'); 
                localStorage.setItem('theme-cr', 'dark'); 
            }
        }
        if(localStorage.getItem('theme-cr') === 'light') { 
            document.body.classList.add('light-theme'); 
            document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon'); 
        }

        function enviarAnamnese() {
            const nome = document.getElementById('clientName').value;
            const plano = document.getElementById('planSelect').value;
            const objetivo = document.getElementById('goalSelect').value;
            const nivel = document.getElementById('levelSelect').value;
            const lesao = document.getElementById('injuryInput').value || "Nenhuma";
            
            if(!nome) { alert("Por favor, digite seu nome."); return; }
            
            // Texto formatado para o WhatsApp com quebras de linha e negrito
            const mensagem = `Olá Camila! Gostaria de iniciar a consultoria.%0A%0A*--- ANAMNESE EXPRESSA ---*%0A*Nome:* ${nome}%0A*Plano Escolhido:* ${plano}%0A*Objetivo:* ${objetivo}%0A*Nível:* ${nivel}%0A*Lesões:* ${lesao}%0A%0AAguardo seu retorno para começarmos!`;
            
            window.open(`https://wa.me/5551900000000?text=${mensagem}`, '_blank');
        }

        function toggleFaq(element) { 
            element.classList.toggle('active'); 
        }