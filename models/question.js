const questions = [
    {
        categoryId: 1,
        id: 1,
        title: 'Existe um processo de Code Review para todas entregas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 2,
        title: 'Os commits são pequenos e objetivos (commits atômicos)? ',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 3,
        title: 'Os commits possuem bom título e boa descrição descrevendo o que foi alterado? ',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 4,
        title: 'Os Pull Requests são abertos com uma boa descrição do PR, quais ganhos almejados com e possíveis efeitos colaterais? ',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 5,
        title: 'O código é mergeado na master somente após pelo menos duas pessoas diferentes de quem escreveu o código aprovarem?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 6,
        title: 'O ambiente de desenvolvimento reflete com precisão o ambiente de produção?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 7,
        title: 'São reallizados testes no microservice?',
        alternatives: [
            {
                id: 1,
                title: 'Sim. Automatizados',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Sim, somente manualmente',
                weight: 0,
                selected: false
            },
            {
                id: 3,
                title: 'Não',
                weight: -10,
                selected: false
            }

        ]
    },
    {
        categoryId: 1,
        id: 8,
        title: 'Qual é o nível de cobertura de testes praticado?',
        alternatives: [
            {
                id: 1,
                title: 'A partir de 70%',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Entre 50% e 69%',
                weight: 1,
                selected: false
            },
            {
                id: 3,
                title: 'Abaixo de 50%',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 9,
        title: 'As entregas em produção são feitas de forma faseada?',
        alternatives: [
            {
                id: 1,
                title: 'Sim, é entregue parcialmente em produção de forma desligada até subir o todo',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Sim, é entregue parcialmente em produção de forma ligada',
                weight: -1,
                selected: false
            },
            {
                id: 3,
                title: 'É entregue somente quando tudo for desenvolvido o',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 10,
        title:'As dependências do microservice são conhecidas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 11,
        title: ' Os clientes do microserviço são conhecidos?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 12,
        title: 'Existe tratamentos para mitigar falhas nas depêndencias? Circuit Break, Fallback por exemplo',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 13,
        title: ' As verificações da saúde do microservice são confiáveis, refletem com precisão a saúde do microservice?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 14,
        title: 'No caso de desativação de algum endpoint ou microservice, existe algum procedimento em funcionamento para desativar o serviço?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 15,
        title: 'A escala de crescimento quantitativa e qualitativa do microservice é conhecida e documentada?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 16,
        title: 'O throughput máximo que uma instância do microserviço suporta é conhecido?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -1,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 17,
        title: 'Todas as dependências são escaláveis e de alto desempenho',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -20,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 18,
        title: 'Os padrões de trafego do microservice são conhecidos?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 19,
        title: 'O tráfego pode ser roteado automaticamente para outro datacenter em caso de falha?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 20,
        title: 'As mudanças no serviço são planejadas de acordo com os padrões de tráfego?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 21,
        title: 'O microservice está escrito em um framework e linguagem que permita que o serviço seja escalável e de alto desempenho?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -3,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 22,
        title: 'Existem limitações de escalabilidade  ou desempenho na forma como o microservice processa as solicitações?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: -10,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 23,
        title: 'A forma como o microservice processa as informações e como reagirá em um aumento de volume é conhecido por todo o time?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 24,
        title: 'O banco de dados deste microservice é compartilhado ou dedicado?',
        alternatives: [
            {
                id: 1,
                title: 'Sim, é dedicado',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não é dedicado',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 25,
        title: 'O padrão de acesso do microservice aos dados é conhecido?Este microservice precisa de um desempenho maior de escrita ou leitura?',
        alternatives: [
            {
                id: 1,
                title: 'Sim, estamos ciente se ele é mais escrita intensivo ou leitura intensiva',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'O padrão de acesso aos dados é desconhecido.',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 26,
        title: 'Este microservice está preparado para lidar com os padrões de acesso de dados de forma adequada?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -2.5,
                selected: false
            }
        ]
    },
    {
        categoryId: 3,
        id: 27,
        title: 'A base de dados deste microservice escala de forma horizontal ou vertical?',
        alternatives: [
            {
                id: 1,
                title: 'Sim, vertical e horizontal',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não. Somente vertical',
                weight: 0,
                selected: false
            },
            {
                id: 3,
                title: 'Não escala',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 4,
        id: 28,
        title: 'Este microservice tem algum ponto único de falha?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: -10,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 5,
                selected: false
            }
        ]
    },
    {
        categoryId: 4,
        id: 29,
        title: 'Caso exista pontos de falha, eles são minimizados e tratados?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 4,
        id: 30,
        title: 'Este microservice é submetido a testes de carga regulares e programados?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 4,
        id: 31,
        title: 'É realizado o teste de caos?',
        alternatives: [
            {
                id: 1,
                title: 'Sim.',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: 0,
                selected: false
            }
        ]
    },
    {
        categoryId: 5,
        id: 32,
        title: 'As principais métricas hardware do microservice são conhecidas, monitoradas e documentadas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    
    {
        categoryId: 5,
        id: 33,
        title: 'Todos os alarmes do microservice estão documentados com o procedimento de atuação em caso de ativação?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -10,
                selected: false
            }
        ]
    },
    
    {
        categoryId: 5,
        id: 34,
        title: 'O log do microservice reflete o estado do microservice a qualquer momento?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
                selected: false
            }
        ]
    },    
    {
        categoryId: 5,
        id: 35,
        title: 'O microservice não está logando dados sensíveis?',
        alternatives: [
            {
                id: 1,
                title: 'Não está logando',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Sim, está',
                weight: -30,
                selected: false
            }
        ]
    },   
    {
        categoryId: 5,
        id: 36,
        title: 'O microserviço gera log de uma maneira escalável e eficiente?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 6,
        id: 37,
        title: 'O readme do microservice possui todas informações suficientes para alguém novo conseguir entender o contexto do microservice, como rodar localmente, e link das documentações do microservice?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 6,
        id: 38,
        title: 'É possível rodar o microservice localmente com todas as dependências localmente? ( Ex.: Banco de dados, Filas e etc)',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 6,
        id: 39,
        title: 'Todos do time conseguem responder este questionário?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.71,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -5,
                selected: false
            }
        ]
    },
    {
        categoryId: 6,
        id: 40,
        title: 'Todos do time possuem os acessos necessários para realização de troubleshooting em produção? Logs e Dashboards por exemplo?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 2.5,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: -2.5,
                selected: false
            }
        ]
    }
];

module.exports = class Question {

    constructor(
        id, 
        categoryId,
        title,
        alternatives
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.alternatives = alternatives;
    }

    static fetchAll() {
        return questions;
    }

    static fetchAllByCategoryId(categoryId) {

        const intId = parseInt(categoryId);
        const matchedQuestions = [];

        for (let i = 0; i < questions.length; i++) {
            if (parseInt(questions[i].categoryId) === categoryId) {
                matchedQuestions.push(questions[i]);
            }
        }
        return matchedQuestions;
    }

    static findQuestionById(questionId) {
        
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id === questionId) {
                return questions[i];
            }
        }
    }

    static count() {
        return questions.length;
    }
}