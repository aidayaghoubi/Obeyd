const ReplayJoke = ({ showReplay }) => {
  return (
    <div
      className={`${showReplay ? "max-h-[500px]" : "max-h-0"
        } transition-all duration-500 overflow-hidden`}
    >
      <div className="flex justify-between mt-4 gap-4 mb-5">
        <input
          className="w-full py-2 px-2 border-2 rounded border-[#AEC7E0]"
          placeholder="نظرتو بنویس"
        />
        <button className="bg-[#AEC7E0] px-6 py-2 rounded">ارسال</button>
      </div>
    </div>
  );
};
export default ReplayJoke