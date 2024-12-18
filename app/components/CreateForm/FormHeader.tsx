import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

export const FormHeader = () => {
  return (
    <div className="text-center mb-6">
      <Heading
        as="h1"
        className="text-xl font-bold"
        namespace="headings.create.second"
      />
      <Paragraph className="text-sm" namespace="headings.create.paragraph" />
    </div>
  );
};
