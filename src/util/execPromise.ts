export function execPromise(
  cmd: string
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const cp = require("child_process");
    cp.exec(cmd, (err: string, stdout: string, stderr: string) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
