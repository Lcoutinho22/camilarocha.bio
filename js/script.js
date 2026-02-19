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
            const plano = document.getElementById('planSelect').value;
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const nivel = document.getElementById('levelSelect').value;
            const saude = document.getElementById('healthInput').value || "Nenhuma restrição relatada.";
            const objetivo = document.getElementById('goalInput').value;
            
            if(!nome || !idade || !objetivo) { 
                alert("Por gentileza, preencha seu Nome, Idade e Objetivo para prosseguirmos."); 
                return; 
            }
            
            const mensagem = `Olá Camila! Preenchi a avaliação para a consultoria:%0A%0A*--- PERFIL ---*%0A*Nome:* ${nome}%0A*Idade:* ${idade} anos%0A*Nível:* ${nivel}%0A%0A*--- PLANO DESEJADO ---*%0A${plano}%0A%0A*--- SAÚDE ---*%0A${saude}%0A%0A*--- OBJETIVO ---*%0A${objetivo}%0A%0AAguardo seu contato!`;
            
            window.open(`https://wa.me/554891049153?text=${mensagem}`, '_blank');
        }

        function escolherPlano(plano) {
            const mensagem = `Olá Camila! Gostaria de saber mais informações sobre o pacote: *${plano}*.`;
            window.open(`https://wa.me/554891049153?text=${mensagem}`, '_blank');
        }