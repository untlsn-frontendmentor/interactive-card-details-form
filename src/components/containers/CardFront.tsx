import { cardStore } from '~/store/CardStore';

const force0 = (str: string) => (str.length < 2 ? `0${str}` : str);

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
      class="w-100 h-50 p-5 bg-cover rounded-lg text-white flex-(~ col) justify-between uppercase"
    >
      <div>
        <img src="/images/card-logo.svg" alt="card logo" />
      </div>
      <div>
        <h1 class="text-3xl tracking-wide">{number}</h1>
        <div class="flex justify-between">
          <p>{cardStore.name || 'Jane Appleseed'}</p>
          <p>
            {force0(cardStore.month || '00')}
            /
            {force0(cardStore.year || '00')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
