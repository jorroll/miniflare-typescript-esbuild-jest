export async function handleRequest(request: Request, env: Bindings) {
  return new Response("ok");
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

// Make sure we export the Counter Durable Object class
export { Campaign } from "./campaign";
export default worker;
