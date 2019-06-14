<template>
  <article class="w-full px-4 mb-8 sm:w-1/2 md:w-1/3">
    <router-link :to="{ name: 'project', params: { id: 1 }}" class="group block hover:no-underline">
      <span class="block bg-gray-100 shadow-lg rounded overflow-hidden">
        <span class="block p-6">
          <h2 class="font-bold text-gray-800 group-hover:underline">Drupal Bristol</h2>

          <p class="text-gray-600">accounts-partners</p>

          <img src="../assets/img/download.jpg" alt="" class="shadow-2xl rounded mt-4">
        </span>

        <span class="block py-5 px-8 -mt-24 relative bg-white">
          <p>Europe (West 1)</p>
        </span>
      </span>
    </router-link>
  </article>
</template>
