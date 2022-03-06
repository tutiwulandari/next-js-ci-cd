export interface categoryTypes {
    _id: string,
    name: string,
    __v: number
}

export interface gameItemTypes {
    _id: string,
    status: string,
    name: string,
    thumbnail :string
    category: categoryTypes
}

export interface bankType {
    _id : string,
    name : string,
    bankName : string,
    noRekening : string
}

export interface PaymentTypes {
    _id: string,
    type: string,
    status : string,
    banks :bankType[]
}

export interface NominalType {
    _id : string,
    coinQuantity : number,
    price : number,
    coinName : string
}

export interface GameCategory {
    _id : string,
    name : string
}

export interface loginType {
    email: string,
    password:string
}

