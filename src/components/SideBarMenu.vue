<template>
  <nav class="bg-primary max-w-full h-screen lg:h-screen lg:w-70">
    <div class="py-5 lg:px-6 lg:pt-4 lg:mb-8 lg:flex lg:justify-between">
      <img height="76" width="76" src="@/assets/images/e-logo.png" alt="" />
      <img
        height="20"
        width="20"
        class="hidden lg:flex"
        src="@/assets/images/logout.png"
        alt=""
      />
    </div>
    <div class="px-6 flex items-center mb-6">
      <img height="40" width="55" src="@/assets/images/avatar.png" alt="" />
      <h2 class="py-4 px-3 font-semibold text-white text-sm">AlvinVergara</h2>
    </div>
    <div
      class="mb-6 px-6 bg-secondary mx-6 h-14 rounded-md text-white hoverText"
    ></div>
    <div>
      <ul>
        <li
          v-for="(items, index) in navMenu"
          :key="index"
          class="hoverText px-6 leading-9 text-white text-xl py-1"
        >
          {{ items.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    navMenu: [
      {
        name: "Home",
      },
      {
        name: "Watchlist",
      },
      {
        name: "Portfolio",
      },
      {
        name: "Discover",
      },
    ],
  }),
};
</script>
