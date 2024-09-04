import * as workflow from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities-child';

const { exportExecution } = workflow.proxyLocalActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function childExample(): Promise<any> {
  return await exportExecution();
}

