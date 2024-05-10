// Importa o módulo dgram para fornecer um socket de datagrama UDP
const dgram = require('dgram')

// Define a porta e o host para o drone
const PORTA = 8889
const HOST = '192.168.10.1'

// Cria um socket UDP e o vincula à porta especificada
const drone = dgram.createSocket('udp4')
drone.bind(PORTA)

// Escuta o evento 'message', registra a mensagem quando recebida
drone.on('message', mensagem => {
    console.log(`>>>drone ligado🚁: ${mensagem}`)
})

// Função para lidar com erros
function tratarErro(erro) {
    
    // Se houver um erro, registra-o e envia os comandos 'land' e 'emergency' para o drone
    if (erro) {
        console.log('🚁 : ERRO')

        drone.send('land', 0, 'land'.length, PORTA, HOST, (erro) => {
            console.log('🚁 : erro', erro)
        })

        drone.send('emergency', 0, 'emergency'.length, PORTA, HOST, (erro) => {
            console.log('🚁 : erro', erro)
        })
    }
}

// Envia vários comandos para o drone
drone.send('command', 0, 'command'.length, PORTA, HOST, tratarErro) // Inicializa o modo de comando
drone.send('battery?', 0,'battery?'.length, PORTA, HOST, tratarErro) // Pergunta o nível da bateria
drone.send('takeoff', 0, 'takeoff'.length, PORTA, HOST, tratarErro) // Comanda o drone para decolar
drone.send('flip b', 0, 'flip b'.length, PORTA, HOST, tratarErro) // Comanda o drone para fazer um flip para trás
drone.send('land', 0, 'land'.length, PORTA, HOST, tratarErro) // Comanda o drone para pousar