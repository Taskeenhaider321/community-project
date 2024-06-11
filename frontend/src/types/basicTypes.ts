export type userType = {
    email?: string,
    password?: string,
    name?: string,
    phone_number?: number,
    gender?: string,
    life_style_goals?: string,
    interests?: any[],
    _id? : string,
    createdAt? : string,
    updatedAt? : string,
    password_key? : string
  }

  export type loginDataType = {
    email? : string,
    password? : string
  }

  export type interestType ={
    _id : string,
    name : string,
    createdAt : string,
    updatedAt : string
  }