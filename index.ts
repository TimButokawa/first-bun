const port = 3000;

const server = Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/') {
      return new Response('Bun server home!');
    }

    // lil err
    if (url.pathname === '/lil-error') {
      throw new Error('There was an error!');
    }
    // lil text read
    if (url.pathname === '/read-text') {
      return new Response(Bun.file('./assets/example.txt'));
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
