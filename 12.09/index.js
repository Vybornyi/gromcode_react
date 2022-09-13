const user2 = {
  id: 205,
  name: 'Tester',
  email: 'test@gmail.com',
  adress: {
    ip: '121.0.0.1',
  },
};

const { email, ip = this.adress.ip } = user2;
console.log(email, ip);
