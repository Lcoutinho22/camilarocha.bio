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

        // --- TRADUÇÕES ---
        const translations = {
            pt: {
                title_role: "Personal Training",
                bio_desc: "Uma consultoria fitness completa que conecta treino, propósito e movimento para resultados reais e duradouros.",
                btn_talk_now: "Falar Agora",
                btn_see_plans: "Ver Planos",
                sec_about: "Sobre Camila Rocha",
                about_p1: 'Olá, sou <span class="about-highlight">Camila Rocha</span>. personal trainer há aproximadamente 10 anos, com foco no atendimento presencial e com muitas mulheres já transformadas com resultados reais. Também trabalho com consultoria online há cerca de 5 a 6 anos, acompanhando mulheres com método e direção. Meu foco é ajudar cada <span class="about-highlight">mulher a resgatar sua identidade, feminilidade e confiança através do movimento e de hábitos saudáveis.</span>. Porque eu acredito que constância gera resultado.',
                stat_years: "Anos Exp.",
                stat_workouts: "Treinos",
                stat_custom: "Personalizados",
                sec_online_plans: "Planos Online",
                badge_most_chosen: "Mais Escolhido",
                plan_premium: "Premium (Trimestral)",
                gender_both: "Para ambos os sexos",
                feat_premium_all: "Tudo do Plano Essencial",
                feat_weekly: "Acompanhamento Semanal",
                feat_feedback: "Feedback Individual",
                feat_video: "Correções De Execução Por Video",
                feat_adjust: "Ajustes Sempre Que Necessário",
                feat_3sheets: "3 Planilhas Ao Longo Dos 3 Meses",
                feat_updates: "(INICIAL + 2 ATUALIZAÇÕES DE TREINO)",
                btn_evolve: "Quero Evoluir",
                plan_essential: "Essencial",
                feat_anamnesis: "Anamnese Completa",
                feat_initial_eval: "Avaliação Inicial",
                feat_custom_workout: "Treino Personalizado",
                feat_app_access: "Acesso ao Aplicativo",
                btn_choose_ess: "Escolher Essencial",
                cta_doubt: "Dúvida sobre qual plano escolher? Fale comigo <i class='fas fa-arrow-right'></i>",
                sec_pres_plans: "Plano Presencial",
                badge_vip: "Acompanhamento VIP",
                plan_presential: "Treino Presencial",
                gender_women: "Apenas para Mulheres",
                feat_1h: "Treinos de 1h por Aula",
                feat_anamnesis_init: "Anamnese Inicial",
                feat_phys_eval: "Avaliação Física Completa",
                feat_sheets_app: "Planilha Personalizadas via App",
                feat_support: "Suporte Integral Via WhatsApp",
                btn_consult: "Consultar Vagas",
                sec_locations: "Locais de Atendimento",
                th_frequency: "Frequência",
                th_classes: "Aulas/Mês",
                td_3x: "3x /semana",
                td_12_classes: "12 aulas",
                td_2x: "2x /semana",
                td_8_classes: "08 aulas",
                td_1x: "1x /semana",
                td_4_classes: "04 aulas",
                sec_results: "Resultados Reais",
                sec_feedbacks: "Feedbacks Das Alunas(os)",
                sec_form_title: "Pré-Avaliação Gratuita",
                label_name: "Nome Completo",
                placeholder_name: "Seu nome",
                label_age: "Idade",
                placeholder_age: "Ex: 30",
                label_exp: "Experiência de Treino",
                opt_exp1: "Nunca treinei",
                opt_exp2: "Iniciante",
                opt_exp3: "Intermediário",
                opt_exp4: "Avançado",
                label_plan: "Plano Pretendido",
                opt_plan1: "Ainda não sei / Quero recomendação",
                opt_plan2: "Presencial VIP (Apenas Mulheres)",
                opt_plan3: "Online - Essencial (Ambos os Sexos)",
                opt_plan4: "Online - Premium (Ambos os Sexos)",
                label_health: "Possui lesões ou problemas de saúde?",
                placeholder_health: "Descreva aqui se tiver alguma restrição...",
                label_goal: "Qual seu principal objetivo?",
                placeholder_goal: "Ex: Quero emagrecer e definir...",
                btn_send_form: "Enviar Pré-Avaliação",
                cta_final_title: "Comece Sua Transformação",
                cta_final_sub: "Agende sua avaliação e dê o primeiro passo hoje.",
                cta_final_btn: "Falar com a Treinadora",
                msg_anamnese_start: "Olá Camila! Preenchi a pré-avaliação:",
                msg_data: "--- DADOS ---",
                msg_name: "Nome:",
                msg_age: "Idade:",
                msg_level: "Nível:",
                msg_interest: "Plano de Interesse:",
                msg_health: "--- SAÚDE ---",
                msg_health_none: "Nenhuma restrição relatada.",
                msg_goal: "--- OBJETIVO ---",
                msg_wait: "Aguardo análise!",
                msg_plan_interest: "Olá Camila! Me interessei pelo plano {plano}. Poderia me passar mais detalhes sobre como funciona?"
            },
            en: {
                title_role: "Personal Training",
                bio_desc: "A complete fitness consulting that connects training, purpose, and movement for real and lasting results.",
                btn_talk_now: "Talk Now",
                btn_see_plans: "See Plans",
                sec_about: "About Camila Rocha",
                about_p1: 'Hi, I\'m <span class="about-highlight">Camila Rocha</span>. A personal trainer for about 10 years, focusing on in-person services with many women already transformed with real results. I also work with online consulting for about 5 to 6 years, guiding women with method and direction. My focus is to help each <span class="about-highlight">woman rescue her identity, femininity, and confidence through movement and healthy habits.</span> Because I believe consistency generates results.',
                stat_years: "Years Exp.",
                stat_workouts: "Workouts",
                stat_custom: "Customized",
                sec_online_plans: "Online Plans",
                badge_most_chosen: "Most Chosen",
                plan_premium: "Premium (Quarterly)",
                gender_both: "For both genders",
                feat_premium_all: "Everything in Essential",
                feat_weekly: "Weekly Follow-up",
                feat_feedback: "Individual Feedback",
                feat_video: "Video Execution Corrections",
                feat_adjust: "Adjustments Whenever Necessary",
                feat_3sheets: "3 Workout Sheets Over 3 Months",
                feat_updates: "(INITIAL + 2 WORKOUT UPDATES)",
                btn_evolve: "I Want to Evolve",
                plan_essential: "Essential",
                feat_anamnesis: "Complete Anamnesis",
                feat_initial_eval: "Initial Evaluation",
                feat_custom_workout: "Custom Workout",
                feat_app_access: "App Access",
                btn_choose_ess: "Choose Essential",
                cta_doubt: "Doubt about which plan to choose? Talk to me <i class='fas fa-arrow-right'></i>",
                sec_pres_plans: "In-Person Plan",
                badge_vip: "VIP Follow-up",
                plan_presential: "In-Person Training",
                gender_women: "Women Only",
                feat_1h: "1h Workouts per Class",
                feat_anamnesis_init: "Initial Anamnesis",
                feat_phys_eval: "Complete Physical Evaluation",
                feat_sheets_app: "Custom Sheets via App",
                feat_support: "Full Support via WhatsApp",
                btn_consult: "Consult Availability",
                sec_locations: "Service Locations",
                th_frequency: "Frequency",
                th_classes: "Classes/Month",
                td_3x: "3x /week",
                td_12_classes: "12 classes",
                td_2x: "2x /week",
                td_8_classes: "08 classes",
                td_1x: "1x /week",
                td_4_classes: "04 classes",
                sec_results: "Real Results",
                sec_feedbacks: "Students Feedbacks",
                sec_form_title: "Free Pre-Evaluation",
                label_name: "Full Name",
                placeholder_name: "Your name",
                label_age: "Age",
                placeholder_age: "Ex: 30",
                label_exp: "Workout Experience",
                opt_exp1: "Never worked out",
                opt_exp2: "Beginner",
                opt_exp3: "Intermediate",
                opt_exp4: "Advanced",
                label_plan: "Intended Plan",
                opt_plan1: "I don't know / Need a recommendation",
                opt_plan2: "In-Person VIP (Women Only)",
                opt_plan3: "Online - Essential (Both Genders)",
                opt_plan4: "Online - Premium (Both Genders)",
                label_health: "Any injuries or health issues?",
                placeholder_health: "Describe here if you have any restrictions...",
                label_goal: "What is your main goal?",
                placeholder_goal: "Ex: I want to lose weight and get toned...",
                btn_send_form: "Send Pre-Evaluation",
                cta_final_title: "Start Your Transformation",
                cta_final_sub: "Schedule your evaluation and take the first step today.",
                cta_final_btn: "Talk to the Trainer",
                msg_anamnese_start: "Hi Camila! I filled out the pre-evaluation:",
                msg_data: "--- DATA ---",
                msg_name: "Name:",
                msg_age: "Age:",
                msg_level: "Level:",
                msg_interest: "Plan of Interest:",
                msg_health: "--- HEALTH ---",
                msg_health_none: "No restrictions reported.",
                msg_goal: "--- GOAL ---",
                msg_wait: "Waiting for analysis!",
                msg_plan_interest: "Hi Camila! I'm interested in the {plano} plan. Could you give me more details on how it works?"
            },
            es: {
                title_role: "Entrenamiento Personal",
                bio_desc: "Una consultoría fitness completa que conecta entrenamiento, propósito y movimiento para resultados reales y duraderos.",
                btn_talk_now: "Hablar Ahora",
                btn_see_plans: "Ver Planes",
                sec_about: "Sobre Camila Rocha",
                about_p1: 'Hola, soy <span class="about-highlight">Camila Rocha</span>. Entrenadora personal desde hace aproximadamente 10 años, enfocada en atención presencial con muchas mujeres ya transformadas con resultados reales. También trabajo con consultoría online desde hace unos 5 a 6 años, acompañando a mujeres con método y dirección. Mi enfoque es ayudar a cada <span class="about-highlight">mujer a rescatar su identidad, feminidad y confianza a través del movimiento y hábitos saludables.</span> Porque creo que la constancia genera resultados.',
                stat_years: "Años Exp.",
                stat_workouts: "Entrenamientos",
                stat_custom: "Personalizados",
                sec_online_plans: "Planes Online",
                badge_most_chosen: "Más Elegido",
                plan_premium: "Premium (Trimestral)",
                gender_both: "Para ambos sexos",
                feat_premium_all: "Todo del Plan Esencial",
                feat_weekly: "Seguimiento Semanal",
                feat_feedback: "Feedback Individual",
                feat_video: "Correcciones de Ejecución en Video",
                feat_adjust: "Ajustes Siempre que sea Necesario",
                feat_3sheets: "3 Rutinas a lo Largo de 3 Meses",
                feat_updates: "(INICIAL + 2 ACTUALIZACIONES DE RUTINA)",
                btn_evolve: "Quiero Evolucionar",
                plan_essential: "Esencial",
                feat_anamnesis: "Anamnesis Completa",
                feat_initial_eval: "Evaluación Inicial",
                feat_custom_workout: "Entrenamiento Personalizado",
                feat_app_access: "Acceso a la App",
                btn_choose_ess: "Elegir Esencial",
                cta_doubt: "¿Dudas sobre qué plan elegir? Habla conmigo <i class='fas fa-arrow-right'></i>",
                sec_pres_plans: "Plan Presencial",
                badge_vip: "Seguimiento VIP",
                plan_presential: "Entrenamiento Presencial",
                gender_women: "Solo para Mujeres",
                feat_1h: "Entrenamientos de 1h por Clase",
                feat_anamnesis_init: "Anamnesis Inicial",
                feat_phys_eval: "Evaluación Física Completa",
                feat_sheets_app: "Rutinas Personalizadas vía App",
                feat_support: "Soporte Total vía WhatsApp",
                btn_consult: "Consultar Cupos",
                sec_locations: "Lugares de Atención",
                th_frequency: "Frecuencia",
                th_classes: "Clases/Mes",
                td_3x: "3x /semana",
                td_12_classes: "12 clases",
                td_2x: "2x /semana",
                td_8_classes: "08 clases",
                td_1x: "1x /semana",
                td_4_classes: "04 clases",
                sec_results: "Resultados Reales",
                sec_feedbacks: "Comentarios de Alumnas(os)",
                sec_form_title: "Pre-Evaluación Gratuita",
                label_name: "Nombre Completo",
                placeholder_name: "Tu nombre",
                label_age: "Edad",
                placeholder_age: "Ej: 30",
                label_exp: "Experiencia de Entrenamiento",
                opt_exp1: "Nunca entrené",
                opt_exp2: "Principiante",
                opt_exp3: "Intermedio",
                opt_exp4: "Avanzado",
                label_plan: "Plan Deseado",
                opt_plan1: "Aún no sé / Quiero recomendación",
                opt_plan2: "Presencial VIP (Solo Mujeres)",
                opt_plan3: "Online - Esencial (Ambos Sexos)",
                opt_plan4: "Online - Premium (Ambos Sexos)",
                label_health: "¿Tienes lesiones o problemas de salud?",
                placeholder_health: "Describe aquí si tienes alguna restricción...",
                label_goal: "¿Cuál es tu objetivo principal?",
                placeholder_goal: "Ej: Quiero adelgazar y tonificar...",
                btn_send_form: "Enviar Pre-Evaluación",
                cta_final_title: "Comienza Tu Transformación",
                cta_final_sub: "Programa tu evaluación y da el primer paso hoy.",
                cta_final_btn: "Hablar con la Entrenadora",
                msg_anamnese_start: "¡Hola Camila! Llené la pre-evaluación:",
                msg_data: "--- DATOS ---",
                msg_name: "Nombre:",
                msg_age: "Edad:",
                msg_level: "Nivel:",
                msg_interest: "Plan de Interés:",
                msg_health: "--- SALUD ---",
                msg_health_none: "Ninguna restricción reportada.",
                msg_goal: "--- OBJETIVO ---",
                msg_wait: "¡Espero análisis!",
                msg_plan_interest: "¡Hola Camila! Me interesé por el plan {plano}. ¿Podrías darme más detalles sobre cómo funciona?"
            }
        };

        let currentLang = localStorage.getItem('lang-cr') || 'pt';

        function changeLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('lang-cr', lang);
            document.documentElement.lang = lang;
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if(translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            document.getElementById('langMenu').classList.remove('open');
        }

        function toggleLangMenu() {
            document.getElementById('langMenu').classList.toggle('open');
        }

        document.addEventListener('click', function(event) {
            const langMenu = document.getElementById('langMenu');
            const langBtn = document.querySelector('.lang-btn');
            if (langMenu && langMenu.classList.contains('open')) {
                if (!langMenu.contains(event.target) && !langBtn.contains(event.target)) {
                    langMenu.classList.remove('open');
                }
            }
        });

        // Initialize language
        if(currentLang !== 'pt') {
            document.addEventListener('DOMContentLoaded', () => {
                changeLanguage(currentLang);
            });
        }

        function enviarAnamnese() {
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const nivel = document.getElementById('levelSelect').options[document.getElementById('levelSelect').selectedIndex].text;
            const plano = document.getElementById('planSelect').options[document.getElementById('planSelect').selectedIndex].text;
            
            const t = translations[currentLang];
            const saude = document.getElementById('healthInput').value || t.msg_health_none;
            const objetivo = document.getElementById('goalInput').value;
            
            if(!nome || !idade || !objetivo) { alert("Por favor, preencha Nome, Idade e Objetivo."); return; }
            
            const mensagem = `${t.msg_anamnese_start}%0A%0A*${t.msg_data}*%0A*${t.msg_name}* ${nome}%0A*${t.msg_age}* ${idade}%0A*${t.msg_level}* ${nivel}%0A*${t.msg_interest}* ${plano}%0A%0A*${t.msg_health}*%0A${saude}%0A%0A*${t.msg_goal}*%0A${objetivo}%0A%0A${t.msg_wait}`;
            
            window.open(`https://wa.me/5548991087177?text=${mensagem}`, '_blank');
        }

        function escolherPlano(planoKey) {
            const t = translations[currentLang];
            const mensagem = t.msg_plan_interest.replace('{plano}', planoKey);
            window.open(`https://wa.me/5548991087177?text=${mensagem}`, '_blank');
        }

        // --- MENU DE COMPARTILHAMENTO ---
        function toggleShareMenu() {
            document.getElementById('shareMenu').classList.toggle('open');
        }

        document.addEventListener('click', function(event) {
            const shareMenu = document.getElementById('shareMenu');
            const shareBtn = document.querySelector('.share-toggle');
            if (shareMenu && shareMenu.classList.contains('open')) {
                if (!shareMenu.contains(event.target) && !shareBtn.contains(event.target)) {
                    shareMenu.classList.remove('open');
                }
            }
        });

        function shareTo(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Conheça a Camila Rocha Personal Training! ");
            let shareUrl = '';

            switch(platform) {
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${text}${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'tiktok':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert("Link copiado! Cole no TikTok ou onde preferir para compartilhar.");
                    });
                    toggleShareMenu();
                    return;
            }
            if(shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
                toggleShareMenu();
            }
        }

        // --- SCROLL REVEAL (ANIMAÇÃO AO ROLAR ACHANDO ELEMENTOS) ---
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOptions = {
                threshold: 0.1, // Dispara quando 10% do elemento estiver visível
                rootMargin: "0px 0px -50px 0px"
            };
            
            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // observer.unobserve(entry.target); // Descomente para animar apenas uma vez
                    }
                });
            }, revealOptions);

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });
            
            // Força a exibição dos elementos que já estão na tela ao carregar
            setTimeout(() => {
                reveals.forEach(reveal => {
                    const rect = reveal.getBoundingClientRect();
                    if(rect.top < window.innerHeight) {
                        reveal.classList.add('active');
                    }
                });
            }, 100);
        });