import Image from "next/image";
import CreateWorkshopModal from "../CreateWorkshopModal";
import UpdateProfileModal from "../UpdateProfileModal";

export default function Profile({profile}) {

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-2xl lg:py-4">
        <div class="p-3">
          <div class="flex">
            <div class="mr-3 shrink-0">
              <a
                href="#"
                class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700"
              >
                <Image
                  width={600}
                  height={600}
                  class="w-8 h-8 rounded-full"
                  src={profile.logo}
                  alt="Flowbite logo"
                  />
              </a>
            </div>
            <div>
              <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                  {profile.name}
              </p>
              <p class="mb-3 text-sm font-normal">{profile.phone}</p>
              <p class="mb-4 text-sm font-light">
                {profile.description}
              </p>
              <div class="flex">
                <button
                  type="button"
                  class="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  data-modal-toggle="updateProfileModal"
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
                <UpdateProfileModal profile={profile}/>
                <button
                  type="button"
                  class="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  data-modal-toggle="createWorkshopModal"
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Create workshop
                </button>
                <CreateWorkshopModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
