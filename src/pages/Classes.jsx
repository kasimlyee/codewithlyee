import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "../styles/Classes.css";

const Classes = () => {
  const [className, setClassName] = useState("");
  const [classes, setClasses] = useState([]);

  const handleAddClass = async () => {
    if (className.trim() === "") return;
    try {
      await addDoc(collection(db, "classes"), { name: className });
      setClassName("");
      fetchClasses();
    } catch (err) {
      console.error("Error adding class:", err);
    }
  };

  const fetchClasses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "classes"));
      const fetchedClasses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClasses(fetchedClasses);
    } catch (err) {
      console.error("Error fetching classes:", err);
    }
  };

  React.useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <>
      <div className="classes-container">
        <h2>Manage Classes</h2>
        <div className="add-class">
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class name"
          />
          <button onClick={handleAddClass}>Add Class</button>
        </div>
        <ul className="class-list">
          {classes.map((classItem) => (
            <li key={classItem.id}>{classItem.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Classes;
