import Image from 'next/image';

const ToggleSwitch = () => {
  return (
    <div className="">
      <label className="toggle" htmlFor="switch">
        <input id="switch" className="input" type="checkbox" />
        <div className="icon icon--moon">
          <Image
            src="/assets/icons/moon-2.svg"
            alt="moon"
            width={18}
            height={18}
            className="active-theme"
          />
        </div>

        <div className="icon icon--sun">
          <Image
            src="/assets/icons/sun-2.svg"
            alt="sun"
            width={18}
            height={18}
            className="active-theme"
          />
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
