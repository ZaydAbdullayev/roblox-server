import "./home.css";
import characters from "./assets/characters.png";
import map from "./assets/map.jpeg";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "./components/button.components";
import { RiTwitterXFill } from "react-icons/ri";
import { CheckBox, Range } from "./components/checkbox.components";

const tabs = {
  home: [
    {
      title: "Plenetary Exploration",
      description:
        "Explore the vastness of space and discover new planets, moons, and asteroids. Gather resources and build your own space station.",
    },
    {
      title: "Advanced Building",
      description:
        "Build complex structures and machines using advanced building techniques. Create your own factories and automate your production.",
    },
    {
      title: "Multiplayer",
      description:
        "Play with your friends and other players in a shared universe. Collaborate on projects or compete against each other.",
    },
  ],
  play: [
    {
      title: "Survival Mode",
      description:
        "Survive in a hostile environment filled with dangerous creatures and harsh weather conditions. Gather resources and build shelter.",
    },
    {
      title: "Creative Mode",
      description:
        "Build anything you can imagine without limitations. Use unlimited resources and tools to create your own world.",
    },
    {
      title: "Adventure Mode",
      description:
        "Embark on epic quests and adventures. Solve puzzles, defeat enemies, and uncover hidden treasures.",
    },
  ],
  map: [
    {
      title: "Exploration Maps",
      description:
        "Create and share your own custom maps with the community. Use the map editor to design unique landscapes and challenges.",
      img: map,
    },
  ],
  shop: [
    {
      title: "In-Game Store",
      description:
        "Purchase exclusive items, skins, and upgrades for your character and equipment. Enhance your gameplay experience with unique cosmetics.",
    },
    {
      title: "Marketplace",
      description:
        "Trade items and resources with other players. Buy and sell rare items to enhance your gameplay.",
    },
    {
      title: "In-Game Store",
      description:
        "Purchase exclusive items, skins, and upgrades for your character and equipment. Enhance your gameplay experience with unique cosmetics.",
    },
    {
      title: "Marketplace",
      description:
        "Trade items and resources with other players. Buy and sell rare items to enhance your gameplay.",
    },
    {
      title: "In-Game Store",
      description:
        "Purchase exclusive items, skins, and upgrades for your character and equipment. Enhance your gameplay experience with unique cosmetics.",
    },
    {
      title: "Marketplace",
      description:
        "Trade items and resources with other players. Buy and sell rare items to enhance your gameplay.",
    },
    {
      title: "In-Game Store",
      description:
        "Purchase exclusive items, skins, and upgrades for your character and equipment. Enhance your gameplay experience with unique cosmetics.",
    },
    {
      title: "Marketplace",
      description:
        "Trade items and resources with other players. Buy and sell rare items to enhance your gameplay.",
    },
  ],
  leaderboard: [
    {
      title: "Global Leaderboard",
      users: [
        {
          name: "@BlocKGame",
          score: 4340,
        },
        {
          name: "@PEPE_GANG",
          score: 3901,
        },
        {
          name: "@Bounty_Hunter",
          score: 2480,
        },
      ],
    },
    {
      title: "Friendly Leaderboard",
      users: [],
    },
  ],
  settings: [],
};

