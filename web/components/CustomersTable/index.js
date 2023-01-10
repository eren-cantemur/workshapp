import CustomerRow from "../CustomerRow";
import CustomersTableHeader from "../CustomersTableHeader";
import EditCustomerModal from "../EditCustomerModal";

export default function CustomersTable() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Customers
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          You can do this and that in this page.          
        </p>
        <div class="relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <CustomersTableHeader />
            <tbody>
              <CustomerRow />
            </tbody>
          </table>
          <EditCustomerModal />
        </div>
      </div>
    </section>
  );
}
