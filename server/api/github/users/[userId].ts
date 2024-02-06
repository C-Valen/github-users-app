/* 
  api/gihub/users/[userId]
  GET publicly available information about someone with a GitHub account.
*/

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const userId = getRouterParam(event, 'userId')

  // Github get userId api call
  const userData = await $fetch('https://api.github.com/users/' + userId, {
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
      'User-Agent': 'github-users-app',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  return userData
})
