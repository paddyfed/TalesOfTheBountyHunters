import Link from "next/link";
import { ScrollToTop } from "../components/ScrollToTop";

export const metadata = {
  title: "Additional Information",
};

export default function OtherInfo() {
  return (
    <>
      <ScrollToTop />
      <h1>Additional Information</h1>
      <p>
        Here you will find some concise information on characters, locations and
        vehicles that have been mentioned in this site. If you don't know a
        person, place or thing mentioned elsewhere in the site then it's
        probably explained here.
      </p>
      <h2>Categories</h2>
      <nav>
        <ul>
          <li>
            <b>Characters</b>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#definition-jabba-the-hutt">Jabba the Hutt</Link>
              </li>
              <li>
                <Link href="#definition-luke-skywalker">Luke Skywalker</Link>
              </li>
              <li>
                <Link href="#definition-han-solo">Han Solo</Link>
              </li>
              <li>
                <Link href="#definition-princess-leia">Princess Leia</Link>
              </li>
              <li>
                <Link href="#definition-lady-valarian">Lady Valarian</Link>
              </li>
              <li>
                <Link href="#definition-talmont">Talmont</Link>
              </li>
              <li>
                <Link href="#definition-rebel-alliance-heroes">
                  Rebel Alliance Heroes
                </Link>
              </li>
              <li>
                <Link href="#definition-the-empire">The Empire</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>Locations</b>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#definition-tatooine">Tatooine</Link>
              </li>
              <li>
                <Link href="#definition-mos-eisley">Mos Eisley</Link>
              </li>
              <li>
                <Link href="#definition-jabbas-palace">Jabba's Palace</Link>
              </li>
              <li>
                <Link href="#definition-pit-of-carkoon">Pit of Carkoon</Link>
              </li>
              <li>
                <Link href="#definition-dune-sea">Dune Sea</Link>
              </li>
              <li>
                <Link href="#definition-jundland-wastes">Jundland Wastes</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>Creatures</b>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#definition-sarlacc">Sarlacc</Link>
              </li>
              <li>
                <Link href="#definition-rancor">Rancor</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>Aliens</b>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#definition-bomarr-monks">B’omarr Monks</Link>
              </li>
              <li>
                <Link href="#definition-anzati">Anzati</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>Vehicles</b>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#definition-sail-barge">Sail Barge</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <h3>Characters</h3>
      <dl>
        <dt>
          <dfn id="definition-jabba-the-hutt">Jabba the Hutt</dfn>
        </dt>
        <dd>
          Jabba is a member of the Hutt species. He is also the head of a huge
          criminal organisation with his base at his palace on the planet of
          Tatooine. He captured Han Solo for not paying him for lost spice
          cargo. When Luke Skywalker came to take him back he refused to let him
          go and tried to kill the young Jedi. However Princess Leia strangled
          Jabba on his sail barge.
        </dd>
        <dt>
          <dfn id="definition-luke-skywalker">Luke Skywalker</dfn>
        </dt>
        <dd>
          Luke Skywalker is the last of the Jedi Knights. He came to Jabba's
          Palace to free his friend Han Solo from the Hutt. He was prepared to
          act peacefully but, after killing Jabba's Rancor and being sent to the
          Pit of Carkoon, he killed the Hutt and blew up his Sail Barge. He then
          left Tatooine with his friends.
        </dd>
        <dt>
          <dfn id="definition-han-solo">Han Solo</dfn>
        </dt>
        <dd>
          Smuggler friend of Luke Skywalker and Princess Leia. He owed Jabba
          money after losing a shipment of spice when he was boarded by
          Imperials. Han was captured by the Bounty Hunter, Boba Fett, and was
          encased in Carbonite by Darth Vader. He was transported to Tatooine by
          Boba Fett and hung on Jabba's wall.
        </dd>
        <dt>
          <dfn id="definition-princess-leia">Princess Leia</dfn>
        </dt>
        <dd>
          Friend of Captain Solo, Princess of Alderaan and leader in the Rebel
          Alliance. She came to Jabba's palace to rescue Han from Jabba. She
          came dressed as the bounty hunter Boushh and freed Han from the
          carbonite. She was captured and made into Jabba's slave. When they
          were sent to the Sarlacc, Leia managed to strangle Jabba with the
          chain that was holding her. She then escaped with Luke Skywalker.
        </dd>
        <dt>
          <dfn id="definition-lady-valarian">Lady Valarian</dfn>
        </dt>
        <dd>
          Jabba's main rival on Tatooine. the Whipid female has her base in the
          'Lucky Despot' restaurant in Mos Eisley. She constantly tries to
          undermine Jabba and has many spies in his palace.
        </dd>
        <dt>
          <dfn id="definition-talmont">Talmont</dfn>
        </dt>
        <dd>
          Imperial prefect for Tatooine. He tries to monitor all activity in the
          area but he rarely has a clue on what is actually going on. More times
          than not he is on the payroll of Lady Valarian or some other gangster
          on Tatooine.
        </dd>
        <dt>
          <dfn id="definition-rebel-alliance-heroes">Rebel Alliance Heroes</dfn>
        </dt>
        <dd>
          Luke Skywalker, Princess Leia and Han Solo are collectively known as
          the Rebel Alliance Heroes because of the deeds that they have done in
          service of the rebellion.
        </dd>
        <dt>
          <dfn id="definition-the-empire">The Empire</dfn>
        </dt>
        <dd>
          Tyrannical government of the galaxy led by the Emperor Palpatine
        </dd>
      </dl>
      <h3>Locations</h3>
      <dl>
        <dt>
          <dfn id="definition-tatooine">Tatooine</dfn>
        </dt>
        <dd>
          A medium sized desert planet, with twin suns, in the Outer Rim
          Territories. Once described by Luke Skywalker as the planet furthest
          from the bright centre of the universe.
        </dd>
        <dt>
          <dfn id="definition-mos-eisley">Mos Eisley</dfn>
        </dt>
        <dd>
          A large city and spaceport on Tatooine. Home too many smugglers,
          scoundrels and gangsters like Lady Valarian. "You will never find a
          more retched hive of scum and villainy" - Obi-Wan Kenobi.
        </dd>
        <dt>
          <dfn id="definition-jabbas-palace">Jabba's Palace</dfn>
        </dt>
        <dd>
          The Tatooine home of Jabba the Hutt. Once owned by the B’omarr Monks,
          Jabba took over the palace and ran his criminal empire from there. It
          is full of assassins, bounty hunters and slave girls all of whom work
          for Jabba or spy for someone else.
        </dd>
        <dt>
          <dfn id="definition-pit-of-carkoon">Pit of Carkoon</dfn>
        </dt>
        <dd>
          The resting place of the almighty Sarlacc. It is located in the Dune
          Sea. Jabba sometimes sends his prisoners here to be executed slowly.
          (See <Link href="#definition-sarlacc">Sarlacc</Link>)
        </dd>
        <dt>
          <dfn id="definition-dune-sea">Dune Sea</dfn>
        </dt>
        <dd>
          A vast, sandy, wasteland on Tatooine. It separates the spaceport of
          Mos Eisley and Jabba's palace. Tusken Raiders and Jawa's usually roam
          here.
        </dd>
        <dt>
          <dfn id="definition-jundland-wastes">Jundland Wastes</dfn>
        </dt>
        <dd>
          A rocky area in the Dune Sea. It is a place where the local youths
          come to race their speeders. Tuskin Raiders sometimes come here to
          search for unwary travellers.
        </dd>
      </dl>
      <h3>Creatures</h3>
      <dl>
        <dt>
          <dfn id="definition-sarlacc">Sarlacc</dfn>
        </dt>
        <dd>
          A mysterious creature that lives out in the Dune Sea at the Great Pit
          of Carkoon. Those who are eaten by the Sarlacc are digested over the
          course of over a thousand years. Jabba sends some of his prisoners
          here to be executed.
        </dd>
        <dt>
          <dfn id="definition-rancor">Rancor</dfn>
        </dt>
        <dd>
          A huge two-legged creature that lives in a cage below Jabba's palace.
          The Hutt throws prisoners, unwanted visitors or anyone who upsets the
          Hutt into the Rancor pit so that they are killed quickly, usually for
          the Hutt's enjoyment. Luke Skywalker killed the Rancor by closing a
          huge cage door on top of the creature.
        </dd>
      </dl>
      <h3>Aliens</h3>
      <dl>
        <dt>
          <dfn id="definition-bomarr-monks">B’omarr Monks</dfn>
        </dt>
        <dd>
          The original inhabitants of Jabba's palace. They now live in the lower
          levels of the palace, away from the unsavoury friends of Jabba. The
          monks' daily life is mostly taken up with the contemplation of the
          Universe. When a monk becomes 'enlightened', the other monks remove
          his brain and place it in a nutrient enriched jar where it is free to
          contemplate the universe without bodily distractions. After a while
          the monk may request to use a brain walker so that he can move about
          the palace.
        </dd>
        <dt>
          <dfn id="definition-anzati">Anzati</dfn>
        </dt>
        <dd>
          A mysterious and secretive species that Dannik Jerriko is a member of.
          They feed on the life force and luck of ordinary people, Soup, by
          drinking it through proboscis that come from cheek pouches, leaving no
          evidence of the kill. Some citizens of the galaxy don't believe that
          such a creature exists and dismiss them as fairy tales or rumour.
        </dd>
      </dl>
      <h3>Vehicles</h3>
      <dl>
        <dt>
          <dfn id="definition-sail-barge">Sail Barge</dfn>
        </dt>
        <dd>
          Jabba's pleasure craft, usually used for trips into the Dune Sea, the
          Pit of Carkoon or to Mos Eisley. Luke Skywalker blew up the sail barge
          at the Pit of Carkoon when he and his friends were making their
          escape.
        </dd>
      </dl>
    </>
  );
}
