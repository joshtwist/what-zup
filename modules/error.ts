import { RequestContext } from "@zuplo/runtime";

export default async function throwError(context: RequestContext) {
  throw new Error(`This is a test error`);
}
