import { Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit
        {' '}
        <a href="https://docs.solidjs.com/start" target="_blank" rel="noreferrer">
          docs.solidjs.com/start
        </a>
        {' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
