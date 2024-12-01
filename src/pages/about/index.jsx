import CardInfo from "./CardInfo";

function AboutPage({ info }) {
  return (
    <section className="  font-poppins darkMode sm:mt-0 ">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6 mt-24">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-600 uppercase ">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet.
              </p>
              <div className="flex flex-wrap items-center">
                {info.map((item, index) => (
                  <CardInfo key={index} items={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
              alt=""
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
