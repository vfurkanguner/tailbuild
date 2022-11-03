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

  useEffect(() => {
    // const el = ref?.current?.innerHTML;
    // if (ref.current) {
    //   const el = ref?.current;
    //   const newDiv = document.createElement("body");
    //   newDiv.append(el);
    //   let newCode = beautifyHTML(newDiv.innerHTML);

    //   setMarkup((prevProps) => {
    //     return (prevProps += "\n" + newCode);
    //   });
    // }

    const el = ref?.current?.innerHTML;
    let newCode = beautifyHTML(el);
    setMarkup((prevProps) => {
      return (prevProps += "\n" + newCode);
    });
  }, [list]);

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
          <MobileScreen />
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SyntaxHighlighter
            style={vs2015}
            language="javascript"
            showLineNumbers
          >
            {markup}
          </SyntaxHighlighter>
        </Modal>

        <div className="hidden md:flex flex-col">
          <Sidebar
            list={list}
            setList={setList}
            handleScrollToLastElement={handleScrollToLastElement}
          />
          <Navbar
            markup={markup}
            openModal={openModal}
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
                  <DraggableList list={list} ref={ref} setList={setList} />
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
