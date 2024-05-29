import Layout, { siteTitle } from "../layout";
import Link from "next/link";
import TesskPalace from "../../../../public/images/Jabba_Tessk_Luke.webp";
import TesskPhoto from "../../../../public/images/Jabba_Tessk.webp";
import TesskFace from "../../../../public/images/Jabba_Tessk_Face.png";
import Head from "next/head";
import Image from "next/image";
import jabbastyles from "../jabbastyles.module.css";

export default function Tessk() {
  const title = `${siteTitle} : Tessk`;

  return (
    <>
      <h1>Tessk</h1>
      <dl>
        <Image
          src={TesskFace}
          width={300}
          alt="Tessk"
          className={jabbastyles.right}
        />
        <dt>Name</dt>
        <dd>Tessk</dd>
        <dt>Species</dt>
        <dd>Quarren, Male</dd>
        <dt>Occupation</dt>
        <dd>Jabba's Accountant</dd>
        <dt>Plot</dt>
        <dd>To kill Jabba and take over his clean businesses</dd>
        <dt>Reason</dt>
        <dd>For money, to be free from Jabba</dd>
        <dt>Co-Conspirators</dt>
        <dd>
          <Link href="/jabbaspalace/ree-yees">Ree Yees</Link>, Barada, The
          Weequays
        </dd>
        <Image
          src={TesskPalace}
          width={300}
          alt="Tessk over the shoulder of Luke Skywalker"
          className={jabbastyles.left}
        />
        <dt>Action Taken</dt>
        <dd>
          When Tessk left Mon Calamari he found his way to Jabba's palace. Here
          he worked for the Hutt as his accountant and all around businessman.
          He looked after a lot of Jabba's interests on Tatooine, some legal and
          some not so legal. However he diverted a lot of credits into Jabba's
          clean businesses.
        </dd>
        <dd>
          He constantly tried to get Jabba into trouble. He organised an ambush
          for Jabba in which the Imperial prefect, Talmont, would capture Jabba
          while the Hutt was inspecting a spice shipment in his warehouse near
          Mos Eisley. Tessk would then detonate a bomb, killing both Jabba and
          Talmont.
        </dd>
        <dd>
          He had everything set. A bomb was placed on the sail barge and Tessk
          was ready to sell Jabba's criminal businesses to Lady Valarian while
          he kept the clean ones. However the B’omarr monks warned him that his
          plan would fail.
        </dd>
        <dd>
          When Luke Skywalker arrived in the palace Tessk was unnerved. He
          thought that the Rebel Alliance would storm the palace and kill
          everyone to save Han Solo. He changed his plans, he now wanted to kill
          Jabba at the Pit of Carkoon.
        </dd>
        <dd>
          He placed a speeder on the Sail Barge and went along to the Sarlacc.
          While he waited for the Rebel Alliance to arrive, Luke Skywalker
          created havoc on the barge. Tessk soon realised that the Rebel
          Alliance was not coming. He got on his speeder and left the sail barge
          before Luke blew it up.
        </dd>
        <Image
          src={TesskPhoto}
          width={300}
          alt="A picture of Tessk"
          className={jabbastyles.right}
        />
        <dt>Outcome</dt>
        <dd>
          When he got back to the palace he found it was relatively deserted.
          The B’omarr monks came towards him and forcibly removed his brain,
          placing it in a nutrient jar. He remained there for a while but he
          received a brain walker so that he could move around the palace. He
          was finally free from Jabba.
        </dd>
        <dt>My Opinion</dt>
        <dd>
          If <Link href="/jabbaspalace/bib-fortuna">Bib Fortuna's</Link> plot
          was the most likely to work, then Tessk's must have been the second
          most likely. He had it planned out well, and included many other able
          bodied persons to help him (
          <Link href="/jabbaspalace/ree-yees">Ree Yees</Link> excepted). He also
          had the patience to see it through.
        </dd>
        <dd>
          As with Bib, Tessk became reckless when the Rebel Alliance came along.
          He quickly had to change his plans, which meant that they weren't as
          foolproof as he would've wanted.
        </dd>
        <dd>His modified plot was destined to fail.</dd>
      </dl>
    </>
  );
}
