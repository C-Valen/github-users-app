/* 
  utils/searchRepos.ts
  Function to handle the repository fetch from github api call
*/

import type { Repository } from '~/interfaces/repository.interface'

export async function searchRepos(userId: string, page: number, perPage: number): Promise<Repository[]> {
  try {
    const response = await fetch(`/api/github/repos/${userId}?page=${page}&per_page=${perPage}`)
    if (!response.ok) {
      throw new Error('Failed to fetch user repositories.')
    }

    return response.json()
  } catch (error) {
    throw new Error('Failed to fetch user repositories.')
  }
}