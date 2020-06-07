import React from "react";
import "./UnitsList.css";
import UnitItem from "./UnitItem";
import Card from "../shared/Card";

const UnitsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((unit) => (
        <UnitItem
          key={unit.id}
          id={unit.id}
          image={unit.image}
          name={unit.name}
          modulesCount={unit.modules}
        />
      ))}
    </ul>
  );
};

export default UnitsList;
