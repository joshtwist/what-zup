import { RequestContext, OKResponse } from "@zuplo/runtime";

export async function voidFunction(context: RequestContext) {
  return;
}

export async function whatZup(context: RequestContext) {
  // The simplest possible zup
  return "What zup?";
}

export async function whatZupJson(context: RequestContext) {
  return { What: "zup?" };
}

export async function whatZupEncoded(context: RequestContext) {
  const response = new OKResponse();
  response.headers.set("content-type", "application/x-www-form-urlencoded");
  response.body = { What: "zup?" };
  return response;
}
