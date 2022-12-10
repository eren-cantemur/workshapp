import Image from "next/image";

export default function UserRow() {
  return (
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
          <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
        </div>
      </th>
      <td class="py-4 px-6">
        <div class="flex items-center">
            +90(555)-555-5555
        </div>
      </td>
      <td class="py-4 px-6">
        <div class="flex items-center">
          <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Approved
        </div>
      </td>
      <td class="py-4 px-6">
        <a
          href="#"
          type="button"
          data-modal-toggle="editUserModal"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit user
        </a>
      </td>
    </tr>
  );
}
