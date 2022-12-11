import Image from "next/image";

export default function WorkshopsTable() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-2xl lg:py-8">
        <div class="relative shadow-md sm:rounded-lg">
          <div class="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
            <div>
              <div
                id="dropdownAction"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reward
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Promote
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Activate account
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete Workshop
                  </a>
                </div>
              </div>
            </div>
            <label for="table-search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-workshops"
                class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for workshops"
              />
            </div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Position
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    width={600}
                    height={600}
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Neil Sims</div>
                    <div class="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">React Developer</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    type="button"
                    data-modal-toggle="editWorkshopModal"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit workshop
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    width={600}
                    height={600}
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Bonnie Green</div>
                    <div class="font-normal text-gray-500">
                      bonnie@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">Designer</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    type="button"
                    data-modal-toggle="editWorkshopModal"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit workshop
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    width={600}
                    height={600}
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Jese Leos</div>
                    <div class="font-normal text-gray-500">
                      jese@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">Vue JS Developer</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    type="button"
                    data-modal-toggle="editWorkshopModal"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit workshop
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    width={600}
                    height={600}
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Thomas Lean</div>
                    <div class="font-normal text-gray-500">
                      thomes@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">UI/UX Engineer</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    type="button"
                    data-modal-toggle="editWorkshopModal"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit workshop
                  </a>
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    width={600}
                    height={600}
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">Leslie Livingston</div>
                    <div class="font-normal text-gray-500">
                      leslie@flowbite.com
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">SEO Specialist</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                    Offline
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    type="button"
                    data-modal-toggle="editWorkshopModal"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit workshop
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            id="editWorkshopModal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
          >
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Workshop
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="editWorkshopModal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <form action="#">
                  <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value="iPad Air Gen 5th Wi-Fi"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Apple iMac 27&ldquo;"
                      />
                    </div>
                    <div>
                      <label
                        for="brand"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        value="Google"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Apple"
                      />
                    </div>
                    <div>
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        value="399"
                        name="price"
                        id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$299"
                      />
                    </div>
                    <div>
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Electronics</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="5"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write a description..."
                      >
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US
                      </textarea>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <button
                      type="submit"
                      class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Update Workshop
                    </button>
                    <button
                      type="button"
                      class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      <svg
                        class="mr-1 -ml-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}