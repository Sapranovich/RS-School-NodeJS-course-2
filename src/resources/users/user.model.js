class User {
  constructor(id, index) {
    this.id = id;
    this.name = `USER_${index}`;
    this.login = `user_${index}`;
    this.password = `P@55w0rd_${index}`;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
