import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById, createUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const user = await currentUser();

  if(!user) redirect('/sign-in')

  let dbUser = await getUserById(user.id);

  if (!dbUser) {
    const userData = {
      clerkId: user.id,
      email: user.emailAddresses[0]?.emailAddress || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      username: user.username || '',
      photo: user.imageUrl || '',
    };

    dbUser = await createUser(userData);
  }

  if (!dbUser) {
    throw new Error('Failed to get or create user');
  }

  const transformation = transformationTypes[type];

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={dbUser._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={dbUser.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage