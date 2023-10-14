const port = 3000;

const server = Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/') {
      return new Response('Bun server home!');
    }

    // lil err
    if (url.pathname === '/about') {
      throw new Error('There was an error!');
    }

    return new Response('Not Found!');
  },
  // handle lil err
  error(err) {
    return new Response(
      `<pre>${err.message}</pre><br/><pre>${err.stack}</pre>`, {
        headers: {
          'Content-Type': 'text/html',
        },
      },
    );
  }
});

console.log(`listening on localhost:${server.port}`);
