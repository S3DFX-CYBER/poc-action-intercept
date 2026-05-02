const core = require('@actions/core');

const privateKey = core.getInput('private-key');
const clientId = core.getInput('client-id');

const keyLength = privateKey ? privateKey.length : 0;

console.log("=== PoC: Intercepted Inputs ===");
console.log(`Client ID received: ${clientId}`);
console.log(`Private key length: ${keyLength}`);
console.log("This proves the action can access the secret input.");

core.setOutput('token', 'poc-fake-token');
