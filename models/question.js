const questions = [
    {
        categoryId: 1,
        id: 1,
        title: 'Existe um processo de Code Review para todas entregas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 2,
        title: 'O código é mergeado na master somente após pelo menos duas pessoas diferentes de quem escreveu o código aprovarem?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 3,
        title: 'O ambiente de desenvolvimento reflete com precisão o ambiente de produção?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Não',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 4,
        title: 'São reallizados testes no microservice?',
        alternatives: [
            {
                id: 1,
                title: 'Sim. Automatizados',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Sim, somente manualmente',
                weight: -10,
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
        id: 5,
        title: 'Qual é o nível de cobertura de testes praticado?',
        alternatives: [
            {
                id: 1,
                title: 'A partir de 70%',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Entre 50% e 69%',
                weight: 0,
                selected: false
            },
            {
                id: 3,
                title: 'Abaixo de 50%',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 1,
        id: 6,
        title: 'As entregas em produção são feitas de forma faseada?',
        alternatives: [
            {
                id: 1,
                title: 'Sim, é entregue parcialmente em produção de forma desligada até subir o todo',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Sim, é entregue parcialmente em produção forma ligada',
                weight: 0,
                selected: false
            },
            {
                id: 3,
                title: 'É entregue somente quando tudo for desenvolvido o',
                weight: -10,
                selected: false
            }
        ]
    },
    {
        categoryId: 2,
        id: 7,
        title:'As dependências do microservice são conhecidas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 8,
        title: ' Os clientes do microserviço são conhecidos?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 9,
        title: 'Existe tratamentos para mitigar falhas nas depêndencias? Circuit Break, Fallback por exemplo',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 10,
        title: ' As verificações da saúde do microservice são confiáveis, refletem com precisão a saúde do microservice?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        categoryId: 1,
        id: 11,
        title: 'No caso de desativação de algum endpoint ou microservice, existe algum procedimento em funcionamento para desativar o serviço?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 12,
        title: 'A escala de crescimento quantitativa e qualitativa do microservice é conhecida e documentada?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 13,
        title: 'O throughput máximo que o microserviço suporta é conhecido?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 14,
        title: 'As dependências são escaláveis e de alto desenpenho',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        title: 'Os padrões de trafego do microservice é conhecido?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 16,
        title: 'O tráfego pode ser roteado automaticamente para outro datacenter em caso de falha?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 17,
        title: 'As mudanças no serviço são planejadas de acordo com os padrões de tráfego?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 18,
        title: 'O microservice está escrito em um framework e linguagem que permita que o serviço seja escalável e de alto desempenho?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        title: 'Existem limitações de escalabilidade  ou desempenho na forma como o microservice processa as solicitações?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 20,
        title: 'A forma como o microservice processa as informações e como reagirá em um aumento de volume é conhecido por todo o time?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 21,
        title: 'O banco de dados deste microservice é compartilhado ou dedicado?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 22,
        title: 'Este microservice precisa de um desempenho maior de escrita ou leitura?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        title: 'Este microservice trata os dados de forma escalãvel e de alto desempenho?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        title: 'A base de dados deste microsrevice escala de forma horizontal ou vertical?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 25,
        title: 'Este microservice tem algum ponto único de falha?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 26,
        title: 'Caso exista pontos de falha, eles são mitigados ou eliminados?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 27,
        title: 'Este microservice é submetido a testes de carga regulares e programados?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 28,
        title: 'É realizado o teste de caos?',
        alternatives: [
            {
                id: 1,
                title: 'Sim.',
                weight: 10,
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
        id: 29,
        title: 'As principais métricas hardware do microservice são conhecidas e monitoradas?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 30,
        title: 'Todos os alarmes do microservice estão documentados com o procedimento de atuação em caso de ativação?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 31,
        title: 'O log do microservice reflete o estado do microservice a qualquer momento?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 32,
        title: 'O microservice não está logando dados sensíveis?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        id: 33,
        title: 'O microserviço gera log de uma maneira escalável e eficiente?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        categoryId: 6,
        id: 34,
        title: 'O readme do microservice possui todas informações suficientes para alguém novo conseguir entender o contexto do microservice, como rodar localmente, e link das documentações?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        categoryId: 6,
        id: 35,
        title: 'É possível rodar o microservice localmente com todas as dependências localmente? ( Ex.: Banco de dados, Filas e etc)',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
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
        categoryId: 6,
        id: 36,
        title: 'Todos do time conseguem responder este questionário?',
        alternatives: [
            {
                id: 1,
                title: 'Sim',
                weight: 10,
                selected: false
            },
            {
                id: 2,
                title: 'Não.',
                weight: 0,
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