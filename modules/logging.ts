import { RequestContext } from "@zuplo/runtime";

export default async function (context: RequestContext) {
  context.logger.trace("trace message");
  context.logger.error("error message");
  context.logger.info("hi Nate");
  return null;
}
