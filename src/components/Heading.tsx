interface IHeadingProps {
  title: string;
  classNames?: string;
}

const Heading = ({ title, classNames }: IHeadingProps) => {
  return (
    <p
      className={`text-xl text-black font-bold ${classNames ? classNames : ""}`}
    >
      {title}
    </p>
  );
};

export default Heading;
