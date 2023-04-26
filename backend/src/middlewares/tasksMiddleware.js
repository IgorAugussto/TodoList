//Função de validação de requisições, ou seja, vai verificar se está correto para fazer a requisição
//Caso as duas condições não sejam atendida, ele pula paro o next e segue a vida
const validateFieldTitle = (req, res, next) => {
    const { body } = req;

    if(body.title == undefined) {
        return res.status(400).json({message: 'The field "title" is required'});
    }

    if(body.title == '') {
        return res.status(400).json({message: 'title can not be empty'});
    }

    next();
};

const validateFieldStatus = (req, res, next) => {
    const { body } = req;

    if(body.status == undefined) {
        return res.status(400).json({message: 'The field "title" is required'});
    }

    if(body.status == '') {
        return res.status(400).json({message: 'title can not be empty'});
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
};