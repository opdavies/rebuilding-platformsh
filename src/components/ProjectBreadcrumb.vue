<template>
  <div class="flex-1 flex items-center text-xs">
    <ul class="flex spaced-x-1">
      <li class="flex items-center spaced-x-1">
        <router-link :to="{ name: 'projects' }" class="font-semibold text-white opacity-75">Projects</router-link>
        <svg class="h-6 w-6 fill-current text-white opacity-75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.9 9.9c0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0l3.5 3.5 3.5-3.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.2-.2-.3-.4-.3-.7z"/></svg>
      </li>
      <li class="flex items-center font-semibold">Rebuilding Platform.sh</li>
    </ul>
  </div>
</template>
