import { Partial } from "$fresh/runtime.ts";
import { defineRoute, Handlers } from "$fresh/server.ts";
import { Logger } from "../../islands/Logger.tsx";

export const handler: Handlers = {
  POST(req, ctx) {
    return ctx.render();
  },
};

export default defineRoute(async (req, ctx) => {
  let value = "";

  if (req.body !== null) {
    const data = await req.formData();
    value += data.has("name") ? data.get("name") + "_foo" : "";
  }

  return (
    <div>
      <form action="/form_post" method="post">
        <Partial name="slot-1">
          <p class="status">Default content</p>
          <p>
            <input type="text" value={value} name="name" />
          </p>
          <Logger name="Form" />
          <p class="url">{ctx.url.toString()}</p>
        </Partial>
        <button type="submit" class="submit">
          submit
        </button>
      </form>
      <pre id="logs" />
    </div>
  );
});
