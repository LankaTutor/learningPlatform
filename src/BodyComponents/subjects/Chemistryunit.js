import React from "react";

import UnitsList from "../components/UnitsList";
import "./Units.css";

const Chemistryunits = () => {
  const UNITS = [
    {
      id: "c1",
      name: "Atomic structure",
      image:
        "https://sloanreview.mit.edu/wp-content/uploads/2017/09/MAG-Richtner-Creating-Measurements-Innovation-1200.jpg",
      modules: 8,
    },
    {
      id: "c2",
      name: "Structure and bonding",
      image:
        "https://i0.wp.com/physics-labs.com/wp-content/uploads/2018/11/PhysicsLabs.png?w=750&ssl=1",
      modules: 25,
    },
    {
      id: "c3",
      name: "Chemical calculations",
      image:
        "https://blog.camelot-group.com/wp-content/uploads/2019/01/Chemicals-regulation-590x430.jpg",
      modules: 20,
    },
    {
      id: "c4",
      name: "Gaseous state of matter",
      image:
        "https://ak1.picdn.net/shutterstock/videos/24300671/thumb/1.jpg?ip=x480",
      modules: 12,
    },
    {
      id: "c5",
      name: "Energetics",
      image:
        "https://media.istockphoto.com/photos/sphere-is-affecting-space-time-around-it-picture-id508460394?k=6&m=508460394&s=612x612&w=0&h=BA-Og4V1GsbFuhSNK7-6l2Jdmn56K0A78JS2g8GKQYU=",
      modules: 4,
    },
    {
      id: "c6",
      name: "Chemistry of s,p,d blk el..",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSggSG4FSJF41tNNrmfqUTgM7dnmZmpevzMDb7fnY_MFW9EV9ER&usqp=CAU",
      modules: 13,
    },
    {
      id: "c7",
      name: "Basic concepts of organic chemistry",
      image:
        "https://cdn.mos.cms.futurecdn.net/siKNQwTuJwF2VjbGXBT3XZ-320-80.jpg",
      modules: 10,
    },
    {
      id: "c8",
      name: "Hydrocarbons and halohydrocarbon",
      image:
        "https://physicsatgen.files.wordpress.com/2016/08/hhdjnpn.jpg?w=1400",
      modules: 16,
    },
    {
      id: "c9",
      name: "Oxygen containing organic compounds",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Electronic_circuit.jpg/295px-Electronic_circuit.jpg",
      modules: 12,
    },
    {
      id: "c10",
      name: "Nitrogen containing organic compounds",
      image:
        "https://www.azom.com/images/Article_Images/ImageForArticle_16318(1).jpg",
      modules: 11,
    },
    {
      id: "c11",
      name: "Chemical kinetics",
      image:
        "https://www.nuclear-power.net/wp-content/uploads/2015/04/Barium-137-radionuclide-300x300.png?ezimgfmt=rs:290x290/rscb3/ng:webp/ngcb3",
      modules: 7,
    },
    {
      id: "c12",
      name: "Equilibrium",
      image:
        "https://www.nuclear-power.net/wp-content/uploads/2015/04/Barium-137-radionuclide-300x300.png?ezimgfmt=rs:290x290/rscb3/ng:webp/ngcb3",
      modules: 7,
    },
    {
      id: "c13",
      name: "Electro chemistry",
      image:
        "https://www.nuclear-power.net/wp-content/uploads/2015/04/Barium-137-radionuclide-300x300.png?ezimgfmt=rs:290x290/rscb3/ng:webp/ngcb3",
      modules: 7,
    },
    {
      id: "c14",
      name: "Industrial chemistry and Environmental pollution",
      image:
        "https://www.nuclear-power.net/wp-content/uploads/2015/04/Barium-137-radionuclide-300x300.png?ezimgfmt=rs:290x290/rscb3/ng:webp/ngcb3",
      modules: 7,
    },
  ];
  return (
    <div className="phy-bg">
      <UnitsList items={UNITS} />
    </div>
  );
};

export default Chemistryunits;
