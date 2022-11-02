import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeProvider from "./contexts/ThemeContext";
import DeviceView from "./components/DeviceView";
import DraggableList from "./components/DraggableList";
import Frame from "react-frame-component";

function App() {
  const [view, setView] = useState("desktop"); // desktop, tablet, mobile
  const [list, setList] = useState([]);

  const myRef = useRef(null);
  const frameRef = useRef(null);

  const onOpenDarkMode = () => {
    const frame = frameRef.current as any;
    frame.contentWindow.document.body.classList.add("dark");
  };
  const onCloseDarkMode = () => {
    const frame = frameRef.current as any;
    frame.contentWindow.document.body.classList.remove("dark");
  };
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-zinc-900 transition-all dark:text-zinc-50 text-zinc-900 min-h-screen pb-16">
        <div className="md:hidden h-screen">
          To work with this app, you need to wider your screen.
        </div>
        <div className="hidden md:flex flex-col">
          <Sidebar list={list} setList={setList} />
          <Navbar
            onOpenDarkMode={onOpenDarkMode}
            onCloseDarkMode={onCloseDarkMode}
          />

          <div className="pl-64 ">
            <div
              className={`px-2 lg:px-8 ${view} mx-auto w-full min-h-screen container`}
            >
              <aside className="flex justify-between items-center rounded-t-lg  bg-white dark:bg-zinc-700">
                <ul className=" py-4 px-2 w-full flex space-x-2 pl-4  ">
                  <li className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <li className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <li className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </ul>

                <DeviceView view={view} setView={setView} />
              </aside>

              <main className="border dark:border-zinc-700 overflow-y-auto ">
                {/* {sections()["blog"]["BlogA"]} */}

                <Frame
                  ref={frameRef}
                  initialContent={`
                  <!DOCTYPE html>
                    <html >
                      <head>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <script>
                              tailwind.config = {
                              darkMode: 'class',
                              }
                          </script>
                      </head>
                      <body>
                      <div />
                      </body>
                      </html>
                  `}
                  className="w-full h-screen"
                  head={[
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
                    />,
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    />,
                    // import Open Sans font
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                    />,
                    <style>
                      {`
                          body {
                            font-family: 'Open Sans', sans-serif;
                          }
                        `}
                    </style>,
                  ]}
                >
                  <DraggableList list={list} myRef={myRef} setList={setList} />
                </Frame>
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
