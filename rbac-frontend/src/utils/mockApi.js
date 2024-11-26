let users = [];
let roles = [];

export const getUsers = () => Promise.resolve(users);

export const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
  return Promise.resolve(user);
};

export const updateUser = (user) => {
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
  }
  return Promise.resolve(user);
};

export const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
  return Promise.resolve();
};

export const getRoles = () => Promise.resolve(roles);

export const addRole = (role) => {
  role.id = roles.length + 1;
  roles.push(role);
  return Promise.resolve(role);
};

export const updateRole = (role) => {
  const index = roles.findIndex((r) => r.id === role.id);
  if (index !== -1) {
    roles[index] = role;
  }
  return Promise.resolve(role);
};

export const deleteRole = (id) => {
  roles = roles.filter((role) => role.id !== id);
  return Promise.resolve();
};
