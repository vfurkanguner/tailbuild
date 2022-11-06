import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DeviceView from "./components/DeviceView";
import DraggableList from "./components/DraggableList";
import Frame, { FrameContext } from "react-frame-component";
import Modal from "./components/CodeModal";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MobileScreen from "./components/MobileScreen";
import { renderToString } from "react-dom/server";
import beautifyHTML from "./utils/beautifyHTML";
import { initialHTML, initialHTMLForFrame } from "./constants/constant";
import MacButtonsGroup from "./components/MacButtonsGroup";
import { DndContext } from "react-dnd";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export interface ListItem {
  id: number;
  name: string;
  type: string;
}

type FrameBindingType = {
  children: React.ReactNode | React.ReactNode[];
};

const DndFrame = ({ children }: FrameBindingType) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);

  useEffect(() => {
    dragDropManager?.getBackend()?.addEventListeners(window);
  });

  return <>{children}</>;
};

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
    <div className="bg-gray-100 h-screen dark:bg-zinc-900 transition-all dark:text-zinc-50 text-zinc-900">
      <div className="md:hidden h-full">
        <MobileScreen />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SyntaxHighlighter style={vs2015} language="javascript" wrapLines>
          {initialHTML(markup)}
        </SyntaxHighlighter>
      </Modal>

      <div className="hidden h-full md:flex flex-col">
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

        {/* <div className="bg-blue-400 h-full md:pl-64">1.child</div> */}
        <div className="hidden md:flex flex-col h-full md:pl-64 mb-4">
          <section className="md:flex flex-col container mx-auto px-2 lg:px-8">
            <div className="w-full bg-slate-200 dark:bg-zinc-800 dark:text-zinc-400 p-4 rounded-lg text-slate-800 font-medium my-4">
              Hi there! 👋🏻
              <br />
              Drag and drop components from the 👈🏻 left sidebar to start
              building your page.⚡️
            </div>
          </section>

          <div
            className={`px-2 lg:px-8 ${view} mx-auto w-full flex flex-col h-full  container`}
          >
            <aside className="flex justify-between items-center rounded-t-lg  bg-white dark:bg-zinc-700">
              <MacButtonsGroup />

              <DeviceView view={view} setView={setView} />
            </aside>

            <main className="border dark:border-zinc-700 h-full rounded-b-lg">
              <Frame
                ref={frameRef}
                contentDidMount={contentDidMount}
                initialContent={initialHTMLForFrame}
                className="w-full h-full"
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
                <DndFrame>
                  <DraggableList list={list} ref={ref} setList={setList} />
                </DndFrame>
              </Frame>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
