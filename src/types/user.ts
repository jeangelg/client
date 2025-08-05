export type User = {
  id: number;
  username : string; 
  email : string;
  firstName : string;
  lastName : string;
  gender : string;
  image? : string;
  accessToken : string;
  refreshToken :string
}


export type LoginCreds = {

    username: string;
    password: string;
}


export type RegisterCreds = {
    username: string;
    password: string;
}