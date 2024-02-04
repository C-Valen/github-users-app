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
    prevRepoPage: [],
    nextRepoPage: [],
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
        const repositories = await searchRepos(this.login, this.repoPage, this.perPage * 2);
        const mappedRepositories = this.mapRepositories(repositories);
        this.repositories = mappedRepositories.slice(0, this.perPage);
        appStateStore.loadingRepos = false;
        this.nextRepoPage = mappedRepositories.slice(-this.perPage);
        console.log(this.nextRepoPage);
      } catch (error) {
        console.error(error.message);
      }
    },
    async loadNextRepositories() {
      try {
        this.prevRepoPage = this.repositories;
        this.repositories = this.nextRepoPage;
        const newRepositories = await searchRepos(this.login, this.repoPage + 1, this.perPage);
        this.nextRepoPage = this.mapRepositories(newRepositories);
      } catch (error) {
        console.error(error.message);
      }
    },
    async loadPrevRepositories() {
      try {
        this.nextRepoPage = this.repositories;
        this.repositories = this.prevRepoPage;
        const newRepositories = await searchRepos(this.login, this.repoPage-1, this.perPage);
        this.prevRepoPage = this.mapRepositories(newRepositories);
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
        const appStateStore = useAppStateStore();
        appStateStore.bufferingRepos = true;
        this.repoPage -= 1;
        this.loadPrevRepositories();
        appStateStore.bufferingRepos = false;
      }
    },
    loadNextPage() {
      if (this.repoPage < this.calculateTotalPages()) {
        const appStateStore = useAppStateStore();
        appStateStore.bufferingRepos = true;
        this.repoPage += 1;
        this.loadNextRepositories();
        appStateStore.bufferingRepos = false;
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
