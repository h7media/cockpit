export default interface RetornoGa {
    reports: ReportsGA[] | null
}

export interface ReportsGA {
    data: DataGA 
}

export interface DataGA {
    totals: TotalsGA[]
}

export interface TotalsGA {
    values: number[]
}