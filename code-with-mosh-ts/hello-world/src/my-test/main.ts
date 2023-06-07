import { Account } from "./test.interface";

function getTest(account: Account) {
  const {
    id,
    email,
    createdDate,
    user: { firstName, lastName },
    professional: { users },
  } = account;
  if ("user" in account) {
    return { id, email, firstName, lastName, createdDate };
  }
  return { id, email, createdDate, users };
}

const account: Account = {
  id: "",
  email: "",
  createdDate: "",
  user: { id: "", firstName: "", lastName: "" },
  professional: { id: ''},
};

getTest(account);
