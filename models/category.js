const Question = require('./question');


const categories = []

module.exports = class Category {
    constructor(
        id,
        name,
        questions
    ) {
        this.id = id;
        this.name = name;
        this.questions = questions;
    }


    save() {
        categories.push(this);
    }

    static findById(categoryId) {
        let intId = parseInt(categoryId);

        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === intId) {
                return categories[i];
            }
        }
    }

    static fetchAll(loadQuestions) {
        if (loadQuestions === true) {
            const filledCategories = [];

            for (let i = 0; i < categories.length; i++) {
                var c = categories[i];

                filledCategories.push(
                    new Category(
                       c.id,
                       c.name,
                    Question.fetchAllByCategoryId(c.id)
                    )
                );
            }
            return filledCategories;
        }

        return categories;
    }
}
const Category = require('./category');
categories.push(new Category(1, 'Processo Desenvolvimento', []));
categories.push(new Category(2, 'Dependências', []));
categories.push(new Category(3, 'Escalabilidade e Desempenho', []));
categories.push(new Category(4, 'Tolerância a Falhas e preparação para Catástrofes', []));
categories.push(new Category(5, 'Monitoramento', []));
categories.push(new Category(6, 'Onboarding', []));
