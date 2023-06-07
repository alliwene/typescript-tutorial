interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Professional {
  id: string;
  users?: User[];
}

export interface Account {
  id: string;
  email: string;
  createdDate: string;
  user: User;
  professional: Professional;
}
