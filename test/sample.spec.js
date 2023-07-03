
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'
const expect = chai.expect
let resultado;


describe('Testes de soma', () => {
    it('Verificar a soma entre dois positivos', () => {
        resultado = Calculadora.soma(5,5);
        expect(resultado).to.be.eq(10);
    });
    it('Verificar a soma entre dois negativos', () => {
        resultado = Calculadora.soma(-5,-5);
        expect(resultado).to.be.eq(-10);
    });
    it('Verificar a soma entre . flutuante', () => {
        resultado = Calculadora.soma(4.5,5.5);
        expect(resultado).to.be.eq(10);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.soma(5,5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar elemento neutro da soma com números positivos', () => {
        resultado = Calculadora.soma(0,5);
        expect(resultado).to.be.eq(5);
    })
    it('Verificar elemento neutro da soma com números negativos', () => {
        resultado = Calculadora.soma(0,-5);
        expect(resultado).to.be.eq(-5);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.soma(5,5);
        expect(resultado).to.be.not.eq(20);
    })
});

describe('Testes de subtração', () =>{
    it('Verificar a diferença entre dois positivos', () => {
        resultado = Calculadora.subtracao(5,5);
        expect(resultado).to.be.eq(0);  
    })
    it('Verificar a diferença entre dois negativos', () => {
        resultado = Calculadora.subtracao(-5,-5);
        expect(resultado).to.be.eq(0);
    });
    it('Verificar a subtração entre . flutuante', () => {
        resultado = Calculadora.subtracao(10, 5.5);
        expect(resultado).to.be.eq(4.5);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.subtracao(5,5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar elemento neutro da subtração com números positivos', () => {
        resultado = Calculadora.subtracao(0,5);
        expect(resultado).to.be.eq(-5);
    })
    it('Verificar elemento neutro da subtração com números negativos', () => {
        resultado = Calculadora.subtracao(0,-5);
        expect(resultado).to.be.eq(5);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.subtracao(5,5);
        expect(resultado).to.be.not.eq(20);
    })
})

describe('Testes de multiplicação', () =>{
    it('Verificar a multiplicação entre dois positivos', () => {
        resultado = Calculadora.multiplicacao(5,5);
        expect(resultado).to.be.eq(25);  
    })
    it('Verificar a multiplicação entre dois negativos', () => {
        resultado = Calculadora.multiplicacao(-5,-5);
        expect(resultado).to.be.eq(25);
    });
    it('Verificar a multiplicação entre . flutuante', () => {
        resultado = Calculadora.multiplicacao(10, 5.5);
        expect(resultado).to.be.eq(55);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.multiplicacao(5,5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar elemento neutro da multiplicação com números positivos', () => {
        resultado = Calculadora.multiplicacao(1,5);
        expect(resultado).to.be.eq(5);
    })
    it('Verificar elemento neutro da multiplicação com números negativos', () => {
        resultado = Calculadora.multiplicacao(1,-5);
        expect(resultado).to.be.eq(-5);
    })
    it('Verificar multiplicação por 0', () => {
        resultado = Calculadora.multiplicacao(0,5);
        expect(resultado).to.be.eq(0);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.multiplicacao(5,5);
        expect(resultado).to.be.not.eq(20);
    })
})

describe('Testes de divisão', () =>{
    it('Verificar a divisão entre dois positivos', () => {
        resultado = Calculadora.divisao(20,5);
        expect(resultado).to.be.eq(4);  
    })
    it('Verificar a divisão entre dois negativos', () => {
        resultado = Calculadora.divisao(-25,-5);
        expect(resultado).to.be.eq(5);
    });
    it('Verificar a divisão entre . flutuante', () => {
        resultado = Calculadora.divisao(5.5, 5);
        expect(resultado).to.be.eq(1.1);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.divisao(5,5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar elemento neutro da divisão com números positivos', () => {
        resultado = Calculadora.divisao(5,1);
        expect(resultado).to.be.eq(5);
    })
    it('Verificar elemento neutro da divisão com números negativos', () => {
        resultado = Calculadora.divisao(-5, 1);
        expect(resultado).to.be.eq(-5);
    })
    it('Verificar divisão por 0', () => {
        resultado = Calculadora.divisao(5,0);
        expect(resultado).to.be.eq(null);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.divisao(5,5);
        expect(resultado).to.be.not.eq(20);
    })
})

describe('Teste de exponênciação', () => {
    it('Verificar a exponênciação entre dois positivos', () => {
        resultado = Calculadora.expo(5,5);
        expect(resultado).to.be.eq(3125);  
    })
    it('Verificar a exponênciação entre dois negativos', () => {
        resultado = Calculadora.expo(-5,-5);
        expect(resultado).to.be.eq(-0.00031999999999999997);
    });
    it('Verificar a exponênciação com base em . flutuante', () => {
        resultado = Calculadora.expo(5.5, 5);
        expect(resultado).to.be.eq(5032.84375);
    });
    it('Verificar a exponênciação elevada em . flutuante', () => {
        resultado = Calculadora.expo(5, 5.5);
        expect(resultado).to.be.eq(6987.712429686842);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.expo(5,5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar elemento neutro da exponênciação com números positivos', () => {
        resultado = Calculadora.expo(5,1);
        expect(resultado).to.be.eq(5);
    })
    it('Verificar elemento neutro da exponênciação com números negativos', () => {
        resultado = Calculadora.expo(-5, 1);
        expect(resultado).to.be.eq(-5);
    })
    it('Verificar exponênciação por 0', () => {
        resultado = Calculadora.expo(5,0);
        expect(resultado).to.be.eq(1);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.expo(5,5);
        expect(resultado).to.be.not.eq(15);
    })
})

describe('Teste de porcentagem', () => {
    it('Verificar a porcentagem de um valor positivo', () => {
        resultado = Calculadora.porcent(5);
        expect(resultado).to.be.eq(0.05);  
    })
    it('Verificar a porcentagem de um valor negativo', () => {
        resultado = Calculadora.porcent(-5);
        expect(resultado).to.be.eq(-0.05);
    });
    it('Verificar a porcentagem em . flutuante', () => {
        resultado = Calculadora.porcent(5.5);
        expect(resultado).to.be.eq(0.055);
    });
    it('Verificar se o retorno é tipo número', () => {
        resultado = Calculadora.porcent(5);
        expect(resultado).to.be.a('number');
    });
    it('Verificar percentagem por 0', () => {
        resultado = Calculadora.porcent(0);
        expect(resultado).to.be.eq(0);
    })
    it('Verificar uma desigualdade', () => {
        resultado = Calculadora.expo(5);
        expect(resultado).to.be.not.eq(15);
    })
})

describe('Testes de módulo', () => {
    
    it('Verificar módulo positivo', () => {
        resultado = Calculadora.modulo(1);
        expect(resultado).to.be.eq(1);
    });
    it('Verificar módulo negativo', () => {
        resultado = Calculadora.modulo(-1);
        expect(resultado).to.be.eq(1);
    });
    it('Verificar módulo igual a 0', () => {
        resultado = Calculadora.modulo(0);
        expect(resultado).to.be.eq(0);
    });
});
