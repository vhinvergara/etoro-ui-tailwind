<template>
  <nav class="bg-primary max-w-full h-screen lg:h-screen lg:w-70">
    <div class="pb-2 lg:px-6 lg:pt-4 lg:mb-5 lg:flex lg:justify-between">
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
      <h2 class="py-4 px-3 font-semibold text-white text-sm">vhinnn</h2>
    </div>
    <div
      class="mb-4 bg-secondary mx-6 h-14 rounded-md text-white hoverText"
    ></div>
    <div class="mb-6">
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
    <div class="px-6 text-sm text-white mb-5">More</div>
    <div class="mb-3">
      <ul>
        <li
          v-for="(items, index) in subNavMenu"
          :key="index"
          class="hoverText px-6 leading-3 text-white text-sm py-1 flex items-center"
        >
          <img height="25" width="25" :src="items.icon" alt="" />

          <div class="py-1 px-3 font-semibold text-white text-sm">
            {{ items.name }}
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button
        class="w-full h-12 mx-6 px-10 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Large block button
      </button>
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
    subNavMenu: [
      {
        name: "Invite Friends",
        icon: require("@/assets/images/announcement.png"),
      },
      {
        name: "Withdraw Funds",
        icon: require("@/assets/images/announcement.png"),
      },
      {
        name: "Settings",
        icon: require("@/assets/images/announcement.png"),
      },
    ],
  }),
};
</script>
