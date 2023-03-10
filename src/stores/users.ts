import { defineStore } from 'pinia';
import User from 'src/interfaces/user.interface';

export const useUsersStore = defineStore('user', {
  state: () => {
    const users: User[] = [];
    return { users };
  },

  getters: {},

  actions: {
    addUsers(newUsers: User[]) {
      this.users.push(...newUsers);
    },
    editUser(userData: User) {
      const targetIndex = this.users.findIndex(
        (user) => user.id === userData.id
      );
      if (targetIndex >= 0) this.users[targetIndex] = userData;
    },
    deleteUser(userId: number) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
});
