import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { postData } from "@/lib/data/index";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = searchParams["data"];

  if (!data) {
    notFound();
  }

  const dataExists = await postData(data as string).catch((err) => {
    redirect("/error");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl text-white">Sucessful Payment!</h1>
      <p className="text-md text-gray-400">
        Successfully Purchased the {dataExists.offerType} GiftBox
      </p>
      <p className="text-md text-gray-400">
        Transaction Code:{dataExists.transactionCode}
      </p>

      <Link href="/" className="mt-4 underline text-lg text-white">
        Go to home
      </Link>
    </div>
  );
}
