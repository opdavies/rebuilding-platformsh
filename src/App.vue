<template>
  <div id="app">
    <header class="bg-gray-900 text-white pt-4 pb-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center -mx-4">
          <div class="w-1/2 px-4">
            <router-link :to="{ name: 'home' }">
              <svg alt="icon" class="w-6 h-6" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><polygon id="path-1" points="0 0 27.6677333 0 27.6677333 11.0021333 0 11.0021333"></polygon><polygon id="path-3" points="0 0.0373333333 27.6677333 0.0373333333 27.6677333 3.7744 0 3.7744"></polygon><polygon id="path-5" points="0 0.365866667 27.6677333 0.365866667 27.6677333 6.01066667 0 6.01066667"></polygon></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-61.000000, -43.000000)"><g transform="translate(61.000000, 43.000000)"><g><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><g></g><polygon fill="#ffffff" mask="url(#mask-2)" points="-1.86666667 12.8688 29.5344 12.8688 29.5344 -1.86666667 -1.86666667 -1.86666667"></polygon></g><g transform="translate(0.000000, 23.893333)"><mask id="mask-4" fill="white"><use xlink:href="#path-3"></use></mask><polygon fill="#ffffff" mask="url(#mask-4)" points="-1.86666667 5.64106667 29.5344 5.64106667 29.5344 -1.82933333 -1.86666667 -1.82933333"></polygon></g><g transform="translate(0.000000, 14.186667)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"></use></mask><polygon fill="#ffffff" mask="url(#mask-6)" points="-1.86666667 7.87733333 29.5344 7.87733333 29.5344 -1.5008 -1.86666667 -1.5008"></polygon></g></g></g></g></svg>
            </router-link>
          </div>

          <div class="w-1/2 px-4">
            <div class="flex justify-end">
              <button type="button" class="font-semibold hover:bg-gray-700 py-1 px-2 rounded inline-flex">
                Oliver Davies
                <svg class="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.90002 9.8999C6.90002 9.5999 7.00002 9.3999 7.20002 9.1999C7.60002 8.7999 8.20002 8.7999 8.60002 9.1999L12.1 12.6999L15.6 9.1999C16 8.7999 16.6 8.7999 17 9.1999C17.4 9.5999 17.4 10.1999 17 10.5999L12.8 14.7999C12.4 15.1999 11.8 15.1999 11.4 14.7999L7.20002 10.5999C7.00002 10.3999 6.90002 10.1999 6.90002 9.8999Z" fill="#ffffff"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-4 bg-charade py-3 px-5 -mt-8 mb-4 shadow-lg">
      <div class="flex justify-between items-center -mx-4">
        <div class="px-4 flex-1">
          <form action="" class="search-form flex flex-row-reverse items-center">
            <input class="w-full text-sm bg-inherit text-white focus:outline-none" type="text" placeholder="Search projects">
            <svg class="fill-current text-white h-4 w-4 mr-3 opacity-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><mask id="project-search-input-mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8 10.3L15.7 14.2C16 14.6 16 15.2 15.6 15.6C15.2 16 14.6 16 14.2 15.6L10.3 11.7C9.3 12.5 7.9 13 6.5 13C2.9 13 0 10.1 0 6.50005C0 2.90005 2.9 4.57764e-05 6.5 4.57764e-05C10.1 4.57764e-05 13 2.90005 13.1 6.50005C13.1 7.90005 12.6 9.20005 11.8 10.3ZM2 6.50005C2 9.00005 4 11 6.5 11C9 11 11 9.00005 11 6.50005C11 4.00005 9 2.00005 6.5 2.00005C4 2.00005 2 4.00005 2 6.50005Z" fill="#32324c"></path></mask><g mask="url(#project-search-input-mask0)"><rect x="-4" y="-3.99995" width="24" height="24"></rect></g></svg>
          </form>
        </div>

        <div class="px-4">
          <a href="#0" class="text-white bg-blue-700 hocus:bg-blue-800 px-4 py-2 rounded text-sm inline-flex flex-row-reverse items-center">
            Add project
            <svg class="h-3 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M6 6v4H4V6H0V4h4V0h2v4h4v2z" fill="#fff" fill-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<style src="./css/app.css"></style>
