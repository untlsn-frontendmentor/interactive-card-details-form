import { setCardStore, cardStore } from '~/store/CardStore';

function CartForm() {
  return (
    <div class="grid-(~ cols-2) gap-8 w-100">
      <div class="col-span-2">
        <p class="default-label">cardholder name</p>
        <input
          class="default-input w-full"
          placeholder="e.g. Jane Appleseed"
          onInput={(ev) => {
            setCardStore('name', ev.currentTarget.value);
          }}
          value={cardStore.name}
        />
      </div>
      <div class="col-span-2">
        <p class="default-label">card number</p>
        <input
          class="default-input w-full"
          placeholder="e.g. 1234 5678 9123 0000"
          onInput={(ev) => {
            ev.preventDefault();
            const slimValue = ev.currentTarget.value.replaceAll(' ', '');
            const slice = slimValue.slice(0, 16);
            setCardStore('number', slice);

            ev.currentTarget.value = (slice.match(/.{1,4}/g) || []).join(' ');
          }}
        />
      </div>
      <div>
        <p class="default-label">exp. date (mm/yy)</p>
        <div class="flex gap-2">
          <input
            class="default-input w-1/2"
            placeholder="MM"
            onInput={(ev) => {
              const value = ev.currentTarget.value.slice(0, 2);
              setCardStore('month', value);
              ev.currentTarget.value = value;
            }}
          />
          <input
            class="default-input w-1/2"
            placeholder="YY"
            onInput={(ev) => {
              const value = ev.currentTarget.value.slice(0, 2);
              setCardStore('year', value);
              ev.currentTarget.value = value;
            }}
          />
        </div>
      </div>
      <div>
        <p class="default-label">cvc</p>
        <input
          class="default-input w-full"
          placeholder="e.g. 123"
          onInput={(ev) => {
            setCardStore('cvc', ev.currentTarget.value);
          }}
          value={cardStore.cvc}
        />
      </div>
      <button type="button" class="bg-text-primary text-(white lg) rounded-lg py-4 w-full col-span-2">
        Confirm
      </button>
    </div>
  );
}

export default CartForm;
