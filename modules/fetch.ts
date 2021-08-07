import { easyFetch, HttpResponse, RequestContext } from "@zuplo/runtime";

export async function fetchHtml(context: RequestContext) {
  const fetchResult = await easyFetch("https://www.example.com/");
  const response = new HttpResponse(fetchResult.status, fetchResult.statusText);
  const contentType = fetchResult.headers.get("content-type");
  if (contentType) {
    response.headers.set("content-type", contentType);
  }
  response.body = fetchResult.body;
  return response;
}

export async function fetchPostJson(context: RequestContext) {
  const fetchResult = await easyFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const response = new HttpResponse(fetchResult.status, fetchResult.statusText);
  response.body = fetchResult.body;
  return response;
}
