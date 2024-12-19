import { Heading } from "./Heading";

type UserType = {
  email: string;
  username: string;
};

const Welcome = ({ email, username }: UserType) => {
  return (
    <div className="bg-black rounded-xl p-10 my-8 bg-home-img bg-top dark:bg-center dark:bg-dark-home-img bg-no-repeat bg-cover ">
      <Heading
        as="h2"
        namespace="headings.home.welcome"
        className="text-l sm:text-xl text-neutral-200 uppercase"
      >
        {username || email.split("@")[0]}!
      </Heading>
      <Heading
        as="h1"
        namespace="headings.home.mainHeading"
        className="text-xl sm:text-3xl text-neutral-100 uppercase font-semibold"
      />
    </div>
  );
};

export default Welcome;
