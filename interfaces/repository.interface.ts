/**
 * Represents the structure of a repository object.
 * name - Repository name
 * forks - Repository forks
 * stars - Repository stars
 */

export interface Repository {
  name: string;
  forks: number;
  stars: number;
}
