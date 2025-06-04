const RadioChoices = ({ key }) => {
  return (
    <div key={key} className="border-2 border-gray-300 rounded-lg px-5 py-7 mb-5">
      <div className="w-full flex items-center gap-4 mb-6 ">
        <input type="radio" name="pledge" value="basic" className="w-6 h-6" />
        <span className="font-bold text-lg">Pledge with no reward</span>
      </div>
      <p className="text-Gray-500 leading-7 font-semibold">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
    </div>
  );
};

export default RadioChoices;
