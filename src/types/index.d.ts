
  export interface paramData {
        [key: number]: paramType;
  }
    interface paramType {
      name: string;
      id: number;
      user: Array<userType>;
    }
    
     interface userType {
        [key: string]: number;
    }