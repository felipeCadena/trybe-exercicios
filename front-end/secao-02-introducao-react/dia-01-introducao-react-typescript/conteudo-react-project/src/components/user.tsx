const user = {
  name: "Felipe",
  lastName: "Cadena",
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
