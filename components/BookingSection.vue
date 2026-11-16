<template>
  <section id="booking" class="section booking">
    <div class="container booking-card reveal">
      <div class="head">
        <p class="eyebrow">Reservations</p>
        <h2 class="serif title">Plan your stay</h2>
        <span class="title-line" />
        <p class="intro">Check availability and discover exclusive offers for your escape to Ubud.</p>
      </div>
      <form class="form" @submit.prevent="onSubmit">
        <div class="field">
          <label for="checkin">Check-in</label>
          <input id="checkin" v-model="checkin" type="date" required />
        </div>
        <div class="field">
          <label for="checkout">Check-out</label>
          <input id="checkout" v-model="checkout" type="date" required />
        </div>
        <div class="field">
          <label for="adults">Adults</label>
          <div class="counter">
            <button type="button" @click="adults = Math.max(1, adults - 1)">−</button>
            <span>{{ adults }}</span>
            <button type="button" @click="adults++">+</button>
          </div>
        </div>
        <div class="field">
          <label for="children">Children</label>
          <div class="counter">
            <button type="button" @click="children = Math.max(0, children - 1)">−</button>
            <span>{{ children }}</span>
            <button type="button" @click="children++">+</button>
          </div>
        </div>
        <button type="submit" class="btn btn-brand submit">Check availability</button>
      </form>
      <p v-if="submitted" class="thanks">Thank you — we'll be in touch shortly to confirm your reservation.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const today = new Date();
const fmt = (d: Date) => d.toISOString().slice(0, 10);
const checkin = ref(fmt(today));
const checkout = ref(fmt(new Date(today.getTime() + 3 * 86400000)));
const adults = ref(2);
const children = ref(0);
const submitted = ref(false);

function onSubmit() {
  submitted.value = true;
}
</script>

<style scoped>
.booking {
  background: var(--surface);
}
.booking-card {
  max-width: 56rem;
  margin: 0 auto;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  text-align: center;
}
@media (min-width: 768px) { .booking-card { padding: 3.5rem; } }
.head .title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin: .5rem 0 0;
}
.title-line { margin: 1rem auto; }
.intro {
  color: var(--text-muted);
  max-width: 32rem;
  margin: 0 auto 2rem;
}
.form {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
  text-align: left;
}
@media (min-width: 640px) { .form { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .form { grid-template-columns: repeat(4, 1fr); } }
.field label {
  display: block;
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: .4rem;
}
.field input {
  width: 100%;
  padding: .65rem .8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  font-size: .95rem;
}
.field input:focus { outline: 2px solid var(--brand); outline-offset: 1px; }
.counter {
  display: flex;
  align-items: center;
  gap: .5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: .3rem .6rem;
}
.counter button {
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  background: var(--surface-2);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.1rem;
}
.counter span { min-width: 1.5rem; text-align: center; }
.submit {
  grid-column: 1 / -1;
  align-self: end;
}
.thanks {
  margin-top: 1.5rem;
  color: var(--success);
  font-weight: 550;
}
</style>