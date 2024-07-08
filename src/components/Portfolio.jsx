export default function Portfolio() {
  return (
    <div className="">
      <p className="mb-4 text-xs">
        *hovered red projects means the code is on NDA
      </p>

      <div className="flex flex-col gap-6">
        {data.map((p, i) => (
          <div key={i} className="space-y-2">
            <div className="flex">
              <h1 className="font-bold mr-2">{i + 1}. </h1>
              <div className="flex max-[540px]:flex-col">
                <a
                  className={
                    "font-bold" +
                    " " +
                    (!!p.link
                      ? "relative before:absolute before:bottom-1 before:w-full before:bg-black before:h-[2px]"
                      : "NDA")
                  }
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.title}
                </a>
              </div>
            </div>
            <p className="text-justify ml-6">
              <span className="mr-8" />
              {p.description}
            </p>
            <p className="ml-6">
              <b>Duration: </b>
              <i>{p.date}</i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "EXERCISE Website",
    description:
      "Building website for EXERCISE FTUI 2023 using React.js + Vite and Tailwind. The website is used for EXERCISE official website and to introduce EXERCISE to audiences.",
    link: "https://github.com/ExerciseFTUI/Website-Exercise-FE",
    date: "February - April 2023",
  },
  {
    title: "Sempoa Website",
    description:
      "Building the Front End side for Sempoa website using React.js + Vite and Tailwind. Sempoa is an online course corporation for level of high school and below.",
    link: "https://github.com/ExerciseFTUI/Exercise-WebSempoa",
    date: "July - August 2023",
  },
  {
    title: "EXERCISE URL Shortener",
    description:
      "Building the Front End side for EXERCISE URL Shortener using React.js + Vite and Tailwind. EXERCISE URL Shortener is a URL shortener service provider that doesn't require users to sign up or sign in before using the service.",
    link: "https://github.com/ExerciseFTUI/URLShortenerFE/tree/den/revision-230730-1",
    date: "July - August 2023",
  },
  {
    title: "Lab Karsa Website",
    description:
      "Building the Front End side for Lab Karsa using Next.js and Tailwind. Lab Karsa is a project that digitalize a laboratory process starting from receiving projects all the way to writing reports.",
    link: "",
    date: "September 2023 - February 2024",
  },
  {
    title: "Bluetooth Positioning System",
    description:
      "Building a React Native mobile apps that can scan an IoT Beacon and shows the current position of the user. This app also has a map and track user location using GPS with help of MapBox API.",
    link: "https://github.com/EXERCISE-FTUI/Bluetooth-Positioning",
    date: "April 2023 - June 2024",
  },
];
