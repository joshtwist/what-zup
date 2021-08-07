import { RequestContext } from "@zuplo/runtime";

export default async function (context: RequestContext) {
  const data = {
    method: context.method,
    body: context.body,
    searchParams: context.searchParams,
    params: context.params,
    url: context.url.toString(),
    path: context.path,
    headers: context.headers.asFlatDictionary(),
    requestId: context.requestId,
  };

  return data;
}
