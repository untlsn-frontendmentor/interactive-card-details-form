// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import '$css';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Solid Start</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="font-sans text-text-primary">
        <Suspense>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
