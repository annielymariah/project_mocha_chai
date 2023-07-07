// Calculadora JavaScript

export default class Calculadora{
    static soma (a, b){
        return a+b;
    }
    static subtracao (a,b){
        return a-b;
    }
    static multiplicacao (a,b){
        return a*b;
    }
    static divisao (a,b){
        if (a == 0 || b == 0){
            return null;
        }
        return a/b;
    }
    static expo (a,b){
        return a**b;
    }
    static porcent (a){
        return a/100;
    }
    static modulo (a){
        return a<0 ? -1*a : a}
}