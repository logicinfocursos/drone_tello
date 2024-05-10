# drone_tello
[github](https://github.com/logicinfocursos/drone_tello.git)

Fico feliz com o seu interesse nesse código realizado com grande carinho. A ideia é ter um template básico para que você possa usar como ponto de partida para os seus próximos projetos.

Iremos controlar o drone dji [tello](https://www.lojadji.com.br/dji-drone-tello-boost-combo) através de comandos enviados a partir de um programa em javascript, mas você poderá facilmente adaptar esse código para a sua linguagem preferida, basta entender o conceito.

A ideia é bem simples, iremos nos conectar ao drone dji [tello](https://www.lojadji.com.br/dji-drone-tello-boost-combo) através do wifi e à partir daí, passaremos enviar os comandos para controlar diversos comportamentos permitindo dar subir, descer, dar saltos, etc.

Existe um pdf com os principais detalhes sobre o [sdk trello](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf).

### Escolha uma pasta e inicie o seu projeto node js:
<pre>
c:\>mkdir drone
c:\>cd drone
c:\drone> npm init -y
</pre>

Crie um arquivo .js como o nome de sua preferência, e copie o código contido no arquivo fly.js.

Se preferir clonar o projeto, esse é o link do código no github: https://github.com/logicinfocursos/drone_tello.git. Aí é só atualizar o package.json do projeto:

<pre>
c:\drone> git clone https://github.com/logicinfocursos/drone_tello.git
c:\drone> npm i
</pre>

Caso deseje digitar o código, a única dependência externa que usaremos é o nodemon (mas também é opcional):
<pre>
c:\drone> npm install --save-dev nodemon
</pre>

### conectar-se ao drone
Para se conectar ao drone, ligue-o e em seguida no seu pc procure a rede wifi do drone, <strong>TELLO-CS5CBD</strong> e conecte-se a ela. Pronto, basta agora executar o código do seu projeto.

### executar o projeto
Você pode executar o projeto com ou sem o uso do nodemon.

a) sem o nodemon:
<pre>
c:\drone> node fly.js
</pre>

b) usando o nodemon, insira o seguinte script em package.json:
<pre>
  "scripts": {
    "dev": "node fly.js",
    "start": "nodemon fly.js"
  },
</pre>
e aí basta executá-lo:
<pre>
c:\drone> npm run start
</pre>

### conclusão
Pronto, você já tem a conexão e poderá usar a documentação do [trello](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf) para explorar todas as possibilidades.

Este código está usa o módulo [dgram](https://nodejs.org/api/dgram.html#class-dgramsocket) do node.js para criar um socket UDP para se comunicar com o drone. O endereço IP e a porta do drone são especificados, e o socket é vinculado à porta especificada. O código escuta mensagens recebidas do drone e as registra. 

O objetivo é enviar uma série de comandos para o drone, incluindo 'command' para inicializar o modo de comando, 'battery?' para perguntar o nível da bateria, 'takeoff' para comandar o drone para decolar, 'flip b' para comandar o drone para fazer um flip para trás, e 'land' para comandar o drone para pousar.

Esse código está longe da perfeição, o seu objetivo é meramente didático. Existem inúmeros aperfeiçoamentos que podem ser implementados, mas é o suficiente para você entender o funcionamento básico do sdk do drone tello para escrever um código mais completo na sua linguagem preferida, como python, php, c#, go, java, rust, etc. Ou criar versões para mobile como react native ou flutter, por exemplo.

### manter o seu pc conectado à internet
Durante o uso do tello, você ficará sem internet, salvo se estiver conectado à internet via cabo.

Para evitar esse inconveniente, é possível tentar a seguinte estratégia:

1 - Configurar um hotspot móvel: Primeiro, você precisará configurar um hotspot móvel em seu smartphone. Isso permitirá que seu computador se conecte à internet através do seu smartphone.

2 - Conectar o drone ao hotspot: Em seguida, você precisará conectar o drone ao hotspot que você acabou de configurar. Isso geralmente é feito através do aplicativo do drone no seu smartphone. Você precisará inserir o nome da rede (SSID) e a senha do hotspot.

3 - Conectar o computador ao hotspot: Agora você pode conectar seu computador ao mesmo hotspot. Isso permitirá que seu computador se comunique com o drone através do hotspot, enquanto ainda mantém a conexão com a internet.

4 - Atualizar o endereço IP do drone no código: Finalmente, você precisará atualizar o endereço IP do drone no seu código para o endereço IP que o drone recebeu do hotspot. Você pode geralmente encontrar este endereço IP através do aplicativo do drone no seu smartphone.

Note que a qualidade da sua conexão com a internet pode ser afetada pelo uso do hotspot, especialmente se você estiver em uma área com sinal de celular fraco. Além disso, o uso do hotspot pode consumir dados móveis, então certifique-se de ter um plano de dados adequado.

### referências node:
- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [typescript](https://www.typescriptlang.org/)
- [express](https://expressjs.com/)
- [npm express](https://www.npmjs.com/package/express)
- [dgram](https://nodejs.org/api/dgram.html#class-dgramsocket)
- [sdk trello - pdf](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf)
- [drone tello dji](https://www.lojadji.com.br/dji-drone-tello-boost-combo)

### página do drone tello no site da dji:
https://www.lojadji.com.br/dji-drone-tello-boost-combo

### plugins vscode p/node
- [node essentials](https://marketplace.visualstudio.com/items?itemName=afractal.node-essentials)
- [javascript and typescript nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)


### referências de uso geral
- [vscode](https://code.visualstudio.com/download)
- [postman](https://www.postman.com/downloads/)
- [insomnia](https://insomnia.rest/download)
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### plugins vscode de uso geral
- [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

# sobre a logicinfo

somos uma consultoria em T.I. e atuamos com desenvolvimento de aplicações para todos os segumentos e mantemos também uma estrutura de treinamento com as melhores soluções para o aprendizado em programação.

alguns de nossos serviços:

- desenvolvimento de aplicações mobile, web e desktop
- a.i. generative - tenha uma i.a. focada em seu negócio, atendendo os seus clientes e fornecedores por whatsapp, chat e u.r.a.

visite o nosso site:
[logicinfo.com.br](https://logicinfo.com.br)

fale consoco:
whatsapp: [11 9 8627 4173](11-9-8627-4173)
e-mail: [contato@logicinfo.com.br](contato@logicinfo.com.br)