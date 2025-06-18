export default function Home() {
  return (
    <main className="bg-gradient-to-br from-pink-100 to-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <img src="/logo.png" alt="WeFast Logo" className="mb-4 mx-auto md:mx-0 w-10 h-10" />
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Lose pounds without <br /> counting calories
          </h1>
          <p className="text-gray-600 mb-6">
            Feel more energized and confident <br /> with intermittent fasting
          </p>
          <a
            href="#"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition"
          >
            Download WeFast today
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Take the quiz and get personalized advice
          </p>

          <div className="mt-10 flex items-center justify-center md:justify-start space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6 text-green-600"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 font-medium">60,000 WOMEN’S COMMUNITY</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/app1.png"
            alt="App Screenshot 1"
            className="w-40 md:w-56 shadow-xl rounded-xl -mr-4 z-10"
          />
          <img
            src="/app2.png"
            alt="App Screenshot 2"
            className="w-40 md:w-56 shadow-xl rounded-xl ml-4 -translate-y-6"
          />
        </div>
      </div>

      {/* Top Right Button */}
      <div className="absolute top-6 right-6">
        <a
          href="#"
          className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800"
        >
          ⬇ Download the app
        </a>
      </div>
    </main>
  );
}
