import React from "react";

import UnitsList from "../components/UnitsList";
import SubjectsList from "../components/SubjectsList";
import "./Units.css";

const Physicsunits = () => {
  const UNITS = [
    {
      id: "p1",
      name: "Measurement",
      image:
        "https://sloanreview.mit.edu/wp-content/uploads/2017/09/MAG-Richtner-Creating-Measurements-Innovation-1200.jpg",
      modules: 8,
    },
    {
      id: "p2",
      name: "Mechanics",
      image:
        "https://i0.wp.com/physics-labs.com/wp-content/uploads/2018/11/PhysicsLabs.png?w=750&ssl=1",
      modules: 25,
    },
    {
      id: "p3",
      name: "Oscillations & Waves",
      image:
        "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A97eb4b3ec5d62f51a3352ce3e45bb4b10a3078533289a9e590cb8514%2BIMAGE_TINY%2BIMAGE_TINY.1",
      modules: 20,
    },
    {
      id: "p4",
      name: "Thermal Physics",
      image:
        "https://ak1.picdn.net/shutterstock/videos/24300671/thumb/1.jpg?ip=x480",
      modules: 12,
    },
    {
      id: "p5",
      name: "Gravitational Field",
      image:
        "https://media.istockphoto.com/photos/sphere-is-affecting-space-time-around-it-picture-id508460394?k=6&m=508460394&s=612x612&w=0&h=BA-Og4V1GsbFuhSNK7-6l2Jdmn56K0A78JS2g8GKQYU=",
      modules: 4,
    },
    {
      id: "p6",
      name: "Electrostatic field",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSggSG4FSJF41tNNrmfqUTgM7dnmZmpevzMDb7fnY_MFW9EV9ER&usqp=CAU",
      modules: 13,
    },
    {
      id: "p7",
      name: "Magnetic Field",
      image:
        "https://cdn.mos.cms.futurecdn.net/siKNQwTuJwF2VjbGXBT3XZ-320-80.jpg",
      modules: 10,
    },
    {
      id: "p8",
      name: "Current Electricity",
      image:
        "https://physicsatgen.files.wordpress.com/2016/08/hhdjnpn.jpg?w=1400",
      modules: 16,
    },
    {
      id: "p9",
      name: "Electronics",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Electronic_circuit.jpg/295px-Electronic_circuit.jpg",
      modules: 12,
    },
    {
      id: "p10",
      name: "Mechanical Props of..",
      image:
        "https://www.azom.com/images/Article_Images/ImageForArticle_16318(1).jpg",
      modules: 11,
    },
    {
      id: "p11",
      name: "Matter and Radiation",
      image:
        "https://www.nuclear-power.net/wp-content/uploads/2015/04/Barium-137-radionuclide-300x300.png?ezimgfmt=rs:290x290/rscb3/ng:webp/ngcb3",
      modules: 7,
    },
  ];
  return (
    <div className="uni-bg">
      <SubjectsList items={UNITS} />
    </div>
  );
};

export default Physicsunits;
