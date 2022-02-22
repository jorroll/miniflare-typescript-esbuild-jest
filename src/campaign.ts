export class Campaign implements DurableObject {
  constructor(readonly state: DurableObjectState, readonly env: Bindings) {
  }

  async fetch(request: Request) {
    return new Response('Not Found', { status: 404 });
  }
}
