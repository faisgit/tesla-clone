import Link from "next/link";
const Alert = () => {
  return (
    <div className=" bg-black fixed w-[100vw] ">
      <div className="bg-alertBg text-white">
        <h1 className="text-center py-6">
          $7,500{" "}
          <Link href="/posts/first-post" fill className="underline">
            Federal Tax Credit
          </Link>{" "}
          Available for new Model 3 and Model Y
        </h1>
      </div>
    </div>
  );
};

export default Alert;
