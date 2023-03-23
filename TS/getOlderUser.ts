type User1 = {
  name: string;
  age: number;
};

function getOlderUser(user1: User1, user2: User1): User1 | null {
  if (user1.age === user2.age) return null;
  return user1.age > user2.age ? user1 : user2;
}
