import UpdateWorkshopModal from "../UpdateWorkshopModal";

export default function WorkshopDetail() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-2xl lg:py-4">
        <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          Apple iMac 25"
        </h2>
        <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
          $2999
        </p>
        <dl>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
        </dl>
        <dl class="flex items-center space-x-6">
          <div>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Category
            </dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              Electronics/PC
            </dd>
          </div>
        </dl>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            class="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            data-modal-toggle="updateWorkshopModal"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            Edit
          </button>
          <UpdateWorkshopModal />
        </div>
      </div>
    </section>
  );
}
