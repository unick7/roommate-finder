const PreferenceCard = () => {

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Preferences
          </h5>
        </div>

        <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
          <span className="cursor-pointer rounded-full border border-red-900 bg-gray-900/5 p-4 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src="/src/assets/cheers.png" className="w-8 h-8"></img>
          </span>
          <span className="cursor-pointer rounded-full border border-red-900 bg-gray-900/5 p-4 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src="/src/assets/food.png" className="w-8 h-8"></img>
          </span>
          <span className="cursor-pointer rounded-full border border-red-900 bg-gray-900/5 p-4 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src="/src/assets/smoking.png" className="w-8 h-8" />
          </span>
          <span className="cursor-pointer rounded-full border border-green-900 bg-gray-900/5 p-4 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src="/src/assets/weightlifting.png" className="w-8 h-8" />
          </span>
        </div>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default PreferenceCard;
