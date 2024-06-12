function showMessage(moment) {
    let messageContainer = document.getElementById('message-container');
    let messageText = document.getElementById('message-text');
    let messageImage = document.getElementById('message-image');
    let message = '';
    let imageUrl = '';

    switch(moment) {
        case 'moment1':
            message = 'Primeiramente, eu te amo. Segundamente, é uma pena não estarmos juntos no que seria nosso segundo dia dos namorados pessoalmente, mas isso não é uma desculpa para não fazer uma surpresinha para a garota mais especial para mim. Em breve estaremos juntos novamente mostrando para o universo o quanto nosso amor é sincero, repleto de emoções e cheio de paixões. Espero que goste dessa surpresinha que tentei fazer com meus conhecimentos básicos de programação e um pouco de ajudinha do nosso companheiro chat-gepeto. 👍 Você verá nos próximos botões uma mensagem e uma foto que representa um momento que pra mim foi muito especial com você. Espero que goste, minha princesa! 👑💘';
            break;
        case 'moment2':
            message = 'Esse foi o dia que pela primeira vez eu encontrei o amor da minha vida pessoalmente. Lembro de cada detalhe desse dia e de como foi dormir pensando naquele encontro. Valeu super a pena esperar para te encontrar, não vejo a hora de te encontrar novamente para continuar escrevendo nossa história';
            imageUrl = 'images/momento1.png';
            break;
        case 'moment3':
            message = 'Esse dia foi o dia pós o primeiro encontro. Foi quando já tinhamos perdido algumas vergonhas e já dado nosso primeiro beijo. Ver essa foto me dá tanta saudade de te tocar, ficar assim perto de você é o meu porto seguro. É onde eu me sinto bem e esqueço de tudo!';
            imageUrl = 'images/momento2.png';
            break;
        case 'moment4':
            message = 'Esse foi a nossa "primeira viagem" juntos. Também foi a nossa segunda vez se encontrando pessoalmente. A primeira vez que passamos horas dentro de um carro juntos, comigo podendo realizar aquilo que te prometia de fazer carinho no seu cabelinho enquanto você dormia em meus ombros. Esse dia foi baita especial, eu te pedi em namoro ao lado do castelo, não é atoa que namoro uma princesa. Fiquei bem nervoso e ansioso por aquele momento, mas deu tudo certo. Hoje estamos aqui, juntos e eu sempre feliz por ter você ao meu lado!';
            imageUrl = 'images/momento3.png'
            break;
        case 'moment5':
            message = 'Nossa primeira foto com as alianças. Não parávamos de tirar fotos juntos e postando tudo que fazíamos. Que saudade desses nossos momentos fotogênicos. Sessão de fotos marcada para o próximo encontro! ✔';
            imageUrl = 'images/momento4.png';
            break;
        case 'moment6':
            message = 'Festinha de aniversário da Luluuuu. Primeira festa que estávamos juntos, sendo anti-sociais juntos e fazendo tudo juntos! Nessa dia você estava gata fi. Lembro de te admirar o tempo todo. Melhor companhia impossível, a festa não ficava nem um pouco chata por que eu tinha a melhor pessoa para conversar, interagir e me apaixonar de novo.';
            imageUrl = 'images/momento5.png';
            break;
        case 'moment7':
            message = 'Você fazendo do meu casaco um vestido!!! Sua primeira vez usando meu moletom. Aiiiinnn como eu sou baixinhaaaaannnn. Continuação da nossa primeira vez em um aniversário. Foi top!';
            imageUrl = 'images/momento6.png';
            break;
        case 'moment8':
            message = 'Nossa primeira vez dormindo abraçadinhos. Que momento maravilhoso, você deitada no meu peito e eu te fazendo carinho até mimir. Seus ronquinhos são extremamente fofo minininha! Lembro da gravação que fiz de você com a boquinha aberta e roncando. Eita minininha que dorme fi! Coisinha linda mimindo 😴';
            imageUrl = 'images/momento7.png';
            break;
        case 'moment9':
            message = 'Comendo bolovete juntos pela primeira vezzz! Certeza que agora você ta com água na boca querendo pedir um no ifood né. Saímos juntos e ficamos sozinhos em uma cafeteria comendo fofinho. Que delícia esse bolovete. Na próxima vamos de novo! Fotinha tumblr';
            imageUrl = 'images/momento8.png';
            break;
        case 'moment10':
            message = 'Agora sim. Nosso primeiro dia dos namorados juntos pessoalmente. Que momento incrível, você querendo fazer essa surpresinha fofa pra mim mas no fim eu ajudei a fazer kkkkkkk Te amo garota. Eu amei. Nosso date foi fofo, quero mais com você! Em breve passaremos todos os outros juntos!!! Prometo. ❤';
            imageUrl = 'images/momento9.png';
            break;
        case 'moment11':
            message = 'Diretamente dos filmes Screams. Marcellinha e Murilo fantasiados. Nossa primeira festa halloween juntos e a minha primeira participação em uma festa halloween também! Foi mega divertido essa noite contigo, comemos muito, aproveitamos muito e ainda fomos animadores de festa com as crianças, além de eu tomar umas belas surras dessas criaturinhas mirabolantes. Tudo contigo fica incrível!';
            imageUrl = 'images/momento10.png';
            break;
        case 'moment12':
            message = 'Essa foi oficialmente nossa primeira viagem juntos. Nossa primeira vez na praia juntos. Lembro que curtimos tanto os dias de praia, brincamos, nadamos, passeamos... Foi tudo muito bom, não vejo a hora de viajarmos novamente para alguma praia. Até algo simples como entrar no mar contigo é especial. Você sempre deixa tudo mais leve e divertido. Eu te amo!';
            imageUrl = 'images/momento11.png';
            break;
        case 'moment13':
            message = 'E pra finalizar, nossa segunda festa de aniversário da Lulu juntos e a última vez até o dia presente que nos encontramos. Essa noite foi de muita diversão, brincamos como crianças. Coisas simples com você se tornam coisas divertidas e especiais. Essa foto você está uma gatinha. Não basta ser incrível ainda tem que ser bonita. Eita mocinha que é linda!';
            imageUrl = 'images/momento12.png';
            break;
        case 'moment14':
                message = 'Momentos futuros que ainda iremos viver juntos!';
                break;

        default:
            message = 'Selecione um momento para ver a mensagem.';
            imageUrl = '';
    }

    messageText.innerHTML = message;
    if (imageUrl) {
        messageImage.src = imageUrl;
        messageImage.style.display = 'block';
    } else {
        messageImage.style.display = 'none';
    }
}

