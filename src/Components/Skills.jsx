// eslint-disable-next-line no-unused-vars
import React from "react";
import Html from "../assets/Html .png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import java from "../assets/java.png";
import selenium from "../assets/selenium.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import sql from "../assets/sql.png";
import node from "../assets/NodeJs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "Java-Script",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React-JS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: java,
      title: "JAVA",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: sql,
      title: "My-SQL",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: selenium,
      title: "Selenium",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 14,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: firebase,
      title: "Fire-Base",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full mt-[1100px] text-white md:mt-72">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6  ">There are the Technology I have Worked With</p>
        </div>

        <div className="w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="HTML5" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
