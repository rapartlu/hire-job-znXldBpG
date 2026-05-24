// Cloudflare Worker that serves the flight sim HTML page.
import html from './index.html';

export default {
  async fetch() {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    });
  },
};
