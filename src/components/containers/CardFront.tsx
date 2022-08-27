import { cardStore } from '~/store/CardStore';

function CardFront() {
  const number = createMemo(() => {
    const fullLength = 16;
    const curLength = cardStore.number.length;
    const slimNumber = fullLength <= curLength
      ? cardStore.number.slice(0, fullLength)
      : `${cardStore.number}${'0'.repeat(fullLength - curLength)}`;

    return slimNumber.match(/.{1,4}/g).join(' ');
  });

  return (
    <div
      style={{ 'background-image': 'url(/images/bg-card-front.png)' }}
      class="w-100 h-50 p-5 bg-cover rounded-lg text-white"
    >
      <img src="/images/card-logo.svg" alt="card logo" />
      <p>
        {number}
      </p>
    </div>
  );
}

export default CardFront;
