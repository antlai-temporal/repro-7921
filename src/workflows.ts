import * as workflow from '@temporalio/workflow';

// Only import the activity types
import type * as activities from './activities';

import { childExample } from './workflows-child';

const { greet } = workflow.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(): Promise<any> {
  for (const i of [...Array(22).keys()]) {
    await greet(`hello ${i}`)
  }
  await workflow.startChild(childExample, {
    workflowId: `${workflow.workflowInfo().workflowId}-export-to-bq`,
    args: [],
    parentClosePolicy: workflow.ParentClosePolicy.PARENT_CLOSE_POLICY_ABANDON,
    taskQueue: 'child-hello-world',
  });                   
}
