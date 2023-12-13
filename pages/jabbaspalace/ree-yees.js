import Layout from "./layout";
import Image from "next/image";
import jabbastyles from "./jabbastyles.module.css";
import Link from "next/link";
import ReeYeesBarge from "../../public/images/Jabba_Ree_Yees_Barge.jpg";
import ReeYeesPalace from "../../public/images/Jabba_Ree_Yees_Palace.webp";

export default function ReeYees() {
  return (
    <Layout>
      <h1>Ree-Yees</h1>
      <dl>
        <Image
          src="https://dummyimage.com/300"
          width={300}
          height={300}
          alt="dummy"
          className={jabbastyles.right}
        />
        <dt>Name</dt>
        <dd>Ree-Yees</dd>
        <dt>Species</dt>
        <dd>Gran, Male</dd>
        <dt>Occupation</dt>
        <dd>Thief, Drunkard</dd>
        <dt>Plot</dt>
        <dd>To kill Jabba and return home</dd>
        <dt>Reason</dt>
        <dd>To wipe out a murder charge on his home world</dd>
        <dt>Co-Conspirators</dt>
        <dd>
          The Empire, <Link href="/jabbaspalace/tessk">Tessk</Link>, Bobo
        </dd>
        <Image
          src={ReeYeesBarge}
          width={300}
          alt="Ree-Yees on Jabba's sail barge"
          className={jabbastyles.left}
        />
        <dt>Action Taken</dt>
        <dd>
          After leaving his home planet of Kinyen because of a murder charge,
          Ree-Yees somehow made his way to Tatooine and to Jabba's Palace. He
          stayed in the palace, tending to Bobo, the Hutt's "frog-dog" creature.
          The Gran was rarely seen without a drink in his hand, especially
          Sullustian Gin.
        </dd>
        <dd>
          After awhile, The Empire approached Ree-Yees, possibly through the
          Tatooine Prefect, Talmont. He was told to kill Jabba and in return his
          murder charge would be wiped out. They would supply him with a bomb,
          which was smuggled into the palace in crates of Goat-Grass (Ree-Yees'
          food). He would then assemble the bomb and detonate it on his sail
          barge. He would also use a small transmitting device, implanted in
          Bobo, to communicate with the Empire.
        </dd>
        <dd>
          On the day that Princess Leia and Luke Skywalker came to rescue Han
          Solo, Ree-Yees needed only the detonator to complete the bomb. However
          the last shipment of Goat-Grass did not contain this vital component.
          He believed that someone now knew of his plot and stole the detonator,
          possibly to bribe him.
        </dd>
        <dd>
          After becoming drunk, Ree-Yees made his way, accidentally, to the
          B’omarr Monks part of the palace, deep underground. Here he met with
          one of the monks and had a vision. He saw a great explosion out in the
          desert. He believed this was the monk telling him he was destined to
          kill Jabba. He was no longer concerned about who stole the detonator
          because he knew that he would eventually kill Jabba.
        </dd>
        <dd>
          When Luke and Han were sent to the Sarlacc Pit, Ree-Yees thought it
          was safe to go along because he knew the bomb wasn't complete. However
          when he saw Leia killing Jabba he began to doubt the monk's vision.
          Jabba then tried to command Ree-Yees to kill Leia by attempting to
          detonate a bomb that Jabba had planted in the Gran's stomach. Perhaps
          the explosion he saw was this bomb.
        </dd>
        <dd>
          However Leia killed Jabba before the Hutt could finish the command and
          Ree-Yees was both delighted and confused. Was it not his destiny to
          kill Jabba? Minutes later as a huge explosion ripped through the
          Barge, Ree-Yees finally realised what the vision was, it was his own
          demise at the Pit of Carkoon.
        </dd>
        <Image
          src={ReeYeesPalace}
          width={300}
          alt="Ree-Yees in Jabba's Palace"
          className={jabbastyles.right}
        />
        <dt>Outcome</dt>
        <dd>Ree-Yees died on that Sail Barge explosion</dd>
        <dt>My Opinion</dt>
        <dd>
          Ree-Yees was always too drunk to properly plan out his plot. Although
          he had help from the Empire I don't believe that he could execute it
          properly. Another factor that would lead to failure was the missing
          detonation link. We find out later that Bobo actually ate the link but
          Ree-Yees was too drunk to get it back.
        </dd>
        <dd>
          Ree-Yees was unconcerned about the missing detonator, however. As far
          as he was concerned he was destined, eventually, to kill Jabba.
        </dd>
      </dl>

      {/* <img
          src="reeyees_barge.jpg"
          width="150"
          height="150"
          alt="Ree-Yees on Jabba's sail barge"
          align="LEFT"
        />
  
      <img
        src="reeyees_palace.jpg"
        width="150"
        height="150"
        alt="Ree-Yees in Jabba's Palace"
        align="RIGHT"
        valign="TOP"
      /> */}
    </Layout>
  );
}
