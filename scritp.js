 const buscaInput = document.querySelector('.busca');
          const servicos = [
               { nome: 'alisamento', element: document.querySelector('.alisamento') },
               { nome: 'luzes', element: document.querySelectorAll('.luzes')[0] },
               { nome: 'cortes', element: document.querySelector('.cortes') },
               { nome: 'banho de brilho', element: document.querySelectorAll('.luzes')[1] },
               { nome: 'botox', element: document.querySelector('.botox') }
          ];

          buscaInput.addEventListener('input', function () {
               const termo = this.value.toLowerCase();
               servicos.forEach(servico => {
                    if (servico.nome.includes(termo)) {
                         servico.element.style.display = 'block';
                    } else {
                         servico.element.style.display = 'none';
                    }
               });
          });

          // Botão Ligar
          document.querySelector('.telefone').addEventListener('click', () => {
               window.location.href = 'tel:+5598985485729';
          });

          // Botão Visitar
          document.querySelector('.lock').addEventListener('click', () => {
               window.open('https://www.google.com/maps/place/Rua+Gonçalves+Dias,+601,+Maranhãozinho+-+MA', '_blank');
          });

          // Botão Compartilhar
          document.querySelector('.compartilhar').addEventListener('click', () => {
               const texto = "Confira o Salão da Nana! Atendimento incrível em Maranhãozinho 💇‍♀️ https://www.contate.me/5598985485729";
               if (navigator.share) {
                    navigator.share({
                         title: 'Salão da Nana',
                         text: texto,
                         url: window.location.href
                    });
               } else {
                    alert("Copie e compartilhe:\n" + texto);
               }
          });