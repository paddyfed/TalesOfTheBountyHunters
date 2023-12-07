import Layout from "./layout";
import DannikPic from "../../public/images/Jabba_Dannik_Pic.webp";
import DannikCantina from "../../public/images/Jabba_Dannik_Cantina.webp";
import Image from "next/image";

export default function DannikJerriko() {
  return (
    <Layout>
      <p>
        <b>name:</b>
        <br />
        Dannik Jerriko
      </p>

      <p>
        <b>Species:</b>
        <br />
        Anzat, Male
      </p>

      <p>
        <b>Occupation:</b>
        <br />
        Assassin
      </p>

      <p>
        <b>Plot:</b>
        <br />
        To drink the{" "}
        <a href="#soup">
          soup<font size="2">*</font>
        </a>{" "}
        of Jabba, Han Solo and Luke Skywalker
      </p>

      <p>
        <b>Reason:</b>
        <br />
        He needs soup to live and the soup of these three is particularly good
      </p>

      <p>
        <b>Co-Conspirators:</b>
        <br />
        None
      </p>

      <p>
        <b>Action Taken:</b>
        <br />
        It is uncertain when Dannik Jerriko came to Jabba's Palace. It is
        equally uncertain as to why he came. Bib Fortuna believes he is under
        contract from Lady Valarian but Dannik gives no indication of this. One
        thing that is for certain, however, was the fact that he was in the Mos
        Eisley Cantina when Luke Skywalker entered with Obi-Wan Kenobi four
        years previously.
      </p>
      <p>
        <Image
          alt="Dannik Jerriko in the Mos Eisley cantina"
          src={DannikCantina}
          width={300}
        />
        He watched Luke then and when he came to the palace he watched him
        again, secretly craving for his soup. While in the palace he watched
        Jabba and Han Solo, both of who had rich soup for Dannik to drink. He
        was determined to get both of their soup, and Dannik Jerriko never
        fails.
      </p>
      <p>
        While there he killed a few of Jabba's people, to the delight of Lady
        Valarian. The kitchen boy, Phlegmin, and a Weequay both were on the
        receiving end of his soup cravings. The Dancer, Yarna d'al' Gargin, was
        about to be killed by the Anzati but was saved. She remains the only one
        to see Dannik as he truly is and live to tell the tale.
      </p>
      <p>
        Lack of good soup led to Dannik becoming reckless and slightly deranged.
        He began leaving evidence of his kills, something that the Anzati never
        do. His body called out for good soup like Jabba's.
      </p>
      <p>
        While in a state of semi-madness, Dannik missed his opportunity to kill
        all three of his targets. When they all left for the Sarlacc pit he was
        left behind, wondering where they had gone. They never came back. Dannik
        had failed to drink their soup.
      </p>

      <p>
        <b>Outcome:</b>
        <br />
        <Image alt="A picture of Dannik Jerriko" src={DannikPic} width={300} />
        When Dannik realised that they weren't coming back he went on a killing
        spree in the palace. After killing many of the remaining occupants of
        the palace he became a wanted man himself. The hunter had become the
        prey. Dannik was never seen or heard of again.
      </p>

      <p>
        <b>My Opinion:</b>
        <br />
        Perhaps if Dannik continually drank good and nourishing soup while in
        Jabba's palace, he might have been able to complete his plot. Because he
        drank inferior soup he began to crave good soup and became crazy because
        of the lack of it.
      </p>
      <p>Dannik's plot was destined to failure because of this.</p>
      <p>
        <font size="2">
          <a name="soup">
            <font color="#7D7DFF">
              * <u>Soup</u>
            </font>{" "}
            is not only the blood of the person (that which makes them live) it
            is also the luck and skill of the person
          </a>
        </font>
      </p>
    </Layout>
  );
}
