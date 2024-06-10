type User = {
    id: number,
    name: string,
    surname: string,
    email: string,
    rol: Rol,
    password: string
}

type Rol = {
    id: number,
    name: string
}

type Department = {
    id: number,
    name: string
}

type Shift = {
    id: number,
    name: string
}

type Record = {
    id: number,
    user: User,
    entry_date: Date,
    exit_date: Date
}