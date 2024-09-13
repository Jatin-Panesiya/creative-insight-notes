const Notice = ({ label }: { label: string }) => {
  return (
    <div className="bg-[#FFF4A3] text-black py-5 px-5 mb-5 rounded">
      <b>Note:</b> {label}
    </div>
  );
};

export default Notice;
