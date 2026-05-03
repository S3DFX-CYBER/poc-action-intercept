const core = require('@actions/core');

// Capture token from env (this is how changesets/action gets it)
const token = process.env.GITHUB_TOKEN;

console.log("=== PoC: GITHUB_TOKEN Exposure ===");

if (token) {
  console.log(`Token length: ${token.length}`);
  console.log(`Starts with: ${token.slice(0, 10)}...`);
} else {
  console.log("No token found");
}

console.log("This proves action code can access GITHUB_TOKEN");

core.setOutput('done', 'true');
