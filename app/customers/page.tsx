import getCustomers from "@/lib/api/getCustomers";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <main className="flex min-h-screen flex-col items-start justify-start px-12 py-5">
      <h4>Customers Page</h4>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer.name}</li>
        ))}
      </ul>
    </main>
  );
}
