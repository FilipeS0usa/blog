---
layout: post
title: "A Realidade da Criação de Código por LLMs"
date: 2026-03-29 08:17:00 +0000
description: "A utilização de LLMs para criação de código dá uma falsa sensação de domínio sobre um assunto, e isso é assustador!"
author: "FilipeS0usa"
pinned: false
---

# Introdução

Estou a escrever este post porque me deparei com algo que para mim é extremamente 
complicado de digerir e que mostra um dos grandes problemas das LLMs (ChatGPT, Claude, etc...). 

Ora tudo começa ao eu acordar, acordo um bocado mais "tarde" devido à mudança de 
hora, vou à casa de banho lavar os dentes e volto para o quarto. Ligo o computador 
tranquilamente e decido ir ao LinkedIn ver o que se passa. Com isto deparo-me com 
uma notificação que dizia o seguinte (Nomes são fictícios): "Rodrigo Sousa commented 
on João Massa: A ferramenta tem erros crassos. Vamos lá sensibilizar a população
da maneira correcta". 

Eu mal vi este comentário o meu bichinho de programador começou a vir ao de cima 
e tive que ir espreitar o post do LinkedIn...

Comecei a ler. Basicamente o João Massa tinha acabado um curso sobre a NIS2 e o 
trabalho final foi desenvolver uma auditoria real. Para quem não sabe a NIS2 é 
uma nova directiva Europeia sobre cibersegurança, se quiserem ler mais deixo aqui 
o [link](https://nis2directive.eu/what-is-nis2/). Continuando, e para esta auditoria 
real o João Massa decidiu criar uma ferramenta open source, completamente gratuita.

*Os meus olhos brilharam*

Ele estava a vender a ferramenta como se fosse algo completamente inovador, algo 
extra ordinário, "Resultados Imediatos", "Sem registo, Sem cookies", "Disponível 
em Português e Inglês", "É gratuita. É anónima" e para pôr a cereja no topo do bolo,
"Usa-a antes que alguém te peça uma auditoria formal." e de seguida ele providenciava 
o link, que reparei estava hosted no GitHub o que quer dizer que ele tinha de ter 
uma conta de GitHub o que também me deixou curioso. 

Lá fui experimentar a ferramenta...

---


# A FERRAMENTA!

Ora ao entrar na ferramenta esta era uma única página web bastante simples, sem 
grandes coisas, o fundo da página web parecia um livro de matemática com as páginas 
já meio amarelas do tempo, tinha um botão no canto superior esquerdo a dizer "PT" e 
"EN" onde podíamos mudar a lingua do site, tem alguns cartões com informações 
e podemos selecionar o tipo de entidade que somos "Entidade Essencial" ou "Entidade Importante"
que até achei interessante, uma entidade essencial não é importante? ou um entidade 
importante não é essencial? Já divaguei ahahah.

Depois de selecionar a entidade, também selecionamos o setor de atividade e podemos 
começar o "quiz", este tem cerca de 10 páginas, no final podemos imprimir o relatório 
(que não funciona bem) ou fazer uma nova avaliação, e também podemos ver um cartão no final a dizer 
"Esta ferramenta foi útil?" com um botão que diz **Recomendar no LinkedIn** que 
simplesmente retorna para o perfil de LinkedIn do João Massa.

A ferramenta não estava má, mas via-se que foi feita com LLM... Muitos emojis, 
layout padrão, simples.

Fiquei curioso, o url tinha o user do GitHub do João Massa, isto porque o João Massa
alojou a ferramenta num serviço que o github disponibiliza "GitHub Pages", igual 
a como este blog está alojado.

Decidi investigar o perfil, abri uma nova tab do meu browser e lá fui eu para o 
*github.com/joaomassa91*. 

Fiquei estupefacto, depois de tamanho marketing e bajulação da ferramenta vejo que ele 
só tem um projeto, 2 commits, 1 quadradinho verde de atividade, que diz 3 contribuições 
em que uma delas foi a criação do seu primeiro repositório no GitHub e as outras 
duas foram os commits. Está tudo visto. (Eu compreendo que não percebam algum do 
jargão, mas o que interessa é que basicamente o João Massa não demonstra experiência 
nenhuma em fazer código/programação)

Entrei no repositório onde estava o código fonte de "A FERRAMENTA" (assim dá mais 
ênfase à grandeza da mesma). 

É aqui que me deparo com a simplicidade e eficácia que o João Massa me tinha 
prometido, no repositório só havia um único ficheiro *index.html*. Este mega ficheiro 
continha cerca de 1700 linhas de "A FERRAMENTA", tinha html, javascript, css. Tinha tudo. 
Tinha o projeto inteiro. E é de salientar os 2 commits tinham apenas um texto a dizer que 
"os ficheiros" tinham sido carregados para o repositório.

Como é que eu consigo explicar o que eu sinto com isto que eu me deparo?


---

# A Realidade Do Uso Das LLMs 

O João Massa era mais uma vítima do eu fiz, funciona por isso posso vender como 
se fosse a melhor ferramenta e que vai ajudar montes de pessoas. Quando na verdade 
o projeto foi simplesmente um prompt simples e ignorante do que é preciso para criar 
algo com mais estrutura e credível.

Eu não digo para não usarem LLMs para criarem projetos, este próprio blog foi 
criado com uma LLM, mas acreditem que não foi só um prompt :)

