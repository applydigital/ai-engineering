import { exec } from 'child_process';

const message = "Claude task complete";

exec(`say "${message}"`, (error) => {
  if (error) {
    console.error("error executing Claude stop hook: notify finished");
  }
});