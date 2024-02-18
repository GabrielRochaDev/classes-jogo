
class Heroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    
    atacar() {
        
        switch (this.tipo) {
            case 'Mago':
                return 'magia';
                break;
            case 'Guerreiro':
                return 'espada';
                break;
            case 'Monge':
                return 'artes marciais';
                break;
            case 'Ninja':
                return 'shuriken';
                break;
            default:
                return  'poder estranho e desconhecido';
                break;
        }
    }
}

const Mago = new Heroi("gendalf", "750", "Mago");
const Ninja = new Heroi("naruto", "20", "Ninja");
const Monge = new Heroi("delailahma", "151", "Monge");
const Guerreiro = new Heroi("Gabriel", "32", "Guerreiro");

console.log(`O ${Guerreiro.tipo} ${Guerreiro.nome} atacou usando ${Guerreiro.atacar()}`);