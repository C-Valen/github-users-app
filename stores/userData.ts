/* 
  stores/userData.ts
  Manages user data, including details and repositories.
*/

import type { Repository } from "~/interfaces/repository.interface";
import type { User } from "~/interfaces/user.interface";

export const useUserDataStore = defineStore({
  id: "userData",
  state: (): User => ({
    login: "",
    name: "",
    bio: "",
    avatar_url: "",
    followers: 0,
    publicRepos: 0,
    repositories: [],
    repoPage: 1,
    perPage: 5,
  }),
  actions: {
    setUserData(userData: Object) {
      // Mapping only required user data properties
      this.login = userData.login;
      this.name = userData.name;
      this.bio = userData.bio;
      this.avatar_url = userData.avatar_url;
      this.followers = userData.followers;
      this.publicRepos = userData.public_repos;
    },
    async loadRepositories() {
      try {
        const appStateStore = useAppStateStore();
        appStateStore.loadingRepos = true;
        const repositories = await searchRepos(this.login, this.repoPage, this.perPage);
        this.repositories = this.mapRepositories(repositories);
        appStateStore.loadingRepos = false;
      } catch (error) {
        console.error(error.message);
      }
    },
    mapRepositories(repositories: Repository[]): Repository[] {
      return repositories.map(({ name, forks, stargazers_count }) => ({
        name,
        forks,
        stars: stargazers_count,
      }));
    },
    calculateTotalPages() {
      return Math.ceil(this.publicRepos / this.perPage);
    },
    loadPreviousPage() {
      if (this.repoPage > 1) {
        this.repoPage -= 1;
        this.loadRepositories();
      }
    },
    loadNextPage() {
      if (this.repoPage < this.calculateTotalPages()) {
        this.repoPage += 1;
        this.loadRepositories();
      }
    },
    resetState() {
      this.login = "";
      this.name = "";
      this.bio = "";
      this.avatar_url = "";
      this.followers = 0;
      this.repositories = [];
      this.repoPage = 1; // Reset the page to the initial state
    },
  },
});
