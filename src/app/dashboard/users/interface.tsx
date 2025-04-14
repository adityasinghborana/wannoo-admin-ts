export interface AllUsers{

    users:User[]
}

export interface User {
    id: number
    email: string
    address: string
    age: number | null       // instead of `any`
    dob: string | null       // ISO format date maybe?
    isUser: boolean
    uid: string
    username: string
    profileImage: string
  }