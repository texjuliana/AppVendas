const Produtos = [
    {
        id: 100,
        name: 'Remarried Empress - vol 1 (novel)',
        price: 190,
        image: require('../assets/Produtos/img1.jpg'),
        description: 'Navier era a imperatriz perfeita, no entanto, o imperador queria uma esposa, não um colega. E assim, o imperador abandonou a imperatriz Navier e colocou um escravo garota ao lado dele. Isso foi bom, até Navier ouvir o Imperador prometer à garota escrava a posição da Imperatriz. Depois de muita agonia, Navier decidiu que se casaria novamente com o imperador do país vizinho. '
    },
    {
        id: 101,
        name: 'Daddy, I Dont Want To Marry! - vol 1 (novel)',
        price: 130,
        image: require('../assets/Produtos/img2.jpg'),
        description: 'Eu reencarnei como a vilã em um romance que havia lido, Jubellian Eloy Floyen. Eu estava condenada a morrer, mas não! Com as lembranças de minha vida anterior, evitarei minha bandeira de morte! "Não casarei com um homem que não tenha honra, nem família, nem propriedade, nem poder!". Ao declarar minha vontade de viver uma vida gloriosa e glamurosa, meu pai decidiu fazer do príncipe herdeiro meu noivo...! Ele é louco?! Vou tratar o contrato de noivado como uma última medida. "Por que você está evitando seu noivado com o Príncipe Herdeiro?", "Porque isso me assusta! Ele mata as pessoas que não lhe obedecem imediatamente!", Alguns dias depois, o Príncipe Herdeiro me enviou uma carta. "Não se preocupe, eu não a matarei". Oh não... eu já fiz algo pelo qual valha a pena morrer? '
    },
    {
        id: 102,
        name: 'Actually, I was the Real One - vol 1 (novel) ',
        price: 92,
        image: require('../assets/Produtos/img3.jpg'),
        description: 'Para receber o amor de seu pai, Keira tentou ao máximo viver uma vida de filha perfeita e submissa. No entanto, um dia, Cosette aparece alegando ser sua filha real e Kiera é executada sob o pressuposto de que ela é uma farsa. Nos últimos momentos de sua vida, Cosette sussurra para Kiera: "Sinceramente, você era a verdadeira." Kiera, relembrando essas palavras, retorna ao passado. Embora a vingança seja importante, o que importa quem é falso e quem é real? Agora que ganhei uma vida novamente, vou vivê-la livremente para mim! O romance de amadurecimento de uma protagonista fofa que nunca fez amigos. '
    },
    {
        id: 103,
        name: 'Solo Leveling - vol 1 (novel)',
        price: 65,
        image: require('../assets/Produtos/img4.jpg'),
        description: 'Dez anos atrás, depois do "Portal" que conecta o mundo real com um mundo de monstros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, "O mais fraco do mundo". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder... '
    },
    {
        id: 104,
        name: 'The beginning after the end - vol 1 (novel)',
        price: 500,
        image: require('../assets/Produtos/img5.jpg'),
        description: 'Rei Grey conquistou força, riquezas e prestígio sem iguais em um mundo governado pela habilidade marcial. Entretanto, a solidão acompanha de perto aqueles de grande poder. Por detrás da máscara de um glorioso e poderoso rei, reside a casca vazia de um homem destituído de propósito e vontade. Renascido em um novo mundo repleto de magia e monstros, o Rei Grey terá a chance de refazer sua vida. Corrigir os erros do passado não será seu único desafio, pois um perigo oculto cresce a cada instante, ameaçando destruir tudo que ele trabalhou para criar, o fazendo questionar a verdadeira razão de ter recebido uma nova vida. '
    },
    {
        id: 105,
        name: 'Doctor Elise - vol 1 até 4 ',
        price: 179,
        image: require('../assets/Produtos/img6.jpg'),
        description: 'Em sua primeira vida ela foi uma rainha terrível, que trouxe problemas para seu reino e eventualmente, seu próprio rei acabou queimando ela viva. Em sua segunda vida, ela se tornou uma talentosa cirurgiã que tenta se redimir pelos seus pecados da vida passada salvando outras pessoas. Mas por causa de um acidente de avião, a talentosa cirurgiã Song Zhi Hyun acaba retornando para seu vida anterior! Mas dessa vez, ela decide mudar tudo se tornando uma médica. '
    },
    {
        id: 106,
        name: 'O pequeno principe',
        price: 14,
        image: require('../assets/Produtos/img7.jpg'),
        description: 'A Pequena Garota encontra o excêntrico Aviador, que a introduz ao mágico mundo do Pequeno Príncipe. Neste mundo em que tudo é possível, a Garota aprende a redescobrir sua infância.'
    },
    {
        id: 107,
        name: 'Horimiya - vol 1 ',
        price: 74,
        image: require('../assets/Produtos/img8.jpg'),
        description: 'Hori é uma colegial normal, mas ela é uma pessoa completamente diferente fora da escola. Na ausência de seus pais ela cuida de seu irmão mais novo. Miyamura um colega de classe dela , é um garoto normal, quatro-olhos e meio estranho, mas ele também fora da escola tem um segredo. Quando os dois se encontram inesperadamente, descobrem segredos uns dos outros e começam a desenvolver uma amizade inesperada. Que situações podem esperá-los já que ambos conhecem o segredo um do outro? '
    }
];

export function getProdutos() {
    return Produtos;
}

export function getProduct(id) {
    return Produtos.find((product) => (product.id == id));
}