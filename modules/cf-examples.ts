import { HttpResponse, RequestContext, easyFetch } from "@zuplo/runtime";

export async function returnHtml(context: RequestContext) {
  const html = `<!DOCTYPE html>
    <body>
      <h1>What zup?</h1>
      <p>This markup was generated by a Zup running on the Zuplo platform</p>
    </body>`;

  const response = new HttpResponse(200, "OK");
  response.headers.set("Content-Type", "text/html");
  response.body = html;
  return response;
}

export async function fetchHtml(context: RequestContext) {
  const fetchResult = await easyFetch("http://example.com");
  const response = new HttpResponse(200, "OK");
  const contentType = fetchResult.headers.get("content-type");
  if (contentType) {
    response.headers.set("content-type", contentType);
  }
  response.body = fetchResult.body;
  return response;
}

export async function redirect(context: RequestContext) {
  const response = new HttpResponse(301, "Redirect");
  response.headers.set("Location", "https://example.com");
  return response;
}

export async function aggregateRequests(context: RequestContext) {
  const postsPromise = easyFetch("https://jsonplaceholder.typicode.com/posts");
  const usersPromise = easyFetch("https://jsonplaceholder.typicode.com/users");
  const [postsResponse, usersResponse] = await Promise.all([
    postsPromise,
    usersPromise,
  ]);

  const posts = postsResponse.body;
  const users = usersResponse.body;

  const merged = posts.map((p: any) => {
    const post = Object.assign({}, p);
    post.user = users.find((u: any) => u.id === p.userId);
    delete post.userId;
    return post;
  });

  const response = new HttpResponse(200, "OK");
  response.headers.set("content-type", "application/json");
  response.body = JSON.stringify(merged);
  return response;
}

export async function basicAuthentication(context: RequestContext) {
  throw new Error(`Not implemented.`);
}
