import Clientes from "../models/clientes";
import UnidadeNegocio from "../models/unidade-negocio";

const cores = [
    '#FD2254',
    '#009FFF',
    'blue',
    'red',
    'purple'
]

const geradorClientes = (nomeClientes: string[]): Clientes[] => {
    
    let clientes: Clientes[] = []
    
    for (let index = 0; index < nomeClientes.length; index++) {
        clientes.push({
            id: index + 1,
            nome: nomeClientes[index]
        })
    }

    return clientes;
}
const geradorUnidadeNegocioCliente = (nomeUnidades: string[]): UnidadeNegocio[] => {
    
    let un: UnidadeNegocio[] = []

    
    for (let index = 0; index < nomeUnidades.length; index++) {
        let inicio = Math.floor(Math.random() * 9999)
        un.push({
            id: index + 1,
            descricao: nomeUnidades[index],
            alcance: inicio,
            conversao: inicio * 0.6,
            engajamento: inicio * 0.8,
            retencao: inicio * 0.5,
            cor: cores[index]
        })
    }

    return un;
}

const geradorUNGreenRun = (): UnidadeNegocio[] => {
    return geradorUnidadeNegocioCliente(['Big Tasty', 'Big MC', 'McChicken', 'Cheeseburguer'])
}
const geradorUNVetFaro = (): UnidadeNegocio[] => {
    return geradorUnidadeNegocioCliente(['Ração de cachorro', 'Ração para gatos'])
}
const geradorUNGibim = (): UnidadeNegocio[] => {
    return geradorUnidadeNegocioCliente(['Condominio Arosa', 'Condominio Gran Ville', 'Condominio Vitta Belle', 'Condominio Baden'])
}

const periodos = [
    { value: '7days', viewValue: 'Últimos 7 dias' },
    { value: '15days', viewValue: 'Últimos 15 dias' },
    { value: '30days', viewValue: 'Últimos 30 dias' },
  ]

export {
    geradorUNGreenRun,
    geradorUNVetFaro,
    geradorUNGibim,
    geradorClientes,
    periodos
}