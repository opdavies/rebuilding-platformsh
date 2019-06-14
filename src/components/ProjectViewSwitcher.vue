<template>
  <div>
    <button
      type="button"
      class="p-2 text-gray-700 hover:bg-white hover:rounded hover:shadow"
      :class="{ 'bg-white rounded shadow text-blue-400': mode == 'grid'}"
      @click="$emit('changed', 'grid')"
    >
      <span class="visuallyhidden">View projects in a grid</span>
      <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath id="a"><path d="M12.2 5v4.8H17V5zm0 12H17v-4.8h-4.8zM5 5h4.8v4.8H5zm0 12v-4.8h4.8V17z" fill="none" clip-rule="evenodd"/></clipPath><clipPath id="b"><path fill="none" d="M0 0h22v22H0z"/></clipPath><clipPath id="c"><path fill="none" d="M5 5h12v12H5z"/></clipPath></defs><g clip-path="url(&quot;#a&quot;)"><g clip-path="url(&quot;#b&quot;)" style="clip-path:url(&quot;#icon-grid-b&quot;)"><g clip-path="url(&quot;#c&quot;)"><path d="M0 0h22v22H0z"/></g></g></g></svg>
    </button>

    <button
      type="button"
      class="ml-2 p-2 text-gray-700 hover:bg-white hover:rounded hover:shadow"
      :class="{ 'bg-white rounded shadow text-blue-400': mode == 'list'}"
      @click="$emit('changed', 'list')"
    >
      <span class="visuallyhidden">View projects in a list</span>
      <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22"><defs><clipPath id="link-icon-a"><path d="M5,5V7H19V5Zm14,7V10H5v2ZM5,17H19V15H5Z" style="fill: none; clip-rule: evenodd;"></path></clipPath><clipPath id="link-icon-b"><rect width="24" height="22" style="fill: none;"></rect></clipPath><clipPath id="link-icon-c"><rect x="5" y="5" width="14" height="12" style="fill: none;"></rect></clipPath></defs><title>Asset 1</title><g style="clip-path: url(&quot;#link-icon-a&quot;);"><g style="clip-path: url(&quot;#link-icon-b&quot;);"><g style="clip-path: url(&quot;#link-icon-c&quot;);"><rect width="24" height="22"></rect></g></g></g></svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: true
    }
  }
}
</script>
