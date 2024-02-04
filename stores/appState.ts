/* 
  stores/appState.ts
  Manages the application states and views to display.
*/

interface AppState {
  currentView: 'search' | 'userData';
  loadingView: boolean;
  loadingRepos: boolean;
  bufferingRepos: boolean;
}

export const useAppStateStore = defineStore({
  id: 'appState',
  state: (): AppState => ({
    currentView: 'search',
    loadingView: false,
    loadingRepos: false,
    bufferingRepos: false,
  }),
  actions: {
    showUserView() {
      this.currentView = 'userData';
    },
    showSearchBar() {
      this.currentView = 'search';
    },
    closeUserView() {
      const userDataStore = useUserDataStore();
      userDataStore.resetState();
      this.showSearchBar();
    },
  },
});