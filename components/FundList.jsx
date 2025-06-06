import { allFundTypes } from "../data";
import FundTypes from "./FundTypes";
const FundList = () => {
  return (
    <div className="boxCont text-Gray-500">
      <h1 className="text-2xl mt-3 mb-6  text-Black font-bold">
        About this project
      </h1>
      <p className="mb-6 font-semibold leading-7">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="mb-6 font-semibold leading-7">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div>
        {allFundTypes.map((fund) => (
          <FundTypes {...fund} />
        ))}
      </div>
    </div>
  );
};

export default FundList;
