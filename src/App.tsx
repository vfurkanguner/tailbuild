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

interface ListItem {
  id: number;
  name: string;
  type: string;
}
function App() {
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

  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef(null);

  const handleScrollToLastElement = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  function beautifyHTML(codeStr: any) {
    if (!codeStr) {
      return "";
    }
    const process = (str: string) => {
      let div = document.createElement("div");
      div.innerHTML = str.trim();
      return format(div, 0).innerHTML.trim();
    };

    const format = (node: HTMLDivElement | any, level: number) => {
      let indentBefore = new Array(level++ + 1).join("  "),
        indentAfter = new Array(level - 1).join("  "),
        textNode;

      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode("\n" + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode("\n" + indentAfter);
          node.appendChild(textNode);
        }
      }
      return node;
    };
    return process(codeStr);
  }
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
    const file = new Blob([html], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!--  DON'T FORGET TO SETUP TAILWIND FROM OFFICIAL DOC -->
        <script src="https://cdn.tailwindcss.com"></script>
        <style type="text/tailwindcss">
          @layer base {
            html {
              @apply dark:bg-slate-900 bg-white;
            }
          }
        </style>
        <!--REMOVE THIS BLOCK: DON'T FORGET TO SETUP TAILWIND FROM DOC. -->
      </head>
      <body class="container mx-auto">
        ${markup}
      </body>
    </html>
`;

  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-zinc-900 transition-all dark:text-zinc-50 text-zinc-900 min-h-screen pb-16">
        <div className="md:hidden h-screen">
          <MobileScreen />
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SyntaxHighlighter style={vs2015} language="javascript" wrapLines>
            {html}
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
              {list.length === 0 ? (
                <div className="w-full bg-slate-200 dark:bg-zinc-800 dark:text-zinc-400 p-4 rounded-lg text-slate-800 font-medium my-4">
                  Hi there! 👋🏻
                  <br />
                  Drag and drop components from the 👈🏻 left sidebar to start
                  building your page.⚡️
                </div>
              ) : null}
            </div>

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

              <main className="border dark:border-zinc-700 overflow-y-auto rounded-b-lg">
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
