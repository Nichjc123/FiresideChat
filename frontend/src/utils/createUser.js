export const createUser = (info) => {
  return {
    email: info.email.value,
    name: info.name.value,
    age: info.age.value,
    sexe: info.sexe.value,
    password: info.password.value,
    counselor: info.counselor.checked,
  };
};
