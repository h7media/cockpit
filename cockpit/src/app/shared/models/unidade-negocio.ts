export default interface UnidadeNegocio {
    id: number,
    idCliente?: number,
    descricao: string
    alcance: number
    engajamento: number
    conversao: number
    retencao: number
    cor?: string
}