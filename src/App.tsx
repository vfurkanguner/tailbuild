import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeProvider from "./contexts/ThemeContext";
import DeviceView from "./components/DeviceView";
import DraggableList from "./components/DraggableList";
import Frame from "react-frame-component";
import Modal from "./components/CodeModal";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MobileScreen from "./components/MobileScreen";
import { renderToString } from "react-dom/server";
import EmptyScreen from "./components/EmptyScreen";
import beautifyHTML from "./utils/beautifyHTML";
import { initialHTML } from "./constants/constant";
import MacButtonsGroup from "./components/MacButtonsGroup";

interface ListItem {
  id: number;
  name: string;
  type: string;
}
function App() {
  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef(null);

  const [view, setView] = useState("desktop"); // desktop, tablet, mobile
  const [list, setList] = useState<ListItem[]>([]);
  const [markup, setMarkup] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleScrollToLastElement = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // toggle dark mode
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  useEffect(() => {
    const div = document.createElement("div");
    list.forEach((item: any) => {
      const htmlItem = renderToString(item);
      div.innerHTML += htmlItem;
      let newCode = beautifyHTML(div.innerHTML);
      setMarkup(newCode);
    });
  }, [list, markup]);

  const onOpenDarkMode = () => {
    const frame = frameRef.current as any;
    frame.contentWindow.document.body.classList.add("dark");
  };

  const onCloseDarkMode = () => {
    const frame = frameRef.current as any;
    frame.contentWindow.document.body.classList.remove("dark");
  };

  const downloadAsHtmlFile = () => {
    const element = document.createElement("a");
    const file = new Blob([initialHTML(markup)], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  // toggle dark mode for iframe
  const contentDidMount = () => {
    const frame = frameRef.current as any;
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      frame.contentWindow.document.body.classList.add("dark");
    } else {
      frame.contentWindow.document.body.classList.remove("dark");
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-zinc-900 transition-all dark:text-zinc-50 text-zinc-900 min-h-screen pb-16">
        <div className="md:hidden h-screen">
          <MobileScreen />
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SyntaxHighlighter style={vs2015} language="javascript" wrapLines>
            {initialHTML(markup)}
          </SyntaxHighlighter>
        </Modal>

        <div className="hidden md:flex flex-col">
          <Sidebar
            list={list}
            setList={setList}
            handleScrollToLastElement={handleScrollToLastElement}
          />
          <Navbar
            downLoadHtml={downloadAsHtmlFile}
            markup={markup}
            openModal={openModal}
            onOpenDarkMode={onOpenDarkMode}
            onCloseDarkMode={onCloseDarkMode}
          />

          <div className="md:pl-64 ">
            <div className="hidden md:flex container mx-auto px-2 lg:px-8">
              <div className="w-full bg-slate-200 dark:bg-zinc-800 dark:text-zinc-400 p-4 rounded-lg text-slate-800 font-medium my-4">
                Hi there! 👋🏻
                <br />
                Drag and drop components from the 👈🏻 left sidebar to start
                building your page.⚡️
              </div>
            </div>

            <div
              className={`px-2 lg:px-8 ${view} mx-auto w-full min-h-screen container`}
            >
              <aside className="flex justify-between items-center rounded-t-lg  bg-white dark:bg-zinc-700">
                <MacButtonsGroup />

                <DeviceView view={view} setView={setView} />
              </aside>

              <main className="border dark:border-zinc-700 overflow-y-auto rounded-b-lg">
                <Frame
                  ref={frameRef}
                  contentDidMount={contentDidMount}
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
                  {list.length === 0 ? (
                    <EmptyScreen />
                  ) : (
                    <DraggableList list={list} ref={ref} setList={setList} />
                  )}
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
