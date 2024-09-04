
export async function exportExecution(): Promise<any> {
  const sleepDuration = 2000;
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  await sleep(sleepDuration);
}

