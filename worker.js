// Cloudflare Worker that serves the flight sim HTML page.
import html from './index.html';

export default {
  async fetch() {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        // No caching: every request gets the latest deployed HTML.
        // Trade-off: extra origin hit per page load, but iteration latency
        // matters more than cache hits at this stage.
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  },
};
