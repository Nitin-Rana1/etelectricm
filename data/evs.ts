interface EV {
  brand: string;
  name: string;
  type: "Scooter" | "Bike";
  range: "short" | "medium" | "long";
  imageUrl: string;
}
const evsData: EV[] = [
  //Ampere
  {
    brand: "Ampere",
    name: "Reo Plus",
    type: "Scooter",
    range: "short",
    imageUrl: "/ev/ampere/s/reo-plus.png",
  },
  {
    brand: "Ampere",
    name: "Magnus EX",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/ampere/s/magnus-ex.png",
  },
  //Kinetic Green
  {
    brand: "Kinetic Green",
    name: "Zing",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/kinetic-green/s/zing.png",
  },
  {
    brand: "Kinetic Green",
    name: "Zoom",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/kinetic-green/s/zoom.png",
  },
  //AMO
  {
    brand: "AMO",
    name: "Jaunty",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/amo/s/jaunty.png",
  },
  // {
  //   brand: "AMO",
  //   name: "Jaunty Plus",
  //   type: "Scooter",
  //   range: "long",
  //   imageUrl: "/ev/amo/s/jaunty-plus.png",
  // },
  // {
  //   brand: "AMO",
  //   name: "Jaunty Pro",
  //   type: "Scooter",
  //   range: "medium",
  //   imageUrl: "/ev/amo/s/jaunty-pro.png",
  // },
  {
    brand: "AMO",
    name: "Inspirer",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/amo/s/inspirer.png",
  },
  {
    brand: "AMO",
    name: "Feisty-Ev",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/amo/s/feisty-ev.png",
  },
  // {
  //   brand: "AMO",
  //   name: "S-Ain",
  //   type: "Scooter",
  //   range: "short",
  //   imageUrl: "/ev/amo/s/s-ain.png",
  // },
  {
    brand: "AMO",
    name: "Brisk",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/amo/s/brisk.png",
  },

  //Joy-E Bike
  {
    brand: "Joy-E Bike",
    name: "Wolf +",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/joy-e-bike/s/wolf-plus.png",
  },
  {
    brand: "Joy-E Bike",
    name: "Nanu +",
    type: "Scooter",
    range: "medium",
    imageUrl: "/ev/joy-e-bike/s/nanu-plus.png",
  },
  {
    brand: "Joy-E Bike",
    name: "Hurricane",
    type: "Bike",
    range: "medium",
    imageUrl: "/ev/joy-e-bike/b/hurricane.png",
  },
  {
    brand: "Joy-E Bike",
    name: "Thunderbolt",
    type: "Bike",
    range: "long",
    imageUrl: "/ev/joy-e-bike/b/thunderbolt.png",
  },
  {
    brand: "Joy-E Bike",
    name: "Beast",
    type: "Bike",
    range: "long",
    imageUrl: "/ev/joy-e-bike/b/beast.png",
  },
  // {
  //   brand: "Joy-E Bike",
  //   name: "E-Monster",
  //   type: "Bike",
  //   range: "medium",
  //   imageUrl: "/ev/joy-e-bike/b/e-monster.png",
  // },
  // {
  //   brand: "Joy-E Bike",
  //   name: "Monster",
  //   type: "Bike",
  //   range: "short",
  //   imageUrl: "/ev/joy-e-bike/b/monster.png",
  // },
  {
    brand: "Joy-E Bike",
    name: "Glob Bike",
    type: "Scooter",
    range: "short",
    imageUrl: "/ev/joy-e-bike/s/glob-bike.png",
  },
  // {
  //   brand: "Joy-E Bike",
  //   name: "Wolf",
  //   type: "Scooter",
  //   range: "short",
  //   imageUrl: "/ev/joy-e-bike/s/wolf.png",
  // },
];
export default evsData;
