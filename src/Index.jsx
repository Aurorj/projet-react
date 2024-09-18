import "./styles.css";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
// Create an Array of mock Data
//Cette partie du code crée un tableau d'objets data qui contient des informations sur différents articles, tels que le titre, le sous-titre, l'auteur, le temps de lecture, la date de publication, et le nombre de claps (initialement à 0). Chaque objet représente un post et contient un id unique.
const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Here’s an insight into my setup, workflow and tools to build software",
    UserName: "Anthony Gordon",
    time: "4 min read ",
    date: "Jun 14, 2023",
    claps: 0,
  },
  {
    id: 2,
    title: "Git + Bit: Code Meets Components",
    subtitle:
      "Keeping Git Branches and Bit lanes in sync for seamless development",
    UserName: "Ashan Fernando",
    time: "6 min read ",
    date: "Aug 29, 2024",
    claps: 0,
  },
  {
    id: 3,
    title: " Average Manaager Vs Great Manager",
    subtitle: "Explained in 10 sketches",
    UserName: "Ashan Fernando",
    time: "45 min read ",
    date: "Mai 19, 2024",
    claps: 0,
  },
  {
    id: 4,
    title: " Comment J'ai commencer l'entreprenariat",
    subtitle: "Je vendais les yaourt avec beignets.",
    UserName: "Ulrich Fonkwa",
    time: "45 min read ",
    date: "July 08, 2024",
    claps: 0,
  },
  {
    id: 5,
    title: " How I Gave My life to christ",
    subtitle: "the life changing experience",
    UserName: "Merveille Mbeupeu",
    time: "3 min read ",
    date: "Jan 11, 2024",
    claps: 0,
  },
];

function App() {
  return (
    <div className="container">
      
       {data.map((post) => <Post post={post} />)}
      ;
    </div>
  );
}

function NewApp() {
  const [page, setPage] = useState(0);
  const handlerClick = () => {
    // setPage({ ...post, claps: post.claps + 1 });
    setPage((prevState) => {
      return prevState + 1;
    });
  };
  return (
    <div className="container">
      <div className="title">this is the students of university of Dschang</div>
      <div className="subtitle">
        this training is one of my best opportunities at the University of
        Dschang
      </div>
      <button onClick={handlerClick}> this is the new day</button>
      <div>this is my new page {page}</div>
    </div>
  );
}

function Post(props) {
  const [post, setpost] = useState(props.post);
  const handlerClick = () => {
    // setpost({ ...post, claps: post.claps + 1 });
    setpost((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };

  return (
    <div classNameName="post-header">
      <div className="title">{post.title}</div>
      <div className="subtitle">{post.subtitle}</div>
      <div className="author-card">
        <div className="avatar">
          <img
            src="assets/images/profile-picture.jpg"
            height="44px"
            width="44px"
            alt=""
          />
        </div>
        <div className="column">
          <div className="row">
            <div>{post.UserName}</div>
            <div>.</div>
            <div className="follow-button "> Follow</div>
          </div>

          <div className="row secondary">
            <div>{post.time}</div>
            <div>.</div>
            <div>{post.date}</div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="claps">
          <div className="clap-button" onClick={handlerClick}>
            <img
              className="avatar"
              src="assets/icons/hands-clapping-thin.svg"
              height="44px"
              width="44px"
              alt=""
            />
          </div>
          <div className="clap-counter" id="clap-counter-{post.id}">
            {post.claps}
          </div>
        </div>
      </div>
    </div>
  );
}
//    function createRoot(container) {
//     const rootContainer = container;
//     let rootNode;

//     const hooks = [];
//     let hooksPointer = 0;
//     let evenHandlers = [];

//     function useState(initialValue) {
//       const currentIndex = hooksPointer; // index courant
//       if (!hooks[currentIndex]) {
//         hooks[currentIndex] = initialValue;
//       }

//       const setState = (newState) => {
//         if (typeof newState === "function") {
//           const result = newState(hooks[currentIndex]);
//           hooks[currentIndex] = result;
//           // hooks[currentIndex] = newState(hooks[currentIndex]);
//         } else {
//           hooks[currentIndex] = newState;
//         }
//         render();
//       };

//       hooksPointer++;

//       return [hooks[currentIndex], setState];
//     }

//     const registerEventHandler = (evenHandler) => {
//       evenHandlers.push(evenHandler);
//     };
//     // modified render function to reset
//     function render(node) {
//       hooksPointer = 0;
//       evenHandlers = [];
//       if (!rootNode && node) {
//         rootNode = node;
//       }
//       // en javascript on appel ca "conditional chaaining" (rootContainer.innerHTML = rootNote ?.(); )
//       // rootContainer.innerHTML = rootNote ?.();
//       rootContainer.innerHTML = rootNode();
//       evenHandlers.forEach((item) => {
//         document
//           .getElementById(item.id)
//           .addEventListener(item.type, item.handlerClick);
//       });
//     }

//     return { useState, registerEventHandler, render };
//   }

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
const root1 = ReactDOM.createRoot(document.getElementById("blog"));
root1.render(<NewApp />);
// Use map to print all posts of the Array using the render function.

// create A.state.property
// Change the add function thereby changing their Usage.
