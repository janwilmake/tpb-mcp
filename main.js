import { withMcp } from "with-mcp";
import openapi from "./openapi.json";
export default {
  fetch: withMcp(async (request) => {
    const url = new URL(request.url);
    const response = await fetch(
      `https://apibay.org${url.pathname}${url.search}`
    );
    return response;
  }, openapi),
};
