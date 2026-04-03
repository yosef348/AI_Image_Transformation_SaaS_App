import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById, createUser } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";

const Page = async ({ params: { id } }: SearchParamProps) => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  let dbUser = await getUserById(user.id);

  if (!dbUser) {
    const userData = {
      clerkId: user.id,
      email: user.emailAddresses[0]?.emailAddress || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      username: user.username || "",
      photo: user.imageUrl || "",
    };

    dbUser = await createUser(userData);
  }

  if (!dbUser) {
    throw new Error("Failed to get or create user");
  }

  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          userId={dbUser._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={dbUser.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default Page;