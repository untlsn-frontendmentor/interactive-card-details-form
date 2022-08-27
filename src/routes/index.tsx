import CartForm from '~/components/views/CartForm';
import CardFront from '~/components/containers/CardFront';

export default function Page() {
  return (
    <main class="min-h-screen justify-center items-center flex-(~ col) gap-8">
      <CardFront />
      <CartForm />
    </main>
  );
}
