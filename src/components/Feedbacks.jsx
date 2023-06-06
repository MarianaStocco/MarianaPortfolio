import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { weatherTypes } from '../constants'

const FeedbackCard = ({ type, img, index }) => {
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#8ba19c] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{type}</p>
      <img
        src={img}
        alt={`feedback_by-${type}`}
        className='w-20 h-20 rounded-full object-cover'
      />
    </div>
  </motion.div>

}
const api_key = 'dd65011c0bf653e27c91ee4ac528a91a'

const Feedbacks = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${api_key}`;
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(null);
        if (data.cod == 404 || data.cod == 400) {
          // ARRAY OF OBJ
          setShowWeather([
            {
              type: "Not Found",
              img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
            },
          ]);
        }
        setShowWeather(
          weatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    console.log(apiData);
  };
  return (
    <>
      <div className={`mt-12 bg-[#d9dfd5] rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What to wear today</p>
            <h2 className={styles.sectionHeadText}>Play with me</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {weatherTypes.map((weather, index) => (
            <FeedbackCard key={weather.type} index={index} {...weather} />
          ))}
        </div>
      </div>
      <div className="bg-secondary h-auto grid place-items-center">
        <div className="bg-tertiary w-96 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter Your Location"
              className="text-xl border-b
          p-1 border-gray-200 font-semibold uppercase flex-1"
            />
            <button onClick={fetchWeather}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
                alt="..."
                className="w-8 ml-2"
              />
            </button>
          </div>
          <div
            className={`duration-300 delay-75  overflow-hidden
         ${showWeather ? "h-[27rem]" : "h-0"}`}
          >
            {loading ? (
              <div className="grid place-items-center h-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
                  alt="..."
                  className="w-14 mx-auto mb-2 animate-spin"
                />
              </div>
            ) : (
              showWeather && (
                <div className="text-center flex flex-col gap-6 mt-10">
                  {apiData && (
                    <p className="text-xl font-semibold">
                      {apiData?.name + "," + apiData?.sys?.country}
                    </p>
                  )}
                  <img
                    src={showWeather[0]?.img}
                    alt="..."
                    className="w-52 mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-zinc-800">
                    {showWeather[0]?.type}
                  </h3>

                  {apiData && (
                    <>
                      <div className="flex justify-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                          alt="..."
                          className="h-9 mt-1"
                        />
                        <h2 className="text-4xl font-extrabold">
                          {apiData?.main?.temp}&#176;C
                        </h2>
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");