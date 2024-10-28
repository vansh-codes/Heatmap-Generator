import axios from 'axios';

const fetchGitHubCommits = async (u, repo) => {
  const { GITHUB_TOKEN } = process.env;
  console.log("params: ",u, repo);
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${u}/${repo}/commits`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return [];
  }
};

export const getHeatmapData = async (u, repo) => {
  console.log("\n\n\n\nparams11: ",u, repo);

  const commits = await fetchGitHubCommits(u, repo);
  const data = {};
  
  commits.forEach((commit) => {
    const date = commit.commit.author.date.slice(0, 10);
    if (!data[date]) data[date] = [];
    data[date].push({ message: commit.commit.message, url: commit.commit.url });
  });
  
  // console.log("Data:", data);
  return data;
};
