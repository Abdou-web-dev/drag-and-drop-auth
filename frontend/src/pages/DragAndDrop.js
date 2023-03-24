import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDrop } from "../components/drag_drop/DragDrop.js";
import { useAuthContext } from "../hooks/useAuthContext";
import "./pages_styles.scss";

function DragAndDrop() {
  const { user } = useAuthContext();

  if (user) {
    return (
      <div className="">
        <DndProvider backend={HTML5Backend}>
          <div className="">
            <DragDrop />
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DragAndDrop;
