 export interface UserData {
    name: string;
    email: string;
    password: string;
  }

  export interface LoginUserData {
  
    email: string;
    password: string;
  }

  export interface Postvalues{
    id:number,
    userId:number,
    title:string
  }

  export interface Product{
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
  }

  export interface Getall{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
    rating:{
      rate:number
      count:number
    }
  }

  export interface Singleproduct{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
    rating:{
      rate:number
      count:number
    }
  }


  export interface Delete{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
    rating:{
      rate:number
      count:number
    }
  }