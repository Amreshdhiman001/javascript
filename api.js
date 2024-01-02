const username= = 'aryaparasharmrt';
const token = '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';

// Function to get user information
async function grtUserInfo() {
  const url = `https://api.github.com/users/${username}`;
  const headers = new Headers({
    Authorization: `token ${token}`,
  });

  try {
    const response = await fetch(url, { headers });
    const userData = await response.json();

    console.log('User Information:');
    console.log(`Username: ${userData.login}`);
    console.log(`Name: ${userData.name}`);
    console.log(`Bio: ${userData.bio}`);
    console.log(`Public Repositories: ${userData.public_repos}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Function to get user repositories
async function getUserRepositories() {
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = new Headers({
    Authorization: `token ${token}`,
  });

  try {
    const response = await fetch(url, { headers });
    const reposData = await response.json();

    console.log('\nUser Repositories:');
    reposData.forEach((repo) => {
      console.log(`Name: ${repo.name}`);
      console.log(`description: ${repo.description}`);
      console.log(`Language: ${repo.language}`);
      console.log(`URL: ${repo.html_url\n}`);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Main function
async function main() {
  await getUserInfo();
  await getUserRepositories();
}

// Run the main function
main();

































      
