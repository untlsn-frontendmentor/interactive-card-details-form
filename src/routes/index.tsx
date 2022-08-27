import Counter from '~/components/containers/Counter';

export default function Page() {
  return (
    <main class="min-h-screen justify-center items-center flex-(~ col) gap-8">
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Simple solid starter build on top of solid-start inspired by vitesse
      </p>
    </main>
  );
}
