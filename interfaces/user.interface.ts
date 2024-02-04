/**
 * Represents the structure of a repository object.
 * login - User's login (unique)
 * name - User's real name (optional)
 * bio - User's biography (optional)
 * avatar_url - User's avatar url
 * followers - User's number of followers
 * publicRepos - User's number of public repositories
 * repositories - Array of user's public repositories in current page
 * reposBuffer - Buffer of user's public repositories
 * repoPage - Current repository page
 * perPage - Number of repositories per page
 */

import type { Repository } from "~/interfaces/repository.interface";

export interface User {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  publicRepos: number;
  repositories: Repository[];
  repoPage: number;
  perPage: number;
}
