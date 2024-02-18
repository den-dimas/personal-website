import foto from "../assets/1318.png"

export default function AboutMe() {
  return (
    <div className="flex gap-8 flex-col max-[540px]:items-center sm:flex-row">
      <img
        title="Foto Dimas"
        alt="Foto Den berbaju putih dan bermasker putih."
        src={foto}
        className="w-64 h-64 rounded-b-full border-4 border-blue-2 bg-blue-1 pt-5 object-contain"
      />

      <div className="overflow-scroll">
        <h1 className="text-justify">
          Hello, my name is Dimas Dermawan but everyone likes to call me Den
          (Don't ask where it comes from). I am a student in University of
          Indonesia majoring in Computer Engineering. Learning in Computer
          Engineering really opens up both of my eyes, I realize that there are
          a lot of fields that I've never touch even once. <br />
          <br />
          Therefore, I currently have a strong interest about technology in
          general. For example, I'm interested in <i>
            Software Development
          </i>, <i>Digital System</i>,{" "}
          <i>Machine Learning and Artificial Intelligence</i>,{" "}
          <i>Integrated System</i>, and many more. <br />
          <br />
          Other than that, I also have interests with art(s) such as music,
          painting, writing, 3D art, etc. Because of that, I personally have a
          strong passion in <i>Game Development</i> because I think that Game
          Development covers all of my interests.
          <br />
          <br />
          Well I guess that's all about me, if you would like to talk or reach
          me out, you can contact one of my social media. Click the button below
          to see the list! See ya!
        </h1>

        <button>contact</button>
      </div>
    </div>
  )
}