Onde eu quero chegar e a ideia que eu quero desenvolver é, o uso das LLM enquanto 
somos ignorantes sobre o assunto que estamos a discutir com a mesma. Isto é muito 
perigoso, porque nos dá uma falsa sensação de conhecimento e de segurança, é como 
se confiássemos cegamente no que a LLM está a dizer e a fazer. Este fast food de 
informação leva a uma falta de capacidade crítica. E essa falta de capacidade 
crítica leva a mais prompts ignorantes e a mais alucinações de LLMs sem confirmação 
do humano.

Por exemplo, já tive n situações em que me entregaram código e eu perguntei, 
"Porque é que alteraste a lógica de como o código estava a funcionar?" ao que me 
respondem "Porque foi o que o ChatGPT me deu". Isto para mim é completamente inconcebível. 
Não pensaste nas alterações que ele estava a fazer e no porque de ele as fazer? 
Não lhe pediste justificações? Não questionaste? Não achaste estranho estar a apagar 
código que já estava feito? Ele não achou estranho porque na verdade não sabia o que 
estava a fazer. Ignorância...

Onde está o pensamento crítico, a voz interior que desconfia da informação que nos 
dão? O João Massa não desconfia que o processo está a ser simples demais?

Este consumo e falta de pensamento crítico com o uso das LLMs pode ser levado para 
outras matérias como política, arte ou medicina e sendo as LLMs geridas por empresas que 
obviamente demonstram partidarismo, isto não é um bocado perigoso e assustador? 

Deixo esta questão no ar, porque também é um pouco sensível e foge um bocado do objetivo 
deste post. Mas talvez vá falar disso num post futuro.

Onde eu queria chegar é que, no final do dia se nós quisermos ter sucesso a utilizar 
as LLMs para o nosso trabalho ou para uma matéria em específico, temos que ter uma 
boa base de conhecimento sobre essa mesma matéria. Se não acabamos por ser como o João Massa, 
criamos "A FERRAMENTA" sem utilizar frameworks, controlo de versões, boas práticas 
de programação, boas práticas de gestão de um repositório. E para o João Massa "A FERRAMENTA" 
é incrível e a melhor do mundo, porque ele não tem o conhecimento para 
reconhecer que o que ele tem é um simples aglomerado de código que ninguém consegue 
ler e que não tem muito futuro, a ideia está lá, mas muito provavelmente não passaria 
de uma prova de conceito que se apresenta numa primeira semana. 

O fator humano continua a ser um dos fatores mais importantes que temos, e é onde 
se encontra o pensamento crítico que não se pode perder, porque sem ele passamos 
só a ser o regurgitado de uma LLM qualquer como "A FERRAMENTA" do João Massa.

Até à próxima, meus caros analgésicos.
