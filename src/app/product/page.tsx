import Link from "next/link";

export default function Product({ id = 120 }) {
  return (
    <>
      <h3>Hi Product</h3>
      <h3>
        <Link href={`/product/${id}`} replace>
          Product 3
        </Link>
      </h3>
    </>
  );
}
