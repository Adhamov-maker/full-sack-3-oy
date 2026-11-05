import { users } from "./data.js";

const addUser = {
  firstName: "Bobur",
  lastName: "Hasanov",
  age: 25,
  email: "bobur@gmail.com",
  role: "user",
  balance: 600,
};

const createUser = (newdata) => {
  let { firstName, lastName, age, email, role, balance } = newdata;
  let item = {
    id: users.length === 0 ? 1 : users.at(-1).id + 1,
    firstName: firstName.trim() ? firstName : null,
    lastName: lastName.trim() ? lastName : null,
    age: age >= 18 ? age : null,
    email:
      email.includes("@") && !users.find((i) => i.email == email)
        ? email
        : null,
    role:
      role.toLowerCase() == "user" || role == "admin" || role == "moderator"
        ? role
        : null,
    balance: balance >= 0 ? balance : null,
  };
  if (Object.values(item).includes(null)) {
    return "ma'lumot toliq tog'ri kiritilgan";
  } else {
    return [...users, item];
  }
};
console.log(createUser(addUser));

// =====================================================================================
