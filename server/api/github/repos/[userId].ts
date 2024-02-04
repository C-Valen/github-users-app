/* 
  api/gihub/repos/[userId]
  GET public repositories for the specified user.
*/

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const userId = getRouterParam(event, "userId");
  const page = getQuery(event).page || 1;
  const perPage = getQuery(event).per_page || 10;

  // Github get repos api call
  const userData = await $fetch(`https://api.github.com/users/${userId}/repos?page=${page}&per_page=${perPage}`, {
    params: {
      per_page: perPage,
      page: page,
    },
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
      'User-Agent': 'github-users-app',
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return userData;
});
