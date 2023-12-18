import Layout from "./layout";
import Image from "next/image";
import jabbastyles from "./jabbastyles.module.css";
import BibBoushh from "../../public/images/Jabba_Bib_Fortuna_Boushh.jpg";
import BibFortunaPalace from "../../public/images/Jabba_Bib_Fortuna.jpg";
import BibFortunaFace from "../../public/images/Jabba_BibFortuna_Face.png";

export default function BibFortuna() {
  return (
    <Layout>
      <h1>Bib Fortuna</h1>
      <dl>
        <Image
          src={BibFortunaFace}
          width={300}
          alt="Bib Fortuna"
          className={jabbastyles.right}
        />
        <dt>Name</dt>
        <dd>Bib Fortuna</dd>
        <dt>Species</dt>
        <dd>Twi'lek, Male</dd>
        <dt>Occupation</dt>
        <dd>Jabba's Major-domo</dd>
        <dt>Plot</dt>
        <dd>To take over Jabba's Empire, to take over Rayloth</dd>
        <dt>Reason</dt>
        <dd>Money, Power</dd>
        <dt>Co-Conspirators</dt>
        <dd>B’omarr Monks, Nat Secura, other spies inside the palace</dd>
        <Image
          src={BibBoushh}
          width={300}
          alt="Bib Fortuna with the bounty hunter Boushh"
          className={jabbastyles.left}
        />
        <dt>Action Taken</dt>
        <dd>
          When Bib Fortuna left his home world of Rayloth he vowed to come back
          and rule the Planet. He took an infant, Nat Secura, with him. Nat was
          the last surviving member of a clan on Rayloth and Bib knew that he
          would be helpful when he decided to return. He made his way to Jabba's
          palace on Tatooine and soon became Jabba's Major-domo or right-hand
          man.
        </dd>
        <dd>
          Bib was not happy with his situation. He longed to get rid of Jabba
          and take over his empire. He began conversing with the B’omarr monks
          in the palace and planned the demise of the Hutt. He constantly had to
          protect Nat from Jabba, even going as far as letting the monks remove
          Nat's brain and letting Jabba feed the now empty body to the Rancor.
        </dd>
        <dd>
          He searched the palace for secret passages and got security codes for
          many of the Hutt's accounts. When Luke Skywalker and Princess Leia
          came to the palace to free Han Solo, Bib advanced his plans to kill
          Jabba. He had originally planned to feed Jabba to the Rancor but Luke
          stopped that idea.
        </dd>
        <dd>
          He placed his personal speeder bike on the sail barge and went with
          Jabba to the Pit of Carkoon, taking with him a thermal detonator,
          which he would use to kill the Hutt and then return to take over the
          palace.
        </dd>
        <Image
          src={BibFortunaPalace}
          width={300}
          alt="Bib Fortuna in Jabba's Palace"
          className={jabbastyles.right}
        />
        <dt>Outcome</dt>
        <dd>
          Bib never got the chance to use his Thermal detonator before Luke blew
          up the barge. Instead he left the barge on his speeder and made his
          way back to the palace, expecting to take over Jabba's empire as
          planned. When he got there, however, the B’omarr Monks were waiting
          for him.
        </dd>
        <dd>
          His brain was forcibly removed and placed in a nutrient jar. After a
          while he and Nat got brain walkers and began looking for cloning
          technology so that they may grow new bodies for themselves.
        </dd>
        <dt>My Opinion</dt>
        <dd>
          Bib's plot, out of all the other plots in the palace, was the most
          likely to have worked. Bib showed great patience with his dealings
          with the Hutt and he could've waited a lot longer before making his
          move. It is only with the introduction of the Rebel Alliance heroes
          that he became reckless and lost some of his nerve.
        </dd>
        <dd>When this happened Bib Fortuna's plan was destined to fail.</dd>
      </dl>
    </Layout>
  );
}
