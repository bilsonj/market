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
 
  }

  export interface Singleproduct{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
 
  }


  export interface Delete{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }

  export interface Delete{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }

  export interface Getcarts{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }

  export interface Update{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }

  // export interface Catogaries{

  //   title: string,
  //   price: number,
  //   description: string,
  //   image: string,
  //   category: string
   

  // }

  export interface Specific{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }
  export interface onCreate{
    
    title:string
  }

  export interface Formdata{

    title: string,
    price: number,
    description: string,
    image: string,
    category: string
   

  }  

  export interface Dailog{
    image: string,
    title: string,
    price: number,
    description: string,

  }