import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
