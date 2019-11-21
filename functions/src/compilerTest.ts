import * as functions from 'firebase-functions';

export const tsCompile = functions.https.onRequest(
  async (req: any, res: any) => {
    const exec = require('child_process').exec;
    const command = 'npx tsc sample.ts';
    exec(command, (result: any) => {
      console.log(result);
    });
    res.send(200, 'done');
  }
);
