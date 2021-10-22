import { createContext, useState } from 'react';

export const RegistrationContext = createContext(null);

export const RegistrationContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    charusat_id: "",
    user_type: "",
    email: "",
    first_name: "",
    last_name: "",
    institute: "",
    department: "",
    counsellor: "",
    hod: {name: "", email: ""},
    mobile: "",
    password: "",
    confirm_password: "",
  });

  return (
    <RegistrationContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </RegistrationContext.Provider>
  );
};
