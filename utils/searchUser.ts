/* 
  utils/searchUser.ts
  Functions to handle the user data fetch from github api call
*/

interface SearchUserOptions {
  onSearchComplete?: () => void;
  onError?: (error: Error) => void;
}

export async function searchUser(username: Ref<string>, options?: SearchUserOptions): Promise<void> {
  const userDataStore = useUserDataStore()

  const cleanUsername = (username: string): string => {
    // Check if the input is empty, if so return it as is
    if (!username.trim()) {
      return username
    }

    // Remove '@' symbol if present
    const cleanedUsername = username.replace(/^@/, '')

    // GitHub usernames cannot have more than 39 characters
    const isValidLength = cleanedUsername.length <= 39

    // Allow alphanumeric characters and symbols like "-"
    const isValidFormat = /^[a-zA-Z0-9-]+$/.test(cleanedUsername)

    if (!isValidLength || !isValidFormat) {
      if (!isValidLength) {
        throw new Error('GitHub usernames cannot exceed 39 characters.')
      } else {
        throw new Error('GitHub usernames can only contain alphanumeric characters and dashes.')
      }
    }

    return cleanedUsername
  }

  try {
    const cleanedUsername = cleanUsername(username.value)

    if (cleanedUsername.trim() !== '') {
      const response = await fetch(`/api/github/users/${cleanedUsername}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`The user @${cleanedUsername} does not exist.`)
        } else {
          throw new Error('Failed to fetch user data.')
        }
      }

      const fetchedUserData = await response.json()

      // Save the fetched data in the UserDataStore
      userDataStore.setUserData(fetchedUserData)

      // Trigger the onSearchComplete callback if provided
      if (options?.onSearchComplete) {
        options.onSearchComplete()
      }
    }
  } catch (error) {
    // Trigger the onError callback if provided
    if (options?.onError) {
      options.onError((error as Error))
    }
  }
}
