import { Heading } from "./Heading";

export const FormHeader = () => (
  <div className="text-center mb-6">
    <Heading as="h1" className="text-xl font-bold">
      Create a New Book
    </Heading>
    <p className="text-sm ">Fill in the details below to add your book.</p>
  </div>
);