export const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w100 df fdc aic wrapper">
      <div className="df fdc aic content header">
        <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay={0}>
          BLOCKGAME
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="700" data-aos-delay={100}>
          SERVER
        </h3>
      </div>
      <div
        className="df fdc gap-20 server-info"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={100}
      >
        <div
          className="w100 df aic gap-20"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={150}
        >
          <div className="df fdc gap-10 label">
            <p>VERSION</p>
            <span>4:1.0</span>
          </div>
          <div className="df fdc gap-10 label">
            <p className="df aic jcsb">
              <span>IP ADDRESS</span>
              <span>ONLINE</span>
            </p>
            <span className="w100 df aic jcsb">
              <span>play.example.net</span>
              <span>1.280/2000</span>
            </span>
          </div>
        </div>

        <p data-aos="fade-up" data-aos-duration="700" data-aos-delay={200}>
          Welcome to Blockgame! This is a server for the game Blockgame. You can
          play with your friends and have fun. The server is hosted by
          Bountyboard and is open to everyone. You can join the server by using
          the IP address play.example.net. The server is currently online and
          has a capacity of 2000 players. There are currently 1280 players
          online. You can join the server and start playing right away. The
          server is running version 4:1.0 of the game. This version includes new
          features and improvements to the game. You can check the server status
          and see how many players are online by visiting the server website.
        </p>
        <div
          className="w100 df fdc gap-10 label token"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={250}
        >
          <p className="df aic jcsb">
            <span>ADDRESS CA:</span>
          </p>
          <span className="w100 df aic jcsb">
            <span>6AgJXZEwxzAyBsJnDxuUVoyf3wrv58YMchviVnXpump</span>
            <IoCopyOutline />
          </span>
        </div>
        <span data-aos="fade-up" data-aos-duration="700" data-aos-delay={300}>
          @BlocKGame
        </span>
      </div>
      <div
        className="w100 df fdc characters"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={300}
      >
        <div className="cp">
          <Button
            text={
              <span className="df aic gap-20">
                Follow Us <RiTwitterXFill />
              </span>
            }
          />
        </div>
        <img src={characters} alt="characters" />
      </div>
      <div className="w100 df controller-tabs">
        <div className="tabs">
          <div className="radio-container">
            <input
              checked=""
              id="radio-home"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("home")}
            />
            <label for="radio-home">home</label>
            <input
              id="radio-play"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("play")}
            />
            <label for="radio-play">play</label>
            <input
              id="radio-map"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("map")}
            />
            <label for="radio-map">map</label>
            <input
              id="radio-shop"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("shop")}
            />
            <label for="radio-shop">shop</label>
            <input
              id="radio-leaderboard"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("leaderboard")}
            />
            <label for="radio-leaderboard">leaderboard</label>
            <input
              id="radio-settings"
              name="radio"
              type="radio"
              onChange={() => setActiveTab("settings")}
            />
            <label for="radio-settings">settings</label>
            <div className="glider-container">
              <div className="glider"></div>
            </div>
          </div>
        </div>
        <div className="df fw gap-20 content tabs-content">
          {activeTab === "settings" ? (
            <div
              className="w100 df fdc gap-20 settings"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={0}
            >
              <h4>Graphics</h4>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={100}
              >
                <span>Quality Preset</span>
                <select>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={150}
              >
                <span>Resolution</span>
                <select>
                  <option value="1920x1080">1920x1080</option>
                  <option value="1280x720">1280x720</option>
                  <option value="2560x1440">2560x1440</option>
                  <option value="3840x2160">3840x2160</option>
                </select>
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={200}
              >
                <span>Shadows</span>
                <CheckBox checked={true} />
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={250}
              >
                <span>Water Quality</span>
                <select>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
              <h4>Audio</h4>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={300}
              >
                <span>Master Volume</span>
                <Range />
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={350}
              >
                <span>Music Volume</span>
                <Range />
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={400}
              >
                <span>Voice Chat</span>
                <CheckBox checked={true} />
              </div>
              <h4>Gameplay</h4>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={450}
              >
                <span>Invert Y-Axis</span>
                <CheckBox checked={true} />
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={500}
              >
                <span>Sprint Toggle</span>
                <CheckBox />
              </div>
              <div
                className="w100 df aic jcsb"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={550}
              >
                <span>Language</span>
                <select>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              <Button text={"SAVE CHANGES"} />
            </div>
          ) : (
            tabs[activeTab].map((item, index) => (
              <div key={index} className={`df fdc gap-10 ${activeTab}`}>
                <h4
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={0}
                >
                  {item.title}
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={100}
                >
                  {item.description}
                </p>
                {activeTab === "shop" && <Button text={"BUY NOW"} />}
                {item.img && (
                  <figure
                    className="w100 df aic jcc p-r"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={10}
                  >
                    <img src={item.img} alt={item.title} />
                  </figure>
                )}
                {item.users && (
                  <table border={1}>
                    <thead
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay={0}
                    >
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay={100}
                    >
                      {item.users.map((user, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w100 df aic jcc content footer">
        <p>© 2025 BLOCKGAME SERVER - All rights reserved</p>
      </div>
    </div>
  );
};
