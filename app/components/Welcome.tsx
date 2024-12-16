import { Heading } from "./Heading";

type UserType = {
  email: string;
  username: string;
};

const Welcome = ({ email, username }: UserType) => {
  return (
    <div className="bg-black rounded-xl p-10 my-8 bg-home-img bg-top dark:bg-center dark:bg-dark-home-img bg-no-repeat bg-cover ">
      <Heading as="h2" namespace="headings.home.welcome">
        {username || email.split("@")[0]}!
      </Heading>
      <Heading as="h1" namespace="headings.home.mainHeading" />
    </div>
  );
};

export default Welcome;
