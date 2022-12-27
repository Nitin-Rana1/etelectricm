import styles from "../../styles/WhyChooseUs.module.scss";

// Easy To Drive Low Running Cost WHY CHOOSE US? ECOFRIENDLY  LOW MAINTAINANCE  EASY TO DRIVE    AVIR X Quick List Home Scooter Bike Contact Us Address Sahid Nagar I CRP Squarel Bhubaneswar 6742547339 9337903630 etelectricm@gmail.com inf FeatureSM
interface Data {
  head: string;
  txt: string;
}
const dataArr: Data[] = [
  {
    head: "Eco-Friendly",
    txt: "You don't need to deal with gas or oil. You can go as fast or as slow as you want without having to worry about getting caught by officials to show pollution certificate or worrying about breaking down halfway through your ride because of lack of oil or standing in queues for oil filling.",
  },
  {
    head: "Low Maintence",
    txt: "Electric bikes don't require any oil changes or tune-ups. Just plug them in when they're ready to go and they'll keep going until they die-which could be thousands of miles away!",
  },
  {
    head: "Easy to Drive",
    txt: "Our bikes come with built-in safety features like GPS technology and SMOOTH HANDLING systems so you can focus on enjoying your ride instead of worrying about how much energy those little batteries have left in them.",
  },
  {
    head: "AFFORDABLE COSTS",
    txt: "With our pricing range, which are the best in the market, you will save a huge amount of money. We also know that all of us have different needs and budgets, so we offer an array of options for everyone.",
  },
];
function Paragraph({ data }: { data: Data }) {
  return (
    <main className={styles.paragraph}>
      <h3>{data.head}</h3>
      <div>{data.txt}</div>
    </main>
  );
}
export default function Para() {
  return (
    <main className={styles.para}>
      <h1>WHY CHOOSE US?</h1>
      {dataArr.map((value, index) => {
        return <Paragraph data={value} />;
      })}
    </main>
  );
}
